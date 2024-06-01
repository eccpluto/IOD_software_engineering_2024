import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import DashboardPage from "../pages/DashboardPage";
import { DashboardMessages, DashboardTasks } from "../pages/DashboardPage";
import PageNotFound from "../pages/PageNotFound";

function AppRoutes(props) {

    return (
        <Routes>
            {/* index match on default/home URL */}
            <Route index element={<HomePage {...props} />}></Route>

            {/* nested routes, matches on /dash/messages etc */}
            <Route path="dash" element={<DashboardPage {...props} />}>
                {/* child routes */}
                <Route path="messages" element={<DashboardMessages />} />
                <Route path="tasks" element={<DashboardTasks />} />
            </Route>

            <Route path='/about' element={<AboutPage {...props} />} />

            {/* special route to handle if none of the above match */}
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}

export default AppRoutes;