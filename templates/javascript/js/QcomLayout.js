import { $, view, justify, appbar, bottomNavigationBar, bottomNavigationBarItem, br, btn, icon } from '../node_modules/@qcom.io/qcom/index.js';
import '../js/QcomPageOne.js';
import '../js/QcomPageTwo.js';
import '../js/QcomPageThree.js';
import '../js/QcomHome.js';
import '../js/QcomPageNotFound.js';
$({
    class: "QcomLayout",
    created: () => {
        this.html(view(appbar({ title: 'AppBar' },
        justify(btn({ route: "/QcomPageThree", is: 'link' }, 'Three')), justify(btn({ route: "/QcomPageTwo", is: 'link' }, 'Two')), justify(btn({ route: "/QcomPageOne", is: 'link' }, 'One')), justify(btn({ route: "/QcomHome", is: 'link' }, 'Home'))), br(3), view({ id: "router" }), bottomNavigationBar(bottomNavigationBarItem(icon('home'), 'Home'), bottomNavigationBarItem(icon('email'), 'Email'), bottomNavigationBarItem(icon('person'), 'Person'), bottomNavigationBarItem(icon('phone'), 'Phone')), br(3)));
    },
    methods: {
        log: () => {
            console.log('QcomLayout log');
        }
    }
});
