<template>
  <nav class="nav d-flex align-items-center">
    <div class="container d-flex justify-content-between align-items-center">
      <ul class="row col-4 d-flex justify-content-between">
        <li class="nav-item"><a href="#" class="nav-link"></a>男款</li>
        <li class="nav-item"><a href="#" class="nav-link"></a>女款</li>
        <li class="nav-item"><a href="#" class="nav-link"></a>最新消息</li>
        <li class="nav-item"><a href="#" class="nav-link"></a>聯絡我們</li>
        <li class="nav-item"><a href="#" class="nav-link"></a>客製商品</li>
      </ul>
      <img class="logo" src="../assets/Logo.png">
      <div class="nav-icons col-2 d-flex justify-content-between">
        <img class="nav-icon" src="../assets/Icon-search.png">
        <img class="nav-icon" src="../assets/Icon-cart.png" >
        <img class="nav-icon" src="../assets/Icon-moon.png">
      </div>
    </div>
  </nav>
</template>

<style scoped>
ul,
ol,
li {
  list-style: none;
  margin: 0px;
  padding: 0px;
  cursor: pointer;
}
nav{
  width:90%;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
}
.container{
  font-size: 18px;
  margin-left: -12px;
}
.nav-item{
  padding-bottom:10px ;
  
}
.logo{
  margin-right: 25%;
  width: 146px;
  height: 28px;
}
.nav-icon{
  width: 22px;
  height: 22px;
}

</style>

