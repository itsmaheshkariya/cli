import {$,loop,key,len,import_module,table,tr,td,div,row,col,h1,right,h2,lorem,btn,card,icon,p,Qcom,theme,color,random,range,random_values} from '../node_modules/@qcom.io/qcom/index.js'

$({
    class:"QcomPageTwo",
    created:async()=>{
        let {test} = await import_module('./test.js')
        test()

        this.state(data => {

            this.design({'div':{userSelect:'none',cursor:'pointer',color:data.coloris}})
            this.html(div(
                p(data.name),
                loop({
                    data:data.items,
                    html:div('my name is {{name}} and my email is ',key('mobileno'))
                })
            ))
        })

        this.log();
        this.addEventListener('click',() => {
            this.log();
        })


},
methods:{

    log:()=>{

        this.setState({
            name:random_values(color),
            coloris:random_values(color),
            items:[{
                name:'mahesh',
                mobileno:'7066650006'
            },{
                name:'dipak',
                mobileno:'9175427372'
            }]
        })
    }
}
})


function loop(data: any) {
    for (let i in range(data.items)) {
        console.log(i)
    }
}

