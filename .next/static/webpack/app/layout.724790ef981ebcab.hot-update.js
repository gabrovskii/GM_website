"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"31b717f99c23\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzP2E5MjQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIzMWI3MTdmOTljMjNcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/SideMenu.jsx":
/*!*********************************!*\
  !*** ./components/SideMenu.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_useMenuStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/useMenuStore */ \"(app-pages-browser)/./store/useMenuStore.jsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/constants */ \"(app-pages-browser)/./constants/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst SideMenu = ()=>{\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    const [activeLink, setActiveLink] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_constants__WEBPACK_IMPORTED_MODULE_4__.sidebarMenuLinks[0]);\n    const { isOpen, closeMobileMenu } = (0,_store_useMenuStore__WEBPACK_IMPORTED_MODULE_3__.useMenuStore)();\n    const handleLinkClick = (link)=>{\n        closeMobileMenu();\n        setActiveLink(link);\n    };\n    const handleScroll = ()=>{\n        const sections = _constants__WEBPACK_IMPORTED_MODULE_4__.sidebarMenuLinks.map((link)=>document.getElementById(link.sectionId));\n        const scrollPosition = window.scrollY;\n        for(let i = sections.length - 1; i >= 0; i--){\n            const section = sections[i];\n            if (section) {\n                if (section.offsetTop <= scrollPosition + 100) {\n                    setActiveLink(_constants__WEBPACK_IMPORTED_MODULE_4__.sidebarMenuLinks[i]);\n                    break;\n                }\n            }\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const cleanedPathname = pathname.replace(/^#/, \"\");\n        const matchedLink = _constants__WEBPACK_IMPORTED_MODULE_4__.sidebarMenuLinks.find((link)=>cleanedPathname === link.route || link.route === \"/\" && cleanedPathname === \"\");\n        if (matchedLink) {\n            setActiveLink(matchedLink);\n        }\n    }, [\n        pathname\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isOpen) {\n            document.body.style.overflowY = \"hidden\";\n        } else {\n            document.body.style.overflowY = \"auto\";\n        }\n    }, [\n        isOpen\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"side-menu border-r \".concat(isOpen ? \"max-lg:block\" : \"max-md:hidden\"),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full flex-1 flex-col gap-30 justify-between items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center items-center flex-col gap-2\"\n                    }, void 0, false, {\n                        fileName: \"/home/gabriel/repos/portifolio_v1/components/SideMenu.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: _constants__WEBPACK_IMPORTED_MODULE_4__.sidebarMenuLinks.map((link)=>{\n                            const isActive = activeLink === link;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"\".concat(link.route),\n                                className: \"relative flex justify-center items-center rounded-lg p-3 \".concat(isActive ? \"bg-dark-red text-white\" : \"\"),\n                                onClick: ()=>handleLinkClick(link),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: link.label\n                                }, void 0, false, {\n                                    fileName: \"/home/gabriel/repos/portifolio_v1/components/SideMenu.jsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, link.label, false, {\n                                fileName: \"/home/gabriel/repos/portifolio_v1/components/SideMenu.jsx\",\n                                lineNumber: 72,\n                                columnNumber: 17\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/gabriel/repos/portifolio_v1/components/SideMenu.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center flex-col justify-center text-center\"\n                    }, void 0, false, {\n                        fileName: \"/home/gabriel/repos/portifolio_v1/components/SideMenu.jsx\",\n                        lineNumber: 85,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/gabriel/repos/portifolio_v1/components/SideMenu.jsx\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/gabriel/repos/portifolio_v1/components/SideMenu.jsx\",\n            lineNumber: 63,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(SideMenu, \"VVvoFJsxFXd2A9c5rdTh6+2PjLs=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname,\n        _store_useMenuStore__WEBPACK_IMPORTED_MODULE_3__.useMenuStore\n    ];\n});\n_c = SideMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideMenu);\nvar _c;\n$RefreshReg$(_c, \"SideMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU2lkZU1lbnUuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFNEM7QUFDRTtBQUNNO0FBQ0w7QUFFL0MsTUFBTUssV0FBVzs7SUFDZixNQUFNQyxXQUFXSiw0REFBV0E7SUFDNUIsTUFBTSxDQUFDSyxZQUFZQyxjQUFjLEdBQUdSLCtDQUFRQSxDQUFDSSx3REFBZ0IsQ0FBQyxFQUFFO0lBQ2hFLE1BQU0sRUFBRUssTUFBTSxFQUFFQyxlQUFlLEVBQUUsR0FBR1AsaUVBQVlBO0lBRWhELE1BQU1RLGtCQUFrQixDQUFDQztRQUN2QkY7UUFDQUYsY0FBY0k7SUFDaEI7SUFFQSxNQUFNQyxlQUFlO1FBQ25CLE1BQU1DLFdBQVdWLHdEQUFnQkEsQ0FBQ1csR0FBRyxDQUFDLENBQUNILE9BQVNJLFNBQVNDLGNBQWMsQ0FBQ0wsS0FBS00sU0FBUztRQUV0RixNQUFNQyxpQkFBaUJDLE9BQU9DLE9BQU87UUFFckMsSUFBSyxJQUFJQyxJQUFJUixTQUFTUyxNQUFNLEdBQUcsR0FBR0QsS0FBSyxHQUFHQSxJQUFLO1lBQzdDLE1BQU1FLFVBQVVWLFFBQVEsQ0FBQ1EsRUFBRTtZQUMzQixJQUFJRSxTQUFTO2dCQUNYLElBQUlBLFFBQVFDLFNBQVMsSUFBSU4saUJBQWlCLEtBQUs7b0JBQzdDWCxjQUFjSix3REFBZ0IsQ0FBQ2tCLEVBQUU7b0JBQ2pDO2dCQUNGO1lBQ0Y7UUFDRjtJQUNGO0lBRUFyQixnREFBU0EsQ0FBQztRQUNSbUIsT0FBT00sZ0JBQWdCLENBQUMsVUFBVWI7UUFFbEMsT0FBTztZQUNMTyxPQUFPTyxtQkFBbUIsQ0FBQyxVQUFVZDtRQUN2QztJQUNGLEdBQUcsRUFBRTtJQUVMWixnREFBU0EsQ0FBQztRQUNSLE1BQU0yQixrQkFBa0J0QixTQUFTdUIsT0FBTyxDQUFDLE1BQU07UUFFL0MsTUFBTUMsY0FBYzFCLHdEQUFnQkEsQ0FBQzJCLElBQUksQ0FDdkMsQ0FBQ25CLE9BQVNnQixvQkFBb0JoQixLQUFLb0IsS0FBSyxJQUFLcEIsS0FBS29CLEtBQUssS0FBSyxPQUFPSixvQkFBb0I7UUFFekYsSUFBSUUsYUFBYTtZQUNmdEIsY0FBY3NCO1FBQ2hCO0lBQ0YsR0FBRztRQUFDeEI7S0FBUztJQUViTCxnREFBU0EsQ0FBQztRQUNSLElBQUlRLFFBQVE7WUFDVk8sU0FBU2lCLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxTQUFTLEdBQUc7UUFDbEMsT0FBTztZQUNMbkIsU0FBU2lCLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxTQUFTLEdBQUc7UUFDbEM7SUFDRixHQUFHO1FBQUMxQjtLQUFPO0lBRVgscUJBQ0U7a0JBQ0UsNEVBQUNlO1lBQVFZLFdBQVcsc0JBQWdFLE9BQTFDM0IsU0FBUyxpQkFBaUI7c0JBQ2xFLDRFQUFDNEI7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBSUQsV0FBVTs7Ozs7O2tDQUVmLDhEQUFDQztrQ0FDRWpDLHdEQUFnQkEsQ0FBQ1csR0FBRyxDQUFDLENBQUNIOzRCQUNyQixNQUFNMEIsV0FBVy9CLGVBQWVLOzRCQUVoQyxxQkFDRSw4REFBQzJCO2dDQUNDQyxNQUFNLEdBQWMsT0FBWDVCLEtBQUtvQixLQUFLO2dDQUVuQkksV0FBVyw0REFFVixPQURDRSxXQUFXLDJCQUEyQjtnQ0FFeENHLFNBQVMsSUFBTTlCLGdCQUFnQkM7MENBRS9CLDRFQUFDOEI7OENBQUc5QixLQUFLK0IsS0FBSzs7Ozs7OytCQU5UL0IsS0FBSytCLEtBQUs7Ozs7O3dCQVNyQjs7Ozs7O2tDQUVGLDhEQUFDTjt3QkFBSUQsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXpCO0dBbkZNL0I7O1FBQ2FILHdEQUFXQTtRQUVRQyw2REFBWUE7OztLQUg1Q0U7QUFxRk4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlTWVudS5qc3g/NGUwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyB1c2VNZW51U3RvcmUgfSBmcm9tIFwiQC9zdG9yZS91c2VNZW51U3RvcmVcIjtcbmltcG9ydCB7IHNpZGViYXJNZW51TGlua3MgfSBmcm9tIFwiQC9jb25zdGFudHNcIjtcblxuY29uc3QgU2lkZU1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKTtcbiAgY29uc3QgW2FjdGl2ZUxpbmssIHNldEFjdGl2ZUxpbmtdID0gdXNlU3RhdGUoc2lkZWJhck1lbnVMaW5rc1swXSk7XG4gIGNvbnN0IHsgaXNPcGVuLCBjbG9zZU1vYmlsZU1lbnUgfSA9IHVzZU1lbnVTdG9yZSgpO1xuXG4gIGNvbnN0IGhhbmRsZUxpbmtDbGljayA9IChsaW5rKSA9PiB7XG4gICAgY2xvc2VNb2JpbGVNZW51KCk7XG4gICAgc2V0QWN0aXZlTGluayhsaW5rKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2VjdGlvbnMgPSBzaWRlYmFyTWVudUxpbmtzLm1hcCgobGluaykgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGluay5zZWN0aW9uSWQpKTtcblxuICAgIGNvbnN0IHNjcm9sbFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFk7XG5cbiAgICBmb3IgKGxldCBpID0gc2VjdGlvbnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IHNlY3Rpb24gPSBzZWN0aW9uc1tpXTtcbiAgICAgIGlmIChzZWN0aW9uKSB7XG4gICAgICAgIGlmIChzZWN0aW9uLm9mZnNldFRvcCA8PSBzY3JvbGxQb3NpdGlvbiArIDEwMCkge1xuICAgICAgICAgIHNldEFjdGl2ZUxpbmsoc2lkZWJhck1lbnVMaW5rc1tpXSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2xlYW5lZFBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvXiMvLCBcIlwiKTtcblxuICAgIGNvbnN0IG1hdGNoZWRMaW5rID0gc2lkZWJhck1lbnVMaW5rcy5maW5kKFxuICAgICAgKGxpbmspID0+IGNsZWFuZWRQYXRobmFtZSA9PT0gbGluay5yb3V0ZSB8fCAobGluay5yb3V0ZSA9PT0gXCIvXCIgJiYgY2xlYW5lZFBhdGhuYW1lID09PSBcIlwiKVxuICAgICk7XG4gICAgaWYgKG1hdGNoZWRMaW5rKSB7XG4gICAgICBzZXRBY3RpdmVMaW5rKG1hdGNoZWRMaW5rKTtcbiAgICB9XG4gIH0sIFtwYXRobmFtZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzT3Blbikge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSBcImhpZGRlblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9IFwiYXV0b1wiO1xuICAgIH1cbiAgfSwgW2lzT3Blbl0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YHNpZGUtbWVudSBib3JkZXItciAke2lzT3BlbiA/IFwibWF4LWxnOmJsb2NrXCIgOiBcIm1heC1tZDpoaWRkZW5cIn1gfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBmbGV4LTEgZmxleC1jb2wgZ2FwLTMwIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZsZXgtY29sIGdhcC0yXCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtzaWRlYmFyTWVudUxpbmtzLm1hcCgobGluaykgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IGFjdGl2ZUxpbmsgPT09IGxpbms7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj17YCR7bGluay5yb3V0ZX1gfVxuICAgICAgICAgICAgICAgICAga2V5PXtsaW5rLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmVsYXRpdmUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcm91bmRlZC1sZyBwLTMgJHtcbiAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmUgPyBcImJnLWRhcmstcmVkIHRleHQtd2hpdGVcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlTGlua0NsaWNrKGxpbmspfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwPntsaW5rLmxhYmVsfTwvcD5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGZsZXgtY29sIGp1c3RpZnktY2VudGVyIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZU1lbnU7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VQYXRobmFtZSIsInVzZU1lbnVTdG9yZSIsInNpZGViYXJNZW51TGlua3MiLCJTaWRlTWVudSIsInBhdGhuYW1lIiwiYWN0aXZlTGluayIsInNldEFjdGl2ZUxpbmsiLCJpc09wZW4iLCJjbG9zZU1vYmlsZU1lbnUiLCJoYW5kbGVMaW5rQ2xpY2siLCJsaW5rIiwiaGFuZGxlU2Nyb2xsIiwic2VjdGlvbnMiLCJtYXAiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2VjdGlvbklkIiwic2Nyb2xsUG9zaXRpb24iLCJ3aW5kb3ciLCJzY3JvbGxZIiwiaSIsImxlbmd0aCIsInNlY3Rpb24iLCJvZmZzZXRUb3AiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsZWFuZWRQYXRobmFtZSIsInJlcGxhY2UiLCJtYXRjaGVkTGluayIsImZpbmQiLCJyb3V0ZSIsImJvZHkiLCJzdHlsZSIsIm92ZXJmbG93WSIsImNsYXNzTmFtZSIsImRpdiIsImlzQWN0aXZlIiwiYSIsImhyZWYiLCJvbkNsaWNrIiwicCIsImxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/SideMenu.jsx\n"));

/***/ })

});