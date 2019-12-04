/**
 * 观察者模式  (发布-订阅模式)
 * 
 * 
 * 
 * 最典型的例子就是比如各位看官老爷关注了我，当我更新该动态时，
 * 各位看官老爷们将第一手收到掘金推送的卡片（我发的文章）。
 */
/**
 * 被观察者 
 */
class Subject {
  constructor() {
    this.observers = [];
  }
  /**
   * 订阅事件
   * @param {*} observer 
   */
  on(observers) {
    observers.forEach(observer => {
      if (this.observers.some(item => item.name === observer.name)) {
        console.log(`${observer.name}已关注了作者，无需再关注啦...`);
      }else {
        this.observers.push(observer);
        console.log(`${observer.name}关注了作者`);
      }
    });
  }
  /**
   * 发布事件
   */
  publish(message) {
    this.observers.forEach(item => {
      item.listener(message);
    });
  }
}
class God {
  constructor(name) {
    this.name = name;
  }
  listener(message) {
    console.log(`作者给${this.name}推送了一条消息，内容如下：${message}`);
  }
}
// run 'node ./observer.js'
const subject = new Subject();
const godA = new God('A')
const godB = new God('B');
const godC = new God('C');
subject.on([godA, godB, godC, godA]);

subject.publish('请大佬们多多支持！');