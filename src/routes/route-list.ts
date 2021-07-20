export interface RoutePropsList {
    path: string; // url地址
    title: string; // 标题
    component: string;
    name?: string,
    icon?: string;
    query?: string;
    requireAuth?: string;
    route?: string;
    hidden?: boolean; /** 是否登录校验，true进行校验 */
}
export interface RouteProps extends RoutePropsList {
    children?: RouteProps[]
}
const routeList: {
    apps: RouteProps[],
    others: RouteProps[] | [];
    [index: string]: any;
} = {
    apps: [
        {
            path: '/login',
            title: '登录',
            name: 'Login',
            component: 'Login'
        },
        {
            path: '/',
            title: '布局页',
            name: 'Layout',
            component: 'Layout',
            hidden: true,
            children: [
                {
                    path: '/home',
                    title: '首页',
                    name: 'Home',
                    component: 'Home'
                },
                {
                    path: '/user',
                    title: '用户',
                    name: 'User',
                    component: 'User'
                }
            ]
        }
    ],
    others: []
}

export default routeList