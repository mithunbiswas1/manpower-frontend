// data/services.js

// Import all service icons
import {
  Factory,
  ShieldCheck,
  Brush,
  Hotel,
  User,
  Clock,
  FileBadge,
} from "lucide-react";

// Import all service images (ensure these paths are correct in your project)
import expert_factory_workforce from "@/resource/home_banner/expert_factory_workforce.jpg";
import professional_leaning_services from "@/resource/home_banner/professional_leaning_services.jpg";
import trusted_security_personnel from "@/resource/home_banner/trusted_security_personnel.jpg";
import hotel_catering_taffing from "@/resource/home_banner/hotel_catering_taffing.jpg";
import certified_safety_officers from "@/resource/home_banner/certified_safety_officers.jpg";
import permanent_staffing_solutions from "@/resource/home_banner/permanent_staffing_solutions.jpg";
import flexible_temporary_staffing from "@/resource/home_banner/flexible_temporary_staffing.jpg";

export const services = [
  {
    id: 1,
    title: "Factory Workers",
    description:
      "We provide skilled and highly qualified personnel for factories of any magnitude, trade, or type. Our workforce includes machine operators, goods packers, and general helpers to ensure smooth production.",
    icon: Factory,
    image: expert_factory_workforce,
  },
  {
    id: 2,
    title: "Cleaning Services",
    description:
      "Our cleaning services maintain a pristine and hygienic workplace. We offer routine and specialized cleaning solutions tailored to the specific needs of your commercial, industrial, or residential facility.",
    icon: Brush,
    image: professional_leaning_services,
  },
  {
    id: 3,
    title: "Security Guard",
    description:
      "Our licensed and highly trained security professionals ensure the safety and peace of mind of our clients. We provide top-tier security solutions for residential, commercial, and industrial properties.",
    icon: ShieldCheck,
    image: trusted_security_personnel,
  },
  {
    id: 4,
    title: "Hotel & Catering",
    description:
      "With an extensive repository of expertise, our service-oriented staff can help maintain the high-quality standards of hotels and restaurants, ensuring excellent customer satisfaction.",
    icon: Hotel,
    image: hotel_catering_taffing,
  },
  {
    id: 5,
    title: "Safety Officer",
    description:
      "Safety is paramount. We provide trained safety officers who are well-versed in the latest safety and hygiene protocols, helping your business maintain a secure and compliant work environment.",
    icon: FileBadge,
    image: certified_safety_officers,
  },
  {
    id: 6,
    title: "Permanent Staffing",
    description:
      "For long-term needs, we offer a thorough selection process to find the best candidates for your packing and cleaning operations, ensuring a perfect fit with your organizational culture.",
    icon: User,
    image: permanent_staffing_solutions,
  },
  {
    id: 7,
    title: "Temporary Staffing",
    description:
      "Whether you need short-term manpower for peak periods or specific projects, our flexible and cost-effective temporary staffing solutions keep your operations running smoothly without delays.",
    icon: Clock,
    image: flexible_temporary_staffing,
  },
];
