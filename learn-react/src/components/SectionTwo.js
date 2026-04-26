import image from "../assets/images/featured-item-01.png";

function SectionTwo() {
    return(
        <>
           <div className="section-two">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="inner-box">
                                <div className="inner-icon">
                                    <img src={image} alt="Icon" />
                                </div>
                                <h3 className="inner-title">
                                    Modern Strategy
                                </h3>
                                <p className="inner-desc">
                                    Customize anything in this template to fit your website needs
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="inner-box">
                                <div className="inner-icon">
                                    <img src={image} alt="Icon" />
                                </div>
                                <h3 className="inner-title">
                                    Best Relationship
                                </h3>
                                <p className="inner-desc">
                                    Contact us immediately if you have a question in mind
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="inner-box">
                                <div className="inner-icon">
                                    <img src={image} alt="Icon" />
                                </div>
                                <h3 className="inner-title">
                                    Ultimate Marketing
                                </h3>
                                <p className="inner-desc">
                                    You just need to tell your friends about our free templates
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SectionTwo;