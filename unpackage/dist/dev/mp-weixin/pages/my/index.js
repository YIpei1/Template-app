"use strict";
const common_vendor = require("../../common/vendor.js");
const signature = () => "../../components/MySignatureBox.js";
const _sfc_main = {
  components: {
    signature
  },
  data() {
    return {
      //打开canvas绘制签名
      showCanvas: false,
      //是否展示操作菜单
      completionSignPath: ""
      //签名
    };
  },
  methods: {
    //隐藏canvas签名组件
    closeCanvas(e) {
      this.showCanvas = false;
      if (!this.$isEmpty(e)) {
        this.completionSignPath = e;
      }
    },
    sign() {
      this.showCanvas = true;
    }
  }
};
if (!Array) {
  const _component_signature = common_vendor.resolveComponent("signature");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  (_component_signature + _easycom_u_button2)();
}
const _easycom_u_button = () => "../../node-modules/uview-plus/components/u-button/u-button.js";
if (!Math) {
  _easycom_u_button();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.closeCanvas),
    b: common_vendor.p({
      showCanvas: $data.showCanvas
    }),
    c: common_vendor.o($options.sign)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/ypgz/template/Template-app/pages/my/index.vue"]]);
wx.createPage(MiniProgramPage);
