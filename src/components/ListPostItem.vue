<template>
  <tr>
        <td>{{index+1}}</td> 
        <td><a href="#"><img v-bind:src=customAvatar class="avatar" alt="Avatar">{{listPostAdmin.post_content}}</a></td>
        <td>{{ listPostAdmin.PID }}</td>               
        <td>{{listPostAdmin.fullname}}</td>
        <td>
            <!-- Material switch -->
            <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id="customSwitch1" checked>
                <label class="custom-control-label" for="customSwitch1"></label>
                <!-- <label class="custom-control-label" for="customSwitch1">Chưa kích hoạt</label> -->
            </div>
        </td>
        <td>{{listPostAdmin.time_added}}</td>
        
        <td>
            <router-link v-bind:to="{name:'dashboard-users', params:{id: listPostAdmin.PID}}" class="settings" title="Settings" data-toggle="tooltip"><i class="fa fa-pencil" aria-hidden="true"></i></router-link>
            <a v-on:click="handleDelete" class="delete" title="Delete" data-toggle="tooltip"><i class="fa fa-trash" aria-hidden="true"></i></a>
        </td>
    </tr>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    props:{
        listPostAdmin:{type:Object, default:{}},
        index:{type:Number, default:0}
    },
    computed: {
        customAvatar(){
            if(this.listPostAdmin.url_image){
                    return this.listPostAdmin.url_image
            }else{
                return '/public/images/user-default.jpg'
            }
        }
    },
    methods: {
        ...mapActions([
            'handleDeleteDashboard',
            'delete'
        ]),
        handleDelete(){
           
            
            let data = this.index;
            this.handleDeleteDashboard(data);

             let postid = parseInt(this.listPostAdmin.PID)
            this.delete(postid).then(res=>{
                // console.log('res',res);
                if(res.ok){
                    this.$notify({
                    group: "noti",
                    duration: 10000,
                    type: "success",
                    title: "Thông báo",
                    text:   res.message
                    });
                }
            })
             
        }
    },


   
}
</script>

<style>

</style>