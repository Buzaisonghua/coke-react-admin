import RouteNode from './route-node'
import routeList, { RouteProps } from './route-list'
const InitRoute = () => {
    const routes:RouteProps[] = routeList
    return (
        RouteNode(routes)
    )
}
export default InitRoute