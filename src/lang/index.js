import en from './en'
import zhCN from './zh-CN'
import zhCT from "./zh-CT";
import {createI18n} from "vue-i18n";
let messages={
    en:{...en},
    zh:{...zhCN}
}
let getLocal = () => {//获取浏览器当前设置的语言
    let myLocal = localStorage.getItem('language')//从本地缓存获取类型
    if (myLocal) {//如果本地有资源包，就从本地获取资源包
        return myLocal
    }
// 否则获取当前网络语言(navigator对象，用于提供当前浏览器及操作系统等信息，这些信息都放在navigator的各个属性中)
    let localName = navigator.language.indexOf('zh') !== -1 ? 'zh' : 'en';
// 将语言资源存储到本地中(防止刷新后需要重新设置语言)
    localStorage.setItem('language', localName);
    return localName;

}
// 创建i18n实例
export const i18n = createI18n({
locale: getLocal(),//语言绑定
    legacy: false, // 解决使用插件报错的问题(Not available in legacy mode)
    messages
})
