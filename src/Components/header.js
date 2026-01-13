import '../App.css';
import SpotLogo from '../assets/spot_logo.svg';
import UMPRClogo from '../assets/UPMRC_LOGO.png';

function Header() {
  return (
    <div className="header">
      <img src={SpotLogo} className="spot_logo" alt="app logo" />

      <img src={UMPRClogo} className="upmrc_logo" alt="upmrc logo" />
    </div>
  );
}

export default Header;