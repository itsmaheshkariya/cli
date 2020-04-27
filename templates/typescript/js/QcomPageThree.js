import { $, button, div, h1 } from '../node_modules/@qcom.io/qcom/index.js';
$({
    name: 'QcomPageThree',
    data: {
        counter: 0
    },
    template: () => div(/* div must be here to wrap all internal tags*/ h1(this.data.counter), button({ click: 'QcomPageThree.add()' }, '+'), button({ click: 'QcomPageThree.sub()' }, '-')),
    code: {
        add: () => {
            this.data.counter += 1;
            this.render();
        },
        sub: () => {
            this.data.counter -= 1;
            this.render();
        }
    }
});
