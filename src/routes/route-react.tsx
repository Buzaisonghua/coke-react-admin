import { routeConfig } from "./route-config"
import { Switch, Route } from "react-router-dom"
import routeComponents from "./route-components"
const routeReact = (routes:routeConfig[]):any => (
    <Switch>
        {
            routes.map((route: routeConfig, index: number) => (
                <Route path={ route.path } key={ route.path || index }>
                    { routeWrapper( routeComponents[route.component], route ) }
                </Route>
            ))
        }
    </Switch>
)

const routeWrapper = (Comp:any, route:routeConfig):any => {
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

export default routeReact