import { Slider } from "infinite-react-carousel";
import "./Gig.scss";

function Gig() {
    const breadCrumbs = "FIVERR > GRAPHICS & DESIGN >";
    return (
        <div className="gig">
            <div className="container">
                <div className="left">
                    <div className="user">
                        <span className="breadCrumbs">{breadCrumbs}</span>
                        <h1 className="title">I will create AI generated art for you</h1>
                        <div className="userInfo">
                            <img
                                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                            />
                            <span className="name">John Doe</span>
                            <div className="stars">
                                <img src="/star.png" alt="" />
                                <img src="/star.png" alt="" />
                                <img src="/star.png" alt="" />
                                <img src="/star.png" alt="" />
                                <img src="/star.png" alt="" />

                                <span>5</span>
                            </div>
                        </div>
                    </div>
                    <div className="slider">
                        <Slider slidesToShow={1} arrowsScroll={1}>
                            <img
                                src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                            />
                            <img
                                src="https://images.pexels.com/photos/8797307/pexels-photo-8797307.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                            />
                            <img
                                src="https://images.pexels.com/photos/580151/pexels-photo-580151.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                            />
                        </Slider>
                    </div>

                    <div className="aboutGig">
                        <h2>About this gig</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, error
                        deserunt voluptatibus repudiandae debitis natus laborum dolores
                        nesciunt sit quia accusamus necessitatibus! Iste incidunt corporis
                        molestiae iusto eligendi optio amet accusamus officiis labore,
                        perspiciatis magni vero inventore esse fuga quis ad consectetur in
                        quisquam libero expedita maiores voluptatem, ea explicabo. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
                        officia perspiciatis rem porro laudantium, iusto molestiae pariatur
                        eaque delectus autem?</p>
                    </div>

                    <div className="aboutSeller">
                        <h2>About The Seller</h2>
                        <div className="seller">
                            <img
                                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                            />
                            <div className="info">
                                <span>John Doe</span>
                                <div className="stars">
                                    <img src="/star.png" alt="" />
                                    <img src="/star.png" alt="" />
                                    <img src="/star.png" alt="" />
                                    <img src="/star.png" alt="" />
                                    <img src="/star.png" alt="" />

                                    <span>5</span>
                                </div>
                                <button>Contact Me</button>
                            </div>
                        </div>

                        <div className="details">
                            <div className="items">
                                <div className="item">
                                    <span>From</span>
                                    <h4>USA</h4>
                                </div>
                                <div className="item">
                                    <span>From</span>
                                    <h4>USA</h4>
                                </div>
                                <div className="item">
                                    <span>From</span>
                                    <h4>USA</h4>
                                </div>
                                <div className="item">
                                    <span>From</span>
                                    <h4>USA</h4>
                                </div>
                                <div className="item">
                                    <span>From</span>
                                    <h4>USA</h4>
                                </div>
                            </div>

                            <hr />

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Inventore suscipit hic quam enim ea quas veniam sapiente minima
                                adipisci nostrum, dignissimos cum eveniet perferendis porro.
                            </p>
                        </div>
                    </div>

                    <div className="reviews">
                        <h2>Reviews</h2>
                        <div className="review">
                            <div className="user">
                                <img
                                    src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    alt=""
                                />
                                <div className="info">
                                    <span>John Doe</span>
                                    <div className="address">
                                        <img
                                            src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
                                            alt=""
                                        />
                                        <span>United States</span>
                                    </div>
                                </div>
                            </div>
                            <div className="stars">
                                <img src="/star.png" alt="" />
                                <img src="/star.png" alt="" />
                                <img src="/star.png" alt="" />
                                <img src="/star.png" alt="" />
                                <img src="/star.png" alt="" />

                                <span>5</span>
                            </div>

                            <p className="desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                                commodi. Beatae corrupti similique dignissimos vitae blanditiis
                                nihil eaque velit, corporis illum, debitis nostrum aliquam
                                laborum voluptatibus possimus ipsam in maxime.
                            </p>

                            <div className="helpful">
                                <span>Helpful?</span>
                                <img src="/like.png" alt="" />
                                <span>Yes</span>
                                <img src="/dislike.png" alt="" />
                                <span>No</span>
                            </div>
                        </div>
                        <hr />
                        <div className="review">
                            <div className="user">
                                <img
                                    src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    alt=""
                                />
                                <div className="info">
                                    <span>John Doe</span>
                                    <div className="address">
                                        <img
                                            src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
                                            alt=""
                                        />
                                        <span>United States</span>
                                    </div>
                                </div>
                            </div>
                            <div className="stars">
                                <img src="/star.png" alt="" />
                                <img src="/star.png" alt="" />
                                <img src="/star.png" alt="" />
                                <img src="/star.png" alt="" />
                                <img src="/star.png" alt="" />

                                <span>5</span>
                            </div>

                            <p className="desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                                commodi. Beatae corrupti similique dignissimos vitae blanditiis
                                nihil eaque velit, corporis illum, debitis nostrum aliquam
                                laborum voluptatibus possimus ipsam in maxime.
                            </p>

                            <div className="helpful">
                                <span>Helpful?</span>
                                <img src="/like.png" alt="" />
                                <span>Yes</span>
                                <img src="/dislike.png" alt="" />
                                <span>No</span>
                            </div>
                        </div>
                        <hr />
                        <div className="review">
                            <div className="user">
                                <img
                                    src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    alt=""
                                />
                                <div className="info">
                                    <span>John Doe</span>
                                    <div className="address">
                                        <img
                                            src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
                                            alt=""
                                        />
                                        <span>United States</span>
                                    </div>
                                </div>
                            </div>
                            <div className="stars">
                                <img src="/star.png" alt="" />
                                <img src="/star.png" alt="" />
                                <img src="/star.png" alt="" />
                                <img src="/star.png" alt="" />
                                <img src="/star.png" alt="" />

                                <span>5</span>
                            </div>

                            <p className="desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                                commodi. Beatae corrupti similique dignissimos vitae blanditiis
                                nihil eaque velit, corporis illum, debitis nostrum aliquam
                                laborum voluptatibus possimus ipsam in maxime.
                            </p>

                            <div className="helpful">
                                <span>Helpful?</span>
                                <img src="/like.png" alt="" />
                                <span>Yes</span>
                                <img src="/dislike.png" alt="" />
                                <span>No</span>
                            </div>
                        </div>
                        <hr />
                        <div className="review">
                            <div className="user">
                                <img
                                    src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    alt=""
                                />
                                <div className="info">
                                    <span>John Doe</span>
                                    <div className="address">
                                        <img
                                            src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
                                            alt=""
                                        />
                                        <span>United States</span>
                                    </div>
                                </div>
                            </div>
                            <div className="stars">
                                <img src="/star.png" alt="" />
                                <img src="/star.png" alt="" />
                                <img src="/star.png" alt="" />
                                <img src="/star.png" alt="" />
                                <img src="/star.png" alt="" />

                                <span>5</span>
                            </div>

                            <p className="desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                                commodi. Beatae corrupti similique dignissimos vitae blanditiis
                                nihil eaque velit, corporis illum, debitis nostrum aliquam
                                laborum voluptatibus possimus ipsam in maxime.
                            </p>

                            <div className="helpful">
                                <span>Helpful?</span>
                                <img src="/like.png" alt="" />
                                <span>Yes</span>
                                <img src="/dislike.png" alt="" />
                                <span>No</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="right">
                    <div className="priceCard">
                        <div className="title">
                            <h2>1 AI generated image</h2>
                            <h1>$ 59.99</h1>
                        </div>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
                            eos dicta magnam ut aspernatur facere.
                        </p>
                        <div className="features">
                            <div className="info">
                                <div className="option">
                                    <img src="/clock.png" alt="" />
                                    <span>2 days Delivery</span>
                                </div>
                                <div className="option">
                                    <img src="/recycle.png" alt="" />
                                    <span>3 Revisions</span>
                                </div>
                            </div>
                            <div className="item">
                                <img src="/greencheck.png" alt="" />
                                <span>Promt Writing</span>
                            </div>
                            <div className="item">
                                <img src="/greencheck.png" alt="" />
                                <span>Artwork Delivery</span>
                            </div>
                            <div className="item">
                                <img src="/greencheck.png" alt="" />
                                <span>Image upscaling</span>
                            </div>
                            <div className="item">
                                <img src="/greencheck.png" alt="" />
                                <span>Additional design</span>
                            </div>
                        </div>
                        <button>Continue</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gig;
