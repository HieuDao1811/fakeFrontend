import image from "../assets/images/work-process-item-01.png";

function SectionFour() {
    return(
        <>
            <div className="section-four">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="box-head">
                                <h2 className="inner-title">
                                    Work Process
                                </h2>
                                <p className="inner-desc">
                                    Aenean nec tempor metus. Maecenas ligula dolor, commodo in imperdiet interdum, vehicula ut ex. Donec ante diam.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2 col-md-3 col-sm-6 col-12">
                            <a href="#" className="inner-box">
                                <div className="inner-image">
                                    <img src={image} alt="Process item" />
                                </div>
                                <div className="inner-content">
                                    <h3 className="inner-title">
                                        Get Ideas
                                    </h3>
                                    <p className="inner-desc">
                                        Godard pabst prism fam cliche.
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 col-12">
                            <a href="#" className="inner-box">
                                <div className="inner-image">
                                    <img src={image} alt="Process item" />
                                </div>
                                <div className="inner-content">
                                    <h3 className="inner-title">
                                        Sketch Up
                                    </h3>
                                    <p className="inner-desc">
                                        Godard pabst prism fam cliche.
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 col-12">
                            <a href="#" className="inner-box">
                                <div className="inner-image">
                                    <img src={image} alt="Process item" />
                                </div>
                                <div className="inner-content">
                                    <h3 className="inner-title">
                                        Discuss
                                    </h3>
                                    <p className="inner-desc">
                                        Godard pabst prism fam cliche.
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 col-12">
                            <a href="#" className="inner-box">
                                <div className="inner-image">
                                    <img src={image} alt="Process item" />
                                </div>
                                <div className="inner-content">
                                    <h3 className="inner-title">
                                        Revise
                                    </h3>
                                    <p className="inner-desc">
                                        Godard pabst prism fam cliche.
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 col-12">
                            <a href="#" className="inner-box">
                                <div className="inner-image">
                                    <img src={image} alt="Process item" />
                                </div>
                                <div className="inner-content">
                                    <h3 className="inner-title">
                                        Approve
                                    </h3>
                                    <p className="inner-desc">
                                        Godard pabst prism fam cliche.
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 col-12">
                            <a href="#" className="inner-box">
                                <div className="inner-image">
                                    <img src={image} alt="Process item" />
                                </div>
                                <div className="inner-content">
                                    <h3 className="inner-title">
                                        Launch
                                    </h3>
                                    <p className="inner-desc">
                                        Godard pabst prism fam cliche.
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SectionFour;