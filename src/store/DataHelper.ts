/**
 * @method DataHelper
 * @name DataHelper 类 - 负责 localStorage 操作
 * @module 组件存放位置
 * @desc 加法运算
 * @param {number}
 * @author ban chi
 * @date 2020/5/15 10:53 上午
 * @version （指定发布版本）
 **/
class DataHelper {
    dataKey: string;
    primaryKey: string;

    // 一、构造函数 -- 作用 ：为对象 添加 各种属性，赋值 -----------------
    constructor(dataKey: string, primaryKey: string) {
        this.dataKey = dataKey;
        this.primaryKey = primaryKey;
    }

    // 1.读取全部数据，返回数组（如果没有读到数据 就返回 空数组）----------------
    readData(): Array<any> {
        // 1.读取本地数据（根据 dataKey 读取）
        const strDate: string | null = localStorage.getItem(this.dataKey);
        // 2.将读取到的 json 数组字符串 转成 数组对象
        let arrData: Array<any> = [];
        if (strDate != null) {
            arrData = JSON.parse(strDate)
        }
        // 3.返回数据对象
        return arrData;
    }

    // 2.存入本地数据 ------------------------------
    saveDate(arrData: Array<object>): void {
        // 1.将数组转成 json 字符串
        const str: string = JSON.stringify(arrData);
        // 2.将字符串保存到本地
        localStorage.setItem(this.dataKey, str);
    }

    //3.新增数据 ----------------------------------
    addData(conStr: any): number {
        // 1.读取本都数据
        const arr: any = this.readData();
        // 2.创建一个评论内容对象，并获取评论内容添加
        const obj: any = {content: conStr};
        const newId = arr.length ? arr[arr.length - 1][this.primaryKey] + 1 : 1;
        obj[this.primaryKey] = newId;
        // 3.将添加主键的对象添加到数组
        arr.push(obj);
        // 4.保存数组到 localStorage
        this.saveDate(arr);
        // 5.返回保存的数据 ID
        return newId;
    }

    //4.删除数据 ----------------------------------
    removeDataById(id: string | number): boolean {
        // 1.读取本都数组
        const arr = this.readData();
        // 2.查找要删除 item 对象的下标 ，并保存到本地
        const index = arr.findIndex((item: any) => {
            return item[this.primaryKey] == id;
        })
        // 3.判断是否存在
        if (index > -1) {
            arr.splice(index, 1);
            // 保存本地
            this.saveDate(arr);
            return true;
        } else {
            console.log('[ - ]: ', '不存在项');
            return false;
        }
    }
}

export default DataHelper;

