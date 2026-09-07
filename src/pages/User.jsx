import {
  Table,
  Container,
  Badge,
  Card,
  Row,
  Col,
  Button,
  Form,
} from "react-bootstrap";

import { useState, useEffect } from "react";
import api from "../services/api";
import AppModal from "../components/AppModal";
import UserForm from "../components/UserForm";

const User = () => {
  const [show, setShow] = useState(false);

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [validationError, setValidationError] = useState({});

  const initialForm = {
    id: null,
    name: "",
    email: "",
    password: "",
    status: true,
  };

  const [formData, setFormData] = useState(initialForm);

  const handleCloseModal = () => {
    setShow(false);
    setIsEdit(true);
  };

  const handleCreate = () => {
    setIsEdit(false);
    setFormData(initialForm);
    setValidationError({});
    setShow(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("aaa");

    setSubmitLoading(true);
    try {
      const payload = { ...formData };
      const response = await api.post("/user", payload);
      setShow(false);
      fetchUsers();
    } catch (error) {
      console.log("error", error);
      // alert("tess");
      if (error.response) {
        // Catatan: error.response.data MASIH berisi response dari Axios bawaan saat error
        if (error.response.status === 422 && error.response.data.errors) {
          const rawErrors = error.response.data.errors;
          const formatError = {};

          Object.keys(rawErrors).forEach((key) => {
            formatError[key] = rawErrors[key][0];
          });

          setValidationError(formatError);
        } else {
          const errMsg =
            error.response?.data?.message || "Internal Server Error";
          alert(errMsg);
        }
      }
    } finally {
      setSubmitLoading(false);
    }
  };

  // useEffect

  const fetchUsers = async () => {
    setLoading(true);

    try {
      const response = await api.get("/user");
      const result = response.data;
      setUsers(result);
      // console.log("hasil-fetch", result);
    } catch (error) {
      console.log("Error fetching user", error);
    } finally {
      setLoading(false);
    }
  };

  // useEffect
  useEffect(() => {
    fetchUsers();
  }, []);

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
              <Button variant="primary" onClick={handleCreate}>
                + Create New User
              </Button>
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
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.status}</td>
                  <td>
                    <Button variant="warning" size="sm" className="me-2">
                      Edit
                    </Button>
                    <Button variant="danger" size="sm">
                      Hapus
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <AppModal
        show={show}
        title={isEdit ? "Edit User" : "Create New User"}
        handleClose={handleCloseModal}
        submitText={isEdit ? "Save Change" : "Save"}
        variant={isEdit ? "warning" : "primary"}
        isLoading={submitLoading}
        formId="user-form"
      >
        <UserForm
          formId="user-form"
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
          errors={validationError}
        />
      </AppModal>
    </Container>
  );
};

export default User;
