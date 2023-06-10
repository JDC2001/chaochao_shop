<template>
    <div>
        <h3>Demo:</h3>
        <p>{{ msg }}</p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            msg:""
        }
    },
    mounted() {
        this.$bus.$on("onMessage", (data) => {
            this.msg = data;
        });
    },
};
</script>