import { routeConfig } from "./route-config";
const routeList: {
    apps: routeConfig[],
    others: routeConfig[] | [];
    [index: string]: any;
} = {
    apps: [
        {
            path: '/login',
            title: '登录',
            component: 'Login'
        },
        {
            path: '/',
            title: '布局页',
            component: 'Layout',
            children: [
                {
                    path: '/home',
                    title: '首页',
                    component: 'Home'
                },
                {
                    path: '/user',
                    title: '用户',
                    component: 'User'
                }
            ]
        }
    ],
    others: []
}

export default routeList