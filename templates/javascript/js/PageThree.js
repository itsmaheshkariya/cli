import { button, div, h1 } from '../node_modules/@qcom.io/qcom/index.js';
export default {
    name: 'PageThree',
    data: {
        counter: 0
    },
    template: () => div(/* div must be here to wrap all internal tags*/ h1(this.data.counter), button({ click:()=>PageThree.add() }, '+'), button({ click:()=>PageThree.sub() }, '-')),
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
};
