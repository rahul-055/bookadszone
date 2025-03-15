import { Dashboard } from "../components/templates/dashboard/Dashboard";
import SidebarNav from '../components/organisms/sidebar/SidebarNav';
import { Header } from '../components/organisms/header/Header';
import { Footer } from "../components/organisms/footer/Footer";
import { usePath } from "../utils/coustomhook/CoustomHooks";
import Faq from "../components/templates/faq/Faq";


function RouteRedirection() {
    const path = usePath();
    return (
        <div className="container-scroller">
            <Header />
            <div className="container-fluid page-body-wrapper">
                <SidebarNav />
                <div className="main-panel">
                    <div className="content-wrapper">
                        {path === '/' && <Dashboard />}
                        {path === '/faq' && <Faq />}
                        <Footer />
                    </div>

                </div>
            </div>
            {/* <div className="av-admin-main-sec">
                <div className="sidebar-sev">
                    <SidebarNav />
                </div>
                <div className="nav-main-content">
                    <Header />
                    <div className="main-template">
                        <Dashboard />
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default RouteRedirection;
