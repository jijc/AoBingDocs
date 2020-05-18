/**
* @method 方法名
* @name tstest
* @module 组件存放位置
* @desc 加法运算
* @param {number}
* @author ban chi
* @date 2020/5/17 3:15 上午
* @version （指定发布版本）
**/
<template>
    <!-- 便签新增/编辑区 -->
    <Modal v-model="$store.state.isShow" width="460" :closable="false">
        <p slot="header">
            <Input v-model="note.title" placeholder="标题"/>
            <Select v-model="note.categoryId">
                <Option v-for="item in categoryList" :value="item.id" :key="item.id">{{ item.name }}</Option>
            </Select>
        </p>
        <div style="text-align:center">
            <Input v-model="note.content" type="textarea" :autosize="{minRows: 8,maxRows: 12}" placeholder="内容"/>
        </div>
        <div slot="footer">
            <Button size="small" @click="closePop">取消</Button>
            <Button size="small" type="primary" @click="save">保存</Button>
        </div>
    </Modal>
</template>
<script lang="ts">
    import {Component, Vue, Watch} from "vue-property-decorator";
    import ItemData from "@/model/ItemData";

    @Component
    export default class NoteEdit extends Vue {
        note!: ItemData;
        categoryList: Array<any> = [{id: 0, name: '工作'}, {id: 1, name: '生活'}, {id: 2, name: '学习'}]

        constructor() {
            super();
        }

        @Watch('$store.state.isShow', {immediate: true, deep: true})
        isShowChanged(n: boolean, o: boolean) {
            this.note = this.$store.state.transNote;
        }

        created(): void {
            console.log('[ - ]: ', '编辑弹窗已挂载');
        }

        // 保存新文章对象
        save() {
            // 验证 note 是否 填写
            if (this.note && this.note.categoryId > -1 && this.note.title.trim().length > 0 && this.note.content.trim().length > 0) {
                // 操作业务判断 id < 0 新增  否则 编辑
                if (this.note.id < 0) {
                    // 新建
                    this.$store.state.aHelper.add(this.note);
                    this.$Message.success('新建保存成功！')
                } else {
                    // 修改
                    this.$store.state.aHelper.edit(this.note);
                    this.$Message.success('编辑保存成功！')
                }
                this.$store.state.isShow = false;
            } else {
                this.$Message.error('请完善填写内容！');
            }
        }

        // 关闭弹窗
        closePop() {
            this.$store.state.isShow = false;
        }
    }
</script>

<style scoped lang="less">
    /deep/ .ivu-modal {
        .ivu-modal-content {
            .ivu-modal-header {
                width: 100%;
                padding: 8px;

                p {
                    height: auto;

                    .ivu-input-wrapper {
                        width: 70%;
                    }

                    .ivu-select {
                        width: calc(30% - 10px);
                        margin-left: 10px;
                    }
                }
            }

            .ivu-modal-body {
                padding: 8px;
            }

            .ivu-modal-footer {
                padding: 8px;
            }
        }
    }

</style>