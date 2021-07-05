import { Menu } from './config'
const router:{
    layout?: Menu[],
    other?: Menu[],
    [index: string]: any[]
} = {
    layout: [
        {
            path: '/lgoin',
            title: '登录页'
        },
        {
            path: '/',
            title: '后台管理',
            children: [
                {
                    path: 'home',
                    title: '首页'
                }
            ]
        }
    ]
}
export default router