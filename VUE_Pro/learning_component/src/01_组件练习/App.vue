<template>
    <div class="app">
      <!-- tabcontrol -->
      <tab-control
       :titles="['衣服', '鞋子', '裤子']"
       @tabItemClick="addItemClick"
       >

      </tab-control>
      
      <!-- 2.列表数据 -->
      <h2>{{ pageContents[currentIndex] }}</h2>
    </div>
</template>


<script>
  import TabControl from './TabControl.vue'

  export default {
      components: {
        TabControl,
      },
      data() {
        return {
          pageContents: ["衣服列表", "鞋子列表", "裤子列表"],
          currentIndex: 0
        }  
      },
      methods: {
        addItemClick(index) {
          console.log("--当前点击了:",index)
          this.currentIndex = index
        }
      }
  }
</script>


<style scoped>

</style>