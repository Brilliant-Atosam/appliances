import "./common.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import { Login } from "./pages/login/Login";
import ProductDetails from "./pages/productDetails/ProductDetails";
import Sales from "./pages/sales/Sales";
import { useSelector } from "react-redux";
import Items from "./pages/products/Items";
import { Register } from "./pages/register/Register";
import { Tutorials } from "./pages/tutorials/Tutorials";
import AdminDashboard from "./pages/admin/AdminDashboard";
import { AdminLogin } from "./pages/adminLogin/Login";
function App() {
  const store = useSelector((state) => state.store.Store);
  const sales = useSelector((state) => state.sales.Sales);
  const items = useSelector((state) => state.items.Items);
  const admin = useSelector((state) => state.admin?.Admin);
  const clients = useSelector((state) => state.clients?.Clients);
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/tuts" element={<Tutorials />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={
              store && items !== null && sales !== null ? (
                <Navigate to="/" />
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/admin"
            element={
              admin && clients !== null ? (
                <Navigate to="/" replace={true} />
              ) : (
                <AdminLogin />
              )
            }
          />
          <Route
            path="/"
            element={
              admin && clients !== null ? (
                <AdminDashboard />
              ) : store && items !== null && sales !== null ? (
                <Dashboard />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/sales"
            element={
              store && sales !== null ? <Sales /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/items"
            element={
              store && items !== null ? <Items /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/items/:id"
            element={
              store && items !== null && sales !== null ? (
                <ProductDetails />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
