import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminComponent from "./components/Admin";
import FacultyComponent from "./components/Faculty";
import StudentComponent from "./components/Student";
import HomePage from "./pages";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}>
        <Route path="/STUDENT" element={<StudentComponent/>}/>
        <Route path="/FACULTY" element={<FacultyComponent/>}/>
        <Route path="/ADMIN" element={<AdminComponent/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
