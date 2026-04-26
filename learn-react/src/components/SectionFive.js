import testimonialIcon from "../assets/images/testimonial-icon.png";
import rightImage from "../assets/images/right-image.png";

function SectionFive() {
    return(
        <>
            <div className="section-five">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="box-head">
                                <h2 className="inner-title">
                                    What do they say?
                                </h2>
                                <p className="inner-desc">
                                    Donec tempus, sem non rutrum imperdiet, lectus orci fringilla nulla, at accumsan elit eros a turpis. Ut sagittis lectus libero.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="inner-image">
                                    <img src={testimonialIcon} alt="testimonial icon" />
                                </div>
                                <div className="inner-desc">
                                    <p>Proin a neque nisi. Nam ipsum nisi, venenatis ut nulla quis, egestas scelerisque orci. Maecenas a finibus odio.</p>
                                </div>
                                <div className="inner-content">
                                    <div className="inner-avatar">
                                        <img src={rightImage} alt="Avatar" />
                                    </div>
                                    <div className="inner-text">
                                        <h3 className="inner-name">
                                            Catherine Soft
                                        </h3>
                                        <span className="inner-position">
                                            Managing Director
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="inner-image">
                                    <img src={testimonialIcon} alt="testimonial icon" />
                                </div>
                                <div className="inner-desc">
                                    <p>Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.</p>
                                </div>
                                <div className="inner-content">
                                    <div className="inner-avatar">
                                        <img src={rightImage} alt="Avatar" />
                                    </div>
                                    <div className="inner-text">
                                        <h3 className="inner-name">
                                            Kelvin Wood
                                        </h3>
                                        <span className="inner-position">
                                            Digital Marketer
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="inner-image">
                                    <img src={testimonialIcon} alt="testimonial icon" />
                                </div>
                                <div className="inner-desc">
                                    <p>Quisque diam odio, maximus ac consectetur eu, auctor non lorem. Cras quis est non ante ultrices molestie. Ut vehicula et diam at aliquam.</p>
                                </div>
                                <div className="inner-content">
                                    <div className="inner-avatar">
                                        <img src={rightImage} alt="Avatar" />
                                    </div>
                                    <div className="inner-text">
                                        <h3 className="inner-name">
                                            David Martin
                                        </h3>
                                        <span className="inner-position">
                                            Website Manager
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SectionFive;