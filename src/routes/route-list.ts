export interface RouteProps {
    path: string; /** 地址 组件url地址 */
    title: string; /** 路由描述 可用于导航 页面title... */
    component: string; /** 页面对应组件名称 */
    icon?: string; /** 图标 用于导航处 */
    hidden?: boolean; /** 登录权限判断 仅登录可见 未登录访问路由重定向至 seeting.hidden 拥有继承特性 */
    countryHidden?: boolean; /** 登录权限 登录后访问此页面重定向至 setting.countryHidden 拥有继承特性 */
    children?: RouteProps[]; /**路由子集 路由为嵌套结构 */
}
const routeList: RouteProps[] = [
    {
        path: '/login',
        title: '登录',
        component: 'Login',
        countryHidden: true
    },
    {
        path: '/',
        title: '布局页',
        component: 'Layout',
        hidden: true,
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
]

export default routeList