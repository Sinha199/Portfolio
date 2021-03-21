/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Anshu Sinha",
  description: "Portfolio",
  og: {
    title: "Portfolio",
    type: "website",
    url: "https://sinha199.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Anshu Sinha 👋",
  logo_name: "Anshu Sinha",
  subTitle:
    "Our intuition about the future is linear. But the reality of information technology is exponential, and that makes a profound difference. If I take 30 steps linearly, I get to 30. If I take 30 steps exponentially, I get to a billion .",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Sinha199",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/anshu1998/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Twitter",
    link: "https://twitter.com/Sinha_199",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/ether_next/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "💬 Experience of working with Computer Vision and NLP projects",
        "💬 Infering stories behind data through several data visualization tools ",
        "💬 Experimenting with various algorithms in NLP and still in phase of learning.",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Scikit-Learn",
          fontAwesomeClassname: "simple-icons:scikit-learn",
          style: {
            backgroundColor: "transparent",
            color: "#F7931E",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#150458",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "simple-icons:tableau",
          style: {
            color: "#4285F4",
          },
        },
      ],
    },
    {
      title: "Familiar With",
      fileName: "FullStackImg",
      skills: [
        "💡 Building foundation for Frontend application and Full Stack by working on small projects",
        "💡 Developing the idea of user interfaces and its importance in product development",
        "💡 Getting along with the new technologies such as quantum via Qiskit",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Ethereum",
          fontAwesomeClassname: "simple-icons:ethereum",
          style: {
            color: "#3C3C3D",
          },
        },
        {
          skillName: "Qiskit",
          fontAwesomeClassname: "simple-icons:qiskit",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Drupal",
          fontAwesomeClassname: "simple-icons:drupal",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Version Control",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Leetcode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#FFA116",
      },
      profileLink: "https://leetcode.com/ethernext/",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/ethernext",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/ethernext",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "National Institute of Technology Agartala",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "nita.png",
      alt_name: "NIT Agartala",
      duration: "2017 - 2021",
      descriptions: [
        "🎓 Under the curriculum I have covered many niches of Computer Science such as Data structure and algorithms , Object oriented design , Operating System , DBMS , Computer Network.",
        "🎓 I have also been introduced to many core fundamentals in the domain of Compiler Design , Computer Architecture , Software Engineering",
      ],
      website_link: "https://www.nita.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "NLP Specialization ",
      subtitle: "Classification and Vector Spaces",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/NQCEWXN3EBHW",
      alt_name: "deeplearning.ai",
      color_code: "#ffffff",
    },
    {
      title: "Deep Learning",
      subtitle: "Hands-On Artificial Neural Networks",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-54bc1567-0c98-4622-b0bf-3569f3f7ca2d/",
      alt_name: "Udemy",
      color_code: "#ffffff",
    },
    {
      title: "Introduction to Flutter",
      subtitle: "The App Brewery",
      logo_path: "app-logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1ZAa0eJ0DVjN9tUw4nIkAMa7cHLiBvRUN/view?usp=sharing",
      alt_name: "Flutter",
      color_code: "#ffffff",
    },
    {
      title: "Cloud",
      subtitle: "Deploy and Manage Cloud Environments",
      logo_path: "qwiklabs-logo.png",
      certificate_link:
        "https://www.qwiklabs.com/public_profiles/02e3594b-91b1-42e6-b138-9f340d0be5c6",
      alt_name: "Qwiklabs",
      color_code: "#ffffff",
    },
    {
      title: "Google Cloud",
      subtitle: "Engineer Data in Google Cloud",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.qwiklabs.com/public_profiles/02e3594b-91b1-42e6-b138-9f340d0be5c6",
      alt_name: "GCP",
      color_code: "#ffffff",
    },
    {
      title: "Tableau",
      subtitle: "Training for Data Science",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-274bc49c-ba22-463a-b5c3-3abb1b4f77c6/",
      alt_name: "Udemy",
      color_code: "#ffffff",
    },
    {
      title: "Deploy to Kubernetes in Google Cloud",
      subtitle: "Google Cloud Platform",
      logo_path: "kubernetes.png",
      certificate_link:
        "https://www.qwiklabs.com/public_profiles/02e3594b-91b1-42e6-b138-9f340d0be5c6",
      alt_name: "GCP",
      color_code: "#ffffff",
    },
    {
      title: "Data Visualization",
      subtitle: "Kaggle",
      logo_path: "Kaggle_logo.png",
      certificate_link:
        "https://www.kaggle.com/learn/certification/ethernext/data-visualization",
      alt_name: "Kaggle",
      color_code: "#ffffff",
    },
    {
      title: "Insights from Data with BigQuery",
      subtitle: "Google Cloud Platform",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.qwiklabs.com/public_profiles/02e3594b-91b1-42e6-b138-9f340d0be5c6",
      alt_name: "GCP",
      color_code: "#ffffff",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship and Volunteership",
  description:
    "I have been an active part of the community working in the lines of technology and social progress,also involved in work of research and development . Have been also engaged in the student led organization promoting entrepreneurship .",
  header_image_path: "career_progress.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Drupal Intern",
          company: "Fossee-IIT Bombay",
          company_url: "https://fossee.in/",
          logo_path: "fossee-logo.png",
          duration: "May 2019 - July 2019",
          location: "IIT Bombay",
          description:
            "Drupal is a free and open-source web content management framework . Under the fossee project we are promoted to work on the FLOSS tools in academia and research.The project was named NVLI(National Virtual Library of India) which basically aims to preserve the literary heitage of India and cover it under one diaspora.During the period I mainly worked on the frontend part and did research on the functionality of the paragraph module and its utility with the bootstrap, also I did bring some solution to functality and many modules available for Drupal 8",
          color: "#ee3c26",
        },
        {
          title: "Overall Co-ordinator",
          company: "E-cell NIT Agartala",
          company_url: "https://www.instagram.com/ecellnita/",
          logo_path: "ecell-logo.jpg",
          duration: "Aug 2019 - May 2020",
          location: "NIT Agartala",
          description:
            "The E-Cell NIT Agartala is a close-knit community, striving to dissolve barriers pertaining to entrepreneurship mainly in north east ecosystem. We are student organization aim to establish entrepreneurial mindset among the young innovators . We also ideated the first of its kind E-summit , 'Carpe diem' aims to bring the best talents and give them a platform to share their ideas. ",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Volunteer",
          company: "Women Who Code",
          company_url: "https://www.womenwhocode.com/",
          logo_path: "wwc-logo.jpg",
          duration: "April 2020 - Present",
          description:
            "Women who code mission is to inspire the women in tech in their respective careers . I am the active part of their Data Science community.",
          color: "#D83B01",
        },
        {
          title: "Volunteer",
          company: "WE CAN",
          company_url: "https://www.instagram.com/we_can_nita/",
          logo_path: "Wecan-logo.jpeg",
          duration: "Jan 2018 - March 2020",
          description:
            "Students empowered organisation which cater and teach underprivileged children residing nearby village founded by NIT Agartala alumnus.",
          color: "#D83B01",
        },
        {
          title: "Volunteer",
          company: "Aspire for Her",
          company_url: "http://www.aspireforher.org/",
          logo_path: "asp-logo.jpeg",
          duration: "Feb 2021 - Present",
          description:
            "Aspire for Her Foundation primarily works on a C2B (College-to-Business) model creating online and offline programs for its members (18-25 year old women) through partnerships with forward-thinking, diversity-focused organisations and professionals.",
          color: "#D83B01",
        },
        {
          title: "Team Captain",
          company: "NEC E-cell IIT Bombay",
          company_url: "https://www.ecell.in/2020/",
          logo_path: "nec-logo.png",
          duration: "Jan 2019",
          description:
            "A competition conducted by E-Cell IIT Bombay to enhance the culture of entrepreneurship in other sub divisions of college from basic track to advance and mentoring track helps in guiding the running E-Cell of the colleges",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I believe that the world is shifting towards products from services, plenty of products are emerging as solutions . I strive to implement my learning to use latest technology to live, right now mostly in the field of AI and further software in development 🔧",
  avatar_image_path: "projects_image.svg",
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
};
