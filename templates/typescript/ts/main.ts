import {$,$sw,color,div,row,col,h1,right,h2,lorem,btn,card,icon,p} from '../node_modules/@qcom.io/qcom/index.js'
import './QcomLayout.js';
$({
    theme: {
        background: color.green_darken_4,
        color: color.green_accent_1,
        hover: color.green_darken_1,
        font: ''
    },
    router: {
        links: ['QcomHome', 'QcomPageOne', 'QcomPageTwo', 'QcomPageNotFound']
    }
});
$sw('./sw.js');
