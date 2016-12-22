/* global WeixinJSBridge WX_APP_ID */
import md5 from 'md5';
export default (prepayId, paySign) =>
   new Promise((resolve) => {
     function onBridgeReady() {
       WeixinJSBridge.invoke(
           'getBrandWCPayRequest', {
             appId: WX_APP_ID,     // 公众号名称，由商户传入
             timeStamp: parseInt(Date.now() / 1000, 10),         // 时间戳，自1970年以来的秒数
             nonceStr: md5(Math.random()), // 随机串
             package: `prepay_id=${prepayId}`,
             signType: 'MD5',         // 微信签名方式:
             paySign,
           },
           (res) => {
             resolve(res);
           }
       );
     }
     if (typeof WeixinJSBridge === 'undefined') {
       if (document.addEventListener) {
         document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
       } else if (document.attachEvent) {
         document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
         document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
       }
     } else {
       onBridgeReady();
     }
   })
;
