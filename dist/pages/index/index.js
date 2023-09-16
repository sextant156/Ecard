"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/index/index.tsx":
/*!********************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/index/index.tsx ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var C_Users_NUC_Documents_TaroProject_taro_react_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_NUC_Documents_TaroProject_taro_react_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_NUC_Documents_TaroProject_taro_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_NUC_Documents_TaroProject_taro_react_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_NUC_Documents_TaroProject_taro_react_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var C_Users_NUC_Documents_TaroProject_taro_react_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var taro_ui_dist_style_components_button_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! taro-ui/dist/style/components/button.scss */ "./node_modules/taro-ui/dist/style/components/button.scss");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);












 // 按需引入







var Index = /*#__PURE__*/function (_ref) {
  (0,C_Users_NUC_Documents_TaroProject_taro_react_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _ref);
  var _super = (0,C_Users_NUC_Documents_TaroProject_taro_react_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_5__["default"])(Index);
  function Index(props) {
    var _this;
    (0,C_Users_NUC_Documents_TaroProject_taro_react_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Index);
    _this = _super.call(this, props);
    (0,C_Users_NUC_Documents_TaroProject_taro_react_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])((0,C_Users_NUC_Documents_TaroProject_taro_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "CallPhone", function () {
      (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__.makePhoneCall)({
        phoneNumber: '13864199988'
      });
    });
    (0,C_Users_NUC_Documents_TaroProject_taro_react_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])((0,C_Users_NUC_Documents_TaroProject_taro_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "AddPhone", function () {
      (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__.addPhoneContact)({
        firstName: '史承军',
        mobilePhoneNumber: '13864199988',
        weChatNumber: 'webjoyxinyue'
      });
    });
    // 复制微信号到剪切板
    (0,C_Users_NUC_Documents_TaroProject_taro_react_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])((0,C_Users_NUC_Documents_TaroProject_taro_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "copyWechat", function () {
      // 此处修改不同的微信号
      (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__.setClipboardData)({
        data: 'webjoyxinyue',
        success: function success() {
          (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__.showToast)({
            title: '复制成功'
          });
        }
      });
    });
    _this.state = {
      datalist: []
    };
    return _this;
  }
  (0,C_Users_NUC_Documents_TaroProject_taro_react_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_9__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var imgList = [];
      for (var i = 0; i < 9; i++) {
        imgList.push({
          id: i,
          url: 'https://cdn.staticaly.com/gh/sextant156/PicSource@main/img/%E7%8B%99.png'
        });
      }
      this.setState({
        datalist: imgList
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "onAddToFavorites",
    value:
    // 收藏对应内容
    function onAddToFavorites() {
      // webview 页面返回 webviewUrl
      return {
        title: '你好我是史承军',
        imageUrl: 'https://imagepack001.oss-cn-beijing.aliyuncs.com/imgforEcard/info001.jpg',
        query: 'id?=1'
      };
    }
    // 分享对应内容
  }, {
    key: "onShareAppMessage",
    value: function onShareAppMessage(res) {
      if (res.from === 'button') {
        // 来自页面内转发按钮
        console.log(res.target);
      }
      return {
        title: '你好我是史承军',
        imageUrl: 'https://imagepack001.oss-cn-beijing.aliyuncs.com/imgforEcard/info001.jpg',
        path: '/pages/index/index?id=123'
      };
    }
  }, {
    key: "render",
    value:
    // 渲染
    function render() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
        className: "index",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Image, {
          className: "imgCard",
          src: "https://imagepack001.oss-cn-beijing.aliyuncs.com/imgforEcard/info001.jpg"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
          className: "container1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Button, {
            className: "block",
            onClick: this.AddPhone,
            style: {
              color: 'white',
              fontWeight: 'bold',
              fontFamily: '宋体'
            },
            children: "\u4FDD\u5B58\u7535\u8BDD"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Button, {
            className: "block",
            onClick: this.copyWechat,
            style: {
              color: 'white',
              fontWeight: 'bold',
              fontFamily: '宋体'
            },
            children: "\u590D\u5236\u5FAE\u4FE1"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Button, {
            className: "block",
            openType: "share",
            style: {
              color: 'white',
              fontWeight: 'bold',
              fontFamily: '宋体'
            },
            children: "\u5206\u4EAB\u540D\u7247"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
          id: "img1",
          style: {
            display: 'flex',
            alignItems: 'center'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Image, {
            mode: "aspectFit",
            style: {
              width: '50px',
              height: '40px'
            },
            className: "logo001",
            src: "https://imagepack001.oss-cn-beijing.aliyuncs.com/imgforEcard/logo2.png"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
            style: {
              margin: '0 10px'
            },
            children: "\u4F01\u4E1A\u7B80\u4ECB"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
          className: "textcontainer",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
            className: "text2",
            style: {
              color: 'white',
              fontFamily: '黑体',
              fontSize: '14px'
            },
            children: "\u6D4E\u5357\u56ED\u6797\u96C6\u56E2\u666F\u89C2\u8BBE\u8BA1\u516C\u53F8\u662F\u5177\u6709\u4E13\u4E1A\u7ECF\u9A8C\u548C\u53D1\u5C55\u6F5C\u529B\u7684\u54C1\u724C\u8BBE\u8BA1\u673A\u6784\uFF0C\u62E5\u6709\u98CE\u666F\u56ED\u6797\u5DE5\u7A0B\u8BBE\u8BA1\u7532\u7EA7\u8D44\u8D28\u3001\u5EFA\u7B51\u5DE5\u7A0B\u8BBE\u8BA1\u4E59\u7EA7\u8D44\u8D28\u548C\u57CE\u4E61\u89C4\u5212\u7F16\u5236\u4E59\u7EA7\u8D44\u8D28\u3002\u591A\u5E74\u6765\u51ED\u501F\u4E13\u4E1A\u7684\u6280\u672F\u529B\u91CF\u3001\u7A81\u51FA\u7684\u521B\u65B0\u80FD\u529B\u548C\u5168\u9762\u7684\u56E2\u961F\u670D\u52A1\u5F62\u6210\u4E86\u98CE\u666F\u56ED\u6797\u8BBE\u8BA1\u3001\u5EFA\u7B51\u8BBE\u8BA1\u3001\u57CE\u4E61\u89C4\u5212\u3001\u65C5\u6E38\u7B56\u5212\u3001\u9020\u4EF7\u54A8\u8BE2\u3001\u5DE5\u7A0B\u7BA1\u7406\u3001\u79D1\u7814\u751F\u4EA7\u3001\u6587\u521B\u5F00\u53D1\u7B49\u591A\u7248\u5757\u3001\u591A\u4E13\u4E1A\u5171\u53D1\u5C55\u6A21\u5F0F\uFF0C\u5B8C\u6210\u4E86\u4F17\u591A\u77E5\u540D\u89C4\u5212\u8BBE\u8BA1\u9879\u76EE\uFF0C\u7D2F\u8BA1\u83B7\u5F97\u56FD\u5BB6\u7EA7\u3001\u7701\u5E02\u7EA7\u7B49\u5404\u7EA7\u5956\u9879\u6570\u767E\u9879\u3002"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
          id: "img1",
          style: {
            display: 'flex',
            alignItems: 'center'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Image, {
            mode: "aspectFit",
            style: {
              width: '50px',
              height: '40px'
            },
            className: "logo001",
            src: "https://imagepack001.oss-cn-beijing.aliyuncs.com/imgforEcard/logo2.png"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
            style: {
              margin: '0 10px'
            },
            children: "\u4F01\u4E1A\u5B9E\u529B"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Swiper, {
          autoplay: true,
          circular: true,
          className: "swiper",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.SwiperItem, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Image, {
              className: "img003",
              src: "https://imagepack001.oss-cn-beijing.aliyuncs.com/imgforEcard/%E6%98%9F%E7%A9%BA%E8%90%A5%E5%9C%B0%E5%A4%9C%E6%99%AF%2B%E5%AE%9E%E6%99%AF.jpg"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.SwiperItem, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Image, {
              className: "img003",
              src: "https://imagepack001.oss-cn-beijing.aliyuncs.com/imgforEcard/%E6%B5%B7%E5%8D%97%E5%A4%A9%E6%B6%AF%E6%B5%B7%E8%A7%92.jpg"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.SwiperItem, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Image, {
              className: "img003",
              src: "https://imagepack001.oss-cn-beijing.aliyuncs.com/imgforEcard/DSCF0306-%E7%BC%96%E8%BE%91.jpg"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.SwiperItem, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Image, {
              className: "img003",
              src: "https://imagepack001.oss-cn-beijing.aliyuncs.com/imgforEcard/%E6%BD%8D%E5%9D%8Acbd.jpg"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.SwiperItem, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Image, {
              className: "img003",
              src: "https://imagepack001.oss-cn-beijing.aliyuncs.com/imgforEcard/%E5%A4%A9%E6%B6%AF%E6%B5%B7%E8%A7%92.jpg"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.SwiperItem, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Image, {
              className: "img003",
              src: "https://imagepack001.oss-cn-beijing.aliyuncs.com/imgforEcard/%E5%8D%83%E4%BD%9B%E5%B1%B1%E5%8C%97%E5%B9%BF%E5%9C%BA.jpg"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.SwiperItem, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Image, {
              className: "img003",
              src: "https://imagepack001.oss-cn-beijing.aliyuncs.com/imgforEcard/%E8%8C%82%E5%B2%AD%E5%B1%B1cbd.jpg"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
          style: {
            textAlign: 'center'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
            style: {
              color: 'white',
              fontSize: '12px'
            },
            children: "\u9879\u76EE\u5C55\u793A"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Image, {
          className: "img001",
          src: "https://imagepack001.oss-cn-beijing.aliyuncs.com/imgforEcard/002.png"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
          style: {
            textAlign: 'center'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
            style: {
              color: 'white',
              fontSize: '12px'
            },
            children: "\u83B7\u5956\u60C5\u51B5"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.View, {
          id: "img1",
          style: {
            display: 'flex',
            alignItems: 'center'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Image, {
            mode: "aspectFit",
            style: {
              width: '50px',
              height: '40px'
            },
            className: "logo001",
            src: "https://imagepack001.oss-cn-beijing.aliyuncs.com/imgforEcard/logo2.png"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Text, {
            style: {
              margin: '0 10px'
            },
            children: "\u4F01\u4E1A\u8D44\u8D28"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_10__.Image, {
          className: "img001",
          src: "https://imagepack001.oss-cn-beijing.aliyuncs.com/imgforEcard/001.png"
        })]
      });
    }
  }]);
  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./index.tsx */ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/index/index.tsx");


var config = {"navigationBarTitleText":"电子名片"};

_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"].enableShareAppMessage = true
var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/index/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/taro-ui/dist/style/components/button.scss":
/*!****************************************************************!*\
  !*** ./node_modules/taro-ui/dist/style/components/button.scss ***!
  \****************************************************************/
/***/ (function() {

// extracted by mini-css-extract-plugin


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/index/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map