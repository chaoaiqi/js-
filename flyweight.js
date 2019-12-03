/**
 * 享元模式
 * 
 * 
 * 
 * 现在有一家服装店，有50件男装，50件女装，现在需要找模特拍照。
 */
 class Gyp {
   constructor (index) {
      this.index = index;
   }
   takePhotos(index) {
    console.log(`石膏${this.index}号,穿着第${index}件衣服拍照`);
   }
 }
 for (let i = 0; i < 100; i++) {
   const gyp = new Gyp(i + 1);
   gyp.takePhotos(i + 1);
 }

 class Model {
   constructor (sex) {
    this.sex = sex;
   }
   takePhotos(index) {
     console.log(`${this.sex}模特,穿着第${index}件衣服拍照`);
   }
 }
 // run 'node ./flyweight.js'
 const maleModel = new Model('男');
 const femaleModel = new Model('女');
 for (let i = 0; i < 50; i++) {
    maleModel.takePhotos(i + 1);
 }
 for (let i = 0; i < 50; i++) {
    femaleModel.takePhotos(i + 1);
 }