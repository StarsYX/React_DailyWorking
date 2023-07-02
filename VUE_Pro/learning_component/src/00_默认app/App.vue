<template>
  
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  
     <TestApp v-on="btnClicked(index)" name="张三" :age=18 count="10" />
 
  <!-- 简写 -->
  <!-- <TestApp @increment="btnClicked" name="张三" :age=18 :count="counter" /> -->
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TestApp from './TestPage/testPage.vue'

export default {
  components: {
    HelloWorld,
    TestApp,
  },
  data() {
    counter: 8
  },
  methods: {
    btnClicked(index) {
      console.log("0----点击了数据:",index)
    }
  }
}

</script>

<style>

</style>
