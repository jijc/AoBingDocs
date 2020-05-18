/**
 * @method 方法名
 * @name tstest
 * @module 组件存放位置
 * @desc 加法运算
 * @param {number}
 * @author ban chi
 * @date 2020/5/18 10:00 上午
 * @version （指定发布版本）
 **/
class TimeShow {
    myDate = new Date();
    Year = this.myDate.getFullYear();
    Month: string = this.myDate.getMonth() + 1 + '';
    Date = this.myDate.getDate() + '';
    Hours = this.myDate.getHours() + '';
    Minutes = this.myDate.getMinutes() + '';
    Seconds = this.myDate.getSeconds() + '';

    constructor() {
        //月份的显示为两位数字如09月
        if (Number(this.Month) < 10) {
            this.Month = "0" + this.Month;
        }
        if (Number(this.Date) < 10) {
            this.Date = "0" + this.Date;
        }
        if (Number(this.Hours) < 10) {
            this.Hours = "0" + this.Hours;
        }
        if (Number(this.Minutes) < 10) {
            this.Minutes = "0" + this.Minutes;
        }
        if (Number(this.Seconds) < 10) {
            this.Seconds = "0" + this.Seconds;
        }
    }

    getTime(): string {
        return this.Year + " 年 " + this.Month + " 月 " + this.Date + " 日 " + ' - ' + this.Hours + " : " + this.Minutes + " : " + this.Seconds;
    }
}

export default TimeShow;