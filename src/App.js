import "./App.css";
import { Container, Row, Col } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import AllCourses from "./components/AllCourses";
import AddCourse from "./components/AddCourse";
import Menus from "./components/Menus";

function App() {
  const btnHandle = () => {
    toast.error("Done", {
      position: "top-center",
    });
  };

  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/add-course" element={<AddCourse />} exact />
                <Route path="/view-courses" element={<AllCourses />} exact />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
