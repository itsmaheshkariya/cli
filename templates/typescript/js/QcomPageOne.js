import { $, row, col, h1, right, h2, lorem, btn, card, icon, p } from '../node_modules/@qcom.io/qcom/index.js';
$({
    class: "QcomPageOne",
    created: () => {
        this.html(row(col({ sm: '12', md: '6', lg: '6' }, h1('Hello Mahesh'), card(h2('Heading'), p({ id: "advent_pro" }, lorem(1)), right(btn({ is: 'md' }, 'click me')))), col({ sm: '12', md: '6', lg: '6' }, h1('Hello World'), card(h2('Heading'), p({ id: "Imprima" }, lorem(1)), right(btn({ is: 'md', call: 'QcomLayout.log()' }, icon('home')))))));
    },
    methods: {
        log: () => {
            console.log('QcomPageOne');
        }
    }
});
