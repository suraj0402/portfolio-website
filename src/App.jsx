import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import AdminProjects from "./pages/AdminProjects";
import AddProject from "./pages/AddProject";
import EditProject from "./pages/EditProject";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
    return (
        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={
                        <>
                            <Navbar />
                            <Home />
                        </>
                    }
                />

                <Route
    path="/admin"
    element={
        <ProtectedRoute>
            <AdminProjects />
        </ProtectedRoute>
    }
/>

<Route
    path="/admin/add"
    element={
        <ProtectedRoute>
            <AddProject />
        </ProtectedRoute>
    }
/>

<Route
    path="/admin/edit/:id"
    element={
        <ProtectedRoute>
            <EditProject />
        </ProtectedRoute>
    }
/>

<Route
    path="/login"
    element={<Login />}
/>

<Route
    path="/project/:id"
    element={<ProjectDetails />}
/>

            </Routes>

        </BrowserRouter>
    );
}

export default App;