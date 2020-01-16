const path = require('path');
const resolve = dir => path.join(__dirname, dir);

module.exports = {
    // 选项...
    // devServer:{
    //   prot:3002
    // }
    // 默认起始页文件
  indexPath: 'index.html',
  
  // 是否在保存的时候使用 `eslint-loader` 进行检查。
  // 有效的值：`ture` | `false` | `"error"`
  // 当设置为 `"error"` 时，检查出的错误会触发编译失败。
  lintOnSave: true,
  }