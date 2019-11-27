/**
 * 策略模式
 * 
 * 
 * 
 * 
 * 马上就要到年底了，很多公司的年终奖是根据员工的工资基数和年底绩效情况来发放的。
 * 绩效为A的人年终奖有4倍工资
 * 绩效为B的人年终奖有3倍工资
 * 绩效为C的人年终奖是2倍工资
 * 绩效为D的人年终奖是1倍工资
 * 假设财务部要求我们提供一段代码，来方便他们计算员工的年终奖。
 */
/**
 * 工资基数
 */
let base = 1000;
// 法一
let calculate1 = function(salary,level) {
  if(level === 'A') {
      return salary * 4;
  } else if(level === 'B') {
      return salary * 3;
  } else if(level === 'C') {
      return salary * 2;
  } else if(level === 'D') {
    return salary * 1;
  }
};
// 法二
let salaryA = salary => salary * 4;
let salaryB = salary => salary * 3;
let salaryC = salary => salary * 2;
let salaryD = salary => salary * 1;

let calculate2 = function(salary,level) {
  if(level === 'A') {
      return salaryA(salary);
  } else if(level === 'B') {
      return salaryB(salary);
  } else if(level === 'C') {
      return salaryC(salary);
  } else if(level === 'D') {
    return salaryD(salary);
  }
};
// 法三 最佳实践
let strategies = {
  'A': salary => salary * 4,
  'B': salary => salary * 3,
  'C': salary => salary * 2,
  'D': salary => salary * 1
};
let calculate3 = function(salary,level) {
  return strategies[level](salary);
};
// 调用如下：
// run  'node ./strategy.js'
console.log('resultA = ', calculate3(base,'A'));
console.log('resultB = ', calculate3(base,'B'));
console.log('resultC = ', calculate3(base,'C'));
console.log('resultD = ', calculate1(base,'D'));