import { ReactComponent as LocationIcon } from '../../assets/svg/location.svg';
import { ReactComponent as CallIcon } from '../../assets/svg/call.svg';

const TopCTA = () => {
  return (
    <div className="topCTA">
      <div className="navbar-container">
        <ul className="ul-row">
          <li>
            <CallIcon className="svg-icon" />
          </li>
          <li>(505) 983-9774</li>
          <li className="address-icon">
            <LocationIcon className="svg-icon" />
          </li>
          <li className="address-text">
            208 W San Francisco St, Ste B, Santa Fe, NM 87501
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopCTA;
