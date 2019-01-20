/*
  功能：注册事件的兼容封装
  参数：
    element 事件源  节点对象
    type    事件类型 字符串   不加on 'click'
    handler 事件处理程序  函数名字或匿名函数
*/
function on(element,type,handler) {
  // 【标准的方式：addEventListener】
  if (element.addEventListener != undefined) {
    element.addEventListener(type, handler);
  } else {
    // 【IE的方式：attachEvent】
    element.attachEvent('on' + type, handler);
  }
};


/*
  功能：移除事件
  参数：
    element 事件源  节点对象
    type    事件类型 字符串   不加on 'click'
    handlerName 事件处理程序  函数名字
*/
function off(element,type,handlerName) {
  // 标准： 元素.removeEventListener(‘事件类型’,事件处理程序);
  if (element.removeEventListener != undefined) {
    element.removeEventListener(type, handlerName);
  } else {
    // IE低版本：元素.detachEvent('事件类型',事件处理程序);
    element.detachEvent('on' + type,handlerName);
  }
  
}