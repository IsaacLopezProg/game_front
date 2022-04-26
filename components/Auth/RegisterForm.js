import React, { useState } from 'react'
import { Form, Button } from 'semantic-ui-react';
import { useFormik } from "formik";
import * as Yup from "yup";
import { registerApi } from '../../api/user'
import { toast } from 'react-toastify';

export default function RegisterForm({ showLoginForm }) {

    const [loading, setLoading] = useState(false)

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
            setLoading(true);
            const response = await registerApi(formData);
            console.log(response);
            setLoading(false);

            if (response?.jwt) {
                toast.success("Registrado correctamente");
                showLoginForm();
            }
            else {
                const er = response.error.message;
                toast.error(er)
            }
        },
    });


    return (
        <>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Input name="name" placeholder='Nombre' type="text"
                    onChange={formik.handleChange} error={formik.errors.name} />
                <Form.Input name="lastname" placeholder='Apellido' type="text"
                    onChange={formik.handleChange} error={formik.errors.lastname} />
                <Form.Input name="username" placeholder='Nombre de Usuario' type="text"
                    onChange={formik.handleChange} error={formik.errors.username} />
                <Form.Input name="email" placeholder='Correo Electronico' type="text"
                    onChange={formik.handleChange} error={formik.errors.email} />
                <Form.Input name="password" placeholder='Contrasena' type="password"
                    onChange={formik.handleChange} error={formik.errors.password} />
                <Button type="button" onClick={showLoginForm}>Iniciar Sesion</Button>
                <Button type="submit" loading={loading}>Registrar</Button>
            </Form>
        </>
    )
}


function initialValues() {
    return {
        name: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
    };
}

function validationSchema() {
    return {
        // name: Yup.string().required("el nombre es obligatorio"),
        name: Yup.string().required(true),
        lastname: Yup.string().required(true),
        username: Yup.string().required(true),
        email: Yup.string().email(true).required(true),
        password: Yup.string().required(true),
    };
}