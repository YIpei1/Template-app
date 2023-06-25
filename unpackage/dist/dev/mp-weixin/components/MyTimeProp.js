"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  data() {
    this.getDate({
      format: true
    });
    return {
      date: "起始时间",
      dateEnd: "截止时间",
      timeStart: "14:00",
      timeEnd: "16:00",
      startDate: this.getDate("start"),
      endDate: this.getDate("end")
    };
  },
  props: {
    // 开始时间 可传入
    startDate: {
      type: String
    }
  },
  methods: {
    // 选择时间 日期
    bindDateChange: function(e) {
      this.date = e.target.value;
      if (this.dateEnd != "截止时间") {
        this.dateEnd = e.target.value;
      }
    },
    bindDateChange1: function(e) {
      this.dateEnd = e.target.value;
    },
    getDate(type) {
      const date = /* @__PURE__ */ new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      if (type === "start") {
        year = year - 20;
      } else if (type === "end") {
        year = year + 2;
      }
      month = month > 9 ? month : "0" + month;
      day = day > 9 ? day : "0" + day;
      return `${year}-${month}-${day}`;
    },
    // 开始时间
    bindTimeStart: function(e) {
      this.timeStart = e.target.value;
    },
    // 结束时间
    bindTimeEnd: function(e) {
      this.timeEnd = e.target.value;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.date),
    b: $data.date,
    c: $props.startDate,
    d: $data.endDate,
    e: common_vendor.o((...args) => $options.bindDateChange && $options.bindDateChange(...args)),
    f: common_vendor.t($data.dateEnd),
    g: $data.dateEnd,
    h: $data.date,
    i: $data.endDate,
    j: common_vendor.o((...args) => $options.bindDateChange1 && $options.bindDateChange1(...args)),
    k: common_vendor.t($data.timeStart),
    l: $data.timeStart,
    m: common_vendor.o((...args) => $options.bindTimeStart && $options.bindTimeStart(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-8d4e2382"], ["__file", "D:/ypgz/template/Template-app/components/MyTimeProp.vue"]]);
wx.createComponent(Component);
