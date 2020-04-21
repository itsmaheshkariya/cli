import { $, div, h1 } from '../node_modules/@qcom.io/qcom/index.js';
$({
    class: "QcomPageNotFound",
    created: () => {
        this.html(div(h1('QcomPageNotFound')));
    },
    methods: {
        log: () => {
            console.log('QcomPageNotFound');
        }
    }
});
