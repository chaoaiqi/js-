/**
 * 工厂模式之简单工厂模式
 * 
 * 
 * 这里以动物为例，由动物工厂批量生产动物
 */
class Animal {
  constructor (type) {
    this.type = type;
  }
  setName(name) {
    this.name = name;
  }
  // getName() {
  //   return this.name;
  // }
  detail() {
    if (!this.name) {
      console.log(`First of all, let's give its a name. `);
      return; 
    }
    console.log(`this is a ${this.type},its name is ${this.name}`);
  }
  static getInstance(type) {
    return new Animal(type);
  }
}
// run  'node ./simpleFactory.js'
let cat = Animal.getInstance('cat');
cat.setName('tom');
cat.detail();