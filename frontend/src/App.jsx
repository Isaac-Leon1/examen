import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Header from "./components/Header";
import Patients from "./pages/Patients";
import Especialidades from "./pages/Especialidades";
import { UserProvider } from "./context/UserContext";
import Dates from "./pages/Dates";
import { PrivateRoute } from "./routes/PrivateRoute";
function App() {
  return (
    <>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path={"login"} element={<Login />} />
          <Route path="/" element={<Header />}>
            <Route index element={
              <PrivateRoute>
                <Patients />
              </PrivateRoute>
              } />
            <Route path="especialidades" element={
              <PrivateRoute>
                <Especialidades />
              </PrivateRoute>
              } />
            <Route path="citas" element={
              <PrivateRoute>
                <Dates />
              </PrivateRoute>
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
    </>
  );
}

export default App;
