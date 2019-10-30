<template>
    <div class="about">
        <div class="addto">
            <div>修改</div>
            <div>username:<input type="text" v-model="addto1.username"></div>
            <div>sex:<input type="text" v-model="addto1.sex"></div>
            <div><button @click="add1()">确定</button></div>
        </div>
    </div>
</template>
<script>
    import $ from 'jquery';
    export default {
        name:"modify",
        components: {

        },
        props: {
        },

        mounted() {
            var a = this.$route.query.MY
            this.addto1.username = a.username
            this.addto1.sex = a.sex
            this.id = a.id
        },
        methods: {
            modify(my) {
                if (this.id != 0) {
                    console.log(this.id);
                    my.id = this.id
                    this.addto1.username = my.username
                    this.addto1.sex = my.sex
                    this.add1()
                    this.id = 0
                    return
                }
                this.id = my.id
                console.log(this.id);
                my.id = ""
            },
            add1() {
                if (this.addto1.username.length == 0) {
                    alert("输入用户名")
                    return
                }
                if (this.addto1.sex.length == 0) {
                    alert("输入性别")
                    return
                }
                $.ajax({
                    method: "post",
                    data: this.addto1,
                    dataType: "json",
                    url: "http://127.0.0.1:8888/readme.php/user/update?id=" + this.id,
                    success: (res) => {
                        if (res.status == true) {
                            console.log("成功"),
                                this.$router.push('/')
                        }
                    }
                })
            },
        },

        data() {
            return {
                addto1: {
                    username: "",
                    sex: ""
                },
                id: "",
            }
        },
    }
</script>