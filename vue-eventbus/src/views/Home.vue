<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <Demo />
        <button @click="sendMsgHandle">发送广播</button>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Demo from "@/components/Demo"

export default {
    name: "Home",
    components: {
        HelloWorld,
        Demo
    },
    methods: {
        sendMsgHandle() {
          // 发送广播
          this.$bus.$emit('onMessage','测试')
        },
    },
};
</script>
