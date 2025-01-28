import "./photo.css";
import PcImage from "../../.././images/pc.png";
import box from "../../../images/box.png";

function Photo() {
  return (
    <>
      <div className="Image-Div">
        <img className="box" src={box} />
        <img className="img1" src={PcImage} />
      </div>
    </>
  );
}

export default Photo;
