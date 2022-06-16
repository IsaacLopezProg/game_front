"use strict";
exports.id = 962;
exports.ids = [962];
exports.modules = {

/***/ 6019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "qL": () => (/* binding */ registerApi),
/* harmony export */   "Ig": () => (/* binding */ LoginApi),
/* harmony export */   "uL": () => (/* binding */ resetPasswordApi),
/* harmony export */   "F9": () => (/* binding */ getMeApi),
/* harmony export */   "zW": () => (/* binding */ updateNameApi),
/* harmony export */   "js": () => (/* binding */ updateEmailApi),
/* harmony export */   "ZH": () => (/* binding */ updatePasswordApi)
/* harmony export */ });
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5587);

// RECUPERANDO EL LINK DEL ENV
const base = "http://localhost:1337";
// FUNCION DE REGISTRO DE USUARIO
async function registerApi(formData) {
    try {
        // FORMANDO LA URL
        const url = `${base}/auth/local/register`;
        // CREANDO EL HEAD DE PETICION
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            // ENVIANDO EL CUERPO DE LA PETICION DE LOS DATOS
            body: JSON.stringify(formData)
        };
        // ENVIANDO EL FECTH
        const response = await fetch(url, params);
        // RECIBIENDO LOS RESULTADOS DE LA PETICION
        const result = await response.json();
        // DEVOLVIENDO LOS RESULTADOS DE LA PETICION
        return result;
    // MANEJO DE ERRORES
    } catch (error) {
        // MOSTRANDO EL ERROR DE LA PETICION
        console.log(error);
        // DEVOLVIENDO EL ERROR
        return null;
    }
}
// FUNCION DE LOGIN DE USUARIO
async function LoginApi(formData) {
    try {
        // FORMANDO LA URL
        const url = `${base}/auth/local`;
        // CREANDO EL HEAD DE PETICION
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            // ENVIANDO EL CUERPO DE LA PETICION DE LOS DATOS
            body: JSON.stringify(formData)
        };
        // ENVIANDO EL FECTH
        const response = await fetch(url, params);
        // RECIBIENDO LOS RESULTADOS DE LA PETICION
        const result = await response.json();
        // DEVOLVIENDO LOS RESULTADOS DE LA PETICION
        return result;
    // MANEJO DE ERRORES
    } catch (error) {
        // MOSTRANDO EL ERROR DE LA PETICION
        console.log(error);
        // DEVOLVIENDO EL ERROR
        return null;
    }
}
// FUNCION DE RECUPERACION DE CONTRASENA DE USUARIO
async function resetPasswordApi(email) {
    try {
        // FORMANDO LA URL
        const url = `${base}/auth/forgot-password`;
        // CREANDO EL HEAD DE PETICION
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            // ENVIANDO EL CUERPO DE LA PETICION DE LOS DATOS
            body: JSON.stringify({
                email
            })
        };
        // ENVIANDO EL FECTH
        const response = await fetch(url, params);
        // RECIBIENDO LOS RESULTADOS DE LA PETICION
        const result = await response.json();
        // console.log(result);
        // DEVOLVIENDO LOS RESULTADOS DE LA PETICION
        return result;
    // MANEJO DE ERRORES
    } catch (error) {
        // MOSTRANDO EL ERROR DE LA PETICION
        console.log(error);
        // DEVOLVIENDO EL ERROR
        return null;
    }
}
// RECIBIENDO LOS DATOS DEL USUARIO
// ES UN ENDPOINT AUTORIZADO ASI QUE HAY QUE USAR AUTH_FETCH Y PASAR EL LOGOUT
async function getMeApi(logout) {
    try {
        // CUONSTRUIMOS LA URLA
        const url = `${base}/users/me`;
        // ENVIAMOS EL FETCH O LA PETICION
        const result = await (0,_utils_fetch__WEBPACK_IMPORTED_MODULE_0__/* .authFetch */ .S)(url, null, logout);
        // ENVIAMOS LOS DATOS RECIBIDOS
        return result ? result : null;
    // MANEJO DE ERRORES
    } catch (error) {
        // NO DEVOLVEMOS NADA
        return null;
    }
}
// ACTUALIZANDO EL NOMBRE Y APELLIDO
// ES UN ENDPOINT AUTORIZADO ASI QUE HAY QUE USAR AUTH_FETCH Y PASAR EL LOGOUT
async function updateNameApi(idUser, data, logout) {
    try {
        // CUONSTRUIMOS LA URLA
        const url = `${base}/users/${idUser}`;
        // CREANDO EL HEAD DE PETICION
        const params = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            // ENVIANDO EL CUERPO DE LA PETICION DE LOS DATOS
            body: JSON.stringify(data)
        };
        // ENVIAMOS EL FETCH O LA PETICION
        const result = await (0,_utils_fetch__WEBPACK_IMPORTED_MODULE_0__/* .authFetch */ .S)(url, params, logout);
        // ENVIAMOS LOS DATOS RECIBIDOS
        return result ? result : null;
    // MANEJO DE ERRORES
    } catch (error) {
        // MOSTRAMOS EL ERROR POR CONSOLA
        console.log(error);
        // NO DEVOLVEMOS NADA
        return null;
    }
}
// ACTUALIZANDO EL EMAIL
// ES UN ENDPOINT AUTORIZADO ASI QUE HAY QUE USAR AUTH_FETCH Y PASAR EL LOGOUT
async function updateEmailApi(idUser, email, logout) {
    try {
        // CUONSTRUIMOS LA URLA
        const url = `${base}/users/${idUser}`;
        // CREANDO EL HEAD DE PETICION
        const params = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            // ENVIANDO EL CUERPO DE LA PETICION DE LOS DATOS
            body: JSON.stringify({
                email
            })
        };
        // ENVIAMOS EL FETCH O LA PETICION
        const result = await (0,_utils_fetch__WEBPACK_IMPORTED_MODULE_0__/* .authFetch */ .S)(url, params, logout);
        // ENVIAMOS LOS DATOS RECIBIDOS
        return result ? result : null;
    // MANEJO DE ERRORES
    } catch (error) {
        // MOSTRAMOS EL ERROR POR CONSOLA
        console.log(error);
        // NO DEVOLVEMOS NADA
        return null;
    }
}
// ACTUALIZANDO EL EMAIL
// ES UN ENDPOINT AUTORIZADO ASI QUE HAY QUE USAR AUTH_FETCH Y PASAR EL LOGOUT
async function updatePasswordApi(idUser, password, logout) {
    try {
        // CUONSTRUIMOS LA URLA
        const url = `${base}/users/${idUser}`;
        // CREANDO EL HEAD DE PETICION
        const params = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            // ENVIANDO EL CUERPO DE LA PETICION DE LOS DATOS
            body: JSON.stringify({
                password
            })
        };
        // ENVIAMOS EL FETCH O LA PETICION
        const result = await (0,_utils_fetch__WEBPACK_IMPORTED_MODULE_0__/* .authFetch */ .S)(url, params, logout);
        // ENVIAMOS LOS DATOS RECIBIDOS
        return result ? result : null;
    // MANEJO DE ERRORES
    } catch (error) {
        // MOSTRAMOS EL ERROR POR CONSOLA
        console.log(error);
        // NO DEVOLVEMOS NADA
        return null;
    }
}


/***/ }),

/***/ 8268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BasicModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1831);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);


function BasicModal(props) {
    const { show , setShow , title , children , ...rest } = props;
    const onClose = ()=>setShow(false)
    ;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Modal, {
        className: "bg-stone-600",
        open: show,
        onClose: onClose,
        ...rest,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Modal.Header, {
                className: "text-white",
                style: {
                    fontSize: '30px',
                    backgroundColor: '#ff5200',
                    color: '#fff'
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-wrap justify-between",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "mr-24",
                            children: title
                        }),
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                            name: "close",
                            onClick: onClose,
                            className: "cursor-pointer"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Modal.Content, {
                children: children
            })
        ]
    }));
};


/***/ }),

/***/ 5985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9531);

// LIGANDO EL CREATE_CONTEXT CON EL USE_CONTEXT

// EXPORTANDOLO DE MANERA GLOBAL
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z));


/***/ }),

/***/ 7559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_CartContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5926);

// LIGANDO EL CREATE_CONTEXT CON EL USE_CONTEXT

// EXPORTANDOLO DE MANERA GLOBAL
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_CartContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z));


/***/ }),

/***/ 9962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ BasicLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(1831);
// EXTERNAL MODULE: ./components/Modals/BasicModal.js
var BasicModal = __webpack_require__(8268);
// EXTERNAL MODULE: ./api/user.js
var api_user = __webpack_require__(6019);
// EXTERNAL MODULE: ./hooks/useAuth.js
var useAuth = __webpack_require__(5985);
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(2296);
// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(5609);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
;// CONCATENATED MODULE: ./components/Auth/LoginForm.js

// INTERNAL




// EXTERNAL




function LoginForm({ showRegisterForm , setShowModal  }) {
    // PARA LA ANIMACION DE CARGA DE SEMANTIC EN EL BOTON DE ENTRAR
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(false);
    // DESTRUCTURACION DE LOS DATOS QUE VIENEN DEL AUTH_CONTEXT
    const { auth , login  } = (0,useAuth/* default */.Z)();
    // MANEJO Y VALIDACION DEL FORMULARIO CON FORMIK Y YUP
    const formik = (0,external_formik_.useFormik)({
        // VALORES INCIALES FORMIK
        initialValues: initialValues(),
        // COMPROBACION PERSONALIZADA YUP
        validationSchema: external_yup_.object(validationSchema()),
        // FUNCION DE ENVIO DE DATOS
        onSubmit: async (formData)=>{
            // MOSTRANDO ANIMACION DE SEMANTIC
            setLoading(true);
            // OBTENER RESULTADOS DEL FORMDATA
            const response = await (0,api_user/* LoginApi */.Ig)(formData);
            // OCULTANDO ANIMACION DE SEMANTIC
            setLoading(false);
            // COMPROBACION DEL TOKEN
            if (response === null || response === void 0 ? void 0 : response.jwt) {
                // ALERT CON TOAST
                external_react_toastify_.toast.success("Logeado correctamente");
                // ENVIO DEL TOKEN A LA FUNCION LOGIN
                login(response.jwt);
                // ESCONDIENDO EL MODAL
                setShowModal(false);
            } else {
                // ALERT CON TOAST
                external_react_toastify_.toast.error("El email o la contrasena son incorrectos");
            }
        }
    });
    // FUNCION PARA SI OLVIDA LA CONTRASENA
    const resetPassword = ()=>{
        // RESETEANDO LOS ERRORES ERRORES
        formik.setErrors({});
        // VALIDAR EL CORREO
        const validateEmail = external_yup_.string().email().required("el correo es obligatorio");
        // VALIDANDO QUE EL CORREO SEA CORRECTO
        if (!validateEmail.isValidSync(formik.values.identifier)) {
            // LAZANDO O MOSTRANDO EL ERROR
            formik.setErrors({
                identifier: true
            });
        } else {
            // ENVIANDO EL CORREO VALIDO A LA FUNCION RESET_PASSWORD_API
            (0,api_user/* resetPasswordApi */.uL)(formik.values.identifier);
        // console.log()
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Form, {
                className: "mb-8",
                onSubmit: formik.handleSubmit,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Form.Input, {
                        name: "identifier",
                        placeholder: "Correo Electronico",
                        type: "text",
                        onChange: formik.handleChange,
                        error: formik.errors.identifier
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Form.Input, {
                        name: "password",
                        placeholder: "Contrasena",
                        type: "password",
                        onChange: formik.handleChange,
                        error: formik.errors.password
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                        className: "submit",
                        type: "submit",
                        loading: loading,
                        children: "Entrar"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                type: "button",
                onClick: resetPassword,
                children: "Olvide la contrasena"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                type: "submit",
                onClick: showRegisterForm,
                children: "Registrar"
            })
        ]
    }));
};
// VALORES INICIALES PARA FORMIK
function initialValues() {
    return {
        identifier: "",
        password: ""
    };
}
// COMPROBACION PERSONALIZADA DEL FORMULARIO CON YUP
function validationSchema() {
    return {
        // name: Yup.string().required("el nombre es obligatorio"),
        identifier: external_yup_.string().required(true),
        password: external_yup_.string().required(true)
    };
}

;// CONCATENATED MODULE: ./components/Auth/RegisterForm.js







function RegisterForm({ showLoginForm  }) {
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(false);
    const formik = (0,external_formik_.useFormik)({
        initialValues: RegisterForm_initialValues(),
        validationSchema: external_yup_.object(RegisterForm_validationSchema()),
        onSubmit: async (formData)=>{
            setLoading(true);
            const response = await (0,api_user/* registerApi */.qL)(formData);
            // console.log(response);
            setLoading(false);
            if (response === null || response === void 0 ? void 0 : response.jwt) {
                external_react_toastify_.toast.success("Registrado correctamente");
                showLoginForm();
            } else {
                const er = response.error.message;
                external_react_toastify_.toast.error(er);
            }
        }
    });
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Form, {
            onSubmit: formik.handleSubmit,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Form.Input, {
                    name: "name",
                    placeholder: "Nombre",
                    type: "text",
                    onChange: formik.handleChange,
                    error: formik.errors.name
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Form.Input, {
                    name: "lastname",
                    placeholder: "Apellido",
                    type: "text",
                    onChange: formik.handleChange,
                    error: formik.errors.lastname
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Form.Input, {
                    name: "username",
                    placeholder: "Nombre de Usuario",
                    type: "text",
                    onChange: formik.handleChange,
                    error: formik.errors.username
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Form.Input, {
                    name: "email",
                    placeholder: "Correo Electronico",
                    type: "text",
                    onChange: formik.handleChange,
                    error: formik.errors.email
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Form.Input, {
                    name: "password",
                    placeholder: "Contrasena",
                    type: "password",
                    onChange: formik.handleChange,
                    error: formik.errors.password
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                    type: "button",
                    onClick: showLoginForm,
                    children: "Iniciar Sesion"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                    type: "submit",
                    loading: loading,
                    children: "Registrar"
                })
            ]
        })
    }));
};
function RegisterForm_initialValues() {
    return {
        name: "",
        lastname: "",
        username: "",
        email: "",
        password: ""
    };
}
function RegisterForm_validationSchema() {
    return {
        // name: Yup.string().required("el nombre es obligatorio"),
        name: external_yup_.string().required(true),
        lastname: external_yup_.string().required(true),
        username: external_yup_.string().required(true),
        email: external_yup_.string().email(true).required(true),
        password: external_yup_.string().required(true)
    };
}

;// CONCATENATED MODULE: ./components/Auth/Auth.js




function Auth({ setTitleModal , setShowModal  }) {
    const { 0: showLogin , 1: setShowLogin  } = (0,external_react_.useState)(true);
    const showRegisterForm = ()=>{
        setShowLogin(false);
        setTitleModal('Crear cuenta');
    };
    const showLoginForm = ()=>{
        setShowLogin(true);
        setTitleModal('Iniciar Sesion');
    };
    // const closeModal = () => 
    return showLogin ? /*#__PURE__*/ jsx_runtime_.jsx(LoginForm, {
        showRegisterForm: showRegisterForm,
        setShowModal: setShowModal
    }) : /*#__PURE__*/ jsx_runtime_.jsx(RegisterForm, {
        showLoginForm: showLoginForm
    });
};

// EXTERNAL MODULE: ./hooks/useCart.js
var useCart = __webpack_require__(7559);
;// CONCATENATED MODULE: ./api/platform.js
// RECUPERANDO EL LINK DEL ENV
const base = "http://localhost:1337";
// FUNCION DE OBTENER LAS PLATAFORMAS
async function getPlataformApi() {
    try {
        // FORMANDO LA URL
        const url = `${base}/platfoms?_sort=position:asc`;
        // FILTER ?_sort=position:asc
        // ENVIAMOS EL FETCH O LA PETICION
        const result = await fetch(url);
        // RECIBIMOS LOS DATOS
        const response = await result.json();
        // ENVIAMOS LOS DATOS RECIBIDOS
        return response;
    // MANEJO DE ERRORES
    } catch (error) {
        // MOSTRANDO EL ERROR DE LA PETICION
        console.log(error);
        // DEVOLVIENDO EL ERROR
        return null;
    }
}

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
;// CONCATENATED MODULE: ./components/Header/Menu.js

// INTERNAL









// import { MenuPlataforms } from '../../pages/games/index';
// EXTERNAL

function Menu2() {
    // STATE QUE MUESTRA EL MODAL
    const { 0: showModal , 1: setShowModal  } = (0,external_react_.useState)(false);
    // STATE QUE ASIGNA EL TITULO DEL MODAL
    const { 0: titleModal , 1: setTitleModal  } = (0,external_react_.useState)("Inicia sesi\xf3n");
    // DESTRUCTURACION DE LOS DATOS QUE VIENEN DEL AUTH_CONTEXT
    const { logout , auth  } = (0,useAuth/* default */.Z)();
    // EXTRAYENDO LOS DATOS DEL USE_CART    
    const { productsCart  } = (0,useCart/* default */.Z)();
    // STATE PARA GUARDAR LOS DATOS DEL USUARIO
    const { 0: user , 1: setUser  } = (0,external_react_.useState)(undefined);
    // STATE QUE GUARDA LAS PLATAFORMAS
    const { 0: plataforms , 1: setPlataforms  } = (0,external_react_.useState)([]);
    // FUNCION PARA RECIBIR LOS DATOS DEL USUARIOS
    (0,external_react_.useEffect)(()=>{
        //   FUNCION ANONIMA AUTOEJECUTABLE, LO HACEMOS ASI
        // POS QUE NO PODEMOS HACER ASYNCRONO EL USE_EFFECT
        (async ()=>{
            // RECIBIENDO LOS DATOS DEL USUARIO
            const response = await (0,api_user/* getMeApi */.F9)(logout);
            // LO GUARDAMOS EN EL STATE_USER
            setUser(response);
        })();
    }, [
        auth
    ]);
    (0,external_react_.useEffect)(()=>{
        (async ()=>{
            // RECIBIENDO LOS DATOS DE LAS PLATAFORMAS
            const response = await getPlataformApi();
            // LO GUARDAMOS EN EL STATE_USER
            setPlataforms(response || []);
        })();
    }, []);
    // console.log(user);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: " border-gray-200 px-2 sm:px-4 rounded bg-[#a5673f] shadow-xl",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container max-w-6xl flex flex-wrap justify-between items-center mx-auto",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: " w-full md:block md:w-auto text-white",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                className: "flex mt-4 justify-center md:flex-row md:mt-0 md:text-sm md:font-medium",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(MenuPlataforms, {
                                    plataforms: plataforms
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full md:block md:w-auto text-white",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                className: "flex mt-4 md:flex-row justify-center md:mt-0 md:text-sm md:font-medium",
                                children: !user ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Button, {
                                            color: "brown",
                                            onClick: ()=>setShowModal(true)
                                            ,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Icon, {
                                                    name: "user "
                                                }),
                                                "Mi cuenta"
                                            ]
                                        })
                                    })
                                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/wishlist",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Button, {
                                                    style: {
                                                        marginTop: '0'
                                                    },
                                                    as: "a",
                                                    color: "brown",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Icon, {
                                                            name: "heart"
                                                        }),
                                                        "Favoritos"
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/orders",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Button, {
                                                    as: "a",
                                                    color: "brown",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Icon, {
                                                            name: "game"
                                                        }),
                                                        "Pedidos"
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/account",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Button, {
                                                    as: "a",
                                                    color: "brown",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Icon, {
                                                            name: "user"
                                                        }),
                                                        user.username
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/cart",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Button, {
                                                    as: "a",
                                                    color: "brown",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Icon, {
                                                            name: "cart"
                                                        }),
                                                        productsCart > 0 && /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Label, {
                                                            color: "red",
                                                            circular: true,
                                                            children: productsCart
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                                                color: "brown",
                                                onClick: logout,
                                                className: "m-0",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Icon, {
                                                    className: "m-0",
                                                    name: "power off"
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BasicModal/* default */.Z, {
                show: showModal,
                setShow: setShowModal,
                title: titleModal,
                size: "small",
                centered: false,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Auth, {
                    setTitleModal: setTitleModal,
                    setShowModal: setShowModal
                })
            })
        ]
    }));
};
function MenuPlataforms(props) {
    // EXTRAYENDO LAS FUNCIONES
    const { plataforms  } = props;
    const colors = 'red';
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Menu, {
            inverted: true,
            secondary: true,
            children: (0,external_lodash_.map)(plataforms, (platform)=>/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: `/games/${platform.platfom}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Menu.Item, {
                        header: true,
                        as: "a",
                        name: platform.platfom,
                        style: {
                            color: 'white'
                        },
                        children: platform.nombre
                    })
                }, platform._id)
            )
        })
    }));
}

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Header/Topbar.js

// INTERNAL



// EXTERNAL

function Topbar() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "bg-amber-900",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container max-w-6xl flex flex-wrap justify-between items-center mx-auto bg-amber-900",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Image, {
                                src: "/logo.png",
                                size: "medium",
                                className: "my-8 cursor-pointer"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Search, {})
                    })
                ]
            })
        })
    }));
};
// function Logo() {
//     return (
//         <>
//             <Link className="" href="/">
//                 {/* <a href="https://flowbite.com" class="flex items-center">
//                     <img src="/logo.png" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
//                     <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
//                 </a> */}
//                 <Image src='/logo.png' size='medium' />
//             </Link>
//         </>
//     )
// }
function Search() {
    // OBTENIENDO LOS DATOS DE LA PAGINA
    const router = (0,router_.useRouter)();
    // STATE DE STRING DE BUSQUEDA
    const { 0: searchStr , 1: setSearchStr  } = (0,external_react_.useState)("");
    // STATE DE LOAD PARA HACER UN STOP A LA PRIMERA LLAMADA DEL EFFECT
    const { 0: load , 1: setLoad  } = (0,external_react_.useState)(false);
    // FUNCION QUE GUARDA LOS DATOS DEL STRING
    (0,external_react_.useEffect)(()=>{
        // COMPROBACION DEL LOAD PARA DETENER LA PRIMERA EJECUCION DEL EFFECT
        if (load) {
            // NOS ENVIA A LA PAGINA SEARCH CON EL QUERY STRING DEL INPUT
            router.push(`/search?query=${searchStr}`);
        }
        // PARA QUE EJECUTE EL GUARDADO DEL STRING DESPUES DE LA PRIMERA LLAMADA
        setLoad(true);
    // CADA VEZ QUE CAMBIE EL VALOR DEL STRING VA A GUARDAR EN EL STATE
    }, [
        searchStr
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Input, {
            size: "small",
            icon: "search",
            // placeholder='Search...'
            id: "search-game",
            // EL VALOR ESCRITO ES EL DEL QUERY DE LA PAGINA, POR QUE SI NO, SE VUELVA UNA LETRA
            // ESCRITO DESDE EL INPUT SEARCH
            // value={router.query.query}
            value: router.query.query,
            // SE EJECUTA LA FUNCION Y LOS DATOS QUE RECIBE EL CHANGE LO ENVIA AL STATE POR EL VALOR
            // DE DATA, EL GUION BAJO REPRENSENTA LA FUNCION, Y EL DATA LOS DATOS QUE RECIBE
            onChange: (_, data)=>setSearchStr(data.value)
        })
    }));
}

;// CONCATENATED MODULE: ./components/Header/Header.js



function Header() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "relative shadow-xl z-10 bg-amber-800",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Topbar, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(Menu2, {})
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./layouts/BasicLayout/BasicLayout.js


// import { Container } from 'semantic-ui-react'

function BasicLayout(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            fluid: true,
            className: "min-h-screen bg-[url('/backg.jpg')] bg-cover",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "bg-slate-200 min-h-screen max-w-5xl mx-auto",
                    children: props.children
                })
            ]
        })
    }));
};


/***/ })

};
;