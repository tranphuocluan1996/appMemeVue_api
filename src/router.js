import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);
import HomePage from './pages/HomePage.vue'
import LoginPage from './pages/LoginPage.vue'
import Register from './pages/RegisterPage.vue'
import Repassword from './pages/Repassword.vue'
import Upload from './pages/UploadFile.vue'
import PostDetail from './pages/PostDetaill.vue'
import ProfilePage from "./pages/ProfilePage.vue";
import UserPage from "./pages/UserPage.vue";



const routes = [
{ 
    path: "/",
    component: HomePage,
    name:"home-page"
},
{ 
    path: "/login",
    component: LoginPage,
    name:"login-page"
},
{ 
    path: "/register",
    component: Register,
    name:"register-page"
},
{ 
    path: "/repassword",
    component: Repassword,
    name:"repassword-page"
},
{ 
    path: "/upload",
    component: Upload,
    name:"upload-page"
},
{ 
    path: "/post-detail/:id",
    component: PostDetail,
    name:"post-detail"
},
{ 
    path: "/profile/user/:id",
    component: ProfilePage,
    name:"profile-page"
},
{ 
    path: "/user/:id",
    component: UserPage,
    name:"user-page"
},
  
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
});

export default router;
