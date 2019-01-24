<template>
    <div class="L-bot">
        <div class="Top10"></div>

        <div class="title">智能预测高风险门店</div>
        <div class="table">
            <div class="th">
                <div class="shop">门店</div>
                <div class="ranking">排名</div>
            </div>
            <table id="tb">
                <tr v-for='item,index in datalist' :key='item.org'>
                    <td class="lo"></td>
                    <td class="shopname">{{item.org}}</td>
                    <td class="shoprank">{{index+1}}</td>
                    <td class="type" :class="{'up':item.score>0 , 'down': item.score<0}">{{item.score>0 ? '+'+item.score : item.score}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
  export default {
    name: "bootom",
    data(){
      return{
        datalist:[]
      }
    },
    created(){
      this.getDatalist()
    },
    mounted() {
      var trs =   document.getElementsByTagName("tr");
      for(var i=0;i < trs.length;i++){
        if(i%2==0){
          trs[i].style.backgroundColor = "#09153d"; // 改变 符合条件的tr元素 的背景色.
        }
      }
    },
    methods:{
      getDatalist(){
        const { dispatch } = this.$store;
        dispatch('overdueData/getTopTenData').then((res)=>{
          if(res.code === 200){
            this.datalist = [].concat(res.data)
          }
        })
      }
    }


  }
</script>

<style scoped>
.L-bot{
  width: 100%;
    height: 100%;
    background-image: url("../../assets/images/l-botton.png");
    background-size: 100% 100%;
    position: relative;
    overflow: hidden;
}
.Top10{
    width: 90px;
    height: 20px;
    position: absolute;
    right: 0.5%;
    top: 4.3%;
    background: url("../../assets/images/TOP10.png") no-repeat;
    background-size: 100% 100%;
}
    .L-bot .title{
        text-align: center;
        color: #9ADBEF;
        /*padding-top: 0.5%;*/
        line-height: 30px;
    }
    .table{
        color: #9ADBEF;
        margin-top: 5%;
        height: 90%;

    }
    .table .th{
        display: flex;
    }
.table .th .shop,.ranking{
    flex: 1;
    text-align: center;
}
    table{
        width: 413px;
        height: 90%;
        margin-top: 14px;
        border-collapse: collapse;
        margin-left: 0.5%;
        background-color: transparent
    }
    tr{
        height: 45px;
        border-top:2px solid #035c8d;
        /*border-top-color:#035c8d ;*/
    }
    td{

    }
    .lo{
        width: 15%;
        text-align: center;
    }
    .shopname{
        width: 47%;
    }
    .shoprank{
        width: 27%;
        text-align: center;
    }
    .type{
        text-align: center;
    }
    tr:nth-child(1){
        color: #d74b6d;
    }
    tr:nth-child(1) .lo{
        background: url("../../assets/images/1.png") no-repeat center;

    }
    tr:nth-child(2){
        color: #ffc851;
    }
    tr:nth-child(2) .lo{
        background: url("../../assets/images/2.png") no-repeat center;

    }
    tr:nth-child(3){
        color: #33c195;
    }
    tr:nth-child(3) .lo{
        background: url("../../assets/images/3.png") no-repeat center;

    }
    .type.up{
      color: #e14e70;
      background: url("../../assets/images/up.png") no-repeat left center;
      background-size: 9px 15px
    }
    .type.down{
      color: #3bdda6;
      background: url("../../assets/images/down.png") no-repeat left center;
      background-size: 9px 15px
    }
</style>