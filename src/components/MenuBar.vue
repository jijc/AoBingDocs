/**
* @method 方法名
* @name tstest
* @module 组件存放位置
* @desc 加法运算
* @param {number}
* @author ban chi
* @date 2020/5/14 5:59 下午
* @version （指定发布版本）
**/
<template>
    <div class="menu-bar">
        <div class="menu-left">
            <Icon type="ios-apps"/>
            <div class="logo">
                <img src="../assets/img/cbim_logo_transverse.png" alt="logo">
            </div>
        </div>
        <div class="menu-right">
            <div class="time">{{time}}</div>
            <span class="add" @click="showAdd">新建 <Icon type="ios-add"/></span>
            <Dropdown @on-click="selectItem">
                <a href="javascript:void(0)">
                    <span style="margin-right: 10px;">{{slectText}}</span>
                    <Badge show-zero :count="total" class-name="demo-badge-alone"></Badge>
                    <Icon type="ios-arrow-down"></Icon>
                </a>
                <DropdownMenu slot="list">
                    <DropdownItem name="全部|-1"><span>全部</span>
                        <Badge show-zero :count="doFilter('全部|-1')" class-name="demo-badge-alone"></Badge>
                    </DropdownItem>
                    <DropdownItem divided name="工作|0"><span>工作</span>
                        <Badge show-zero :count="doFilter('工作|0')" class-name="demo-badge-alone"></Badge>
                    </DropdownItem>
                    <DropdownItem name="生活|1"><span>生活</span>
                        <Badge show-zero :count="doFilter('生活|1')" class-name="demo-badge-alone"></Badge>
                    </DropdownItem>
                    <DropdownItem name="学习|2"><span>学习</span>
                        <Badge show-zero :count="doFilter('学习|2')" class-name="demo-badge-alone"></Badge>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    </div>
</template>
<script lang="ts">
    import {Component, Vue} from "vue-property-decorator"
    import ItemData from "@/model/ItemData";
    import TimeShow from "@/assets/js/TimeShow";

    @Component
    export default class MenuBar extends Vue {
        time = '';
        slectText = '全部';
        total = this.doFilter('全部|-1');

        created() {
            setInterval(() => {
                this.time = new TimeShow().getTime();
            }, 1000)
        }

        showAdd() {
            this.$store.state.transMemo = new ItemData(-1, 0);
            this.$store.state.isShow = true;
        }

        selectItem(name: string) {
            this.slectText = name.split('|')[0];
            this.total = this.doFilter(name);
            this.doFilterByCategoryId(name);
        }

        doFilter(name: string): number {
            const n = Number(name.split('|')[1]);
            if (n === -1) {
                return this.$store.state.aHelper.memoList.length;
            } else {
                return this.$store.state.aHelper.memoList.filter((obj: any) => {
                    return obj.categoryId === n;
                }).length;
            }
        }

        doFilterByCategoryId(name: string) {
            this.$store.state.filterCateId = Number(name.split('|')[1]);
        }
    }
</script>

<style scoped lang="less">
    .menu-bar {
        display: flex;
        justify-content: space-between;
        align-content: center;
        height: 50px;
        background: #f9f9f9;
        padding: 0 50px 0 30px;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);

        .menu-left {
            display: flex;
            justify-content: start;
            align-items: center;

            .ivu-icon {
                cursor: pointer;
                font-size: 24px;
                margin-right: 20px;
            }

            .logo {
                display: flex;
                align-items: center;

                img {
                    width: 100px;
                }
            }
        }

        .menu-right {
            display: flex;
            justify-content: end;
            align-items: center;

            .time {
                margin-right: 50px;
            }

            .add {
                display: flex;
                justify-content: end;
                align-items: center;
                margin-right: 50px;
                transition: all linear 0.3s;
                cursor: pointer;

                &:hover {
                    color: #0084FF;
                }

                .ivu-icon {
                    margin-left: 5px;
                    font-size: 20px;
                    font-weight: bold;
                }
            }

            .total {
                margin-right: 10px;

            }

            .ivu-dropdown {
                height: 100%;

                /deep/ .ivu-dropdown-rel {
                    height: 100%;

                    .ivu-badge-count {
                        background: #0084FF;
                    }

                    a {
                        display: inline-flex;
                        justify-content: end;
                        align-items: center;
                        height: 100%;

                        .ivu-badge {
                            margin-right: 10px;
                        }
                    }
                }

                /deep/ .ivu-select-dropdown {
                    width: 120px;
                    top: 50px !important;

                    .ivu-dropdown-item {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;

                        .ivu-badge {
                            .ivu-badge-count {
                                background: #777;
                            }
                        }
                    }
                }
            }
        }

    }
</style>