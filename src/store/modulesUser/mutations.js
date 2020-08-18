import Vue from 'vue'
export default {
    // Bước 9 : bởi vì state này là 1 obj cho nên ta dùng vue.set trong vue để thay đổi 
   SET_USER_BY_ID(state,data){
       Vue.set(state.users, data.USERID, data);
   }
}   