import { Modal, Button } from "react-bootstrap";

const AppModal = ({
  show,
  handleClose,
  title,
  children,
  submitText,
  variant,
  formId,
  isLoading = false,
}) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} disable={isLoading}>
            Cancel
          </Button>
          <Button
            variant={variant}
            type="submit"
            form={formId}
            onClick={handleClose}
            disable={isLoading}
          >
            {isLoading ? "Loading..." : submitText}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AppModal;
