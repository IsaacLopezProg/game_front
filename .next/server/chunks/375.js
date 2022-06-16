"use strict";
exports.id = 375;
exports.ids = [375];
exports.modules = {

/***/ 8375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ListGames)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./hooks/useWindowSize.js

function useWindowSize() {
    const { 0: windowSize , 1: setWindowSize  } = (0,external_react_.useState)({
        width: undefined,
        height: undefined
    });
    (0,external_react_.useEffect)(()=>{
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return ()=>window.removeEventListener("resize", handleResize)
        ;
    }, []);
    return windowSize;
};

;// CONCATENATED MODULE: ./utils/breakpoint.js
const breakpointUpSm = 576;
const breakpointUpMd = 768;
const breakpointUpLg = 992;
const breakpointUpXL = 1200;

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(1831);
;// CONCATENATED MODULE: ./components/ListGames/ListGames.js

// INTERNAL




// EXTERNAL


function ListGames(props) {
    // TRAYENDO LOS DATOS DEL INDEX PRINCIPAL
    const { game  } = props;
    const { width  } = useWindowSize();
    const getColumnsRender = ()=>{
        switch(true){
            case width > breakpointUpLg:
                return 4;
            case width > breakpointUpMd:
                return 3;
            case width > breakpointUpSm:
                return 2;
            default:
                return 1;
        }
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Grid, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Row, {
                columns: getColumnsRender(),
                className: "mr-4",
                children: (0,external_lodash_.map)(game, (g)=>/*#__PURE__*/ jsx_runtime_.jsx(Juego, {
                        g: g
                    })
                )
            })
        })
    }));
};
function Juego(props) {
    const { g  } = props;
    return(// <Grid.Column mobile={16} tablet={8} computer={4} className="pt-8"> una forma de hacero responsivo
    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Column, {
        className: "pt-8",
        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
            href: `/${g.url}`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                className: "hover:bg-black",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "static",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Image, {
                                src: g.poster.url,
                                alt: g.title,
                                size: "medium"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    g.discount ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "bg-green-500 text-white px-2 font-bold text-lg absolute top-12 right-3",
                                        children: [
                                            "-",
                                            g.discount,
                                            "%"
                                        ]
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "absolute top-20 right-3 text-xl text-white bg-stone-500 bg-opacity-80 px-2",
                                        children: [
                                            "$",
                                            g.price
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "md:text-xl text-sm text-stone-600 mt-0 text-center font-bold",
                        children: g.title
                    })
                ]
            })
        })
    }));
}


/***/ })

};
;