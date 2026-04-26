import leftImage from "../assets/images/left-image.png";
import rightImage from "../assets/images/right-image.png";

function SectionThree() {
    return(
        <>
           <div className="section-three">
                <div className="container">
                    <div className="row align-items-center inner-border-bottom">
                        <div className="col-lg-6 col-md-12">
                            <div className="inner-image">
                                <img src={leftImage} alt="Ảnh trái" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="inner-content">
                                <h3 className="inner-title">
                                    Let’s discuss about you project
                                </h3>
                                <p className="inner-desc">
                                    Nullam sit amet purus libero. Etiam ullamcorper nisl ut augue blandit, at finibus leo efficitur. Nam gravida purus non sapien auctor, ut aliquam magna ullamcorper.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="inner-content">
                                <h3 className="inner-title">
                                    We can help you to grow your business
                                </h3>
                                <p className="inner-desc">
                                    Aenean pretium, ipsum et porttitor auctor, metus ipsum iaculis nisi, a bibendum lectus libero vitae urna. Sed id leo eu dolor luctus congue sed eget ipsum. Nunc nec luctus libero. Etiam quis dolor elit.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="inner-image">
                                <img src={rightImage} alt="Ảnh trái" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SectionThree;