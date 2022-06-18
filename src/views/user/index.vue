<template>
    <div class="container p-10">
        <div class="w-100">
            <a-button type="primary" class="mt-10 mb-15">添加新用户</a-button>
            <a-table
                :columns="columns"
                :data-source="data"
                style="width: 100%;"
                :rowKey="record => record.id">
                <span slot="action" slot-scope="text, record">
                    <a @click="edit(record.id)">编辑</a>
                    <a-divider type="vertical" />
                    <a>删除</a>
                </span>
                <span slot="customRenderAvatar" slot-scope="text, record">
                    <span v-if="record.avatar === null">无</span>
                    <span v-else>{{ record.avatar }}</span>
                </span>
                <span slot="customRenderStatus" slot-scope="text, record">
                    <a-tag :color="record.status === 1 ? 'green' : 'red'">
                        <span>{{ record.status === 1 ? '通过' : '禁用' }}</span>
                    </a-tag>
                </span>
            </a-table>
        </div>
    </div>
</template>

<script>
// 字段
import { userList } from '@/api/user/index.js'
const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '用户名',
    dataIndex: 'username',
    key: 'username',
    scopedSlots: { customRender: 'customRenderUsername' },
  },
  {
    title: '头像',
    dataIndex: 'avatar',
    key: 'address',
    scopedSlots: { customRender: 'customRenderAvatar' }
  },
  {
    title: '手机号',
    key: 'phone',
    dataIndex: 'phone',
    scopedSlots: { customRender: 'customRenderPhone' },
  },
  {
    title: '真实姓名',
    key: 'realName',
    dataIndex: 'realName',
    scopedSlots: { customRender: 'customRenderRealName' },
  },
  {
    title: '账号状态',
    key: 'status',
    dataIndex: 'status',
    scopedSlots: { customRender: 'customRenderStatus' },
  },
  {
    title: 'Action',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  },
];
export default {
    data () {
        return {
            data: [],
            columns,
        }
    },
    created () {
        this.init()
        console.log(this.data)
    },
    methods: {
        init () {
            userList().then(res => {
                this.data = [...res.data.data]
            })
        },
        edit () {}
    }
}
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    // height: 100vh;
    background-color: #fff;
}
</style>
