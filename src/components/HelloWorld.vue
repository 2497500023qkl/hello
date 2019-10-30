<template>
  <div class="hello">
            <div class="ltem">
            <table>
                <tr>
                    <td>id</td>
                    <td>username</td>
                    <td>sex</td>
                    <td>操作</td>
                </tr>
                <tr v-for="i in userss">
                    <td><span v-if="i.id!=''">{{i.id}}</span><span v-else>{{id}}</span></td>
                    <td><span v-if="i.id != ''">{{i.username}}</span><input type="text" v-model="i.username" v-else ></td>
                    <td><span v-if="i.id != ''"><span v-if="i.sex==0">女</span><span v-else-if="i.sex==1">男</span></span><input type="text" v-model="i.sex" v-else></td>
                    <td><button v-on:click="updata(i)"><span>修改</span></button>
                        <button v-on:click="dele(i)">删除</button>
                    </td>
                </tr>
            </table>
        </div>
  </div>
</template>
    <script>
    </script>
    
<script>
  import $ from 'jquery';

export default {
  name: 'HelloWorld',
    components: {
      
    },
  props: ["us"]
  ,
   mounted(){
this.query()
 },
              methods:{
                       updata(my){
       this.$router.push({path:'/modify',query:{MY:my}})

     },
               query(){
    $.ajax({
    method:"GET",
    dataType:"json",
    url:"http://127.0.0.1:8888/readme.php/user",
        success:(res)=>{
            if(res.length==0){
                console.log("没有用户")
            }
            this.userss=res;
          }
        })
               },
                            dele(my){
                var login=confirm("是否删除？");
                if(login){
                    $.ajax({
                        method:"post",
                        dataType: "json",
                        url:"http://127.0.0.1:8888/readme.php/user/delete?id="+my.id,
                        success: (res)=>{
                            if(res.status==true){
                                console.log("成功"),
                                this.query()
                            }
                        }
                    }) 
                }
            }
             },

  data() {
    return {
      userss: [],
                  id:0,
                              addto1:{
                username:"",
                sex:""
            },
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
