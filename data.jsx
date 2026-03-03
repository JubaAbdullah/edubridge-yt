import { CiMap } from "react-icons/ci";
import { FaCreditCard, FaImages } from "react-icons/fa";

export const cardData = [
  {
    id: 1,
    img: <CiMap />,
    title: "Books Library",
    description:
      "The gradual accumulation of information about atomic and small-scale behaviour...",
    color: "#e74040",
    bgColor: "#ffdcd1",
  },
  {
    id: 2,
    img: <FaImages />,
    title: "Market Analysis",
    description:
      "The gradual accumulation of information about atomic and small-scale behaviour...",
    color: "#2dc071",
    bgColor: "#b9eaa8",
  },
  {
    id: 3,
    img: <FaCreditCard />,
    title: "50+ online courses",
    description:
      "The gradual accumulation of information about atomic and small-scale behaviour...",
    color: "#23a6f0",
    bgColor: "#b2e3ff",
  },
];

export const coursesData = [
  {
    id: 1,
    img: "./public/graphic-desing.png",
    department: "Graphic Design",
    title: "UI & UX Design",
    rating: "4.7",
    description:
      "Unlock your creativity with our UI & UX course! Learn essential desgin principles, mastern idustry-leading tools, and create stunning visuals to bring your ideas to life. ",
    sales: "80",
    price: "$11.99",
    discount: "$4.99",
    duration: "22hr 30min",
    lessons: "64 Lessons",
  },
  {
    id: 2,
    img: "./public/Software-development.jpg",
    department: "Software Development",
    title: "Project Design",
    rating: "4.6",
    description:
      "Transform ideas into actionable plans with our Project Desgin course! Learn to structure, organize, and execute projects effectively using professional tools and techniques",
    sales: "160",
    price: "$15.99",
    discount: "$7.99",
    duration: "30hr 30min",
    lessons: "121 Lessons",
  },
  {
    id: 3,
    img: "./public/web-development.png",
    department: "Web Development",
    title: "HTML & CSS",
    rating: "4.9",
    description:
      "Build the foundation of web development with our HTML & CSS course! Learn to create stunning, respnsive website from scratch with hands-on projects and practical skills.",
    sales: "288",
    price: "$10.99",
    discount: "$8.99",
    duration: "16hr 40min",
    lessons: "107 Lessons",
  },
];

export const ratingData = [
  {
    id: 1,
    stars: " ★ ★ ★ ★ ★",
    img: "./public/person1.jpg",
    description:
      "This course exceeded my expectation! The content was well-organized, the explanations were clear, and the hands-on projects helped me build real-world skills. Highly recommend it to anyone looking to learn!",
    name: "Gamal Mahmoud",
    job: "Software Engineer",
  },
  {
    id: 2,
    stars: " ★ ★ ★ ★ ☆",
    img: "./public/person2.jpg",
    description:
      "This course exceeded my expectation! The content was well-organized, the explanations were clear, and the hands-on projects helped me build real-world skills. Highly recommend it to anyone looking to learn!",
    name: "Omar Mahamed",
    job: "Developer",
  },
  {
    id: 3,
    stars: " ★ ★ ★ ★ ★",
    img: "./public/person3.jpg",
    description:
      "This course exceeded my expectation! The content was well-organized, the explanations were clear, and the hands-on projects helped me build real-world skills. Highly recommend it to anyone looking to learn!",
    name: "Islam Tarek",
    job: "Designer",
  },
];
