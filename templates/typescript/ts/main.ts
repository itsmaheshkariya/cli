import {$,$sw,color,div,row,col,h1,right,h2,lorem,btn,card,icon,p} from '../node_modules/@qcom.io/qcom/index.js'
import './layout.js';
$({
    theme: {
        background: color.orange_darken_1,
        color: color.white,
        hover: color.orange_acent_1,
        font: ''
    },
    router: {
        links: ['QcomHome', 'QcomPageOne', 'QcomPageTwo', 'QcomPageThree', 'QcomPageNotFound']
    }
});
$sw('./sw.js');


