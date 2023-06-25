"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  __name: "UQRCode",
  setup(__props) {
    common_vendor.onReady(() => {
      var qr = new common_vendor.UQRCode();
      qr.data = "aa";
      qr.size = 200;
      qr.make();
      var canvasContext = common_vendor.index.createCanvasContext("qrcode", this);
      qr.canvasContext = canvasContext;
      qr.drawCanvas();
    });
    return (_ctx, _cache) => {
      return {};
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/ypgz/template/Template-app/components/UQRCode.vue"]]);
wx.createComponent(Component);
