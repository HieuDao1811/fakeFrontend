import logo from "../assets/images/logo.png";

function Header() {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="inner-main">
                                <div className="inner-logo">
                                    <a href="/">
                                        <img src={logo} alt="Logo" />
                                    </a>
                                </div>
                                <div className="inner-menu">
                                    <ul>
                                        <li>
                                            <a href="#" className="active">
                                                Home
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                About
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Work Process
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Testimonials
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Pricing Tables
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Blog Entries
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Contact Us
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="inner-icon-mobi">
                                    <i className="fa-solid fa-bars-staggered"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;