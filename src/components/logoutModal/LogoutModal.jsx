import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { removeItemFromLocalStoroage } from "../../helper/common";
import { useNavigate } from "react-router-dom";

export default function LogoutModal(props) {
  const navigate = useNavigate();
  const handleLogout = () => {
    removeItemFromLocalStoroage("token");
    removeItemFromLocalStoroage("tokenType");
    navigate("/dashboard");
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="cm-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Confirmation
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Are you sure you want to logout?</h4>
        <p></p>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={props.onHide} className="btn-secondary">
          Cancel
        </button>
        <button onClick={() => handleLogout()} className="btn-green">
          Confirm
        </button>
      </Modal.Footer>
    </Modal>
  );
}
