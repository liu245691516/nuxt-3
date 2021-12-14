<template>
    <div>
        <!-- <h1>helloworld page</h1> -->
        <NuxtLayout name="custom">
            <template #title>
                <div>
                    <h1>helloworld page {{ counter }}</h1>
                </div>
            </template>
            <template #default>
                content....
            </template>
        </NuxtLayout>
    </div>
</template>

<script>
//使用自定义布局页
// export default {
//     layout: 'custom'
// }


//使用完全控制布局页
export default {
    layout: false
}
</script>

<script setup>
    const counter = useCounter()
</script>