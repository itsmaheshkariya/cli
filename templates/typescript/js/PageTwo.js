import { qcom, table, tr, td, div, h1 } from '../node_modules/@qcom.io/qcom/index.js';
//Global css variable
export default {
    class: "QcomPageTwo",
    data: {
        items: []
    },
    template: () => div(h1('Get Data from URL'), table(tr(td('Id'), td('Title'), td('completed')), () => this.data.items.map(item => tr(td(item.id), td(item.title), td(item.completed))))),
    code: {
        onload: async () => {
            this.data.items = await qcom.get('https://jsonplaceholder.typicode.com/todos/');
            this.render();
        }
    }
};
