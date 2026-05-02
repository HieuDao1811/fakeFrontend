import { Link, Outlet } from "react-router";
import "./LayoutDefault.css";
import CartMini from "../../components/CartMini";

function LayoutDefault() {
  return (
    <>
      <div className="layout-default">
        <header className="layout-default__header">
          <Link to="/">Logo</Link>
          <CartMini/>
        </header>
        <Outlet />
        <footer className="layout-default__footer">Copyright by Hieu</footer>
      </div>
    </>
  );
}

export default LayoutDefault;
