/**
 * @method 方法名
 * @name tstest
 * @module 组件存放位置
 * @desc 加法运算
 * @param {number}
 * @author ban chi
 * @date 2020/5/13 2:47 下午
 * @version （指定发布版本）
 **/

// 1.类型
let title: string;
// title = '123';

let ss: string[];

function aa(person: string): string {
    return 'e'
}

// let pp = aa('123');
// console.log('[ - ]: ', pp)

interface Person {
    name: string;
    age: number;
}

function greeting(person: Person): string {
    return person.name + '，年龄：' + person.age;
}

const user: Person = {
    name: '纪金池',
    age: 18
}
console.log('[ - ]: ', greeting(user));

