// INTERNAL
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { createAddressApi } from '../../api/address';

// EXTERNAL
import { Form, Button } from 'semantic-ui-react';
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from 'react-toastify';

export default function AdressForm({ setShowModal }) {

    // PARA LA ANIMACION DE CARGA DE SEMANTIC EN EL BOTON DE ENTRAR
    const [loading, setLoading] = useState(false);
    // OBTENIENDO EL AUTH DEL CONTEXT
    const { auth, logout } = useAuth();
    const id = auth.isUser;
    // console.log(auth);

    // MANEJO Y VALIDACION DEL FORMULARIO CON FORMIK Y YUP
    const formik = useFormik({
        // VALORES INCIALES FORMIK
        initialValues: initialValues(),
        // COMPROBACION PERSONALIZADA YUP
        validationSchema: Yup.object(validationSchema()),
        // FUNCION DE ENVIO DE DATOS
        onSubmit: async (formData) => {
            // PASAMOS LOS DATOS A LA FUNCION CREATE_ADDRESS
            createAddress(formData);

        },
    });


    // FUNCION PARA CREAR DIRECCION
    const createAddress = async (formData) => {
        // MOSTRANDO ANIMACION DE SEMANTIC
        setLoading(true);
        // AGREGANDO EL ID DE USUARIO A LOS DATOS
        const formDataTemp = {
            // COPIA DE LOS DATOS ACTUALES
            ...formData,
            // AGREGADO DE ID_USER
            user: id,
        };
        console.log(formDataTemp);
        // PASAMOS LOS DATOS A LA FUNCION CREATE_ADDRESS_API
        const response = await createAddressApi(formDataTemp, logout);
        console.log(response);
        // COMPROBACION.
        if (!response) {
            // ALERT CON TOAST
            toast.error("Error, no se pudo crear la direccion")
            // OCULTANDO ANIMACION DE SEMANTIC
            setLoading(false);
        }
        else {
            // console.log(response);
            // ALERT CON TOAST
            // toast.success("Direccion creada correctamente");
            // LIMPIAR LOS CAMPOS
            // formik.handleReset();
            // OCULTANDO ANIMACION DE SEMANTIC
            setLoading(false);
            // CERRAMOS EL MODAL
            // setShowModal(false)
        }

    }



    return (
        <>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Input name="title" type="text" label="Titulo de la direccion" placeholder="titulo de la direccion"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                    error={formik.errors.title}
                />
                <Form.Group widths="equal">
                    <Form.Input name="name" type="text" label="Nombre y apellido" placeholder="nombre y apellido"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        error={formik.errors.name}
                    />
                    <Form.Input name="address" type="text" label="Direccion" placeholder="Direccion"
                        onChange={formik.handleChange}
                        value={formik.values.address}
                        error={formik.errors.address}
                    />
                </Form.Group>
                <Form.Group widths="equal">
                    <Form.Input name="city" type="text" label="Ciudad" placeholder="Ciudad"
                        onChange={formik.handleChange}
                        value={formik.values.city}
                        error={formik.errors.city}
                    />
                    <Form.Input name="state" type="text" label="Estado/Provincia/Region" placeholder="Estado/Provincia/Region"
                        onChange={formik.handleChange}
                        value={formik.values.state}
                        error={formik.errors.state}
                    />
                </Form.Group>
                <Form.Group widths="equal">
                    <Form.Input name="postalCode" type="text" label="Codigo Postal" placeholder="Codigo Postal"
                        onChange={formik.handleChange}
                        value={formik.values.postalCode}
                        error={formik.errors.postalCode}
                    />
                    <Form.Input name="phone" type="text" label="Numero de telefono" placeholder="Numero de telefono"
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                        error={formik.errors.phone}
                    />
                </Form.Group>
                <div className="flex justify-center">
                    <Button type="submit" loading={loading} style={{ backgroundColor: '#ff5200', padding: '10px 48px', color: 'white' }}  >
                        Crear direccion
                    </Button>
                </div>
            </Form>
        </>
    )
}




// VALORES INICIALES PARA FORMIK
function initialValues() {
    return {
        title: "",
        name: "",
        address: "",
        city: "",
        state: "",
        postalCode: "",
        phone: "",

    };
}

// COMPROBACION PERSONALIZADA DEL FORMULARIO CON YUP
function validationSchema() {
    return {
        // name: Yup.string().required("el nombre es obligatorio"),
        title: Yup.string().required(true),
        name: Yup.string().required(true),
        address: Yup.string().required(true),
        city: Yup.string().required(true),
        state: Yup.string().required(true),
        postalCode: Yup.string().required(true),
        phone: Yup.string().required(true)
    };
}

