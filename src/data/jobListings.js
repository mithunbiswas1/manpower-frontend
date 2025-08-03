// src/data/jobListings.js
import banner_image_1 from "@/resource/banner_image_3.jpg"; // Example image 1

export const jobListings = [
  {
    id: "marketing-specialist-101",
    title: "Marketing Specialist",
    department: "Marketing",
    site: "Remote",
    jobType: "Full-Time",
    experienceLevel: "Senior Level",
    yearsExperience: "5+ Years Experience",
    salaryRange: "$90,000 - $110,000",
    description:
      "Develop and execute marketing strategies to promote products and services. Analyze market trends and customer behavior to inform marketing campaigns. Collaborate with sales and product teams to align marketing efforts with business goals. Monitor and report on campaign performance.",
    image: banner_image_1, // Use an imported image object here

    // --- Detailed fields for Job Details Page ---
    fullDescription:
      "As a Marketing Specialist, you will be instrumental in shaping our brand's voice and reach. You'll work closely with product development, sales, and content teams to create and implement multi-channel marketing campaigns. This role requires a data-driven approach, strong communication skills, and a passion for engaging target audiences.",
    responsibilities: [
      "Develop and implement comprehensive marketing strategies.",
      "Manage and optimize digital marketing campaigns (SEO, SEM, Social Media, Email).",
      "Analyze market trends and customer behavior to identify new opportunities.",
      "Create compelling content for various platforms (website, blog, social media).",
      "Monitor and report on campaign performance, providing actionable insights.",
      "Collaborate with sales and product teams to align marketing efforts with business goals.",
      "Manage marketing budgets and resources effectively.",
    ],
    qualifications: [
      "Bachelor's degree in Marketing, Communications, or a related field.",
      "5+ years of experience in digital marketing or a similar role.",
      "Proven track record in managing successful marketing campaigns.",
      "Proficiency with marketing automation tools and CRM software.",
      "Strong analytical skills and experience with Google Analytics, SEMrush, etc.",
      "Excellent written and verbal communication and presentation skills.",
      "Ability to work independently and as part of a collaborative team.",
    ],
    education: [
      "Bachelor's Degree in Marketing or related field (Required)",
      "Master's Degree (Preferred)",
    ],
    benefits: [
      "Competitive salary and performance bonuses.",
      "Comprehensive health, dental, and vision insurance.",
      "Generous paid time off and holidays.",
      "Flexible remote work environment.",
      "Professional development opportunities and training.",
      "401(k) matching program.",
    ],
    applyInstructions:
      "Please submit your resume and cover letter via our online portal.",
  },
  {
    id: "ui-ux-designer-102",
    title: "UI/UX Designer",
    department: "Product Design",
    site: "Onsite - London, UK",
    jobType: "Full-Time",
    experienceLevel: "Mid Level",
    yearsExperience: "3+ Years Experience",
    salaryRange: "$70,000 - $90,000",
    description:
      "Designing intuitive and visually appealing user interfaces for web and mobile applications. Conducting user research and usability testing. Collaborating with developers and product managers.",
    image: banner_image_1,

    // --- Detailed fields for Job Details Page ---
    fullDescription:
      "We are looking for a talented and passionate UI/UX Designer to join our product team. You will be responsible for creating intuitive, aesthetically pleasing, and user-centered designs for our web and mobile applications. This role requires a strong portfolio, excellent communication, and a collaborative spirit.",
    responsibilities: [
      "Conduct user research, create user personas, and map user journeys.",
      "Design wireframes, mockups, and prototypes for new features and products.",
      "Develop and maintain design systems and style guides.",
      "Collaborate with product managers and engineers throughout the design process.",
      "Perform usability testing and iterate designs based on feedback.",
      "Ensure all designs are consistent with brand guidelines and accessible standards.",
    ],
    qualifications: [
      "Bachelor's degree in Design, HCI, or a related field.",
      "3+ years of professional experience in UI/UX design.",
      "Strong portfolio showcasing a range of design projects (web, mobile).",
      "Proficiency with design tools like Figma, Sketch, Adobe XD, or similar.",
      "Experience with user research methodologies and usability testing.",
      "Familiarity with front-end development (HTML, CSS, JavaScript) is a plus.",
    ],
    education: [
      "Bachelor's Degree in Design, Human-Computer Interaction, or related field (Required)",
    ],
    benefits: [
      "Opportunity to work on innovative products.",
      "Creative and collaborative work environment.",
      "Health and wellness programs.",
      "Commuter benefits.",
    ],
    applyInstructions:
      "Please apply via our careers portal with your resume and portfolio link.",
  },
  {
    id: "project-manager-103",
    title: "Project Manager",
    department: "Operations",
    site: "Hybrid - New York, NY",
    jobType: "Full-Time",
    experienceLevel: "Experienced",
    yearsExperience: "7+ Years Experience",
    salaryRange: "$110,000 - $130,000",
    description:
      "Lead cross-functional project teams from conception to completion. Develop detailed project plans, manage resources, and monitor progress to ensure timely and within-budget delivery. Foster strong client relationships.",
    image: banner_image_1,
    fullDescription: "Detailed project management role...",
    responsibilities: [
      "Manage project lifecycle",
      "Risk assessment",
      "Stakeholder communication",
    ],
    qualifications: ["PMP certification", "Agile methodology"],
    education: ["Bachelor's in Business or Engineering"],
    benefits: ["Bonuses", "Travel allowance"],
    applyInstructions: "Submit resume and project list.",
  },
  {
    id: "hr-coordinator-104",
    title: "HR Coordinator",
    department: "Human Resources",
    site: "Onsite - Chicago, IL",
    jobType: "Part-Time",
    experienceLevel: "Entry Level",
    yearsExperience: "1+ Years Experience",
    salaryRange: "$40,000 - $55,000",
    description:
      "Assist the HR department with daily administrative tasks, including recruitment, onboarding, and employee record management. Support HR initiatives and ensure compliance with company policies.",
    image: banner_image_1,
    fullDescription: "Support HR functions daily...",
    responsibilities: ["Onboarding new hires", "Maintaining records"],
    qualifications: ["HR diploma", "Good communication"],
    education: ["Associate's Degree or higher"],
    benefits: ["Flexible hours", "Training programs"],
    applyInstructions: "Apply with cover letter.",
  },
];
