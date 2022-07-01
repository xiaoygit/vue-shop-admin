<template>
    <div>
        <a-table
            :columns="columns"
            :data-source="dataSource"
            style="width: 100%;"
            :rowKey="record => record.id">
            <template
                v-for="item in columns"
                :slot="item.scopedSlots ? item.scopedSlots.customRender : ''"
                slot-scope="text, record">
                <slot
                    :name="item.scopedSlots ? item.scopedSlots.customRender : ''"
                    v-bind="{ text, record }">
                </slot>
            </template>
        </a-table>
    </div>
</template>

<script>
export default {
    data () {
        return {
            data: []
        }
    },
    props: {
        columns: Array,
        dataSource: Array
    },
    created () {
    },
    methods: {}
}
</script>