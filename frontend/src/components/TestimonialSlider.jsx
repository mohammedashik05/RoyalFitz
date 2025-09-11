import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import "../styles/TestimonialSlider.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Custom arrow components
const PrevArrow = ({ onClick }) => (
  <button className="arrow-btn prev" onClick={onClick}>
    <FaChevronLeft />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button className="arrow-btn next" onClick={onClick}>
    <FaChevronRight />
  </button>
);

const testimonials = [
  {
    name: "John D.",
    review: "MensWear exceeded my expectations! The quality is top-notch and delivery was super fast. Definitely shopping again!",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Mark S.",
    review: "Great variety and stylish designs. I love how comfortable and premium the clothes feel.",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    name: "David P.",
    review: "Affordable prices for such amazing quality! I’ve recommended MensWear to all my friends.",
    image: "https://randomuser.me/api/portraits/men/15.jpg"
  },
  {
    name: "Sarah W.",
    review: "Stylish and trendy! I get compliments every time I wear their outfits.",
    image: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    name: "Liam T.",
    review: "Perfect fit and amazing customer support. They answered all my queries instantly.",
    image: "https://randomuser.me/api/portraits/men/28.jpg"
  },
  {
    name: "Emma R.",
    review: "The fabric feels premium and washes really well without losing shape.",
    image: "https://randomuser.me/api/portraits/women/50.jpg"
  },
  {
    name: "Noah B.",
    review: "Quick delivery and the packaging was beautiful. Loved the unboxing experience!",
    image: "https://randomuser.me/api/portraits/men/21.jpg"
  },
  {
    name: "Olivia K.",
    review: "I’ve finally found my go-to store for work and casual wear.",
    image: "https://randomuser.me/api/portraits/women/33.jpg"
  },
  {
    name: "James H.",
    review: "Excellent service and amazing styles that keep up with trends.",
    image: "https://randomuser.me/api/portraits/men/17.jpg"
  },
  {
    name: "Sophia C.",
    review: "Every order feels special with the attention to detail they put in.",
    image: "https://randomuser.me/api/portraits/women/22.jpg"
  },
  {
    name: "Mason L.",
    review: "High-quality clothing at prices that make sense.",
    image: "https://randomuser.me/api/portraits/men/14.jpg"
  },
  {
    name: "Isabella F.",
    review: "Soft fabrics and vibrant colors that last wash after wash.",
    image: "https://randomuser.me/api/portraits/women/25.jpg"
  },
  {
    name: "Ethan G.",
    review: "My entire wardrobe is now from MensWear. I’m obsessed!",
    image: "https://randomuser.me/api/portraits/men/37.jpg"
  },
  {
    name: "Ava M.",
    review: "Super comfortable clothes that look great all day long.",
    image: "https://randomuser.me/api/portraits/women/19.jpg"
  },
  {
    name: "Logan S.",
    review: "The best online shopping experience I’ve had in years.",
    image: "https://randomuser.me/api/portraits/men/41.jpg"
  },
  {
    name: "Mia J.",
    review: "I always find unique pieces that I can’t get anywhere else.",
    image: "https://randomuser.me/api/portraits/women/40.jpg"
  },
  {
    name: "Lucas V.",
    review: "Everything from quality to delivery is just flawless.",
    image: "https://randomuser.me/api/portraits/men/49.jpg"
  },
  {
    name: "Charlotte N.",
    review: "They truly understand fashion and customer satisfaction.",
    image: "https://randomuser.me/api/portraits/women/8.jpg"
  },
  {
    name: "Henry Q.",
    review: "The discounts are great and the quality is never compromised.",
    image: "https://randomuser.me/api/portraits/men/30.jpg"
  },
  {
    name: "Amelia Z.",
    review: "I’m so happy I found this store. My new favorite brand!",
    image: "https://randomuser.me/api/portraits/women/18.jpg"
  }
];

const TestimonialSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };

  return (
    <>
    <section className="testimonial-section">
      <h2>What Our Customers Say</h2>
      <Slider {...settings} className="testimonial-slider">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <img src={t.image} alt={t.name} />
            <p className="review">"{t.review}"</p>
            <h4>- {t.name}</h4>
          </div>
        ))}
      </Slider>
    </section>

        </>
  );
};

export default TestimonialSlider;
