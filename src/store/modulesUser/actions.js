

import axiosInstance from "../../plugins/axios";
export default {
  //Bước 7: viết api getUserById
  async getUserById({ commit }, userid) {
    try {
      var result = await axiosInstance.get(
        "/member/member.php?userid=" + userid
      );
      console.log("result trong getUserByID", result);
      if (result.data.status === 200) {
          //Sau khi nhận được USERID bên kia truyền qua commit đến mutation và sửa nó trong mutations
        commit("SET_USER_BY_ID", result.data.user);
        return {
          ok: true,
          error: null,
          data: result.data.user
        };
      }
    } catch (error) {
      return {
        ok: false,
        error: error.message
      };
    }
  }
};

