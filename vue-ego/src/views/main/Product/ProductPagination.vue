<template>
    <div class="pagination-container">
        <el-pagination
            layout="prev, pager, next, jumper"
            @current-change="handleCurrentChange"
            :total="total"
            :current-page.sync="currentPage"
            @size-change="handleSizechange"
        ></el-pagination>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentPage: 1,
            total: 0,
        };
    },
    mounted() {
        this.$api.total().then((res) => {
            if (res.data.status === 200) {
                this.total = res.data.result[0]["count(*)"];
            }
        });
    },
    methods: {
        handleSizechange() {},
        handleCurrentChange(val) {
            this.$bus.$emit("page",val)
        },
    },
};
</script>

<style scoped>

.pagination-container{
    margin-top: 40px;
}

</style>