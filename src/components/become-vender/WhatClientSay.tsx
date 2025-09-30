// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// export default function WhatClientSay() {
//   const testimonials = [
//     {
//       img: "images/1.jpg",
//       name: "Kanye West",
//       role: "Head Chef at BBQ Restaurant",
//       text: "Sed elit quam, iaculis sed semper sit amet udin vitae nibh. at magna akal semper Fusce commodo molestie luctus. Lorem ipsum Dolor tusima olatiup.",
//     },
//     {
//       img: "images/2.png",
//       name: "Anabella Kleva",
//       role: "Boss at TocoToco",
//       text: "Sed elit quam, iaculis sed semper sit amet udin vitae nibh. at magna akal semper Fusce commodo molestie luctus. Lorem ipsum Dolor tusima olatiup.",
//     },
//     {
//       img: "images/3.jpg",
//       name: "William Roles",
//       role: "Head Chef at BBQ Restaurant",
//       text: "Sed elit quam, iaculis sed semper sit amet udin vitae nibh. at magna akal semper Fusce commodo molestie luctus. Lorem ipsum Dolor tusima olatiup.",
//     },
//     {
//       img: "images/4.jpg",
//       name: "Sophia Lee",
//       role: "Owner at Cafe Delight",
//       text: "Mauris varius eros eget sapien tristique, ac placerat libero tristique. Aenean vitae justo id libero sodales volutpat.",
//     },
//   ];

//   return (
//     <div className="ps-client-say">
//       <div className="container">
//         <div className="ps-section__header">
//           <h3>What client say</h3>
//           <div className="ps-section__nav">
//             {/* External navigation buttons */}
//             <a className="ps-carousel__prev" id="prevBtn">
//               <i className="icon-chevron-left" />
//             </a>
//             <a className="ps-carousel__next" id="nextBtn">
//               <i className="icon-chevron-right" />
//             </a>
//           </div>
//         </div>

//         <div className="ps-section__content">
//           <Swiper
//             modules={[Navigation, Pagination]}
//             pagination={{ clickable: true }}
//             navigation={{
//               prevEl: "#prevBtn",
//               nextEl: "#nextBtn",
//             }}
//             loop={true} // ✅ Circular slider
//             spaceBetween={30}
//             slidesPerView={2} // ✅ Show 2 at a time
//             className="ps-carousel outside"
//           >
//             {testimonials.map((t, index) => (
//               <SwiperSlide key={index}>
//                 <div className="ps-block--testimonial">
//                   <div className="ps-block__header">
//                     <img src={t.img} alt={t.name} />
//                   </div>
//                   <div className="ps-block__content">
//                     <i className="icon-quote-close" />
//                     <h4>
//                       {t.name} <span>{t.role}</span>
//                     </h4>
//                     <p>{t.text}</p>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </div>
//   );
// }





"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function WhatClientSay() {
  const testimonials = [
    {
      img: "images/1.jpg",
      name: "Kanye West",
      role: "Head Chef at BBQ Restaurant",
      text: "Sed elit quam, iaculis sed semper sit amet udin vitae nibh. at magna akal semper Fusce commodo molestie luctus. Lorem ipsum Dolor tusima olatiup.",
    },
    {
      img: "images/2.png",
      name: "Anabella Kleva",
      role: "Boss at TocoToco",
      text: "Sed elit quam, iaculis sed semper sit amet udin vitae nibh. at magna akal semper Fusce commodo molestie luctus. Lorem ipsum Dolor tusima olatiup.",
    },
    {
      img: "images/3.jpg",
      name: "William Roles",
      role: "Head Chef at BBQ Restaurant",
      text: "Sed elit quam, iaculis sed semper sit amet udin vitae nibh. at magna akal semper Fusce commodo molestie luctus. Lorem ipsum Dolor tusima olatiup.",
    },
 
  ];

  return (
    <div className="ps-client-say">
      <div className="container">
        <div className="ps-section__header">
          <h3>What client say</h3>
          <div className="ps-section__nav">
            {/* External navigation buttons */}
            <a className="ps-carousel__prev" id="prevBtn">
              <i className="icon-chevron-left" />
            </a>
            <a className="ps-carousel__next" id="nextBtn">
              <i className="icon-chevron-right" />
            </a>
          </div>
        </div>

        <div className="ps-section__content">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: "#prevBtn",
              nextEl: "#nextBtn",
            }}
            loop={true} // ✅ Always loop for 2 slides
            spaceBetween={30}
            slidesPerView={2} // ✅ Always show 2 slides
            className="ps-carousel outside"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <div className="ps-block--testimonial">
                  <div className="ps-block__header">
                    <img src={t.img} alt={t.name} />
                  </div>
                  <div className="ps-block__content">
                    <i className="icon-quote-close" />
                    <h4>
                      {t.name} <span>{t.role}</span>
                    </h4>
                    <p>{t.text}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Agar testimonials ki length odd ho to ek duplicate slide add kar dete hain */}
            {testimonials.length % 2 !== 0 && (
              <SwiperSlide key="duplicate">
                <div className="ps-block--testimonial">
                  <div className="ps-block__header">
                    <img
                      src={testimonials[0].img}
                      alt={testimonials[0].name}
                    />
                  </div>
                  <div className="ps-block__content">
                    <i className="icon-quote-close" />
                    <h4>
                      {testimonials[0].name} <span>{testimonials[0].role}</span>
                    </h4>
                    <p>{testimonials[0].text}</p>
                  </div>
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
