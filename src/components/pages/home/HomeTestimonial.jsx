"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/ultils/motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

import bgImage from "@/resource/banner_image_1.jpg";
import icon_testimonial from "@/resource/icon_testimonial.webp";
import { useState } from "react";
import { SectionSubHeading } from "@/components/custom/SectionSubHeading";
import { SectionTitle } from "@/components/custom/SectionTitle";
import { Sparkles } from "lucide-react";
import { Paragraph } from "@/components/custom/Paragraph";

export default function HomeTestimonial() {
  const [swiper, setSwiper] = useState(null);

  // Static testimonial data
  const testimonials = [
    {
      id: 1,
      title: "John Doe",
      sub_title: "Happy Customer",
      short_description:
        "This service was amazing! I would definitely recommend it to all my friends and family. This service was amazing! I would definitely recommend it to all my friends and family.",
      image: bgImage,
    },
    {
      id: 2,
      title: "Jane Smith",
      sub_title: "Satisfied Client",
      short_description:
        "The quality exceeded my expectations. Will be using this service again in the future! This service was amazing! I would definitely recommend it to all my friends and family.",
      image: bgImage,
    },
    {
      id: 3,
      title: "Robert Johnson",
      sub_title: "Returning Customer",
      short_description:
        "Excellent customer service and top-notch products. Very impressed with my experience. This service was amazing! I would definitely recommend it to all my friends and family.",
      image: bgImage,
    },
  ];

  return (
    <section className="relative bg-primary w-full text-white py-20">
      <div className="absolute inset-0 "></div>

      <div className="max-w-screen-xl mx-auto px-4 relative ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col justify-center">
            <div className="mb-10 text-center md:text-left">
              <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView="show"
              >
                <SectionSubHeading
                  icon={Sparkles}
                  className="my-2"
                  iconClass="text-white"
                  titleClass="text-white"
                >
                  Testimonials
                </SectionSubHeading>
              </motion.div>
              <motion.div
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView="show"
              >
                <SectionTitle className="text-white">
                  What People Say
                </SectionTitle>
              </motion.div>
            </div>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              className="flex flex-col md:flex-row gap-4 items-center md:items-start"
            >
              <Image
                src={icon_testimonial}
                alt=""
                className="w-10 h-10 group-hover:scale-105 transition-all duration-200 mt-2"
                width={40}
                height={40}
                loading="lazy"
              />
              <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{ delay: 5000 }}
                onSwiper={setSwiper}
                className="w-full"
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="rounded-xl flex flex-col md:flex-row gap-6 items-center">
                      <div className="w-full text-center md:text-left">
                        <Paragraph className="text-white mb-4">
                          {testimonial.short_description}
                        </Paragraph>
                        <div className="flex items-center justify-center md:justify-start gap-3">
                          <Image
                            src={testimonial.image.src}
                            alt={testimonial.title}
                            width={48}
                            height={48}
                            className="rounded-full object-cover object-center h-12 w-12"
                          />
                          <div>
                            <h3 className="cl-h4">{testimonial.title}</h3>
                            <p className="cl-p text-gray-200">
                              {testimonial.sub_title}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView="show"
          >
            <Image
              src={bgImage}
              alt=""
              className="w-full h-full group-hover:scale-105 rounded-xl transition-all duration-200 mt-2"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
