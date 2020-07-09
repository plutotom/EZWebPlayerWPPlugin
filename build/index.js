/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/EZWebPlayer/edit.js":
/*!*********************************!*\
  !*** ./src/EZWebPlayer/edit.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_Logo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/Logo.js */ "./src/EZWebPlayer/images/Logo.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var InspectorControls = wp.editor.InspectorControls;
var __ = wp.i18n.__;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    Placeholder = _wp$components.Placeholder,
    ExternalLink = _wp$components.ExternalLink,
    ToggleControl = _wp$components.ToggleControl,
    PanelRow = _wp$components.PanelRow,
    PanelBody = _wp$components.PanelBody,
    Toolbar = _wp$components.Toolbar,
    IconButton = _wp$components.IconButton;
var _wp$blockEditor = wp.blockEditor,
    BlockIcon = _wp$blockEditor.BlockIcon,
    BlockControls = _wp$blockEditor.BlockControls,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar,
    inspectorControls = _wp$blockEditor.inspectorControls,
    BlockAlignmentToolbar = _wp$blockEditor.BlockAlignmentToolbar;

var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App(attributes) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, attributes);

    _defineProperty(_assertThisInitialized(_this), "GetResponsiveCode", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(IFrameSrc, IFrameW, IFrameH) {
        var NP;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("running get responsive code", IFrameW, IFrameH);
                IFrameSrc = IFrameSrc + "&r"; // requierd for responsive iframe
                //New Percent

                NP = Math.round(parseInt(IFrameH) / parseInt(IFrameW) * 100);

                _this.props.setAttributes({
                  IFrameW: IFrameW
                });

                _this.props.setAttributes({
                  IFrameH: IFrameH
                });

                _this.props.setAttributes({
                  responsiveIFrameSrc: IFrameSrc
                });

                _this.props.setAttributes({
                  videoNP: NP
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "GetStaticCode", function (iframeSrc) {
      console.log("running Static code");

      _this.props.setAttributes({
        staticIframeSrc: iframeSrc
      });
    });

    _defineProperty(_assertThisInitialized(_this), "GetVideoPlayerInfo", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(VID, R) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log("GetVideoPlayerInfo running", VID);

                window // window === whe whole dom, used to get webService script.
                .WebService("https://ezwp.tv/VideoServices").GetVideoGet(VID, _this.state.responceType).onResult = /*#__PURE__*/function () {
                  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(result) {
                    var TempIframeCode;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            console.log(result.StatusMessage, " this is results");
                            _context2.next = 3;
                            return result.Object;

                          case 3:
                            _context2.t0 = _context2.sent;

                            if (!(_context2.t0 === null)) {
                              _context2.next = 9;
                              break;
                            }

                            console.log("Error! Not able to get Video.");

                            _this.setState({
                              errorMessage: "Error! Unable to get video, maybe bad link",
                              error: true
                            });

                            _context2.next = 26;
                            break;

                          case 9:
                            _context2.prev = 9;
                            _context2.next = 12;
                            return result.Object.Share.IFrameCode.toString();

                          case 12:
                            TempIframeCode = _context2.sent;

                            _this.setState({
                              finalIframeCode: TempIframeCode
                            });

                            _this.setState({
                              renderIframeR: true
                            }); // Getting responsive iframe URL


                            _context2.next = 17;
                            return _this.GetResponsiveCode(TempIframeCode.split('"')[1], TempIframeCode.split("w=")[1].split("&")[0], TempIframeCode.split("h=")[1].split('"')[0]);

                          case 17:
                            _context2.next = 19;
                            return _this.GetStaticCode(TempIframeCode.split('"')[1]);

                          case 19:
                            _this.props.setAttributes({
                              displayIframe: true
                            });

                            _context2.next = 26;
                            break;

                          case 22:
                            _context2.prev = 22;
                            _context2.t1 = _context2["catch"](9);
                            console.log("Error! ", _context2.t1.message);

                            _this.setState({
                              errorMessage: "Error! Unable to get video, maybe bad link",
                              error: true
                            });

                          case 26:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2, null, [[9, 22]]);
                  }));

                  return function (_x6) {
                    return _ref3.apply(this, arguments);
                  };
                }();

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x4, _x5) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "GetChannelPlayerInfo", /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(CID, R) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                console.log(CID, "GetChannelPlayerInfo", R);

                window // window === the whole dom, used to get webService script.
                .WebService("https://ezwp.tv/VideoServices").GetChannelGet(CID, _this.state.responceType // setting what kind of response the users wants from EZWebPlayer web script.
                ).onResult = /*#__PURE__*/function () {
                  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(result) {
                    var TempIframeCode;
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            _context4.next = 2;
                            return result.Object;

                          case 2:
                            _context4.t1 = _context4.sent;
                            _context4.t0 = _context4.t1 === null;

                            if (_context4.t0) {
                              _context4.next = 6;
                              break;
                            }

                            _context4.t0 = undefined;

                          case 6:
                            if (!_context4.t0) {
                              _context4.next = 11;
                              break;
                            }

                            console.log("Error! Not able to get Video.");

                            _this.setState({
                              errorMessage: "Error! Unable to get video, maybe bad link",
                              error: true
                            });

                            _context4.next = 27;
                            break;

                          case 11:
                            _context4.prev = 11;
                            _context4.next = 14;
                            return result.Object.Share.IFrameCode.toString();

                          case 14:
                            TempIframeCode = _context4.sent;

                            _this.setState({
                              finalIframeCode: TempIframeCode
                            }); // Getting responsive iframe URL


                            _context4.next = 18;
                            return _this.GetResponsiveCode(TempIframeCode.split('"')[1], TempIframeCode.split("w=")[1].split("&")[0], TempIframeCode.split("h=")[1].split('"')[0]);

                          case 18:
                            _context4.next = 20;
                            return _this.GetStaticCode(TempIframeCode.split('"')[1]);

                          case 20:
                            _this.props.setAttributes({
                              displayIframe: true
                            });

                            _context4.next = 27;
                            break;

                          case 23:
                            _context4.prev = 23;
                            _context4.t2 = _context4["catch"](11);
                            console.log("Error! ", _context4.t2);

                            _this.setState({
                              errorMessage: "Error! Unable to get video, maybe bad link",
                              error: true
                            });

                          case 27:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4, null, [[11, 23]]);
                  }));

                  return function (_x9) {
                    return _ref5.apply(this, arguments);
                  };
                }();

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function (_x7, _x8) {
        return _ref4.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "initEmbed", function (e) {
      if (e) {
        e.preventDefault();
      }

      _this.SplitingLink();
    });

    _defineProperty(_assertThisInitialized(_this), "SplitingLink", function () {
      // SplitingLink takes the users input and determs weather it is a channal or video
      _this.props.setAttributes({
        responsiveType: true
      }); // needs to be changed to a ref


      if (document.querySelector(".input-text")) {
        _this.props.setAttributes({
          videoURL: _this.state.videoURL = document.querySelector(".input-text").value
        });
      }

      console.log(_this.state.videoURL, "Getting Iframe"); //Text Area Length

      var TAL = _this.state.videoURL.split(".");

      if (TAL.length == 2) {
        //https://domain.com/playerinfo
        if (TAL[1].split("/C/").length >= 2) {
          //Channel Player
          _this.GetChannelPlayerInfo(TAL[1].split("/C/")[1], _this.props.attributes.responsiveType);
        } else if (TAL[1].split("/V").length >= 2) {
          //Video Player
          _this.GetVideoPlayerInfo(TAL[1].split("/V")[1], _this.props.attributes.responsiveType);
        }
      } else if (TAL.length == 3) {
        //https://cname.domain.com/playerinfo
        if (TAL[2].split("/C/").length >= 2) {
          //Channel Player
          _this.GetChannelPlayerInfo(TAL[2].split("/C/")[1], _this.props.attributes.responsiveType);
        } else if (TAL[2].split("/V").length >= 2) {
          //Video Player
          _this.GetVideoPlayerInfo(TAL[2].split("/V")[1], _this.props.attributes.responsiveType);
        } else {
          console.log("can not use this link");
        }
      } else {
        _this.setState({
          error: true,
          errorMessage: "Please enter link from EZWebPlayer"
        });
      }
    });

    _this.state = {
      videoURL: _this.props.attributes.videoURL,
      // this may be used to hold link for btns
      responceType: "4",
      // tells webservice what responsive we want
      renderIframeR: _this.props.attributes.displayIframe,
      // responsive == true, static == false
      responsiveType: _this.props.attributes.responsiveType,
      // weather statice or responsive video
      inputedLink: _this.props.attributes.inputedLink,
      errorMessage: null,
      // If errorMessage is not === to null then display error message to user
      error: false
    };
    return _this;
  } //======================================================


  _createClass(App, [{
    key: "render",
    //======================================================
    value: function render() {
      var _this2 = this;

      if ( // responsive iframe render
      this.props.attributes.displayIframe === true && this.props.attributes.responsiveType === true) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, console.log(this.props.attributes.block_alignment), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
          dangerouslySetInnerHTML: {
            __html: ".Video iframe,.Video object,.Video embed,.Video video,.Video img {position:absolute; width:100%; height:100%; left:0; top:0;}"
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "Video video responsive-iframe wp-block-embed align".concat(this.props.attributes.block_alignment),
          style: {
            position: "relative",
            width: "100%",
            height: "0",
            paddingBottom: "".concat(this.props.attributes.videoNP, "%")
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
          className: "iframe",
          src: this.state.IFrameSrc || this.props.attributes.responsiveIFrameSrc,
          scrolling: "no",
          style: {
            borderWidth: "0"
          },
          allowFullScreen: ""
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BlockControls, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Toolbar, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconButton // this is the edit iframe button
        , {
          align: "true",
          label: "Edit URL",
          icon: "edit",
          className: "EZWebplayer-edit-btn",
          onClick: function onClick() {
            return _this2.props.setAttributes({
              displayIframe: false
            });
          }
        })),
        /*#__PURE__*/
        // Adds icon in toopbar to align left, center, right
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BlockAlignmentToolbar, {
          value: this.props.attributes.block_alignment,
          onChange: function onChange(new_val) {
            _this2.props.setAttributes({
              block_alignment: new_val
            });
          }
        })));
      } else {
        return (
          /*#__PURE__*/
          // Input Form
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, console.log(this.props.attributes.block_alignment), console.log("displaying input html", this.props.attributes, this.state), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Placeholder, {
            className: "wp-block-embed"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "components-placeholder__label "
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            style: {
              color: "rgb(255, 0, 0)"
            },
            className: "editor-block-icon block-editor-block-icon has-colors"
          }, _images_Logo_js__WEBPACK_IMPORTED_MODULE_1__["default"].EZWebPlayerIcon), __("EZWebPlayer Quick View URL")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "components-placeholder__instructions"
          }, __("   Paste your video or channel's Quick View URL"), __("to display your player on your site.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "components-placeholder__fieldset"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
            type: "url",
            id: "ezWebPlayer-link-input",
            className: "input-text",
            placeholder: __("Enter URL to embed here…"),
            value: this.props.attributes.inputedLink,
            onChange: function onChange(e) {
              _this2.props.setAttributes({
                inputedLink: e.target.value
              });
            },
            style: {
              marginTop: "0",
              marginRight: "8px",
              flex: "1 1 auto",
              flexGrow: "1",
              flexShrink: "1",
              flexBasis: "auto"
            }
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
            isSecondary: true,
            class: "components-button",
            type: "submit",
            onClick: this.initEmbed
          }, __("Embed", "Embed"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            display: "block"
          }, this.state.error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            display: "block",
            "word-wrap": "break-word",
            className: "alert",
            style: {
              padding: "5px",
              color: "red",
              display: "block"
            }
          }, "".concat(this.state.errorMessage)) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "components-placeholder__learn-more",
            style: {
              display: "block"
            },
            display: "block"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ExternalLink, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            href: "https://wordpress.org/support/article/embeds/",
            target: "_blank",
            rel: "external noreferrer noopener"
          }, "Learn more about embeds", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            class: "screen-reader-text"
          }, "(opens in a new tab)"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BlockControls, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BlockAlignmentToolbar, {
            value: this.props.attributes.block_alignment,
            onChange: function onChange(new_val) {
              _this2.props.setAttributes({
                block_alignment: new_val
              });
            }
          })))
        );
      }
    } // ==================================================

  }, {
    key: "componentDidMount",
    //======================================================
    value: function componentDidMount() {
      // loading both webservice script and Jquery
      // jquery is used inside of webservice script and must be loaded
      var EZWebScript = document.createElement("script");
      EZWebScript.type = "text/javascript";
      EZWebScript.src = "https://ezwp.tv/Scripts/webService.js";
      EZWebScript.async = false;
      document.head.appendChild(EZWebScript);
      console.log(EZWebScript);
      var de = document.createElement("script");
      de.type = "text/javascript";
      de.src = "https://code.jquery.com/jquery-3.5.1.min.js";
      de.async = false;
      document.head.appendChild(de);
      console.log(de);

      EZWebScript.onload = function () {
        return console.log("script loaded");
      };

      de.onload = function () {
        return console.log("JQuer is loaded");
      };
    } // ==================================================

  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/EZWebPlayer/ezwebplayer.js":
/*!****************************************!*\
  !*** ./src/EZWebPlayer/ezwebplayer.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.js */ "./src/EZWebPlayer/edit.js");
/* harmony import */ var _images_Logo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/Logo.js */ "./src/EZWebPlayer/images/Logo.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
// importing dependecys





/**
 * Register: a Gutenberg Block.
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])("ezwebplayer/ezweb-player-embeded", {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: "EZWebPlayer",
  description: /*#__PURE__*/React.createElement("p", null, "Sign up for your free trial account today:", /*#__PURE__*/React.createElement("a", {
    href: "https://my.ezwebplayer.com/Register",
    target: "_blank"
  }, "Here")),
  icon: _images_Logo_js__WEBPACK_IMPORTED_MODULE_1__["default"].EZWebPlayerIcon,
  category: "embed",
  // https://developer.wordpress.org/block-editor/developers/filters/block-filters/#managing-block-categories
  keywords: [( // Key words are search words, when someone types video, ezwebpalyer will be a response.
  "Video", "Streaming", "EZWebPlayer", "EZweb", "EZ Web Player", "embed", "video embed", "easy web player", "easy player")],
  attributes: {
    responsiveIFrameSrc: {
      type: "string",
      selector: "iframe",
      attribute: "src"
    },
    staticIframeSrc: {
      type: "string",
      selector: "iframe",
      attribute: "src"
    },
    displayIframe: {
      type: "boolean"
    },
    responsiveType: {
      type: "boolean"
    },
    videoURL: {
      type: "string"
    },
    videoNP: {
      type: "integer",
      selector: "div",
      attribute: "paddingBottom"
    },
    IFrameW: {
      type: "string",
      selector: "iframeR",
      attribute: "width"
    },
    IFrameH: {
      type: "string",
      selector: "iframe",
      attribute: "height"
    },
    inputedLink: {
      type: "string",
      slector: "input",
      attribute: "value",
      default: null
    },
    block_alignment: {
      type: "string",
      default: "wide"
    }
  },
  getEditWrapperProps: function getEditWrapperProps(_ref) {
    var block_alignment = _ref.block_alignment;

    // this gets the attribut element and looks to see if it is not set to default
    if ("left" === block_alignment || "right" === block_alignment || "full" === block_alignment) {
      return {
        "data-align": block_alignment
      };
    }
  },
  // @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
  edit: _edit_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  //imported in from edit.js built in react + ES6
  save: function save(props) {
    if (props.attributes.responsiveType) {
      return /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, /*#__PURE__*/React.createElement("div", {
        className: "wp-block-embed align".concat(props.attributes.block_alignment)
      }, /*#__PURE__*/React.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: ".Video iframe,.Video object,.Video embed,.Video video,.Video img {position:absolute; width:100%; height:100%; left:0; top:0;}"
        }
      }), /*#__PURE__*/React.createElement("div", {
        className: "Video",
        style: {
          position: "relative",
          width: "100%",
          height: "0",
          paddingBottom: "".concat(props.attributes.videoNP, "%")
        }
      }, console.log(props.attributes.block_alignment), /*#__PURE__*/React.createElement("iframe", {
        className: "iframeR ",
        src: props.attributes.responsiveIFrameSrc,
        scrolling: "no",
        style: {
          borderWidth: "0"
        },
        allowFullScreen: ""
      }))));
    } else {
      return /*#__PURE__*/React.createElement("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("somthing went wrong sorry"));
    }
  }
});

/***/ }),

/***/ "./src/EZWebPlayer/images/Logo.js":
/*!****************************************!*\
  !*** ./src/EZWebPlayer/images/Logo.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _React$createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * WordPress dependencies
 */
// image can be found here: https://www.ezwebplayer.com/wp-content/uploads/2020/01/favicon-150x150.png
var _wp$components = wp.components,
    G = _wp$components.G,
    Path = _wp$components.Path,
    Polygon = _wp$components.Polygon,
    SVG = _wp$components.SVG;
var blockIcons = {
  EZWebPlayerIcon: /*#__PURE__*/React.createElement(SVG, (_React$createElement = {
    xmlns: "https://www.w3.org/2000/svg",
    xmlnsXlink: "https://www.w3.org/1999/xlink",
    width: "500",
    height: "500",
    x: "0",
    y: "0",
    version: "1.1",
    viewBox: "0 0 500 500"
  }, _defineProperty(_React$createElement, "width", "24"), _defineProperty(_React$createElement, "height", "24"), _defineProperty(_React$createElement, "xmlSpace", "preserve"), _React$createElement), /*#__PURE__*/React.createElement("image", {
    width: "500",
    height: "500",
    x: "0",
    y: "0",
    xlinkHref: "data:image/png;base64,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 bGUMbdUynC4EBhR6VxnxHds2JznFsLzby5AAbRH6PsAbpT3UJC1ktKnO/et3G2qvtylZNw/zJZH5 NGLVSnjD4bOcc/Ju/Ovxu3HiIe2c4k4kb0+ulhGq9oZRg+3JBUOoWq9XUkXNYpG6OXJYOj89LuzV /dD5InvojK8vavVrjwy2Nc93oNLfQMGR0dEWof8uUHn697Soc+kB13oYqlEmbN08s1VMZL7k8LRH Zwuq/V1HzbLv6kz0kBrf311L8BZyN9oLIHadTRe1rqxfszFEUrf1RS8aNG13EXo3lXH+PWrlhqXS V1JwZHS0QegPBn5b2jNN0kJG1+pcZtQhJBQl1B62bu525Wx+W13C9GHVSnj94bOc/erd+OzLd+PE gzWvdS0Rb4yn0knJ3XYhMSF2XTjepLJD1brKxkLagEndKRJoqFNFLvLfO/QumGdjo0eV/tsUXBkV bRD6rwLdPf27C3UuqOvslu9Vs094zbFOIvOli0MflvG/nreCs1+9klOet4I1D3f4kVVkj1xxuZC7 1o6S2A23u2GZtG1qvXRxYKtfFO2D1PX+6I3I6vjcymaNGJiybUrblDZwlV7DXhRcGRWxCT0D3qlK rP6hyFNkDFGdSzbCSQ4w+bEVYd3cUKceVnNyMGFqsWolnHDwDJ85cVG17+nzitw6yWM/dIzkrv7a tCEl9shqXVW/6Xt3pD7pd8MfTT98iNT4vHe7Oa3vEt+kT5ALQVcqXZH3ztg9in0f+ktocUt+Az2o 83oBrytN8Qked93c3B9h6C5hyWGi2ud2wGW3jzht3Twb7mleuIpuYKwfi7m5Xvn4yhUJjfx6/Uz1 JDrFfezZoj3dvevGe6nHCdr7qWsVMvIK9RnvNzf4ZnwSW8Uf/bMi9HX0/httCJ8ih2k8NW2pfgeL WcNvILvvX9RAOziCgjMvimUwtkL/nXqCV/h2itS5jx9eIe5MaKP83WKvfgWayHx5Y6LaP33ibnzm 5bvxhsNnK2vtmeJjRU29W4p6qfYFld2Au1oPUuq1CrGUunzJLMImOUO/TfZENuxd05SZLpVuMqSo 8tsOVqyISej7Aye6VAj6XTpX53E2wsnvN5WH2qNNAsb+JywnHPqwjHc+c5aL37CS//W8FTxtb/VU 4UTwQnKXELuynksYHv15nynaU50/kgvz+r3qPqQuudBwvjjX+RE79C5eNjD3V0molnHUlot1pRGn 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 AAAASUVORK5CYII="
  }))
};
/* harmony default export */ __webpack_exports__["default"] = (blockIcons);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EZWebPlayer_ezwebplayer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EZWebPlayer/ezwebplayer.js */ "./src/EZWebPlayer/ezwebplayer.js");


/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map