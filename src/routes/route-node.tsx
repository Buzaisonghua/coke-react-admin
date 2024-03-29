import { RouteProps } from "./route-list"
import { Switch, Route, Redirect } from "react-router-dom"
import routeComponents from "./route-components"
import store from '@/store'
import setting from '@/setting'
/**
 * @returns 登录状态
 */
const getLogin = ():boolean => {
    const token:any = store.getState().token
    if (Object.hasOwnProperty.call(token, 'token')) {
        return !!token.token
    }
    return false
}
const login = getLogin()

/**
 * 这是一个递归结构 用于渲染路由结构
 * @param routes 路由集合 子集存在必填项 path title component
 * @returns 路由结构
 */
const routeNode = (routes:RouteProps[]) => (
    <Switch>
        {
            routes.map((route: RouteProps, index: number) => (
                <Route path={ route.path } key={ route.path || index }>
                    { routeDraw( routeComponents[route.component], route ) }
                </Route>
            ))
        }
    </Switch>
)



/**
 * 对route节点做登录验证
 * @param Comp 组件引入 
 * @param route route节点数据
 * @returns 进行登录验证后返回对应页面
 */
const routeDraw = (Comp:any, route:RouteProps) => {
    const { hidden, countryHidden } = route
    const { hiddenPath, countryHiddenPath } = setting
    // 状态为已登录
    const haveLogin = () => {
        return countryHidden 
            ?
        <Redirect to={countryHiddenPath} />
            :
        routeDrawNode(Comp, route)
    }
    // 状态为未登录
    const noHaveLogin = () => (
        hidden
            ?
        <Redirect to={hiddenPath} />
            :
        routeDrawNode(Comp, route)
    )
    return (
        login
            ? 
        haveLogin()
            :
        noHaveLogin()
    )
}


/**
 * 
 * @param Comp 元素进行登录验证后会在这里渲染节点或子节点
 * @param route 
 * @returns 
 */
const routeDrawNode = (Comp:any, route:RouteProps):any => {
    return (
        <Comp>
            {
                route.children
                    ?
                routeNode(route.children)
                    :
                null
            }
        </Comp>
    )
}

export default routeNode