<template>
    <div class="container p-10">
        <div class="w-100">
            <a-button type="primary" class="mt-10 mb-15">添加新用户</a-button>
            <L-Table
                :columns="columns"
                :dataSource="dataSource">
                <span slot="action" slot-scope="text, record">
                    <a @click="edit(record.id)">编辑</a>
                    <a-divider type="vertical" />
                    <a>删除</a>
                </span>
                <span slot="customRenderStatus" slot-scope="text">
                    <a-tag :color="text.text === 1 ? 'green' : 'red'">
                        <span @click="del(text)">{{ text.text === 1 ? '通过' : '禁用' }}</span>
                    </a-tag>
                </span>
                <span slot="customRenderAvatar" slot-scope="text">
                    <span v-if="text.text === null">无</span>
                    <span v-else>{{ text.text }}</span>
                </span>
            </L-Table>
        </div>
    </div>
</template>

<script>
// 字段
import { userList } from '@/api/user/index.js'
import LTable from '../../components/LTable/index.vue'
const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '用户名',
    dataIndex: 'username',
    key: 'username'
  },
  {
    title: '头像',
    dataIndex: 'avatar',
    key: 'address',
    scopedSlots: { customRender: 'customRenderAvatar' },
  },
  {
    title: '手机号',
    key: 'phone',
    dataIndex: 'phone'
  },
  {
    title: '真实姓名',
    key: 'realName',
    dataIndex: 'realName'
  },
  {
    title: '账号状态',
    key: 'status',
    dataIndex: 'status',
    scopedSlots: { customRender: 'customRenderStatus' }
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
            dataSource: [],
            columns,
        }
    },
    components: {
        LTable
    },
    created () {
        this.init()
    },
    methods: {
        init () {
            userList().then(res => {
                this.dataSource = [...res.data.data]
            })
        },
        edit () {},
        del (record) {
            console.log(record)
        }
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
