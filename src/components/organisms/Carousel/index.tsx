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
  isFullScreen = false,
  navigation = false,
}: SwiperProps) {
  return (
    <div className="w-40screen min-w-fill-available">
      {isFullScreen ? (
        <>
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
              enabled: pagination,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              enabled:navigation
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {slideList.map((collection, index) => (
              <SwiperSlide key={index}>
                {collection.logo}
                {/* <SlideContent
                  {...collection}
                  currentIndex={index}
                  totalCollections={collections.length}
                /> */}
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="md:block hidden">

          <div className="swiper-button-next custom-button ">
            <img src={RightArrowIcon} alt="Next" />
          </div>
          <div className="swiper-button-prev custom-button">
            <img src={LeftArrowIcon} alt="Prev" />
          </div>
          </div>
        </>
      ) : (
        <>
          <Swiper
            slidesPerView={slidesPerView}
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              enabled:navigation
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
          {navigation && <div className="md:block hidden">
          <div className="swiper-button-next custom-button z-10">
            <img src={RightArrowIcon} alt="Next" />
          </div>
          <div className="swiper-button-prev custom-button z-10">
            <img src={LeftArrowIcon} alt="Prev" />
          </div>
          </div>}
        </>
      )}
    </div>
  );
}
