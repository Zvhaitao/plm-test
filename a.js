//  简单的用户与订单工具函数（用于测试自动代码评审）

function getUser(users, id) {
  if (!Array.isArray(users)) {
    return undefined;
  }
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user && user.id === id) {
      return user;
    }
  }
  return undefined;
}

function calcDiscount(price, pct) {
  if (!Number.isFinite(price) || !Number.isFinite(pct) || price < 0 || pct < 0 || pct > 100) {
    return undefined;
  }
  return price - (price * pct) / 100;
}

function buildQuery(name) {
  return {
    text: 'SELECT * FROM users WHERE name = $1',
    values: [name],
  };
}

module.exports = { getUser, calcDiscount, buildQuery };
