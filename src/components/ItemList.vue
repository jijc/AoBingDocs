/**
* @method 方法名
* @name tstest
* @module 组件存放位置
* @desc 加法运算
* @param {number}
* @author ban chi
* @date 2020/5/16 3:09 上午
* @version （指定发布版本）
**/
<template>
    <div id="memos" class="container">
        <div class="empty" v-if="filterMemo().length < 1">未获取到对应类型的笔记，可点击右上方新建进行添加。</div>
        <MemoItem v-for="item in filterMemo()" :key="item.id" :memo="item" v-else></MemoItem>
    </div>
</template>
<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator'
    import ItemData from "@/model/ItemData";
    import MemoItem from "@/components/MemoItem.vue";

    // 编写组件类
    @Component({
        components: {
            MemoItem
        },
    })
    export default class ItemList extends Vue {
        // a. 声明 组件数组 （方便当前组件调用）
        memoArr: Array<ItemData> = this.$store.state.aHelper.memoList;

        @Watch('$store.state.filterCateId', {immediate: true, deep: true})
        filterCateIdChange(n: number, o: number) {
            this.filterMemo();
        }

        filterMemo() {
            if (this.$store.state.filterCateId == -1) {
                return this.memoArr;
            } else {
                return this.memoArr.filter((item: any) => {
                    return item.categoryId == this.$store.state.filterCateId;
                });
            }
        }
    }

</script>
<style scoped lang="less">
    .container {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
        .empty{
            margin: 10% auto;
            text-align: center;
            font-size: 16px;
            opacity: 0.6;
        }
    }
</style>