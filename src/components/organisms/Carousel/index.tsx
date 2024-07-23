import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Autoplay,
  Pagination,
  Navigation,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { SwiperProps } from "@/types";
import { RightArrowIcon, LeftArrowIcon } from "@/constants";

export default function Carousel({
  slideList,
  pagination = false,
  slidesPerView,
  autoplay = false,
}: SwiperProps) {
  return (
    <div className="w-40screen min-w-fill-available">
      <Swiper
        slidesPerView={slidesPerView}
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        freeMode={true}
        loop={true}
        centeredSlides={true}
        pagination={{
          clickable: true,
          enabled: pagination,
        }}
        // navigation={navigation}
        autoplay={autoplay}
        speed={1300}
        spaceBetween={0}
        className="flex flex-col items-end"
      >
        {slideList &&
          slideList.map((item) => (
            <SwiperSlide
              key={item.id}
              className={"!flex justify-center items-center"}
            >
              {item.logo}
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="swiper-button-next custom-button">
        <img src={RightArrowIcon} alt="Next" />
      </div>
      <div className="swiper-button-prev custom-button">
        <img src={LeftArrowIcon} alt="Prev" />
      </div>
    </div>
  );
}
