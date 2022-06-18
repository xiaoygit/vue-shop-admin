<template>
    <div class="container">
        <a-card :bordered="false" style="width: 100%;">
            <a-form layout="inline" :form="form">
                <a-form-item label="id:">
                    <a-input v-decorator="['id']" placeholder="请输入对应id"></a-input>
                </a-form-item>
                <a-form-item>
                    <a-button type="primary" html-type="submit">
                        搜索
                    </a-button>
                    <a-button html-type="submit" style="margin-left: 10px;">
                        重置
                    </a-button>
                </a-form-item>
            </a-form>
        </a-card>
    </div>
</template>

<script>
export default {
    data () {
        return {
            form: this.$form.createForm(this, { name: 'search' })
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 85px;
    margin-bottom: 10px;
    margin-top: 15px;
}
.container ::v-deep .ant-input {
    width: 300px;
}
</style>