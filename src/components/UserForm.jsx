import { Form } from "react-bootstrap";

const UserForm = ({ formId, formData, setFormData, onSubmit, errors = {} }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <form id={formId} onSubmit={onSubmit}>
      <Form.Group className="mb-3">
        <Form.Label className="fw-semibold">Name</Form.Label>
        <Form.Control
          isInvalid={!!errors.name}
          type="text"
          name="name"
          placeholder="Enter name"
          // required
          value={formData.name}
          onChange={handleChange}
        />
        <Form.Control.Feedback type="invalid">
          {errors.name}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className="fw-semibold">Email</Form.Label>
        <Form.Control
          isInvalid={!!errors.email}
          type="email"
          name="email"
          placeholder="Enter email"
          // required
          value={formData.email}
          onChange={handleChange}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className="fw-semibold">Password</Form.Label>
        <Form.Control
          isInvalid={!!errors.password}
          type="password"
          name="password"
          placeholder="Enter password"
          // required
          value={formData.password}
          onChange={handleChange}
        />
        <Form.Control.Feedback type="invalid">
          {errors.password}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className="fw-semibold">Status</Form.Label>
        <Form.Select
          isInvalid={!!errors.status}
          className="form-select"
          aria-label="Active"
          name="status"
          // required
          value={formData.status}
          onChange={handleChange}
        >
          <option value="1">Active</option>
          <option value="0">Inactive</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {errors.status}
        </Form.Control.Feedback>
      </Form.Group>
    </form>
  );
};

export default UserForm;
