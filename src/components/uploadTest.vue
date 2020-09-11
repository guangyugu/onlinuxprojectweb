<template>
    <div>
        <h1>短信发送</h1>
        <el-upload
                class="upload-demo"
                action="/file/upload"
                drag
                multiple
                :limit="1"
                :on-success="getUrl"
                :on-remove="removeFile"
            :on-exceed="limitFileCount">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>
        <el-divider></el-divider>
        <el-button plain :loading="loading" @click="sendMsg()" type="primary">  {{sendText}}  </el-button>

    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "uploadTest",
        data(){
            return {
                doUpload:'/file/upload',
                fileUri:'',
                loading:false,
                sendText:'提交'
            }
        },
        created() {
            this.getUser();
        },
        methods:{
            getUser(){
                axios.get("/casTest").then(response=>{
                    console.log(response);
                })
            },
            sendSuccess() {
                this.$message({
                    message: '发送成功！',
                    type: 'success',
                    center: true
                });
            },
            sendFailed() {
                this.$message({
                    message: '发送失败',
                    type: "error",
                    center: true
                });
            },
            removeFile(){
              this.fileUri='';
            },
            limitFileCount(){
                this.$message({
                    message: '只能上传一个文件',
                    type: "warning",
                    center: true
                });
            },
            getUrl(response){
                this.fileUri=response;
                console.log(this.fileUri);
                // console.log(file);
            },
            sendMsg(){
                console.log(this.fileUri);
                this.loading = true;
                this.sendText='短信发送中';
                const fileUri = this.fileUri ;
            axios.post('/file/send',{
                fileUri
            }).then(response=>{
                console.log(response);
                this.loading=false;
                this.sendText='提交';
                this.sendSuccess();
            }).catch(err=>{
                this.loading = false;
                this.sendText='提交';
                console.log(err);
                this.sendFailed();
            })
            }
        }
    }
</script>

<style scoped>
</style>
