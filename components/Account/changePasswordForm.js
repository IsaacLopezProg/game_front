// INTERNAL
import React, { useState } from 'react'
import { updatePasswordApi } from '../../api/user';

// EXTERNAL
import { Form, Button } from 'semantic-ui-react';
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from 'react-toastify';

export default function ChangePasswordForm({ user, logout }) {

    // PARA LA ANIMACION DE CARGA DE SEMANTIC EN EL BOTON DE ENTRAR
    const [loading, setLoading] = useState(false);


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
            const response = await updatePasswordApi(user.id, formData.password, logout);
            // console.log(response)
            // COMPROBACION DEL TOKEN
            if (!response) {
                // ALERT CON TOAST
                toast.error("Error, no se pudo actualizar el password")
            }
            else {
                logout();
            }
            // OCULTANDO ANIMACION DE SEMANTIC
            setLoading(false);
        },
    });


    return (
        <>
            <div className="bg-white px-8 py-8 ">
                <h2 className="text-[#ff5200]">Cambiar el password</h2>

                <Form onSubmit={formik.handleSubmit}>
                    <Form.Group widths="equal">
                        <Form.Input name="password" placeholder="Escribe tu nuevo password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            error={formik.errors.password}
                            type="password"
                        />
                        <Form.Input name="repeatPassword" placeholder="Confirma tu nuevo password"
                            onChange={formik.handleChange}
                            value={formik.values.repeatPassword}
                            error={formik.errors.repeatPassword}
                            type="password"
                        />
                    </Form.Group>
                    <div className="flex justify-center">
                        <Button style={{ backgroundColor: '#ff5200', padding: '10px 48px', color: 'white' }} loading={loading} >
                            Actualizar
                        </Button>
                    </div>
                </Form>
            </div>
        </>
    )
}


// VALORES INICIALES PARA FORMIK
function initialValues() {
    return {
        password: "",
        repeatPassword: "",
    };
}

// COMPROBACION PERSONALIZADA DEL FORMULARIO CON YUP
function validationSchema() {
    return {
        // name: Yup.string().required("el nombre es obligatorio"),
        password: Yup.string().required(true).oneOf([Yup.ref("repeatPassword")], true),
        repeatPassword: Yup.string().required(true).oneOf([Yup.ref("password")], "El password no es igual"),
    };
}