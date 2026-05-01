import { Link, Outlet } from "react-router-dom";

import "./LayoutDefault.css";

function LayoutDefault() {
  return (
    <>
      <div className="layout-default"> 
        <header className="layout-default__header">
          <div className="layout-default__logo">
            <Link to="">Logo</Link>
          </div>
          <div className="layout-default__cart">
            <Link to="cart">Giỏ hàng</Link>
          </div>
        </header>
        <div><Outlet/></div>
        <footer className="layout-default__footer">Copyright @2026 by Hieu</footer>
      </div>
    </>);
}

export default LayoutDefault;
