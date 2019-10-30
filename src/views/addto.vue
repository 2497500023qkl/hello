<template>
    <div class="about">
        <div class="addto">
            <div>新增</div>
            <div>username:<input type="text" v-model="addto.username"></div>
            <div>sex:<input type="text" v-model="addto.sex"></div>
            <div><button @click="add()">确定</button></div>
        </div>
    </div>
</template>
<script>
    import $ from 'jquery';
    export default {
        name:"addto",
        components: {

        },
        props: {
        },
        methods: {
            add() {
                if (this.addto.username.length == 0) {
                    alert("输入用户名")
                    return
                }
                if (this.addto.sex.length == 0) {
                    alert("输入性别")
                    return
                }
                if (this.addto.sex == 0 || this.addto.sex == 1) {
                    $.ajax({
                        method: "post",
                        data: this.addto,
                        dataType: "json",
                        url: "http://127.0.0.1:8888/readme.php/user/create",
                        success: (res) => {
                            if (parseInt(res) > 0) {
                                console.log("创建成功")
                                this.$router.push('/')
                            }
                        }
                    })
                } else {
                    alert("性别错误")
                }
            },
        },

        data() {
            return {
                addto: {
                    username: "",
                    sex: ""
                },
            }
        },
    }
</script>