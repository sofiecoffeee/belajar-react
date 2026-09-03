import {
  Form,
  Button,
  Card,
  Container,
  Row,
  Col,
  Alert,
} from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../services/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Riset pesan error tiap kali submit ulang

    try {
      const res = await api.post("/login", {
        email,
        password,
      });

      // Karena di interceptor udah dikembaliin `response.data`,
      // di sini tinggal panggil propertinya langsung (misal: res.token atau res.access_token)
      const token = res.token || res.access_token;

      if (token) {
        localStorage.setItem("token", token);
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error.response);

      if (error.response) {
        // Catatan: error.response.data MASIH berisi response dari Axios bawaan saat error
        if (error.response.status === 422 && error.response.data.error) {
          const rawErrors = error.response.data.error;
          const formatError = {};

          Object.keys(rawErrors).forEach((key) => {
            formatError[key] = rawErrors[key][0];
          });

          setError(formatError);
        } else if (error.response.status === 401) {
          setError("Email atau password salah.");
        } else {
          setError("Terjadi kesalahan pada server.");
        }
      } else {
        setError("Gagal terhubung ke server.");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <Container
      className="d-flex justify-content-center align-items-center w-100"
      style={{ minHeight: "100vh" }}
    >
      <Row className="w-100 justify-content-center">
        <Col md={6} lg={4}>
          <Card className="shadow-sm border-0">
            <Card.Body className="p-4">
              <h3 className="text-center mb-4">Login Form</h3>
              {typeof error === "string" && error !== "" && (
                <Alert variant="danger">{error}</Alert>
              )}
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    isInvalid={!!error?.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {error?.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    isInvalid={!!error?.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {error?.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 py-2 mt-2"
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Login"}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
