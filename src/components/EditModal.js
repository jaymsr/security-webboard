import React from 'react';
import Modal from 'react-modal';
import {sendRequest} from '../Util/GeneralUtils';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement')

function EditModal(props) {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [detail, setDetail] = React.useState(props.detail);
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    function closeModal() {
        setIsOpen(false);
        setDetail(props.detail)
    }

    function handleChange(event) {
        setDetail(event.target.value);
    }

    function handleEdit() {
        let data = {
            id: props.id,
            BlogDetail: detail
        };

        console.log(data)

        sendRequest("/blogs/" + props.id, 'put', data).then(function(response) {
            window.location.reload();
        }).catch(function (error) {
            console.log(error);
        });       
    }

    return (
        <div>
            <button  onClick={openModal} style={{ float: 'right', marginTop: '0.5rem' }}>
                Edit
            </button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <form onSubmit={handleEdit}>
                    <label>
                        <input type="text" value={detail} onChange={handleChange} />
                    </label>
                    <input type="submit" value="Edit" />
                </form>
            </Modal>
        </div>
    );
}

// ReactDOM.render(<EditModal />, appElement);
export default EditModal;