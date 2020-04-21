import { $, div, h1 } from '../node_modules/@qcom.io/qcom/index.js';
$({
    class: "QcomHome",
    created: () => {
        this.html(div(h1('QcomHome')));
    },
    methods: {
        log: () => {
            console.log('QcomHome from ts');
        }
    }
});
