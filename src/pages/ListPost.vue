<template>
<div class="container-xl">
    <div class="table-responsive">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-5">
                        <h2>Danh sách bài viết <b></b></h2>
                    </div>
                </div>
            </div>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Hình ảnh/Tên bài viết</th>						
                        <th>ID Bài viết</th>						
                        <th>Người đăng</th>
                        <th>Trạng thái</th>
                        <th>Thời gian đăng bài</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <list-post-item 
                    
                    v-for="(item, index) in getDashboard"   
                    v-bind:key="item.PID"
                    v-bind:index="index"
                    v-bind:listPostAdmin="item"
                    
                    />
                   
                </tbody>
            </table>
            <div class="clearfix">
                <div class="hint-text" v-if="getDashboard && getDashboard.length">Hiển thị <b>{{getDashboard.length}}</b> của <b>{{this.getDashboard.length}}</b> tất cả bài viết</div>
               <paginate v-if="getDashboard && getDashboard.length"
                  :page-count="5"
                  :page-range="getDashboard.length"
                  :margin-pages="2"
                  
                  :prev-text="'Prev'"
                  :next-text="'Next'"
                  :container-class="'pagination'"
                  :page-class="'page-item'">
                </paginate>
            </div>
        </div>
    </div>
</div> 
  
  
</template>

<script>
import {parseJwt} from "../helpder";
import {mapActions, mapGetters} from 'vuex'
import ListPostItem from '../components/ListPostItem'
export default {

  components:{
    ListPostItem
  },
  computed: {
      ...mapGetters([
        'getDashboard'
      ])
  },

 

  created() {
     this.fetchAllDataDashboard()

      
  },
  
 
  methods: {
   
    ...mapActions([
      'getPostListByUserId'
    ]),

     fetchAllDataDashboard(){
       let token = localStorage.getItem("ACESS_TOKEN");

      let objUser = parseJwt(token); 
         console.log('objUser ===',objUser.id);
      this.getPostListByUserId(objUser.id)
      
      
       
      }
  },
  
}
</script>

<style>
body {
    color: #566787;
    background: #f5f5f5;
    font-family: 'Varela Round', sans-serif;
    font-size: 13px;
}
.table-responsive {
    margin: 30px 0;
}
.table-wrapper {
    min-width: 1000px;
    background: #fff;
    padding: 20px 25px;
    border-radius: 3px;
    box-shadow: 0 1px 1px rgba(0,0,0,.05);
}
.table-title {
    padding-bottom: 15px;
    /* background: #299be4; */
    color: #fff;
    padding: 16px 30px;
    margin: -20px -25px 10px;
    border-radius: 3px 3px 0 0;
}
.table-title h2 {
    margin: 5px 0 0;
    font-size: 24px;
    font-family: fantasy;
    font-weight: bold;
}
.table-title .btn {
    color: #566787;
    float: right;
    font-size: 13px;
    background: #fff;
    border: none;
    min-width: 50px;
    border-radius: 2px;
    border: none;
    outline: none !important;
    margin-left: 10px;
}
.table-title .btn:hover, .table-title .btn:focus {
    color: #566787;
    background: #f2f2f2;
}
.table-title .btn i {
    float: left;
    font-size: 21px;
    margin-right: 5px;
}
.table-title .btn span {
    float: left;
    margin-top: 2px;
}
table.table tr th, table.table tr td {
  
    border-color: #e9e9e9;
    padding: 12px 15px;
    vertical-align: middle;
}
table.table tr th:first-child {
    width: 60px;
}
table.table tr th:nth-child(2){
  
    width: 400px;
}
table.table-striped tbody tr:nth-of-type(odd) {
    background-color: #fcfcfc;
}
table.table-striped.table-hover thead{
    background: black;
    color: burlywood;
    
}
table.table-striped.table-hover {
    font-family:fantasy;
}
table.table-striped.table-hover tbody tr:hover {
    background: #f5f5f5;
}
table.table th i {
    font-size: 13px;
    margin: 0 5px;
    cursor: pointer;
}	
table.table td:last-child i {
    opacity: 0.9;
    font-size: 22px;
    margin: 0 5px;
}
table.table td a {
    font-weight: bold;
    color: #566787;
    display: inline-block;
    text-decoration: none;
}
table.table td a:hover {
    color: #2196F3;
}
table.table td a.settings {
    color: #2196F3;
}
table.table td a.delete {
    color: #F44336;
}
table.table td i {
    font-size: 19px;
}
table.table .avatar {
    max-width: 20%;
    vertical-align: middle;
    margin-right: 10px;
}
.status {
    font-size: 30px;
    margin: 2px 2px 0 0;
    display: inline-block;
    vertical-align: middle;
    line-height: 10px;
}
.text-success {
    color: #10c469;
}
.text-info {
    color: #62c9e8;
}
.text-warning {
    color: #FFC107;
}
.text-danger {
    color: #ff5b5b;
}
.pagination {
    float: right;
    margin: 0 0 5px;
}
.pagination li a {
    border: none;
    font-size: 13px;
    min-width: 30px;
    min-height: 30px;
    color: #999;
    margin: 0 2px;
    line-height: 30px;
    border-radius: 2px !important;
    text-align: center;
    padding: 0 6px;
}
.pagination li a:hover {
    color: #666;
}	
.pagination li.active a, .pagination li.active a.page-link {
    background: #03A9F4;
}
.pagination li.active a:hover {        
    background: #0397d6;
}
.pagination li.disabled i {
    color: #ccc;
}
.pagination li i {
    font-size: 16px;
    padding-top: 6px
}
.hint-text {
    float: left;
    margin-top: 10px;
    font-size: 13px;
}
  
</style>