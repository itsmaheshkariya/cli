import {$sw, $} from './node_modules/@qcom.io/qcom/index.js'
import './QcomLayout.js'
$({
    router:{
        links:['QcomHome','QcomPageOne','QcomPageTwo','QcomPageNotFound']
    }
})
$sw('./sw.js');







