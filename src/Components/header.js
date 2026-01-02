
import '../App.css';
import SpotLogo from '../assets/spot_logo.svg';


function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={SpotLogo} className='spot_logo' alt='app logo'></img>
      </div>
    </div>
  );
}

export default Header;



