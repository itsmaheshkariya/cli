import {$} from "./node_modules/@qcom.io/qcom/index.js";
import './components/QcomPageOne.js'
import './components/QcomPageTwo.js'
import './components/QcomHome.js'
import './components/QcomPageNotFound.js'
    $({
        class:"QcomLayout",
        created:()=>{
                this.html(
                    view(
                    appbar({title:'AppBar'},
                        justify(qbutton({route:"/QcomHome",qtype:'link'},'Home' )),
                        justify(qbutton({route:"/QcomPageOne",qtype:'link'},'One' )),
                        justify(qbutton({route:"/QcomPageTwo",qtype:'link'},'Two' )),
                        justify(qbutton({route:"/QcomPageNotFound",qtype:'link'},'404' )),
                    ),
                    br(3),
                    view({id:"router"}),
                    bottomNavigationBar(
                        bottomNavigationBarItem(i({class:'material-icons'},'home'),'Home'),
                        bottomNavigationBarItem(i({class:'material-icons'},'email'),'Email'),
                        bottomNavigationBarItem(i({class:'material-icons'},'person'),'Person'),
                        bottomNavigationBarItem(i({class:'material-icons'},'phone'),'Phone')

                        // qbutton({qtype:'lg'},i({class:'material-icons'},'face')),
                        // qbutton({qtype:'lg'},i({class:'material-icons'},'account_circle')),
                        // qbutton({qtype:'lg'},i({class:'material-icons'},'create')),
                        // qbutton({qtype:'lg'},i({class:'material-icons'},'dashboard'))
                )
                    )
                )
            },
        methods:{
            log:()=>{
                console.log('Well Done!')
            },
            ok:()=>{
                console.log('Well Done! ok')
            }
        }
    })

