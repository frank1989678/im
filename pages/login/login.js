import config from "../../utils/WebIMConfig";
const utils = require("../../utils/utils");
const app = getApp();

Page({
    data: {
        name: 'frank',
        pwd: '123456'
    },
    // 输入框
    changeInput(e) {
        const { key } = e.target.dataset;
        this.setData({
            [key]: e.detail.value
        })
    },

    login() {
        const { name, pwd } = this.data;
        let msg = '';
        if (name == "") {
            utils.showToast('请输入用户名！');
        } else if (pwd == "") {
            utils.showToast('请输入密码！');
        } else {
            utils.setCookie('myname', name);
            app.conn.open({
                user: name,
                pwd: pwd,
                grant_type: 'password',
                apiUrl: config.apiURL,
                appKey: config.appkey
            });
        }
    }
});
