module.exports = {
    devServer:{
        before(app){
            app.get('/api/getFeature',(req,res)=>{
                res.json([
                    {id: 1, name: '类型注解'},
                    {id: 2, name: '类型检测'}
                ])
            })
        }
    }
}