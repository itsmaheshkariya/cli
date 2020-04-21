import {$,div,row,col,h1,right,h2,lorem,btn,card,icon,p} from '../node_modules/@qcom.io/qcom/index.js'
$({
    class:"QcomHome",
    created:()=>{

            this.html(div(h1('QcomHome')))

},
methods:{
    log:()=>{
        console.log('QcomHome from ts')
    }
}
})
