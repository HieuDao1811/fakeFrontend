import image01 from "../assets/images/blog-item-01.png";
import image02 from "../assets/images/blog-item-02.png";
import image03 from "../assets/images/blog-item-03.png";

function SectionEight() {
    return(
        <>
            <div className="section-eight">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="box-head">
                                <h2 className="inner-title">
                                    Blog Entries
                                </h2>
                                <p className="inner-desc">
                                    Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="inner-image">
                                    <img src={image01} alt="Blog item 1"/>
                                </div>
                                <div className="inner-content">
                                    <h3 className="inner-title">
                                        <a href="#">
                                            Vivamus ac vehicula dui
                                        </a>
                                    </h3>
                                    <p className="inner-desc">
                                        Cras aliquet ligula dui, vitae fermentum velit tincidunt id. Praesent eu finibus nunc. Nulla in sagittis eros. Aliquam egestas augue.
                                    </p>
                                    <a href="#" className="button button-one">READ MORE</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="inner-image">
                                    <img src={image02} alt="Blog item 2"/>
                                </div>
                                <div className="inner-content">
                                    <h3 className="inner-title">
                                        <a href="#">
                                            Phasellus convallis augue
                                        </a>
                                    </h3>
                                    <p className="inner-desc">
                                        Aliquam commodo ornare nisl, et scelerisque nisl dignissim ac. Vestibulum finibus urna ut velit venenatis, vel ultrices sapien mattis.
                                    </p>
                                    <a href="#" className="button button-one">READ MORE</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="inner-image">
                                    <img src={image03} alt="Blog item 3"/>
                                </div>
                                <div className="inner-content">
                                    <h3 className="inner-title">
                                        <a href="#">
                                            Nam gravida purus non
                                        </a>
                                    </h3>
                                    <p className="inner-desc">
                                        Maecenas eu erat vitae dui convallis consequat vel gravida nulla. Vestibulum finibus euismod odio, ut tempus enim varius eu.
                                    </p>
                                    <a href="#" className="button button-one">READ MORE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionEight;