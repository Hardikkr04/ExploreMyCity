import { Link } from 'react-router-dom';
import './header.css';
const Header = () => {
    return (
        <div className="d-flex p-4 header_background">
            <div className="left_menu"><Link to="/">Explore The City of Light</Link></div>
            <div className="d-flex me-5">
                <div className='right_menu  me-5'><Link to='/hotel'>Hotels</Link></div>
                <div className='right_menu me-5'><Link to='/food'>Foods</Link></div>
                <div className='right_menu'>Places</div>
            </div>
        </div>
    )
}
export default Header;