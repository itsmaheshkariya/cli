import {$,row,col,h1,right,h2,lorem,btn,card,icon,p} from '../node_modules/@qcom.io/qcom/index.js'
export default {
    name:"PageOne",
    template:()=>row(
        col({is:'12-6-6'},
            h1('Heading'),
            card(h2('Heading'),p({id:"advent_pro"},lorem(1)),
            right(btn({is:'md'},'click me'))
            )
        ),
        col({is:'12-6-6'},
            h1('Heading'),
            card(h2('Heading'),p({id:"Imprima"},lorem(1)),
            right(btn({is:'md',call:'Layout.log()'},icon('home'))))
        )
    ),
    code:{
        log:()=>{
            console.log(this,'PageOne')
        }
    }
}



