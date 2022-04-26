// INTERNAL
import React, { useState } from 'react'
import { updateEmailApi } from '../../api/user';

// EXTERNAL
import { Form, Button } from 'semantic-ui-react';
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from 'react-toastify';

export default function ChangeEmailForm({ user, logout, setReloadUser }) {

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
            const response = await updateEmailApi(user.id, formData.email, logout);
            // console.log(response)
            // COMPROBACION DEL TOKEN
            if (!response || response?.statusCode === 400) {
                // ALERT CON TOAST
                toast.error("Error, no se pudo actualizar el email")
            }
            else {
                // RECARGAR LA PAGINA CON EL CONTENIDO ACTUALIZADO
                setReloadUser(true);
                // ALERT CON TOAST
                toast.success("Email actualizado correctamente");
                // LIMPIAR LOS CAMPOS
                formik.handleReset();
            }
            // OCULTANDO ANIMACION DE SEMANTIC
            setLoading(false);
        },
    });


    return (
        <>
            <div className="bg-white px-8 py-8 ">
                <h2 className="text-[#ff5200]">Cambiar el Email
                    <span className="font-light text-lg ml-2">(Tu email actual: {user.email})</span>
                </h2>

                <Form onSubmit={formik.handleSubmit}>
                    <Form.Group widths="equal">
                        <Form.Input name="email" placeholder="Escribe tu nuevo Email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            error={formik.errors.email}
                        />
                        <Form.Input name="repeatEmail" placeholder="Confirma tu nuevo Email"
                            onChange={formik.handleChange}
                            value={formik.values.repeatEmail}
                            error={formik.errors.repeatEmail}
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
        email: "",
        repeatEmail: "",
    };
}

// COMPROBACION PERSONALIZADA DEL FORMULARIO CON YUP
function validationSchema() {
    return {
        // name: Yup.string().required("el nombre es obligatorio"),
        email: Yup.string().email(true).required(true).oneOf([Yup.ref("repeatEmail")], true),
        repeatEmail: Yup.string().email(true).required(true).oneOf([Yup.ref("email")], "El email no es igual"),
    };
}