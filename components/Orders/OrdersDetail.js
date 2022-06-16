// INTERNALS
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import BasicModal from '../Modals/BasicModal';

// EXTERNAL
import { Icon, Image, Modal } from 'semantic-ui-react';
import moment from 'moment';
import 'moment/locale/es';

export default function OrdersDetail(props) {

    // EXTRAYENDO LOS DATOS DEL PROPS
    const { order } = props;
    const { game, totalPayment, createdAt, AddressShipping } = order;
    const { title, poster, url } = game;

    // STATE PARA EL MODAL
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <div className="bg-white border-gray-200 border">
                <div className="flex flex-row items-center h-28 ">
                    <div className="basis-1/5">
                        <Link href={`/${url}`}>
                            <a>
                                <Image src={poster.url} className="h-28" />
                            </a>
                        </Link>
                    </div>
                    <div className="basis-1/4 ml-8">
                        <h3>
                            {title}
                        </h3>
                        <p>${totalPayment}</p>
                    </div>
                    <div className="inline-flex basis-2/5 ml-8">
                        <p className="mr-2">{moment(createdAt).format("L")} - {moment(createdAt).format("LT")}</p>
                        <Icon name="eye" className="text-[#ff5200]" circular link
                            onClick={() => setShowModal(true)}
                        />
                    </div>
                </div>
            </div>
            <AddressModal
                showModal={showModal}
                setShowModal={setShowModal}
                AddressShipping={AddressShipping}
                title={title} />
        </>
    )
}

function AddressModal(props) {

    // EXTRAYENDO LOS DATOS DEL PROPS
    const { showModal, setShowModal, AddressShipping, title } = props;

    return (
        <>
            <BasicModal
                title={title}
                size="tiny"
                show={showModal}
                setShow={setShowModal}
            >
                <h3>El Pedido se ha enviado a la siguiente direccion.</h3>
                <p>{AddressShipping.name}</p>
                <p>{AddressShipping.address}</p>
                <p>{AddressShipping.state}, {AddressShipping.city}{" "}{AddressShipping.postalCode}</p>
                <p>{AddressShipping.phone}</p>



            </BasicModal>
        </>
    )
}