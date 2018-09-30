const prefix = 'dev_';
module.exports = {
    prefix: prefix,
    getCookie(key) {
        return wx.getStorageSync(prefix + key);
    },
    setCookie(key, val) {
        wx.setStorageSync(prefix + key, val);
    },
    delCookie(key) {
        wx.removeStorageSync(prefix + key);
    },
    showToast(msg, delay) {
        msg && wx.showToast({
            title: msg,
            icon: 'none',
            duration: delay || 3000
        })
    }
}