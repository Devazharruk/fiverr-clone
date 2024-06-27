import "./Slide.scss";
import { Slider } from "infinite-react-carousel";


function Slide({children,slidesToShow,arrowsScroll}) {
  return (
    <div className="slide">
      <div className="wrapper">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll} >
          {children}
        </Slider>
      </div>
    </div>
  );
}

export default Slide;
