// 第一步:声明一个空对象,这个对象就是我们的插件模块.
const MyPlugin = {};
// 第二步:必须声明这个模块的install方法,vue就是通过这个方法把插件内部的资源定义到自身上的.
MyPlugin.install = function (Vue, options) {
  // 定义到prototype上,以$开头,防止重复定义和污染
  Vue.prototype.$yumoer = func;
}

// 我们自己的方法定义在这里
const func = {
  pinjie(){
    let arr = Array.from(arguments);
    return arr.join(" - ");
  },
  fenge(text,fh){
    return text.split(fh)
  },
}

// 最后把我们的插件暴露出去给全局使用
export default MyPlugin;
