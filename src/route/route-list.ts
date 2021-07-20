export interface RouteListProps {
    path: string; /** 地址 组件url地址 */
    title: string; /** 路由描述 可用于导航 页面title... */
    component: string; /** 页面对应组件名称 */
    icon?: string; /** 图标 用于导航处 */
    hidden?: boolean; /** 登录权限判断 仅登录可见 未登录访问路由重定向至 seeting.hidden */
    countryHidden?: boolean; /** 登录权限 登录后访问此页面重定向至 setting.countryHidden */
    children?: RouteListProps[]; /**路由子集 路由为嵌套结构 */
}