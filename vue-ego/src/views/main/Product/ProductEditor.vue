<template>
    <el-dialog
        title="编辑产品"
        :visible.sync="dialogEditorVisible"
        width="70%"
        @before-close="handleClose"
    >
        <el-form label-width="70px" :model="editorForm" ref="editorForm">
            <el-form-item label="商品类目">
                <el-button
                    type="primary"
                    class="location"
                    @click="dialogCategoryHandle"
                    >类目选择</el-button
                >
                <span class="tree">{{ treeData.name }}</span>
                <el-dialog
                    width="50%"
                    append-to-body
                    title="类目选择"
                    :visible.sync="dialogCategoryVisible"
                >
                    <ProductTree @onTree="getTreeData" />
                    <span slot="footer" class="dialog-footer">
                        <el-button
                            type="primary"
                            @click="dialogCategoryVisible = false"
                            >确 定</el-button
                        >
                    </span>
                </el-dialog>
            </el-form-item>
            <el-form-item label="商品名称">
                <el-input v-model="editorForm.name" />
            </el-form-item>
            <el-form-item label="商品卖点">
                <el-input v-model="editorForm.sellPoint" />
            </el-form-item>
            <el-form-item label="商品价格">
                <el-input v-model="editorForm.price" />
            </el-form-item>
            <el-form-item label="商品数量">
                <el-input v-model="editorForm.num" />
            </el-form-item>
            <el-form-item label="商品图片">
                <el-button
                    type="primary"
                    class="location"
                    @click="dialogUploadHandle"
                    >图片上传</el-button
                >
                <img class="upload-img" :src="uploadData.url" alt="" />
                <el-dialog
                    width="50%"
                    append-to-body
                    title="图片上传"
                    :visible.sync="dialogUploadVisible"
                >
                    <ProductUpload @onUpload="getOnUpload" />
                    <span slot="footer" class="dialog-footer">
                        <el-button
                            type="primary"
                            @click="dialogUploadVisible = false"
                            >确 定</el-button
                        >
                    </span>
                </el-dialog>
            </el-form-item>
            <el-form-item label="商品描述">
                <ProductWangEditor @onEditor="getEditor" :currentEditorData="editorData"/>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogEditorVisible = false">取 消</el-button>
            <el-button type="primary" @click="editorProductHandle"
                >确 定</el-button
            >
        </span>
    </el-dialog>
</template>

<script>
import ProductTree from "./ProductTree";
import ProductUpload from "./ProductUpload";
import ProductBaiduUEditor from "./ProductBaiduUEditor";
import ProductWangEditor from "./ProductWangEditor";

export default {
    data() {
        return {
            dialogEditorVisible: false,
            dialogCategoryVisible: false,
            dialogUploadVisible: false,
            editorForm: {
                name: "",
                sellPoint: "",
                price: "",
                num: "",
            },
            treeData: {
                cid:"",
                name:""
            }, // 类目选择
            uploadData: {
                url:""
            }, // 存储图片
            editorData: "", // 富文本
            currentData: {},
        };
    },
    components: {
        ProductTree,
        ProductBaiduUEditor,
        ProductUpload,
        ProductWangEditor,
    },
    mounted() {
        this.$bus.$on("onEditorEvent", (row) => {
            this.dialogEditorVisible = true;
            // 获取预更新数据
            this.currentData = row
            this.$api.preUpdateItem({id:row.id}).then((res) => {
                /* 赋值 */
                this.treeData.name = res.data.result[0].cid
                this.editorForm.name = res.data.result[0].title
                this.editorForm.sellPoint = res.data.result[0].sellPoint
                this.editorForm.price = res.data.result[0].price
                this.editorForm.num = res.data.result[0].num
                this.uploadData.url = res.data.result[0].image
                this.editorData =  res.data.result[0].descs
            });
        });
    },
    methods: {
        handleClose() {
            this.$confirm("确认关闭？")
                .then((_) => {
                    done();
                })
                .catch((_) => {});
        },
        dialogCategoryHandle() {
            this.dialogCategoryVisible = true;
        },
        dialogUploadHandle() {
            this.dialogUploadVisible = true;
        },
        /**
            读取类目数据
         */
        getTreeData(data) {
            this.treeData = data;
        },
        /**
         * 读取图片地址
         */
        getOnUpload(data) {
            if (data.url) {
                data.url = data.url.replace("upload", "http://localhost:3000");
            }
            this.uploadData = data;
        },
        /**
         * 接受富文本数据
         */
        getEditor(data) {
            this.editorData = data;
        },
        /**
         * 编辑产品
         *  重新提交数据
         */
        editorProductHandle() {
            this.$api.updateTbItem({
                id:this.currentData.id,
                cid:this.treeData.cid,
                title:this.editorForm.name,
                sellPoint:this.editorForm.sellPoint,
                price:this.editorForm.price,
                num:this.editorForm.num,
                desc:this.editorData,
                image:this.uploadData.url
            }).then(res =>{
                if(res.data.status === 200){
                    this.dialogEditorVisible = false;
                    this.$bus.$emit("refresh",true)
                }
            }).catch(error =>{
                console.log(error);
            })
        },
    },
};
</script>

<style scoped>
.location {
    float: left;
}
.tree {
    float: left;
    margin-left: 10px;
}
.upload-img {
    float: left;
    width: 300px;
    margin-left: 10px;
}
</style>