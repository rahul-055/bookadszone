import './logo.css'
import logo from '../../../assets/images/logo/BookAdZone-Final-Logo.png'

export const Logo = () => {
    return (
        <div className="logo-sec">
            <div className="log-size">
                <img src={logo} alt='logo not found' />
            </div>
        </div>
    );
}