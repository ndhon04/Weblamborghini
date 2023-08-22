import "../../../../../css/main/section/detailCar/DetailCar.css";
import ImageLogoAventador from "../../../../../images/imageLogoAventador.png";
import ImageCarAventador from "../../../../../images/imageCarAventador.png";

function DetailCar() {
  return (
    <div className="main-content">
      <div className="content-left">
        <div className="box-left">
          <img src={ImageLogoAventador} alt="image-Logo-aventador"></img>
          <span>
            Like many other brothers, the Lamborghini Aventador SVJ 2023 has a
            rolling price that is not cheap. Enough for many people to be
            fascinated but only dare to look from afar because they are not
            qualified. However, this is also a great choice for the real giants.
          </span>
        </div>
      </div>
      <div className="content-right">
        <div className="box-right">
          <img src={ImageCarAventador} alt="image-car-aventador"></img>
        </div>
      </div>
    </div>
  );
}
export default DetailCar;
