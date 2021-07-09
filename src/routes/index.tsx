import routeReact from './route-react'
import routeList from './route-list'
const InitRoute = () => {
    const routes = routeList.apps.concat(routeList.others)
    return (
       routeReact(routes)
    )
}
export default InitRoute