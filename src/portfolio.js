
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Jeremy Bellemur",
  title: "Hi all, I'm Jeremy Bellemur",
  subTitle: "Actor",
  resumeLink: "https://drive.google.com/file/d/1jbCz_8k-UWRALMNO3o8_JkIgsErHVn3V/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  icloud: "jbellemur@icloud.com",
  instagram: "https://www.instagram.com/jbellemur/"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const aboutSection = {
  title: "About Me",
  subTitle: "Film and TV actor from the Bay Area",
  text: "I want to better myself and grow as a person. I love to pursue my fitness goals, try new things, and learn as much as I can. I am always excited to push my comfort zone and take every opportunity as a lesson learned.",

};



/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "jeuchi", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};



// Gallery Sections

const gallerySection = {
  title: "Gallery",
  subtitle: emoji("Headshots"),

  images: [
  { url: 'https://i.ibb.co/bJWNcDj/Headshot-Jan-2020-Final.jpg' },
  { url: 'https://i.ibb.co/q1fq7HC/Head-Shot-D.jpg' },
  ]
};

// Podcast Section

const reelsSection = {
  title: emoji("Reels 🎥"),
  subtitle: "Watch me in action!",

  // Please Provide with Your Podcast embeded Link
  reels: ["temp", ]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project with me!",
  number: "(650)-308-8559",
  email_address: "jbellemur@icloud.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @
  
};

export { greeting, socialMediaLinks, aboutSection, openSource, gallerySection, reelsSection, contactInfo , twitterDetails};
