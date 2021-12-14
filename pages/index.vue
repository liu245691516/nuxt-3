<template>
    <div>
        <h1>index page</h1>

        <!-- 组件自动导入 -->
        <BaseFooButton></BaseFooButton>

        <!-- 组件懒加载 -->
        <LazyMountainsList v-if="show" />
        <button v-if="!show" @click="show = true">显示列表</button>

        <!-- 待办事项 -->
        <div v-for="todo in todos">
            <input type="checkbox" v-model="todo.completed">
            <strong>{{ todo.title }}</strong>
        </div>

        <button @click="counter++">+</button>
        {{ counter }}
        <button @click="counter--">-</button>

        <NuxtLink to="/detail">Detail Page</NuxtLink> | 
        <NuxtLink to="/user-admin/1">/user-admin/1</NuxtLink> |
        <NuxtLink to="/parent">/parent/child</NuxtLink> |
        <NuxtLink to="/helloworld">/helloworld</NuxtLink> |
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    const show = ref(false)

    //useAsyncData 的使用
    // const { data: todos } = await useAsyncData('todos', () => $fetch('/api/todo'))

    //useFetch 的使用
    const { data: todos } = await useFetch('/api/todo', {
        transform(input){
            return input.data
        }
    })

    //声明SSR友好的状态
    const counter = useCounter()
</script>