import { RoutesConfig } from './routes-config'
import RoutesComponents from './routes-components'
const router: {
    layout?: RoutesConfig[],
    other?: RoutesConfig[],
    [index: string]: any[]
} = {
    layout: [
        {
            path: '/lgoin',
            title: '登录页',
            component: RoutesComponents.Login
        },
        {
            path: '/',
            title: '后台管理',
            component: RoutesComponents.Layout,
            children: [
                {
                    path: 'home',
                    title: '首页',
                    component: RoutesComponents.Home
                }
            ]
        }
    ]
}
export default router