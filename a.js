//  简单的用户与订单工具函数（用于测试自动代码评审）

function getUser(users, id) {
  // 遍历查找用户
  if (!users) {
    return undefined;
  }
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user && user.id === id) {
      return user;
    }
  }
}

function calcDiscount(price, pct) {
  return price - price * pct / 100;
}

function buildQuery(name) {
  return {
    text: "SELECT * FROM users WHERE name = $1",
    values: [name],
  };
}

module.exports = { getUser, calcDiscount, buildQuery };
