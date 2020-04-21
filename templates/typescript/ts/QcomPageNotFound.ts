import {$,div,row,col,h1,right,h2,lorem,btn,card,icon,p} from '../node_modules/@qcom.io/qcom/index.js'
$({
    class:"QcomPageNotFound",
    created:()=>{

            this.html(div(h1('QcomPageNotFound')))

},
methods:{
    log:()=>{
        console.log('QcomPageNotFound')
    }
}
})
