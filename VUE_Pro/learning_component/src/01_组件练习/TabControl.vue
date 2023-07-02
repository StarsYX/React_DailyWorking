<template>
    <div class="tab-control">
        <template v-for="(item, index) in titles" :key="item">
            <div class="tab-control-item"
            @click="itemClick(index)"
            :class="{active: index === currentIndex}"
            > 
            <span> {{ item }}</span>   
            </div>
        </template>
    </div>
</template>


<script>
  export default {
    props: {
        titles: {
            type: Array,
            default: () => []
        }
    },
    emits: ["tabItemClick"],
    data() {
        return {
            currentIndex: 0
        }
    },
    methods: {
        itemClick(index) {
            this.currentIndex = index
            // 子传父数据
            this.$emit("tabItemClick", index)
        }
    }
  }
</script>


<style scoped>
    .tab-control {
        display: flex;
        height: 44px;
        line-height: 44px;
        text-align: center;
    }

    .tab-control-item {
        flex: 1;
        background-color: blueviolet;
    }

    .tab-control-item.active {
        color: red;
        font-weight: 700;
    }

    .tab-control-item.active span {
        padding: 8px;
        border-bottom: 3px solid red;
    }

</style>