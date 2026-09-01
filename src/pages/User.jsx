import {
  Table,
  Container,
  Badge,
  Card,
  Row,
  Col,
  Button,
} from "react-bootstrap";

const User = () => {
  return (
    <Container className="py-4">
      <Card className="shadow-sm border-0">
        <Card.Body>
          <Row className="mb-4 align-items-center">
            <Col>
              User Management
              <p ClassName="text-muted mb-0">Data User Management</p>
            </Col>

            <Col xs="auto">
              <Button variant="primary">+ Create New User</Button>
            </Col>
          </Row>

          <Table responsive hover bordered className="align-middle"></Table>
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
        </Card.Body>
      </Card>
    </Container>
  );
};

export default User;
