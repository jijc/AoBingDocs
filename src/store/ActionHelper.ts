/**
 * @method 方法名
 * @name tstest
 * @module 组件存放位置
 * @desc 加法运算
 * @param {number}
 * @author ban chi
 * @date 2020/5/15 1:48 下午
 * @version （指定发布版本）
 **/
import DataHelper from "@/store/DataHelper";
import ItemData from "@/model/ItemData"
import Category from "@/model/CateEnums"

class ActionHelper {
    // 1.负责数据处理 ----------------------------------------
    dataHelper: DataHelper = new DataHelper('memoData', 'id');
    // 1.1 临时笔记数组 (! 允许为空)
    memoList!: Array<ItemData>

    constructor() {
        // 读取本地数据，将笔记数组保存到 this.memoList 变量中
        this.memoList = this.readData();
    }

    readData(): Array<ItemData> {
        // 1. 读取本地的 Object 数组  - dataHelper
        const arrObj = this.dataHelper.readData();
        // 2. 将 Object 数组 转成 ItemData 数组
        // 3. 但会 itemData 数组
        return arrObj.map((obj: any) => {
            const item: ItemData = new ItemData();
            item.id = obj.id;
            item.categoryId = obj.categoryId;
            item.title = obj.title;
            item.content = obj.content;
            item.createTime = obj.createTime;
            return item;
        })
    }

    // 转换 类型 枚举值 为 字符串 展示用
    getCategoryName(cateId: Category): string {
        const arrNames = ['工作', '生活', '学习']
        return arrNames[cateId];
    }

    // 2.负责业务处理 ----------------------------------------
    // 2.1 新增笔记
    add(item: ItemData): number {
        // a. 保存到本地 dataHelper.addData, 会返回生成的 ID
        item.id = this.dataHelper.addData(item);
        // b. 将笔记添加 到 笔记数组中
        this.memoList.push(item);
        // c. 将笔记数组重新保存到本地
        this.dataHelper.saveDate(this.memoList);
        // d. 返回新笔记的 ID
        return item.id;
    }

    // 2.2 修改笔记
    edit(item: ItemData): void {
        // a. 找出数组中 ID 相同的对象
        const editItem: ItemData | undefined = this.memoList.find((obj) => {
            return item.id === obj.id;
        });
        // b. 修改对象的值，将参数 item 覆盖原有的对象的虽有属性
        if (editItem) {
            editItem.title = item.title;
            editItem.categoryId = item.categoryId;
            editItem.content = item.content;
            // c. 将更新后的数组从新保存到本地
            this.dataHelper.saveDate(this.memoList);
        }
    }

    // 2.2 删除笔记
    remove(id: number): void {
        // a. 根据 ID 找出要删除的 下标
        const index = this.memoList.findIndex((obj) => {
            return id === obj.id
        })
        // b. 根据下标 删除对象
        if (index > -1) {
            this.memoList.splice(index, 1);
            // c. 将删除对象后的 数组，从新保存到 localStorage
            this.dataHelper.saveDate(this.memoList);
        }
    }
}

export default ActionHelper;