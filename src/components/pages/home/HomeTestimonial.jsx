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
import { Sparkles, Quote } from "lucide-react";
import { Paragraph } from "@/components/custom/Paragraph";

export const HomeTestimonial = () => {
  const [swiper, setSwiper] = useState(null);

  // Static testimonial data
  const testimonials = [
    {
      id: 1,
      title: "Mohammed Al Farsi",
      sub_title: "Factory Manager, Al Noor Textiles",
      short_description:
        "Box Craft delivered skilled packing staff during our production peak. Their team was punctual, hardworking, and required minimal training. A truly professional service we’ll continue to use.",
      image: bgImage,
    },
    {
      id: 2,
      title: "Sarah Khalid",
      sub_title: "Operations Head, CleanSpace Co.",
      short_description:
        "We hired Box Craft for commercial cleaning, and the results were fantastic. The team followed strict hygiene protocols and exceeded our expectations in both quality and professionalism.",
      image: bgImage,
    },
    {
      id: 3,
      title: "Imran Sheikh",
      sub_title: "Security Supervisor, Silver Tower",
      short_description:
        "The security personnel provided by Box Craft were trained, alert, and courteous. We’ve noticed a clear improvement in safety and professionalism since hiring them.",
      image: bgImage,
    },
    {
      id: 4,
      title: "Fatima Al Mansoori",
      sub_title: "HR Director, Gulf Catering Services",
      short_description:
        "Our hospitality staffing needs were met quickly and efficiently. The staff from Box Craft were well-presented, courteous, and adapted seamlessly to our work environment.",
      image: bgImage,
    },
    {
      id: 5,
      title: "Ahmed Raza",
      sub_title: "Project Lead, BuildPro Logistics",
      short_description:
        "The laborers provided by Box Craft for our warehouse operations were reliable and fast. Their attention to detail helped us complete projects on time with zero issues.",
      image: bgImage,
    },
    {
      id: 6,
      title: "Noura Hossain",
      sub_title: "Admin Manager, Sunrise Hospitality",
      short_description:
        "We’ve been using Box Craft for multiple hospitality events. Their service staff are always on time, well-trained, and presentable. Guests frequently compliment their professionalism.",
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
                  className="my-2 justify-center md:justify-start"
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
              <Quote className="size-12 text-white" />
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
                            <h3 className="cl-h4 font-semibold">
                              {testimonial.title}
                            </h3>
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
};
