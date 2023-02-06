// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper";
import { OurServicesDate } from "../../../../design-system/components/OurServicesComponent/OurServicesData";
import OurServicesComponent from "../../../../design-system/components/OurServicesComponent/OurServicesComponent";

export default function Slider() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={4}
      >
        {OurServicesDate.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <OurServicesComponent
                img={item.img}
                work={item.work}
                alt={item.alt}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
