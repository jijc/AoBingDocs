import Category from './CateEnums'

// 保存 一篇 笔记数据
class ItemData {
    id!: number;
    categoryId!: Category;
    title!: string;
    content!: string;
    createTime!: string;

    constructor(id = -1, categoryId = -1, title = '', content = '') {
        this.id = id;
        this.categoryId = categoryId;
        this.title = title;
        this.content = content;
        this.createTime = this.toSelfDateStr(Date.now());
    }

    toSelfDateStr(timeSpan: number): string {
        const date = new Date(timeSpan);
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes();
    }
}

export default ItemData;