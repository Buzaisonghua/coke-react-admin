import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'

// 引入modules文件下的ts文件
const modulesFiles = require.context('./modules', true, /\.ts$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
interface moduleFile{
  [index:string]: any
}
const modules:moduleFile = {} // export default集合
const actions:moduleFile = {} // action方法集合
const getActionValue = (value:moduleFile):moduleFile => {
  if (Object.hasOwnProperty.call(value, 'defaule')) {
    delete value.default
  }
  return value
}
modulesFiles.keys().forEach((modulePath:string):void => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  actions[moduleName] = getActionValue(value)
})
const composeEnhancers = compose
const store = createStore(combineReducers(modules), composeEnhancers(applyMiddleware(thunk)))

/**
 * actions全局化
 */
export {
  actions
}

export default store
