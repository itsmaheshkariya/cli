import {$,form,button,qcom,getid,ul,li,input,qinput,loop,br,key,len,import_module,table,tr,td,div,row,col,h1,right,h2,lorem,btn,card,icon,p,Qcom,theme,color,random,range,random_values} from '../node_modules/@qcom.io/qcom/index.js'
export default {
    name:'PageThree',
        data:{
            counter:0
        },
        template:()=>div( /* div must be here to wrap all internal tags*/
                          h1(this.data.counter),
                          button({click:'PageThree.add()'},'+'),
                          button({click:'PageThree.sub()'},'-')
                       ),
        code:{
              add:()=>{
                      this.data.counter += 1
                      this.render()
              },
              sub:()=>{
                      this.data.counter -= 1
                      this.render()
              }
        }
    }
