import { Route, Routes } from "react-router-dom"
import {
    AboutPage,
    AddNewPropertyPage,
    AdminPropertyDetailePage,
    Booknow,
    ContactPage,
    EditPropertyDetailsPage,
    HomePage,
    MainDashboard,
    PropertiesDetailsPage,
    PropertiesPage,
    PropertyDashboard,
    SignIn,
    SignUp,
} from "./pages"
import AdminLayout from "./layout/AdminLayout"
import RequireAuth from "./hooks/RequireAuth"
import { ROLES } from "./config/role"
import PageNotFound from "./pages/404/PageNotFound"
import DefaultLayout from "./layout/DefaultLayout"
import ForgotPasswordEmailVerification from "./pages/admin/auth/ForgotPasswordEmailVerification"
import ForgotPassword from "./pages/admin/auth/ForgotPassword"
import ChangePassword from "./pages/admin/auth/ChangePassword"

function App () {
    return (
        <Routes>
            <Route exact path="/admin/signin" element={ <SignIn/> }/>
            <Route
                exact
                path="/email/verify"
                element={ <ForgotPasswordEmailVerification/> }
            />
            <Route path="/forgot-password/:token" element={ <ForgotPassword/> }/>
            <Route element={ <DefaultLayout/> }>
                <Route index exact path="/" element={ <HomePage/> }/>
                <Route exact path="/about-us" element={ <AboutPage/> }/>
                <Route exact path="/book-now" element={ <Booknow/> }/>
                <Route exact path="/contact" element={ <ContactPage/> }/>
                <Route exact path="/properties" element={ <PropertiesPage/> }/>
                <Route
                    exact
                    path="/properties/:slug/details"
                    element={ <PropertiesDetailsPage/> }
                />
                <Route path="*" element={ <PageNotFound/> }/>
            </Route>
            <Route element={ <RequireAuth allowedRoles={ [ ROLES.Admin ] }/> }>
                <Route exact path="/admin/signup" element={ <SignUp/> }/>
                <Route
                    exact
                    path="/admin/change-password"
                    element={ <ChangePassword/> }
                />
                <Route path="/admin" element={ <AdminLayout/> }>
                    <Route path="dashboard" element={ <MainDashboard/> }/>
                    <Route path="properties" element={ <PropertyDashboard/> }/>
                    <Route
                        path="properties/:slug/details"
                        element={ <AdminPropertyDetailePage/> }
                    />
                    <Route
                        path="properties/:slug/details/edit"
                        element={ <EditPropertyDetailsPage/> }
                    />
                    <Route path="property/new" element={ <AddNewPropertyPage/> }/>
                </Route>
            </Route>
            {/* 404 PAGE NOT FOUND ROUTE */ }
            <Route path="*" element={ <PageNotFound/> }/>
        </Routes>
    )
}

export default App
