/**
 * 代理模式
 * 
 * 
 * 
 * 假如你是一名某国首脑，你想买一杯奶茶，，你亲自买显然不现实、不安全。
 * 于是你委托你的秘书代你去买一杯奶茶，这个过程就是代理模式。
 */
class Leader {
  constructor(name) {
    this.name = name;
    console.log(`${name}是一名首脑`);
  }
  shopping() {
    const proxyObj = new ProxySecretary('B'); 
    proxyObj.proxyBehavior(this.name);
  }
}
class ProxySecretary {
  constructor(name) {
    this.name = name;
    console.log(`${name}是一名秘书`);
  }
  proxyBehavior(targetName){
    console.log(`${this.name}代替${targetName}去买一杯奶茶`);
  }
}
// run  'node ./proxy.js'
const leader = new Leader('A');
leader.shopping();