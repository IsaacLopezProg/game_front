// INTERNAL
import React, { useState } from 'react'
import { LoginApi, resetPasswordApi } from '../../api/user'
import { registerApi } from '../../api/user'
import useAuth from '../../hooks/useAuth';

// EXTERNAL
import { Form, Button } from 'semantic-ui-react';
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from 'react-toastify';

export default function LoginForm({ showRegisterForm, setShowModal }) {

    // PARA LA ANIMACION DE CARGA DE SEMANTIC EN EL BOTON DE ENTRAR
    const [loading, setLoading] = useState(false);
    // DESTRUCTURACION DE LOS DATOS QUE VIENEN DEL AUTH_CONTEXT
    const { auth, login } = useAuth();

    // MANEJO Y VALIDACION DEL FORMULARIO CON FORMIK Y YUP
    const formik = useFormik({
        // VALORES INCIALES FORMIK
        initialValues: initialValues(),
        // COMPROBACION PERSONALIZADA YUP
        validationSchema: Yup.object(validationSchema()),
        // FUNCION DE ENVIO DE DATOS
        onSubmit: async (formData) => {
            // MOSTRANDO ANIMACION DE SEMANTIC
            setLoading(true);
            // OBTENER RESULTADOS DEL FORMDATA
            const response = await LoginApi(formData);
            // OCULTANDO ANIMACION DE SEMANTIC
            setLoading(false);
            // COMPROBACION DEL TOKEN
            if (response?.jwt) {
                // ALERT CON TOAST
                toast.success("Logeado correctamente");
                // ENVIO DEL TOKEN A LA FUNCION LOGIN
                login(response.jwt)
                // ESCONDIENDO EL MODAL
                setShowModal(false);

            }
            else {
                // ALERT CON TOAST
                toast.error("El email o la contrasena son incorrectos")
            }
        },
    });

    // FUNCION PARA SI OLVIDA LA CONTRASENA
    const resetPassword = () => {
        // RESETEANDO LOS ERRORES ERRORES
        formik.setErrors({});
        // VALIDAR EL CORREO
        const validateEmail = Yup.string().email().required("el correo es obligatorio");

        // VALIDANDO QUE EL CORREO SEA CORRECTO
        if (!validateEmail.isValidSync(formik.values.identifier)) {
            // LAZANDO O MOSTRANDO EL ERROR
            formik.setErrors({ identifier: true })
        } else {
            // ENVIANDO EL CORREO VALIDO A LA FUNCION RESET_PASSWORD_API
            resetPasswordApi(formik.values.identifier);
            // console.log()
        }


    }

    return (
        <>
            <Form className="mb-8" onSubmit={formik.handleSubmit}>
                <Form.Input name="identifier" placeholder='Correo Electronico' type="text"
                    onChange={formik.handleChange} error={formik.errors.identifier}
                />
                <Form.Input name="password" placeholder='Contrasena' type="password"
                    onChange={formik.handleChange} error={formik.errors.password}
                />
                <Button className="submit" type="submit" loading={loading}>
                    Entrar
                </Button>
            </Form>
            <Button type="button" onClick={resetPassword}>Olvide la contrasena</Button>
            <Button type="submit" onClick={showRegisterForm} >Registrar</Button>
        </>

    )
}


// VALORES INICIALES PARA FORMIK
function initialValues() {
    return {
        identifier: "",
        password: "",
    };
}

// COMPROBACION PERSONALIZADA DEL FORMULARIO CON YUP
function validationSchema() {
    return {
        // name: Yup.string().required("el nombre es obligatorio"),
        identifier: Yup.string().required(true),
        password: Yup.string().required(true),
    };
}