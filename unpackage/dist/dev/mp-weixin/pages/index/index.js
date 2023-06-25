"use strict";
const common_vendor = require("../../common/vendor.js");
const common_common = require("../../common/common.js");
const store_index = require("../../store/index.js");
require("../../common/qqmap-wx-jssdk.min.js");
require("../../api/login.js");
require("../../common/http.js");
if (!Math) {
  (MyHeader + MySearch + MyUploadImg + MyTimeProp)();
}
const MyHeader = () => "../../components/MyHeader.js";
const MyUploadImg = () => "../../components/MyUploadImg.js";
const MySearch = () => "../../components/MySearch.js";
const MyTimeProp = () => "../../components/MyTimeProp.js";
const _sfc_main = {
  __name: "index",
  setup(__props, { expose }) {
    common_vendor.onReady(() => {
      var qr = new common_vendor.UQRCode();
      qr.data = "aa";
      qr.size = 200;
      qr.make();
      var canvasContext = common_vendor.index.createCanvasContext("qrcode", this);
      qr.canvasContext = canvasContext;
      qr.drawCanvas();
    });
    function login() {
      common_vendor.index.navigateTo({
        url: "../components/login/index"
      });
    }
    const store = store_index.GlobalStore();
    common_vendor.watch(address, (count) => {
      console.log(`count is: ${count}`);
    });
    const address = common_vendor.computed(() => {
      return store.address;
    });
    expose({
      getMapLocation: common_common.getMapLocation,
      login
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          leftLogo: true
        }),
        b: common_vendor.p({
          isAddress: false
        }),
        c: common_vendor.p({
          isAddress: true
        }),
        d: common_vendor.p({
          numberData: 9,
          isUploadImgStyle: true
        }),
        e: common_vendor.p({
          numberData: 9,
          isUploadImgStyle: false
        }),
        f: common_vendor.o(login)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "D:/ypgz/template/Template-app/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
