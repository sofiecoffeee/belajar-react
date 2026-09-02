import {
  Table,
  Container,
  Badge,
  Card,
  Row,
  Col,
  Button,
} from "react-bootstrap";

import UserModal from "../components/UserModal";
import { useState } from "react";

const User = () => {
  const [show, setShow] = useState(false);
  const handleCloseModal = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  return (
    <Container className="py-4">
      <Card className="shadow-sm border-0">
        <Card.Body>
          <Row className="mb-4 align-items-center">
            <Col>
              User Management
              <p className="text-muted mb-0">Data User Management</p>
            </Col>

            <Col xs="auto">
              <Button variant="primary" onClick={handleShow}>
                + Create New User
              </Button>
              <UserModal show={show} handleClose={handleCloseModal} />
            </Col>
          </Row>

          <Table responsive hover bordered className="align-middle">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default User;
