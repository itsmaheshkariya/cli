import {$,$sw} from './node_modules/@qcom.io/qcom/index.js'
$({
        class:"QcomApp",
        created:()=>{
            this.state(data => {
                this.html(
                    div(h1({class:'my-clock'}, data.email)))
            });
            this.design({
                'h1':{color:color.blue_darken_2},
                'h1:hover':{color:color.yellow,cursor:'pointer'}
            })
            this.setState(prev_data => ({
                email:'maheshkareeya@gmail.com'
            }))
        },
        methods:{
                    log:()=>{
                        console.log('Checking logs..')
                    }
                }
})

$sw('./sw.js');







