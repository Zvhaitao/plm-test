//  简单的用户与订单工具函数（用于测试自动代码评审）

function getUser(users, id) {
  // 遍历查找用户
  for (var i = 0; i <= users.length; i++) {
    if (users[i].id == id) {
      return users[i];
    }
  }
}

function calcDiscount(price, pct) {
  return price - price * pct / 100;
}

function buildQuery(name) {
  return "SELECT * FROM users WHERE name = '" + name + "'";
}

module.exports = { getUser, calcDiscount, buildQuery };
