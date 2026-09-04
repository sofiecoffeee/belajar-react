import { Container, Button, Card } from "react-bootstrap";
import AppNavbar from "../components/AppNavbar";

const Dashboard = () => {
  return (
    <Container className="mt-4">
      <AppNavbar />
      <Card className="p-4 shadow-sm">
        <h1>Dashboard PPKD Jakarta Pusat</h1>
        <p className="text-muted">Login successfully</p>
      </Card>
    </Container>
  );
};

export default Dashboard;
