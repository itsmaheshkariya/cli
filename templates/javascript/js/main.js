import { $, $sw, appbar, br, view, color, btn } from '../node_modules/@qcom.io/qcom/index.js';
import PageOne from '../js/PageOne.js';
import PageTwo from '../js/PageTwo.js';
import PageThree from '../js/PageThree.js';
import PageFour from '../js/PageFour.js';
import Home from '../js/Home.js';
import PageNotFound from '../js/PageNotFound.js';
$({
    theme: {
        background: color.orange_darken_1,
        color: color.white,
        hover: color.orange_acent_1,
        font: ''
    },
    template: () => view(appbar(
    //    hamburger_menu(
    //        ul({class:'menu'},
    //                li({route:'/Home',class:'item'},'Home'),
    //                li({route:'/PageOne',class:'item'},'One'),
    //                li({route:'/PageTwo',class:'item'},'Two'),
    //                li({route:'/PageThree',class:'item'},'Three'),
    //                li({route:'/PageFour/123/12',class:'item'},'Four')
    //            ),
    //        ),
    btn({ route: "/Home", is: 'link', class: 'ml12' }, 'Home'), btn({ route: "/PageOne", is: 'link', class: 'ml12' }, 'Grid'), btn({ route: "/PageTwo", is: 'link', class: 'ml12' }, 'GetData'), btn({ route: "/PageThree", is: 'link', class: 'ml12' }, 'Counter'), btn({ route: "/PageFour/123/222", is: 'link', class: 'ml12' }, 'Dynamic')), br(3), view({ id: "router" })),
    include: [
        PageNotFound,
        PageOne,
        PageTwo,
        PageThree,
        PageFour,
        Home,
    ],
    router: {
        links: ['/Home',
            '/PageOne',
            '/PageTwo',
            '/PageThree',
            '/PageNotFound',
            '/PageFour/:id/:name'
        ]
    }
});
$sw('./sw.js');
