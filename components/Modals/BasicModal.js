import { Modal, Icon } from "semantic-ui-react";

export default function BasicModal(props) {
    const { show, setShow, title, children, ...rest } = props;

    const onClose = () => setShow(false);

    return (
        <Modal className="bg-stone-600" open={show} onClose={onClose} {...rest}>
            <Modal.Header className="text-white" style={{ fontSize: '30px', backgroundColor: '#ff5200', color: '#fff' }}>
                <div className="flex flex-wrap justify-between">
                    <span className="mr-24">{title}</span> <Icon name="close" onClick={onClose} className="cursor-pointer" />
                </div>
            </Modal.Header>
            <Modal.Content>{children}</Modal.Content>
        </Modal>
    );
}