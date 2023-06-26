"use strict";
const common_vendor = require("../../common/vendor.js");
const recorderManager = common_vendor.index.getRecorderManager();
const innerAudioContext = common_vendor.index.createInnerAudioContext();
innerAudioContext.autoplay = true;
const _sfc_main = {
  data() {
    return {
      text: "uni-app",
      voicePath: ""
    };
  },
  onLoad() {
    let self = this;
    recorderManager.onStop(function(res) {
      console.log("recorder stop" + JSON.stringify(res));
      self.voicePath = res.tempFilePath;
    });
  },
  methods: {
    startRecord() {
      console.log("开始录音");
      recorderManager.start();
    },
    endRecord() {
      console.log("录音结束");
      recorderManager.stop();
    },
    playVoice() {
      console.log("播放录音");
      if (this.voicePath) {
        innerAudioContext.src = this.voicePath;
        innerAudioContext.play();
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.startRecord && $options.startRecord(...args)),
    b: common_vendor.o((...args) => $options.endRecord && $options.endRecord(...args)),
    c: common_vendor.o((...args) => $options.playVoice && $options.playVoice(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/ypgz/template/Template-app/pages/classify/index.vue"]]);
wx.createPage(MiniProgramPage);
