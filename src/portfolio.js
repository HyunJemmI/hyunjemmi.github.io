/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

export const seo = {
  title: "HyunJe Lee", // 원하는 제목으로 변경
  description: "Welcome to my portfolio website.", // 원하는 설명 추가
  og: {
    title: "HyunJe Lee",
    type: "website",
    url: "https://hyunjelee.info"
  }
};

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Hyunje Lee",
  title: "Hi, I'm Hyunje Lee",
  subTitle: emoji(
    "A software engineer who loves to create something new and solve problems."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/HyunJemmI",
  linkedin:
    "https://www.linkedin.com/in/%ED%98%84%EC%A0%9C-%EC%9D%B4-2875a8355/",
  gmail: "dlguswp010731@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Front-End Developer, Computer Vision and Machine Learning Enthusiast",
  skills: [
    emoji("⚡ Develop User Interfaces for your web and mobile applications"),
    emoji("⚡ Creatively solving visual perception problems using AI"),
    emoji(
      "⚡ Continuously refine my skills through competitions and team projects."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "c++",
    //   fontAwesomeClassname: "fab fa-c"
    // },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fab fa-c"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Seoul",
      logo: require("./assets/images/UOS.png"),
      subHeader: "Senior in Computer Science",
      duration: "March 2020 - Present",
      desc: "Expected Graduation: February 2026",
      descBullets: [
        "Total GPA of 3.58/4.5, Major GPA of 3.40/4.5",
        "Relevant Coursework: 임베디드 시스템, 선형대수, 인공지능, 컴퓨터 네트워크"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "80%"
    },
    {
      Stack: "Computer Vision",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Ongoing Projects",
  subtitle: "Projects that I am currently working on",
  projects: [
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName:
        "Improving Vision Processing in Autonomous Driving Using Contrastive Learning",
      projectDesc:
        "This project aims to enhance the performance of vision processing in autonomous driving systems by leveraging contrastive learning techniques. By utilizing a large dataset of images and videos, we aim to improve the accuracy and robustness of object detection and recognition algorithms.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://hyunjem.notion.site/Contrastive-Learning-1c4346dcfeb680f7a983f5f5fee0bc6b?pvs=4"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "Autonomous Turret",
      projectDesc:
        "This project aims to develop an autonomous turret system that can accurately track and target moving objects using computer vision and machine learning techniques. The turret will be equipped with a camera and a servo motor to enable precise aiming and shooting.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://hyunjem.notion.site/autonomuos-turret?pvs=4"
        }
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "Gyro-Drop",
      projectDesc:
        "The game uses the phone’s gyroscope to control a paddle by tilting the device, which in turn moves the ball. In multiplayer mode, each player is assigned control over one axis.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://hyunjem.notion.site/gyro-drop?pvs=4"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters that I have done !",

  achievementsCards: [
    {
      title: "22th Embedded Software Contest (Autonomous Driving)",
      subtitle:
        "Developed a sensor fusion system using stereo cameras and LiDAR, and implemented a reinforcement learning-based driving algorithm for autonomous navigation.",
      image: require("./assets/images/esww.png"),
      imageAlt: "Team logo",
      footerLink: [
        {
          name: "Award",
          url: "https://hyunjem.notion.site/esw-ad-award?pvs=4"
        },
        {
          name: "Activate Video",
          url: "https://hyunjem.notion.site/esw-ad-video?pvs=4"
        },
        {
          name: "Contest Review",
          url: "https://hyunjem.notion.site/2024-14a346dcfeb68097a193c1810059cd92?pvs=4"
        }
      ]
    },

    {
      title: "15th Creative Contest for Helping Underprivileged Neighbors",
      subtitle:
        "Developed a multimodal model for child care by combining audio classification and facial recognition using OpenCV.",
      image: require("./assets/images/team.jpeg"),
      imageAlt: "Team Logo",
      footerLink: [
        {
          name: "Award",
          url: "https://hyunjem.notion.site/15-cc-award?pvs=4"
        },
        {
          name: "Contest Review",
          url: "https://hyunjem.notion.site/2023-14a346dcfeb680bfbd92fc0bfa9948ee?pvs=4"
        }
      ]
    },

    {
      title: "SRC/IRC Creative Robot Contest",
      subtitle:
        "As part of our project, we designed and built WallCL, a bipedal climbing robot capable of adhering to vertical surfaces using electromagnets.",
      image: require("./assets/images/stc.JPG"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Award",
          url: "https://hyunjem.notion.site/src-irc-award?pvs=4"
        },
        {
          name: "Activate Video",
          url: "https://hyunjem.notion.site/src-irc-video?pvs=4"
        },
        {
          name: "Contest Review",
          url: "https://hyunjem.notion.site/2020-SRC-IRC-14a346dcfeb6804db11ce0bc5f771368?pvs=4"
        }
      ]
    }
  ],

  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "I love to write about my experiences and share knowledge",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://hyunjem.notion.site/thesis",
      title: "Thesis",
      description:
        " I am summarizing several research papers that caught my interest and exploring my areas of focus."
    },
    {
      url: "https://hyunjem.notion.site/contest-review?pvs=73",
      title: "Contest Review",
      description:
        "I have documented the competitions I previously participated in, along with the lessons I learned and my reflections on those experiences."
    },
    {
      url: "https://hyunjem.notion.site/project?pvs=73",
      title: "Project",
      description:
        "I am covering personal projects or seminars where I have taught students outside of competitions."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "I am open to discussing new projects and opportunities.",
  number: "+82-1046035918",
  email_address: "dlguswp010731@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
