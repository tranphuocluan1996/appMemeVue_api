<template>
  <div class="ass1-section__head">
        <router-link v-bind:to="{name:'user-page', params:{id: itemPosts.USERID}}" class="ass1-section__avatar ass1-avatar"><img
                v-bind:src="getAvatarHeader" alt=""></router-link>
        <div>
            <router-link v-bind:to="{name:'user-page', params:{id: itemPosts.USERID}}" class="ass1-section__name">{{itemPosts.fullname}}</router-link>
            <span class="ass1-section__passed">{{getTimeRelative}}</span>  
        </div>
    </div>
</template>

<script>
import moment from 'moment';
moment.locale('vi'); 

export default {
    name:"comp-item-body-head",
    props:{
        itemPosts:{type:Object, default:{}}
    },
    computed: {
        getAvatarHeader(){
            if(this.itemPosts.url_image){
                return this.itemPosts.url_image;
            }else{
                return '/dist/images/avatar-02.png'
            }
        },
        getTimeRelative(){
            
            return moment(this.itemPosts.time_added).startOf('day').fromNow()
        }
    },
}
</script>

<style>

</style>
