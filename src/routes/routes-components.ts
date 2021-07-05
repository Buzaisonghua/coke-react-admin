/**
 * 路由组件出口文件
 */
import Login from '../views/login';
import Layout from '../layout';
import Home from '../views/home'
import User from '../views/user'
 
//  const WysiwygBundle = Loadable({
     // 按需加载富文本配置
    //  loader: () => import('./ui/Wysiwyg'),
    //  loading: Loading,
//  });
 
export default {
  Login,
  Layout,
  Home,
  User
} as any;
 