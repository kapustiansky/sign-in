import React from 'react';
import slide1 from '../../assets/slider/slide-1.jpg';
import slide2 from '../../assets/slider/slide-2.jpg';
import slide3 from '../../assets/slider/slide-3.jpg';
import slide4 from '../../assets/slider/slide-4.jpg';
import slideMin1 from '../../assets/slider/slide-min-1.svg';
import slideMin2 from '../../assets/slider/slide-min-2.svg';
import slideMin3 from '../../assets/slider/slide-min-3.svg';
import slideMin4 from '../../assets/slider/slide-min-4.svg';
import SwiperCore, { Pagination, Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import './slider.css';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/effect-fade/effect-fade.min.css';

SwiperCore.use([Pagination, Autoplay, EffectFade]);

const Slider = () => {
	return (
		<section className='slider-container'>
			<Swiper
				className='swiper-container'
				effect='fade'
				fadeEffect={{
					crossFade: true,
				}}
				spaceBetween={50}
				slidesPerView={1}
				autoplay={{ delay: 4000, disableOnInteraction: false }}
				pagination={{ clickable: true }}>
				<SwiperSlide>
					<picture>
						<source
							srcSet={slide1}
							media='(min-width: 767px)'
							alt='merge data review'
						/>
						<img src={slideMin1} alt='tokenplace' />
					</picture>
					<h2>Tokenplace</h2>
					<span>Multi-exchange Trading Terminal</span>
				</SwiperSlide>
				<SwiperSlide>
					<picture>
						<source
							srcSet={slide2}
							media='(min-width: 767px)'
							alt='fund platform'
						/>
						<img src={slideMin2} alt='fund platform' />
					</picture>
					<h2>Fund Platform</h2>
					<span>Hedge funds wealth management</span>
				</SwiperSlide>
				<SwiperSlide>
					<picture>
						<source
							srcSet={slide3}
							media='(min-width: 767px)'
							alt='noviscient'
						/>
						<img src={slideMin3} alt='noviscient' />
					</picture>
					<h2>Noviscient</h2>
					<span>Management Platform</span>
				</SwiperSlide>
				<SwiperSlide>
					<picture>
						<source
							srcSet={slide4}
							media='(min-width: 767px)'
							alt='merge data review'
						/>
						<img src={slideMin4} alt='merge data review' />
					</picture>
					<h2>Merge Data Review</h2>
					<span>
						It gives data managers the power to efficiently manage
						quality data
						<br />
						to ensure database lock readiness.
					</span>
				</SwiperSlide>
			</Swiper>
		</section>
	);
};

export default Slider;
