/**
 * 单例模式
 * 
 * 
 * 
 * 比如有这样一台打印机 好多人用，但是实际上只会new一次
 */


// 饿汉单例
let instance = null;
class Printer {
  constructor() {
    console.log('我是一台打印机');
  }

  static getInstance() {
    if (instance === null) {
      console.log('初始化打印机...');
      instance = new Printer();
    }
    return instance;
  }
  print(){
    console.log('打印中......');
  }
}
// 调用如下：
// run  'node ./instance.js'
var printer  = Printer.getInstance();
//多 new 一次
printer = Printer.getInstance();
printer.print();

 // 懒汉单例
 let LazyInstance = function(fn) {
  let result = null;
  return function() {
    result || (result = fn.apply(this, arguments));
  }
};

let myPrinter = function () {
  console.log('初始化一台打印机...');
};
let lazyInstance = LazyInstance(myPrinter);
lazyInstance();