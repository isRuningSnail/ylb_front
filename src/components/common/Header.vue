<template>
        <!--头部-->
        <div class="public-head">
    <div class="public-head-nav">
        <div class="public-head-left">
            <h1 class="public-head-logo"><a href="javascript:;">
                <img src="@/assets/image/logo.png" alt="">
            </a></h1>
            <ul class="public-head-list">
                <li><a href="javascript:void(0)" @click="goLink('/')">主页</a></li>
                <li class="public-head-hover">
                    <a href="javascript:void(0);">我要投资</a>
                    <!--二级导航-->
                    <div class="two-title">
                        <a href="javascript:;">优先类产品</a>
                        <a href="javascript:;">散标类产品</a>
                    </div>
                </li>
                <li><a href="user_center.html" target="_blank">借款人信息</a></li>
                <li><a href="javascript:;" target="_blank">信息披露</a></li>
                <li><a href="javascript:;" target="_blank">安全计划</a></li>
            </ul>
        </div>
        <div class="public-head-right">
            <a href="login.html" target="_blank">登录</a>
            <a href="register.html" target="_blank">注册</a>
        </div>
    </div>
</div>
</template>
<script>
export default{
    name:"Header",
    methods:{
        goLink(url,params){
                this.$router.push({
                    path: url,
                    query: params
                })
        }
    }
}

</script>