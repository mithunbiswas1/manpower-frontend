"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/ultils/motion";
import { SectionSubHeading } from "@/components/custom/SectionSubHeading";
import { SectionTitle } from "@/components/custom/SectionTitle";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Quote, X } from "lucide-react";

import { ButtonDefault } from "@/components/custom/ButtonDefault";
import { Paragraph } from "@/components/custom/Paragraph";
import { ButtonSeeAll } from "@/components/custom/ButtonSeeAll";

import { baseUriBackend } from "@/redux/endPoints/url";
import { useGetAllTestimonialsQuery } from "@/redux/features/testimonialsApi";

const getYouTubeVideoId = (url) => {
  if (!url) return null;
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([\w-]+)/
  );
  if (match) {
    return match[1];
  }
  return null;
};

export const HomeTestimonial = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [modalText, setModalText] = useState("");
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const { data, isLoading, isError } = useGetAllTestimonialsQuery();
  const testimonials = data?.data || [];

  console.log(testimonials, "testimonialsData");

  const openModal = (testimonial) => {
    if (testimonial?.video) {
      const videoId = getYouTubeVideoId(testimonial.video);
      if (videoId) {
        setVideoUrl(`https://www.youtube.com/embed/${videoId}?autoplay=1`);
        setModalText("");
      }
    } else {
      setModalText(testimonial?.sub_tital);
      setVideoUrl("");
    }
    setSelectedTestimonial(testimonial);
    setModalOpen(true);
  };

  const closeModal = () => {
    setVideoUrl("");
    setModalOpen(false);
  };

  return (
    <section className="bg-white">
      <div className="py-16 _max_width">
        <SectionTitle className=" text-center mb-2">Testimonials</SectionTitle>
        <SectionSubHeading className="mb-8 justify-center">
          What Our Clients Say
        </SectionSubHeading>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {isLoading
            ? [...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 min-h-[350px] bg-white rounded-lg shadow-sm animate-pulse"
                >
                  {/* Circular Image */}
                  <div className="w-40 h-40 rounded-full bg-gray-300 mb-4" />

                  {/* Title */}
                  <div className="h-6 w-32 bg-gray-300 rounded mb-2" />

                  {/* Paragraph */}
                  <div className="h-4 w-40 bg-gray-300 rounded mb-2" />
                  <div className="h-4 w-36 bg-gray-300 rounded mb-4" />

                  {/* Button */}
                  <div className="h-10 w-32 bg-gray-300 rounded mt-auto" />
                </div>
              ))
            : testimonials.slice(0, 4).map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn("up", 0.1 + index * 0.0)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  className="flex flex-col items-center p-4 min-h-[350px] bg-white rounded-lg shadow-sm"
                >
                  <div className="relative w-40 h-40 rounded-full overflow-hidden">
                    <Image
                      src={`${baseUriBackend}${testimonial.image}`}
                      alt={testimonial.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-center">
                    {testimonial.title}
                  </h3>
                  <Paragraph className="text-center !text-xs lg:!text-sm">
                    {testimonial.sub_tital} <br />
                    {testimonial.sub_tital}
                  </Paragraph>

                  <div className="mt-auto">
                    <ButtonDefault
                      className="cursor-pointer"
                      onClick={() => openModal(testimonial)}
                    >
                      {testimonial?.video ? "Watch Video" : "See Comments"}
                    </ButtonDefault>
                  </div>
                </motion.div>
              ))}
        </div>

        <div className="flex justify-center mt-10">
          <ButtonSeeAll href="/testimonials" text="See All Testimonials" />
        </div>
      </div>

      {modalOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center ${
            videoUrl ? "bg-black" : "bg-black/80"
          }`}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-red-600"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative w-full h-8/10 max-w-4xl bg-white rounded-lg">
            <div className="aspect-w-16 aspect-h-9 h-full flex items-center justify-center">
              {videoUrl ? (
                <iframe
                  className="w-full h-full rounded-lg"
                  src={videoUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                  <Quote className="w-10 h-10 text-gray-400 mb-4" />
                  <Paragraph className="text-lg italic leading-relaxed text-gray-700 mb-6">
                    {modalText}
                  </Paragraph>
                  {selectedTestimonial && (
                    <>
                      <h3 className="text-xl font-semibold">
                        {selectedTestimonial.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {selectedTestimonial.sub_tital}
                      </p>
                      <p className="text-sm text-gray-500">
                        {selectedTestimonial.sub_tital}
                      </p>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
