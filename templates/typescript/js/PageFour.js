import { card, p, div, h1 } from '../node_modules/@qcom.io/qcom/index.js';
export default {
    name: "PageFour",
    template: () => div(card(h1('Page Four'), p(this.params('id')), p(this.params('name'))))
};
