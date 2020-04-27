import { $, loop, key, qcom, table, tr, td, div, h1 } from '../node_modules/@qcom.io/qcom/index.js';
//Global css variable
$({
    class: "QcomPageTwo",
    data: {
        items: []
    },
    template: () => div(h1('Get Data from URL'), table(tr(td('Id'), td('Title'), td('completed')), loop({
        data: this.data.items,
        html: tr(td(key('id')), td(key('title')), td('State is {{completed}}') // use {{}} inside text
        )
    }))),
    code: {
        updater: async () => {
            this.data.items = await qcom.get('https://jsonplaceholder.typicode.com/todos/');
            this.html(this.template());
        }
    }
});
