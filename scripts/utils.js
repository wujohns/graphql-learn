/**
 * 调试用的工具类方法
 *
 * @author wujohns
 * @date 17/9/7
 */
'use strict';

/**
 * @class
 */
class Utils {
    /**
     * 格式化输出对象
     * @param {Object} obj - 需要输出的对象
     * @static
     */
    static print (obj) {
        console.log(JSON.stringify(obj, null, 2));
    }
}

module.exports = Utils;