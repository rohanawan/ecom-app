import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components Import
import MainLayout from "./components/Layout/MainLayout";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import SpinnerLoader from "./components/ui/loader/SpinnerLoader";

// Config Import
import { Routes as AppRoutes } from "./config/Routes";

// Context Import
import { useAuth } from "./contexts/AuthContext";

// Toastify Import
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Pages Import
const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const ItemDetails = lazy(() => import("./pages/ItemDetails"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const ShowCart = lazy(() => import("./pages/ShowCart"));
const MyOrder = lazy(() => import("./pages/MyOrder"));
const CheckOut = lazy(() => import("./pages/CheckOut"));
const ChangePassword = lazy(() => import("./pages/ChangePassword"));
const OrderHistory = lazy(() => import("./pages/OrderHistory"));

// JSX
const App = () => {
    const { isAuthenticated } = useAuth();

    return (
        <>
            <Router>
                <Suspense fallback={<SpinnerLoader />}>
                    <MainLayout>
                        <Routes>
                            {/* Public Routes */}
                            <Route
                                path={AppRoutes.public.home}
                                element={<Home />}
                            />
                            <Route
                                path={AppRoutes.public.aboutUs}
                                element={<AboutUs />}
                            />
                            <Route
                                path={AppRoutes.public.contactUs}
                                element={<ContactUs />}
                            />
                            <Route
                                path={AppRoutes.public.itemsDetails(":id")}
                                element={<ItemDetails />}
                            />

                            {/* Auth Routes */}
                            <Route
                                path={AppRoutes.auth.signIn}
                                element={
                                    <ProtectedRoute
                                        isAuthenticated={!isAuthenticated}
                                    >
                                        <Login />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path={AppRoutes.auth.signUp}
                                element={
                                    <ProtectedRoute
                                        isAuthenticated={!isAuthenticated}
                                    >
                                        <Signup />
                                    </ProtectedRoute>
                                }
                            />

                            {/* Private Routes */}
                            <Route
                                element={
                                    <ProtectedRoute
                                        isAuthenticated={isAuthenticated}
                                    />
                                }
                            >
                                <Route
                                    path={AppRoutes.private.cart}
                                    element={<ShowCart />}
                                />
                                <Route
                                    path={AppRoutes.private.myOrder}
                                    element={<MyOrder />}
                                />
                                <Route
                                    path={AppRoutes.private.checkout}
                                    element={<CheckOut />}
                                />
                                <Route
                                    path={AppRoutes.private.changePassword}
                                    element={<ChangePassword />}
                                />
                                <Route
                                    path={AppRoutes.private.showOrderHistory}
                                    element={<OrderHistory />}
                                />
                            </Route>
                        </Routes>
                    </MainLayout>
                </Suspense>
            </Router>
            <ToastContainer />
        </>
    );
};

export default App;
