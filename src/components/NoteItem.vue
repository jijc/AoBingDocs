/**
* @method 方法名
* @name tstest
* @module 组件存放位置
* @desc 加法运算
* @param {number}
* @author ban chi
* @date 2020/5/17 1:57 上午
* @version （指定发布版本）
**/
<template>
    <div class="note-container">
        <Card>
                <div slot="title">
                    <Tooltip :content="note.title" placement="top" theme="light" :disabled="note.title.length < 13">
                        <span class="title">{{note.title}}</span>
                    </Tooltip>
                </div>
            <div slot="extra">
                <Icon type="ios-settings" @click="showEdit"/>
                <Icon type="ios-trash" @click="doDel"/>
            </div>
            <div class="time">
                <span>{{note.createTime}}</span>
                <span>分类：{{$store.state.aHelper.getCategoryName(note.categoryId)}}</span>
            </div>
            <div class="content">{{note.content}}</div>
        </Card>
    </div>
</template>
<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator'
    import ItemData from "@/model/ItemData";

    @Component
    export default class NoteItem extends Vue {
        @Prop() note!: ItemData;

        // 删除方法
        doDel(): void {
            this.$Modal.confirm({
                title: '删除确认',
                content: '<p>确认删除本条信息？</p>',
                onOk: () => {
                    this.$store.state.aHelper.remove(this.note.id);
                    this.$Message.success('删除成功！');
                },
                onCancel: () => {
                    console.log('[ - ]: ', '取消删除');
                }
            });
        }

        // 编辑
        showEdit(): void {
            this.$store.state.isShow = true;
            const newNote = JSON.parse(JSON.stringify(this.note));
            this.$store.commit("transNote", newNote);
        }
    }
</script>

<style scoped lang="less">
    .note-container {
        display: inline-block;

        padding: 20px;

        .ivu-card {
            width: 260px;

            /deep/ .ivu-card-head {
                padding: 10px 16px !important;

                .title {
                    display: inline-block;
                    width: 160px;
                    height: 18px;
                    line-height: 18px;
                    overflow: hidden;
                    text-overflow: ellipsis; //溢出用省略号显示
                    white-space: nowrap; //溢出不换行
                    cursor: pointer;
                }
            }

            /deep/ .ivu-card-extra {
                top: 10px;
                right: 10px;

                .ivu-icon {
                    font-size: 20px;
                    margin-left: 10px;
                    cursor: pointer;
                    transition: all linear 0.3s;

                    &:hover {
                        color: #0084FF;
                    }
                }
            }

            /deep/ .ivu-card-body {
                padding: 12px;

                .time {
                    color: #ababab;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 10px;
                }

                .content {
                    padding: 5px 0 10px 0;
                    height: 160px;
                    overflow-y: auto;
                }
            }
        }


    }
</style>