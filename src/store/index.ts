import { createStore, combineReducers } from 'redux';


const modulesFiles = require.context('./modules', true, /\.ts$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file

const modules = modulesFiles.keys().reduce((modules:any, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})
const store = createStore(combineReducers(modules))

export default store
