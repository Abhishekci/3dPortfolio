import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "Avia Technologies",
      //icon: starbucks,
      iconBg: "#383E56",
      date: "April 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Project Associate / Web Developer",
      company_name: "UV Green Energy Services",
      //icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using HTML, CSS and JS and other related technologies.",
        "Led and executed 4 CSR projects while spearheading the development of a comprehensive social media campaign and innovatively creating a Telegram bot for job listings, showcasing technical leadership and engagement",
        "Architected and managed multiple websites efficiently, including implementing automation solutions with Python to streamline operational tasks and enhance productivity.",
      ],
    },
  
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Abhishek proved me wrong.",
      name: "Prasad Vagger",
      designation: "Backend Engineer - Good boy",
      company: "Avia Technologies",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQHrQDQYOTq2Xw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1705144277982?e=1738800000&v=beta&t=fqVwwpD5RYVN6RYSM-7PDQEfgzbxuSOVoHfSCQP8xis",
    },
    {
      testimonial:
        "Abhishek delivered a seamless and visually stunning website that perfectly aligned with our vision, showcasing exceptional web development skills and attention to detail.",
      name: "MARUTHI B M",
      designation: "Backend Engineer - Lead",
      company: "Avia Technologies",
      image: "https://media.licdn.com/dms/image/v2/C4D03AQHdHg8YqIYwVQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1661428693460?e=1738800000&v=beta&t=X4IYiXnZpRZmP8pMlSThgYSeqP0_HVx0e1B9eI-s1E4",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Abhishek does.",
      name: "Sangmeshwar PH",
      designation: "QA Lead",
      company: "Avia Technologies",
      image: "https://media.licdn.com/dms/image/v2/D5603AQHHvMUILhD1uw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1726842864790?e=1738800000&v=beta&t=7wfYLJd4YBF-J7eTFgsCZ9bq5OpbuM8M9sbRt1NJ8iM",
    },
    {
      testimonial:
        "After Abhishek optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Ganavi T S",
      designation: "Backend Engineer",
      company: "Avia Technologies",
      image: "https://media.licdn.com/dms/image/v2/D4D35AQFjokmKVTZuCQ/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1726812153598?e=1734192000&v=beta&t=2shmucIVVxsgw7htGKpNGqGdhgF3vZNJSssr_JHHHpU",
    },
    {
      testimonial:
        "Abhishek's expertise in web development transformed our ideas into a user-friendly, responsive, and visually captivating website.",
      name: "Dharini Maharana",
      designation: "Backend Engineer",
      company: "Avia Technologies",
      image: "https://media.licdn.com/dms/image/v2/C5103AQHFFqRbVh6VRA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1516897255858?e=1738800000&v=beta&t=zizdBp55eg3zLo3Oq1mTZLzHwwdorQZgTk1xJkWWP1Q",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };