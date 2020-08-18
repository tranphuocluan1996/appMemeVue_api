<template>
  <div class="ass1-section__content">
    <p>{{itemPosts.post_content}}</p>
    <div class="ass1-section__image">
        <router-link v-bind:to="{name:'post-detail', params:{id: itemPosts.PID}}"><img v-bind:src="getImagePost"
                alt=""></router-link>
    </div>
</div>
</template>

<script>
export default {
    name:"comp-item-body-content",
    props:{
        itemPosts:{type:Object, default:null}
    },
    computed: {
        getImagePost(){
            if(this.itemPosts.url_image){
                return this.itemPosts.url_image;
            }else{
                return '/dist/images/microphone-1209816_1920.jpg';
            }
        }
    },
   
}
</script>

<style>

</style>