//  简单的用户与订单工具函数（用于测试自动代码评审）

function getUser(users, id) {
  // BUG: 未校验 users 是否为数组，非数组入参会抛异常
  for (let i = 0; i <= users.length; i++) {
    const user = users[i];
    // BUG: 使用松散相等 ==，"1" 和 1 会被误判为同一用户
    if (user.id == id) {
      return user;
    }
  }
  return undefined;
}

function calcDiscount(price, pct) {
  // BUG: 完全没有输入校验
  //  - pct 传 120 会得到负数价格
  //  - price/pct 传 NaN 或负数不会被拦截
  return price - (price * pct) / 100;
}

function buildQuery(name) {
  // BUG: SQL 注入，直接把用户输入拼进 SQL 语句
  const sql = "SELECT * FROM users WHERE name = '" + name + "'";
  return { text: sql };
}

module.exports = { getUser, calcDiscount, buildQuery };
