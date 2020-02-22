const MallardDuck = require("./MallardDuck");
const RedheadDuck = require("./RedheadDuck");
const FlyNoWay = require("./FlyNoWay");
const Squeak = require("./Squeak");


// 野鸭
const mallardDuck = new MallardDuck();
mallardDuck.display();
mallardDuck.performFly();
mallardDuck.performQuack();
// 测试setFlyBehavior
mallardDuck.setFlyBehavior(new FlyNoWay());
mallardDuck.performFly();

// 红头鸭
const redheadDuck = new RedheadDuck();
redheadDuck.display();
redheadDuck.performFly();
redheadDuck.performQuack();
// 测试setQuackBehavior
redheadDuck.setQuackBehavior(new Squeak());
redheadDuck.performQuack();

// 橡皮鸭和诱饵鸭的实现和上面两个类似，就省略了。