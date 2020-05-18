<template>
    <div class="home">
        <MenuBar></MenuBar>
        <ItemList></ItemList>
        <MemoEdit></MemoEdit>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import MenuBar from '@/components/MenuBar.vue'
    import ItemList from "@/components/ItemList.vue";
    import MemoItem from "@/components/MemoItem.vue";
    import MemoEdit from "@/components/MemoEdit.vue";

    @Component({
        components: {
            MenuBar,
            ItemList,
            MemoItem,
            MemoEdit
        },
    })
    export default class Home extends Vue {
        created(){
            console.log('[ - ]: ', '初始化时间');
        }
    }
</script>
<style scoped lang="less">
    body{
        background: #efefef;
    }
    .home {
    }
</style>
