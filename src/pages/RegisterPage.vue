<template>
  <main>
        <div class="ass1-login">
            <div class="ass1-login__logo">
            	<router-link to="/" class="ass1-logo">ZendVn Meme</router-link>
            </div>
            <div class="ass1-login__content">
                <p>Đăng ký một tài khoản</p>
                <div class="ass1-login__form">
                    <form action="#" v-on:submit.prevent="handleRegister">
                        <input v-model="fullname" type="text" class="form-control" placeholder="Tên hiển thị" required="">
                        <input v-model="email" type="text" class="form-control" placeholder="Email" required="">
                        <input v-model="password" type="password" class="form-control" placeholder="Mật khẩu" required="">
                        <input v-model="repassword" type="password" class="form-control" placeholder="Nhập lại mật khẩu" required="">
                        <div class="ass1-login__send">
                            <a href="dang-nhap.html">Đăng nhập</a>
                            <button type="submit" class="ass1-btn">Đăng ký</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name:"register-page",
    data() {
        return {
            email:'',
            fullname:'',
            password:'',
            repassword:''
        }
    },
    methods: {
        ...mapActions([
            'register'
        ]),
        handleRegister(e){
            let data = { 
                email:this.email,
                fullname:this.fullname,
                password:this.password,
                repassword:this.repassword
            }
            if(this.email && this.fullname && this.password && this.repassword){
                this.register(data).then(res=>{
                    if(res.ok === false){
                        alert(res.error)
                    }else{
                        this.$router.push('/')
                    }
                })
            }else{
                alert('Vui lòng nhập đầy đủ thông tin')
            }
          
            
        }
    },
}
</script>

<style>
</style>