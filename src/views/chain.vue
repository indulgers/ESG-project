<template>
    <div class="desc">
    <el-image src="/src/assets/indexbg.png" style="width: 440px;height: 300px;align-self: center;margin: 20px"></el-image>
    <div class="desc1">欢迎登录 <br>
      环境 社会 管制信息多维区块链平台 <br>
      Welcome  to nd blockchain for ESG reporting
    </div>
    <div class="desc2">
      点击左侧功能区开始 <br>
      Click the functional zone on the left to start
    </div>
  </div>
</template>

<script setup>
// import Web3 from "web3";
// import {onMounted, ref} from "vue";
//
//
//   const web3 = new Web3( "wss://mainnet.infura.io/ws/v3/d5548eb1c1884dcd862559be969b9f91");
//   const account=web3.eth.accounts.create('123')
// const mount =ref(0)
//  web3.eth.getBalance(account.address).then((res)=>{
//    mount.value=res
//  })
//   const num=Web3.utils.toWei('1','ether')
// console.log(num)
// console.log(mount.value)
//   console.log(web3)
//   console.log(account)
</script>

<style lang="scss" scoped>
.desc{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px;
}
.desc1{
  color: rgb(58, 61, 88);
  font-size: 30px;
}
.desc2{
  color: rgb(130, 134, 158);
  font-size: 16px;
}

</style>