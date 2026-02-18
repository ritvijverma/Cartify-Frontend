import { Carousel } from "antd";

const BannerSlider = () => {
  return (
    <Carousel autoplay autoplaySpeed={3000}>
      <div>
        <img
          src="https://ik.imagekit.io/hmqjpocpg/Cartify%20Project/Banner/BannerImage01.jpg"
          alt="Banner 1"
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
          }}
        />
      </div>

      <div>
        <img
          src="https://ik.imagekit.io/hmqjpocpg/Cartify%20Project/Banner/BannerImage02.png"
          alt="Banner 2"
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
          }}
        />
      </div>
          <div>
        <img
          src="https://ik.imagekit.io/hmqjpocpg/Cartify%20Project/Banner/BannerImage00.png"
          alt="Banner 2"
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
          }}
        />
      </div>
    </Carousel>
  );
};

export default BannerSlider;

