<template>
    <div>
        <Header></Header>
        <div class="content clearfix">
    <!--排行榜-->
    <ul class="rank-list">
       <li v-for="(item,index) in rank" :key="item.phone">
           <img src="@/assets/image/list-rank1.png" alt="" v-if="index==0">
           <img src="@/assets/image/list-rank2.png" alt="" v-else-if="index==1">
           <img src="@/assets/image/list-rank3.png" alt="" v-else-if="index==2">
           <p class="rank-list-phone">{{ item.phone }}</p>
           <span>{{ item.money }}元</span>
       </li>
      
    </ul>
    <!--产品列表-->
    <ul class="preferred-select clearfix">
        <li v-for="(product,index) in productList" :key="product.id">
            <h3 class="preferred-select-title">
                <span>{{ product.productName }}</span>
                <img src="@/assets/image/1-bg1.jpg" alt="" v-if="index==0">
                <img src="@/assets/image/1-bg2.jpg" alt="" v-else-if="index==1">
                <img src="@/assets/image/1-bg3.jpg" alt="" v-else-if="index==2">
                <img src="@/assets/image/1-bg3.jpg" alt="" v-else-if="index != ''">
            </h3>
            <div class="preferred-select-number">
                <p><b>{{ product.rate }}</b>%</p>
                <span>历史年化收益率</span>
            </div>
            <div class="preferred-select-date">
                <div>
                    <span>投资周期</span>
                    <p><b>{{ product.cycle }}</b>个月</p>
                </div>
                <div>
                    <span>剩余可投资金额</span>
                    <p><b>{{ product.leftProductMoney }}</b>元</p>
                </div>
            </div>
            <p class="preferred-select-txt">
                优选计划项目，投资回报周期1个月，起点低，适合短期资金周转、对流动性要求高的投资人。
            </p>
            <a href="javascript:;" target="_blank" class="preferred-select-btn">立即投资</a>
        </li>
    </ul>

    <!--分页-->
    <div class="page_box">
        <ul class="pagination">
            <li class="disabled"><a  href="javascript:void(0)" @click="first()">首页</a></li>
            <li><a href="javascript:void(0)" @click="pre()">上一页</a></li>
            <li class="active"><span>1</span></li>
            <li><a  href="javascript:void(0)" @click="next()">下一页</a></li>
            <li><a href="javascript:void(0)" @click="last()">尾页</a></li>
            <li class="totalPages"><span>共{{ page.totalPage }}页</span></li>
        </ul>
    </div>

</div>

        <Footer></Footer>
    </div>
</template>

<script>

import Header from '@/components/common/Header.vue'
import Footer from  '@/components/common/Footer.vue'
import { doGet } from '@/api/httpRequest'
// import { doPost } from '@/api/httpRequest'
import layx from "vue-layx";
//获取参数
let  productType = 0 ;
export default {
  name: 'ProductList',
  components:{
    "Header":Header,
    "Footer":Footer,
  },data(){
        return{
            rank: [
                {
                    phone: "",
                    money: 0
                }
            ],
            productList: [
                    {
                        id: 0,
                        productName: "",
                        rate:0.0,
                        cycle: 0,
                        releaseTime: 0,
                        productType: 0,
                        productNo: "0",
                        productMoney: 0,
                        leftProductMoney: 0,
                        bidMinLimit: 0,
                        bidMaxLimit: 0,
                        productStatus: 0,
                        productFullTime: 0,
                        productDesc: "",
                        version: 0
                    }
            ],
            page: {
                pageNo: 0,
                pageSzie: 0,
                totalPage: 0,
                totalRecord: 0
            }
        }
    },
    mounted(){
        //从路由中获取参数
        productType = this.$route.query.pType;
        this.initPage(productType,1,9)
       
    },
    methods:{
        //初始化 页面
        initPage(productType,pNo,pSize){
            //获取投资排行榜
            doGet('/api/v1/inverst/rank').then(resp => {
                            console.log("排行榜信息："+resp);
                            if(resp.data.code ==200){
                                this.rank = resp.data.list;
                            }
            })
            //按产品类型分页查询
            doGet('/api/v1/product/list',{pType:productType,pageNo:pNo,pageSize:pSize}).then(resp => {
                console.log("产品信息："+resp);
                if(resp.data.code ==200){
                    this.productList = resp.data.list;
                    this.page = resp.data.page;
                }
            })
        },
        // 首页
        first(){
            if(this.page.pageNo == 1){
                    alert("已经是第一页数据了！！")
            }else{
                this.initPage(productType,1,9)
            }
        },
        //尾页
        last(){
            if(this.page.pageNo >=this.totalPage){
                    alert("已经是最后一页数据了")
            }else{
                this.initPage(productType,this.totalPage,9)
            }  
        }
        //上一页
        , pre(){
            if( this.page.pageNo <= 1 ){
                layx.msg('已经是第一页数据.',{dialogIcon:'warn',position:'ct'});
            } else {
                this.initPage(productType,this.page.pageNo - 1 , 9);
            }

        }
        //下一页
        ,next(){
            if( this.page.pageNo >this.page.totalPage ){
                layx.msg('已经是最后一页数据.',{dialogIcon:'warn',position:'ct'});
            } else {
                this.initPage(productType,this.page.pageNo +1 , 9);
            }

        }

    }
}
</script>
<style scoped>

</style>