import axiosInstance from "../../plugins/axios";
import { PAGE_SIZE, CURRENT_PAGE } from "../../constance";


export default {
    async getListPagination({commit}, {pagesize=PAGE_SIZE,currPage=CURRENT_PAGE}){
         commit("SET_LOADING", true);
        try {
            var result = await axiosInstance.get(`/post/getListPagination.php?pagesize=${pagesize}&currPage=${currPage}`);
          
            if(result.data.status === 200){
                 commit("SET_LOADING", false);
                if(currPage === 1){
                    commit("SET_LIST_POST",result.data.posts);
                }else if (currPage > 1)  commit("PUSH_ITEM_MORE", result.data.posts);
                // console.log("result.data.posts", result.data.posts);
            }else{
                console.log("error",result.data.error);
            }
        } catch (error) {
            console.log("error", error);
        }
    },


    async getListByCategory({commit},{pagesize=PAGE_SIZE,currPage=CURRENT_PAGE, tagIndex=7}){
            commit("SET_LOADING",true);
        try {
             var result = await axiosInstance.get(`/post/getListByCategory.php?pagesize=${pagesize}&currPage=${currPage}&tagIndex=${tagIndex}`);
           commit("SET_LOADING", false);
             if(result.data.status === 200){
                if(currPage === 1){
                    commit("SET_LIST_POST",result.data.posts);
                }else if (currPage > 1)  commit("PUSH_ITEM_MORE", result.data.posts);


             }else{
                 console.log("error", result.data.error);
             }
        } catch (error) {
            commit("SET_LOADING", false);
            console.log("error", error);
        }
    },

  
    // Bước 1 : gọi api postDetail
    async getPostDetail({commit,dispatch},postid){
        commit("SET_LOADING",true);
        try {
            var result = await axiosInstance.get("/post/post.php?postid="+ postid);
           
            //Bước 4 : Nếu như = 200 là ok rồi. sẽ lưu result api này và0 trong store
            if(result.data.status ===200){
                //Bước 8 dispatch actions/user getUserById và truyền USERID qua
                 var resultUser = await dispatch("getUserById",result.data.data.post.USERID);
                  commit("SET_LOADING", false);
                 // Say khi gọi đc api getUserById trong actions user trong comp
                 // Tiền hành lưu nó trong state và dùng getters để xử lý
                
                  commit("SET_POST_DETAIL", result.data.data);
              // return lỗi này để qua bên comp .then(res=>{}) ta có thể lấy dc promise
                return {
                    ok: true,
                    error:null,
                    data:result.data.data
                }
               
            }
            //BƯỚC 6 Commit qua mutation thay đổi state, dùng getters để lấy state hoặc import state vào trong comp để sài cái data này
            
        } catch (error) {
            commit("SET_LOADING", false);
            // return lỗi này để qua bên comp .then(res=>{}) ta có thể lấy dc promise
            return {
                ok:false,
                error:error.message
            }
        }

    }





  
}