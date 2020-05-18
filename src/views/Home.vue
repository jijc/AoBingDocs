<template>
    <div class="home">
        <MenuBar></MenuBar>
        <ItemList></ItemList>
        <NoteEdit></NoteEdit>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import MenuBar from '@/components/MenuBar.vue'
    import ItemList from "@/components/ItemList.vue";
    import NoteItem from "@/components/NoteItem.vue";
    import NoteEdit from "@/components/NoteEdit.vue";

    @Component({
        components: {
            MenuBar,
            ItemList,
            NoteItem,
            NoteEdit
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
