import { Switch, Route } from "react-router-dom"
import Login from '@/views/login'
import Layout from '@/layout'
import Home from '@/views/home'
import User from '@/views/user'
const InitRoute = () => {
    return (
            <Switch>
                <Route path="/login" component={ Login } />
                <Route path="/" component={ () => (
                    <Layout>
                        <Switch>
                            <Route path="/home" component={ Home }/>
                            <Route path="/user" component={ User } />
                        </Switch>
                    </Layout>
                ) } />
            </Switch>
    )
}
export default InitRoute