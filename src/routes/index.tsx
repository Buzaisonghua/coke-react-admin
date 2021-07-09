import { Switch, Route, Redirect } from "react-router-dom"
import Login from '@/views/login'
import Layout from '@/layout'
import Home from '@/views/home'
import User from '@/views/user'
import Chart from '@/views/chart'
const InitRoute = () => {
    return (
            <Switch>
                <Route path="/login" component={ Login } />
                <Route path="/" component={ () => (
                    <Layout>
                        <Switch>
                            <Route path="/home" component={ () => (
                                <Home>
                                    <Switch>
                                        <Route path="/home/user" component={ User }/>
                                        <Route path="/home/chart" component={ Chart }/>
                                        <Redirect to="/home/user" />
                                    </Switch>
                                </Home>
                            ) }/>
                            <Redirect to="/home"/>
                        </Switch>
                    </Layout>
                ) } />
            </Switch>
    )
}
export default InitRoute