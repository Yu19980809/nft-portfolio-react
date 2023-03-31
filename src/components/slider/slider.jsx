import { React, useState } from 'react';
import { Link } from "react-router-dom";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import item from "../../assets/data/item";

const Slider = () => {
    const [ dataText ] = useState({
        subTitle: 'We are Monteno NFT',
        title: 'Collect Next Generation NFTs Today',
        desc: 'Sed ut perspiciates unde omnis iste natus error sit voluptatem accusantium'
    })

    return (
        <section className='tf-section hero-slider'>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-md-6 col-12">
                        <div className="block-text pt-24">
                            <h6 className="sub-title mb-6" data-aos="fade-up">{ dataText.subTitle }</h6>
                            <h2 className='title mb-26' data-aos="fade-up">{ dataText.title }</h2>
                            <p className="desc md-43">{ dataText.desc }</p>
                            <Link
                                to="/"
                                className="btn-action style-2"
                                data-aos="fade-up"
                                data-aos-duration="1200"
                            >
                                Get Connected
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-7 col-md-6 col-12">
                        <div className="content-right d-flex">
                            <Swiper
                                modules={[ Autoplay ]}
                                direction={"vertical"}
                                spaceBetween={30}
                                slidesPerView={3}
                                loop
                                speed={2000}
                                autoPlay={{
                                    delay: 1,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true
                                }}
                            >
                                <SwiperSlide><div className="item bg-1"><img src={ item.item1 } alt="" /></div></SwiperSlide>
                                <SwiperSlide><div className="item bg-2"><img src={ item.item2 } alt="" /></div></SwiperSlide>
                                <SwiperSlide><div className="item bg-1"><img src={ item.item1 } alt="" /></div></SwiperSlide>
                                <SwiperSlide><div className="item bg-2"><img src={ item.item2 } alt="" /></div></SwiperSlide>
                            </Swiper>
                            <Swiper
                                modules={[ Autoplay ]}
                                direction={"vertical"}
                                spaceBetween={30}
                                slidesPerView={3}
                                loop
                                speed={2000}
                                autoPlay={{
                                    delay: 1,
                                    reverseDirection: true,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true
                                }}
                            >
                                <SwiperSlide><div className="item bg-2"><img src={ item.item3 } alt="" /></div></SwiperSlide>
                                <SwiperSlide><div className="item bg-1"><img src={ item.item4 } alt="" /></div></SwiperSlide>
                                <SwiperSlide><div className="item bg-2"><img src={ item.item5 } alt="" /></div></SwiperSlide>
                                <SwiperSlide><div className="item bg-1"><img src={ item.item3 } alt="" /></div></SwiperSlide>
                                <SwiperSlide><div className="item bg-2"><img src={ item.item4 } alt="" /></div></SwiperSlide>
                            </Swiper>
                            <Swiper
                                modules={[ Autoplay ]}
                                direction={"vertical"}
                                spaceBetween={30}
                                slidesPerView={3}
                                loop
                                speed={2000}
                                autoPlay={{
                                    delay: 1,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true
                                }}
                            >
                                <SwiperSlide><div className="item bg-2"><img src={ item.item6 } alt="" /></div></SwiperSlide>
                                <SwiperSlide><div className="item bg-1"><img src={ item.item7 } alt="" /></div></SwiperSlide>
                                <SwiperSlide><div className="item bg-2"><img src={ item.item4 } alt="" /></div></SwiperSlide>
                                <SwiperSlide><div className="item bg-1"><img src={ item.item6 } alt="" /></div></SwiperSlide>
                                <SwiperSlide><div className="item bg-2"><img src={ item.item7 } alt="" /></div></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Slider;