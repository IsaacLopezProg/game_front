// INTERNAL
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { updateNameApi } from '../../api/user';


// EXTERNAL
import { Form, Button } from 'semantic-ui-react';
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from 'react-toastify';

// EXTRAYENDO EL USUARIO
export default function ChangeNameForm({ user, logout }) {

    // PRUEBA DE EXTRACCION DEL USE_RELOAD_USER DESDE EL CONTEXT
    const { setReloadUser } = useAuth();

    // PARA LA ANIMACION DE CARGA DE SEMANTIC EN EL BOTON DE ENTRAR
    const [loading, setLoading] = useState(false);


    // MANEJO Y VALIDACION DEL FORMULARIO CON FORMIK Y YUP
    const formik = useFormik({
        // VALORES INCIALES FORMIK
        initialValues: initialValues(user.name, user.lastname),
        // COMPROBACION PERSONALIZADA YUP
        validationSchema: Yup.object(validationSchema()),
        // FUNCION DE ENVIO DE DATOS
        onSubmit: async (formData) => {
            // MOSTRANDO ANIMACION DE SEMANTIC
            setLoading(true);
            // OBTENER RESULTADOS DEL FORMDATA
            const response = await updateNameApi(user.id, formData, logout);
            console.log(response)
            // COMPROBACION DEL TOKEN
            if (response) {
                // RECARGAR LA PAGINA CON EL CONTENIDO ACTUALIZADO
                setReloadUser(true);
                // ALERT CON TOAST
                toast.success("Nombre y apellido actualizado correctamente");
            }
            else {
                // ALERT CON TOAST
                toast.error("Error, no se pudo actualizar el nombre y el apellido")
            }
            // OCULTANDO ANIMACION DE SEMANTIC
            setLoading(false);
        },
    });


    return (
        <>
            <div className="bg-white px-8 py-8 ">
                {/* <Header as='h2'>Cambia tu nombre y apellido</Header> */}
                <h2 className="text-[#ff5200]">Cambia tu nombre y apellido</h2>
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Group widths='equal'>
                        <Form.Input name="name" placeholder="Tu nuevo nombre"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            error={formik.errors.name}
                        />
                        <Form.Input name="lastname" placeholder="Tu nuevo apellido"
                            onChange={formik.handleChange}
                            value={formik.values.lastname}
                            error={formik.errors.lastname}
                        />
                        {/* <Form.Input name="lastname" placeholder="Tu nuevo apellido" value={user.lastname} /> */}

                    </Form.Group>
                    <div className="flex justify-center">
                        <Button loading={loading} style={{ backgroundColor: '#ff5200', padding: '10px 48px', color: 'white' }}>Actualizar</Button>
                    </div>
                </Form>
            </div>
        </>
    )
}


// VALORES INICIALES PARA FORMIK
function initialValues(name, lastname) {
    return {
        name: name || "",
        lastname: lastname || "",
    };
}

// COMPROBACION PERSONALIZADA DEL FORMULARIO CON YUP
function validationSchema() {
    return {
        // name: Yup.string().required("el nombre es obligatorio"),
        name: Yup.string().required("el nuevo nombre es obligatorio"),
        lastname: Yup.string().required("el nuevo apellido es obligatorio"),
    };
}