// wechat.js
import {getSign,getOpeind} from "@api/order/order.js"
import wx from "weixin-js-sdk";
export default {
    // 调试模式
    debug: false,
    // api列表
    jsApiList: [
        'updateAppMessageShareData',
        'updateTimelineShareData',
        'getLocation',
        'openLocation',
        'chooseImage',
        'chooseWXPay'
    ],
    // 判断是否在微信中
    isWechat: function() {
        var ua = window.navigator.userAgent.toLowerCase()
        return ua.match(/micromessenger/i) == 'micromessenger' ? true : false
    },
    // 初始化sdk配置
    initJssdk: function(callback) {
        if (this.isWechat()) {
			let data = {
				url:window.location.href
			}
            getSign(data).then(res => {
                var data = res.data
                wx.config({
                    debug: false,
                    appId: data.appId,
                    timestamp: data.timeStamp,
                    nonceStr: data.nonceStr,
                    signature: data.signature,
                    jsApiList: data.jsApiList || this.jsApiList
                })
                if (typeof callback === 'function') {
                    callback(data)
                }
            })
        }
    },
    // 微信分享
    share: function(data, callback) {
        if (this.isWechat()) {
            this.initJssdk(function(init) {
                wx.ready(function() {
                    var shareData = {
                        title: data.title,
                        desc: data.desc,
                        link: window.location.href,
                        imgUrl: data.image,
                        success: function(res) {
                            callback(res)
                        },
                        cancel: function(res) {
                            callback(res)
                        }
                    }
                    wx.updateAppMessageShareData(shareData)
                    wx.updateTimelineShareData(shareData)
                })
            })
        }
    },
    // 获取位置信息
    getLocation: function(callback) {
        if (this.isWechat()) {
            this.initJssdk(function(init) {
                wx.ready(function() {
                    wx.getLocation({
                        type: 'gcj02',
                        success: function(res) {
                            callback(res)
                        },
                        fail: function(err) {
                            callback(err)
                        }
                    })
                })
            })
        }
    },
    // 查看位置信息
    openLocation: function(data, callback) {
        if (this.isWechat()) {
            this.initJssdk(function(init) {
                wx.ready(function() {
                    wx.openLocation({
                        latitude: data.latitude,
                        longitude: data.longitude
                    })
                })
            })
        }
    },
    // 微信支付
    wxpay: function(data, callback) {
        if (this.isWechat()) {
            this.initJssdk(function(init) {
                wx.ready(function() {
                    wx.chooseWXPay({
                        timestamp: data.timeStamp,
                        nonceStr: data.nonceStr,
                        package: data.package,
                        signType: data.signType,
                        paySign: data.paySign,
                        success: function(res) {
                            callback(res)
                        },
                        cancel: function(res) {
                            callback(res)
                        },
                        fail: function(err) {
                            callback(err)
                        }
                    })
                })
            })
        }
    },
    // 微信支付 另一种方式
    wxpayBridge: function(data, callback) {
        if (this.isWechat()) {
            this.initJssdk(function(init) {
                wx.ready(function() {
                    WeixinJSBridge.invoke(
                        'getBrandWCPayRequest', {
                            "appId": data.appId,
                            "timeStamp": data.timeStamp,
                            "nonceStr": data.nonceStr,
                            "package": data.package,
                            "signType": "MD5",
                            "paySign": data.paySign
                        },
                        function(res) {
                            callback(res)
                        }
                    )
                })
            })
        }
    },
	getUrl: function(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return unescape(r[2]);
		return null;
	  },
	  getCode:function() {         //微信网页授权返回code和openid
		let wx_code = this.getUrl("code");
	   if (!wx_code) {
		let redirect = encodeURIComponent(window.location.href);
		let wx_url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxde2cf49d6527e57a&redirect_uri='+redirect+'&response_type=code&scope=snsapi_userinfo#wechat_redirect'
      	window.location.href = wx_url;
	   }else{
		  getOpeind({code:wx_code,type:2}).then((res)=>{
		  localStorage.setItem("openid",res.data);
		})
	   }
	  }
}
