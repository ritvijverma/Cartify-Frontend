import { Carousel } from "antd";

const BannerSlider = () => {
  return (
    <Carousel autoplay autoplaySpeed={3000}>
      <div>
        <img
          src="https://static.helioswatchstore.com/media/catalog/category/Updated_All_Watches_Banner.jpg"
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
          src="https://static.helioswatchstore.com/media/catalog/category/mens_watch_banner.png"
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
          src="https://static.helioswatchstore.com/media/catalog/category/women_watch_banner.png"
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

