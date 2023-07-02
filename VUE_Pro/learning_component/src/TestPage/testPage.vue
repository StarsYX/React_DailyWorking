<template>
    <h2>我是h2元素</h2>
    <p>我是p元素</p>
    <strong>{{ showMessage }}</strong>
    <p>姓名: {{ name }}</p>
    <p>年龄: {{ age }}</p>

    <p>对象类型: {{ books.bookName }} -- {{ books.price }}</p>

    <button @click="decrement(1)">-</button>
    <strong>{{ count }}</strong>
    <button @click="increment(1)">+</button>
</template>


<script>    

export default {
    methods: {
        decrement: function(number) {
            console.log("-0--点击了 ----");
            this.$emit('decrement',number)
        },
        // 子传父数据
        increment: function(number) {
            console.log("-0--点击了 +++", number);
            this.$emit('increment',number)
        }
    },
    // props:接收父组件传过来的属性
    props: {
        count: {
            type: Number,
            default: 0
        },
        showMessage: String,
        name: {
            type: String,
            // 必传
            require: true,
            default: "默认大螺旋丸"
        },
        age: {
            type: Number,
            default: 9
        },
        // 对象类型默认值，必须写成函数形势
        books: {
            type: Object,
            default: () => ({ bookName: "默认1大怪", price: 30.0 })
            //或者
            // default: () => {
            //     return { bookName: "默认大怪", price: 5.0 }
            // }
        },
        friend: {
            type: Array,
            default: () => ["西瓜", "火龙果", "香蕉"]
        }
    }
}
</script>


<style scoped>
    h2 {
        background-color: red;
    }

    p {
        font-size: 40px;
    }

</style>