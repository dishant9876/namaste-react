import { APP_LOGO, CART_ICON } from "../utils/constants";

const Navbar = () => {
  return (
    <div className="header">
      <div className="headerContent">
        <div className="headerLogo">
          <img className="logo" src={APP_LOGO} />
        </div>
        <div className="menuList">
          <ul className="menuItems">
            <li className="menuItem">Home</li>
            <li className="menuItem">About Us</li>
            <li className="menuItem">Contact</li>
          </ul>
        </div>
        <div className="otherMenuList">
          <ul className="otherMenuItems">
            <li className="otherMenuItem">
              <img className="cartLogo" src={CART_ICON} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
