import { RouteProps } from "./route-list"
import { Switch, Route, Redirect } from "react-router-dom"
import routeComponents from "./route-components"
const routeReact = (routes:RouteProps[]):any => (
    <Switch>
        {
            routes.map((route: RouteProps, index: number) => (
                <Route path={ route.path } key={ route.path || index }>
                    { routeWrapper( routeComponents[route.component], route ) }
                </Route>
            ))
        }
    </Switch>
)

const routeWrapper = (Comp:any, route:RouteProps):any => {
    return !route.hidden
        ? 
    routeWrapperList(Comp, route)
        :
    routeWrapperNeedLogin(Comp, route)
}
const routeWrapperList = (Comp:any, route:RouteProps):any => {
    return (
        <Comp>
            {
                route.children
                    ?
                routeReact(route.children)
                    :
                null
            }
        </Comp>
    )
}
const routeWrapperNeedLogin = (Comp:any, route:RouteProps):any => {
    const login = false
    if (login) {
        return routeWrapperList(Comp, route)
    } else {
        return <Redirect to='/login' />
    }
}

export default routeReact