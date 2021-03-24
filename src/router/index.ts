import { createRouter, createWebHistory } from 'vue-router';

import home from './modules/home';

/**
 * 自动引入当前文件夹下所有module
 * require.context(directory, useSubdirectories = false, regExp = /^.//);
 * @param {String} directory 读取文件的路径
 * @param {Boolean} directory 匹配文件的正则表达式
 * @param {regExp} regExp 读取文件的路径
 */

//  const modulesFiles = require.context('./modules', true, /.js$/)
//  const modules = modulesFiles.keys().reduce((modules, modulePath) => {
//    const moduleName = modulePath.replace(/^.\/(.*)\.js/,'$1')
//    const value = modulesFiles(modulePath)
//    modules[moduleName] = value.default
//    return modules
//    }, {})

/**
 * TODO: 需要优化成自动加载modules下文件
 */

const modulesFiles = import.meta.globEager('./modules/*.ts')
console.log(Object.keys(modulesFiles));


const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    ...home,
    // ...modules

]

export default createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {
            el: '#app',
            top: 0,
            behavior: 'smooth',
        }
    },
})

function scrollBehavior(to: any, from: any, savedPosition: any) {
    throw new Error('Function not implemented.');
}
