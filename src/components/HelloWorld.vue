<template>
    <div class="hello">
        <input type="text" @keyup.enter="addFeature">
        <div v-for="(v,i) in features" :key="i">
            {{v.name}}
        </div>
        <div class="">
            总数：{{count}}
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    interface Features {
        id: number;
        name: string;
    }

    interface ResultA<T> {
        data: T;
    }

    function getData<T>(): ResultA<T> {
        const data: any = [
            {id: 1, name: '类型注解'},
            {id: 2, name: '类型检测'}
        ]
        return {data};
    }


    @Component
    export default class HelloWorld extends Vue {
        // 属性相当于 data 属性
        private features: Features [];

        constructor() {
            super();
            this.features = getData<Features[]>().data;
        }

        public created() {
            // this.init();
            console.log('[ - ]: ', 'created!');
        }

        public mounted() {
            console.log('[ - ]: ', '挂载成功...Ready go!');
        }


        private addFeature(e: any) {
            this.features.push({id: this.features.length + 1, name: e.target.value});
            e.target.value = '';
        }

        get count() {
            return this.features.length;
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
