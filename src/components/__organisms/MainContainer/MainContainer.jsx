import "./MainContainer.css";
import Image from "../../__molecules/pngs/Image";
import Info from "../../__atoms/accordion and fetch/acordion";
import shadow from "../../../images/shadow.png";
import line1 from "../../../images/line1.png";
import line2 from "../../../images/line2.png";
import shadow2 from "../../../images/shadow2.png";
function MainContainer() {
  return (
    <>
      <div className="Main-Container">
        <img className="shadow2" src={shadow2} />
        <img className="line1" src={line1} />
        <img className="line2" src={line2} />
        <img className="shadow" src={shadow} />
        <Image />
        <Info />
      </div>
    </>
  );
}

export default MainContainer;
