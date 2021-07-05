import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { RoutesConfig, RoutesConfigList } from './routes-config'
import RoutesList from './routes-list'
const renderRoutes = (extraProps:any = {}, switchProps:any = {}) => {
    const createRoute = (routes:RoutesConfig) => {
        const route = (route:RoutesConfigList) => {
            return (
                <Route
                    key={route.path || route.key}
                    exact
                    path={route.path || route.key}
                    render= {(props: any) => {
                        return <div>1111</div>
                    }}
                />
            )
        }
    }
}