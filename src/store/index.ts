import Vue from 'vue'
import Vuex from 'vuex'
import ActionHelper from "@/store/ActionHelper";
import ItemData from "@/model/ItemData";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        filterCateId: -1,   // 类型
        transMemo: new ItemData(-1, 0), // 修改时保存临时数据
        isShow: false,  // 便签新增/编辑 弹窗状态
        aHelper: new ActionHelper()
    },
    mutations: {
        transMemo(state, editMemo) {
            state.transMemo = editMemo;
            state.isShow = true;
        }
    },
    actions: {},
    modules: {}
})
