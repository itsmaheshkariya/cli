import { $, color } from '../node_modules/@qcom.io/qcom/index.js';
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
