import { Link, Outlet } from "react-router";
import Home from "../../pages/Home";
import Cart from "../../pages/Cart";
import "./LayoutDefault.css";

function LayoutDefault() {
  return (
    <>
      <div className="layout-default">
        <header className="layout-default__header">
          <Link to="/">Logo</Link>
          <Link to="/cart">Cart(1)</Link>
        </header>
        <Outlet />
        <footer className="layout-default__footer">Copyright by Hieu</footer>
      </div>
    </>
  );
}

export default LayoutDefault;
