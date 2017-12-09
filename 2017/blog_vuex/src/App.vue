<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{$store.state.dataStatus.msg}}</h1>
    <h2 @click='oneFn'>按钮1</h2>
    <h2 @click='twoFn'>按钮2</h2>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
   data () {
     return{
       info:'传过去的数据'
     }
   },
   methods:{
     oneFn(){
      let obj={
        status:1,
        text:this.info
      }
      //commit 只接受一个参数，如果有多个参数的话就要用对象传递
       this.$store.dispatch('actionFn' , obj);
       console.log(this.$store.state.dataStatus,'这么拿数据');
     },
     twoFn(){
       let obj={
         status:2
       }
      this.$store.dispatch('actionFn' , obj);
     }
   }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
