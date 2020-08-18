<template>
  <div id="app">
      <comp-header v-if="this.isRenderHeader" />
     <router-view></router-view>
      <comp-footer v-if="this.isRenderFooter" />
      <loading v-if="isLoading" v-bind:class="{ show: isLoading}" />
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import CompHeader from './components/CompHeader'
import CompFooter from './components/CompFooter'
import Loading from './components/Loading'
import $ from "jquery";
export default {
  name: 'app',
  mounted() {
    // khi mà component load thành công thì dùng cái này 
     $(".ass1-header__menu li > a").click(function(e) {
            // $(".ass1-header__nav").hide();
            $(this).parent().find(".ass1-header__nav").slideToggle(300, 'swing');
        });


    $(".ass1-header__nav ul li > a").click(function (e) {  
      $(this).parents('.ass1-header__nav').slideUp()
    })

  },
  data () {
    return {
     
    }
  },
  components:{
    CompHeader,
    CompFooter,
    Loading
  },

  methods: {
    ...mapActions([
     // getpost :'getListPagination'
      'getListPagination'
    ])
  },



  
  computed: {
     ...mapState([
      'isLoading'
    ]),
    // cái hàm này sẽ trả kết quả nếu true và ngược lại
     isRenderHeader (){
            var array = ['login-page','register-page'];
            var routerName = this.$route.name;
            if(array.indexOf(routerName) === -1){
                return true;
            } return false
        },
        isRenderFooter (){
            var array = ['home-page','post-detail'];
            var routerName = this.$route.name;
            if(array.indexOf(routerName) === -1){
                return true;
            } return false
        }
  },
}
</script>

<style>

</style>
