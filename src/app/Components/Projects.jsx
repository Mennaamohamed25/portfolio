"use client";
import React , {useState , useRef} from 'react';
import ProjectsCard from './ProjectsCard';
import ProjectLinks from './ProjectLinks';
import { motion, useInView } from "framer-motion";
// Project Data
const projectsData = [
    {
        id : 1,
        title : 'Movies App',
        desc : 'Movies App using react.js to get the daily or weekly trending items. Include all movies, TV shows people integrated with themoviedb Api Using React-router-dom. Movie DB API and fetch data by Axios. Context and ReactHooks.',
        image : '/Images/prj/movie.png',
        tag :['All' , 'React'],
        gitUrl : 'https://github.com/Mennaamohamed25/Movies-React-App-a',
        liveUrl : 'https://mennaamohamed25.github.io/Movies-React-App-a/',
    },
    {
        id : 2,
        title : 'Weather Website',
        desc : 'This website displays the weather for three days using the API, and you can also search for any country to see its weather. Using javaScript , HTML and CSS.',
        image : "/Images/prj/weather.png",
        tag :['All' , 'JavaScript'],
        gitUrl : 'https://github.com/Mennaamohamed25/Weather-App',
        liveUrl : 'https://mennaamohamed25.github.io/Weather-App/',
    },
    {
        id : 3,
        title : 'CRUD',
        desc : 'This is a simple product management system using HTML, CSS, Bootstrap, and JavaScript. This project incorporates the fundamental principles of CRUD operations, enabling you to perform essential tasks such as adding products, searching for products, modifying product information, and deleting products.',
        image : '/Images/prj/crud.png',
        tag :['All' , 'JavaScript'],
        gitUrl : 'https://github.com/Mennaamohamed25/CRUD_Project.git',
        liveUrl : 'https://mennaamohamed25.github.io/CRUD/',
    },
    {
        id : 4,
        title : 'My Portfolio',
        desc : 'This is a portfolio using Next js , Tailwind css , Hooks , Resend next js API , Framer-motion , React-animated-numbers and React-type-animation .',
        image : '/Images/prj/mypro.png',
        tag :['All' , 'Next'],
        gitUrl : 'https://github.com/Mennaamohamed25/Myprofile.git',
        liveUrl : 'https://portfolio-one-ochre-89.vercel.app/',
    },

  
    {
        id : 5,
        title : 'Bookmark',
        desc : 'Bookmark website is a local storage and some features like visit , edit and delete HTML5, CSS3, Bootstrap5, Javascript, ES6+ and Regular Expression',
        image : '/Images/prj/bookmark.png',
        tag :['All' , 'JavaScript' ],
        gitUrl : 'https://github.com/Mennaamohamed25/Bookmark.git',
        liveUrl : 'https://mennaamohamed25.github.io/Bookmark/',
    },
    {
        id : 6,
        title : 'Simple Portfolio',
        desc : 'It is a simple responsive portfolio using HTML , CSS , Bootstrap.',
        image : '/Images/prj/pro.png',
        tag :['All' ],
        gitUrl : 'https://github.com/Mennaamohamed25/Designer-Profile',
        liveUrl : 'https://mennaamohamed25.github.io/Designer-Profile/',
    },
    {
        id : 7,
        title : 'Quote website',
        desc : 'This website is about the quote of the day. using HTML , CSS , Bootstrap and javaScript',
        image : '/Images/prj/qoute.png',
        tag :['All' , 'JavaScript' ],
        gitUrl : 'https://github.com/Mennaamohamed25/Quote',
        liveUrl : 'https://mennaamohamed25.github.io/Quote/',
    },

 
];

const Projects = () => {
    const [tag, setTag] = useState('All');

    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });
    // Function to handle the links or tag

    const handelLinkChange = (newLink) => {
        setTag(newLink)
    };

    // Function to Filter the projects

    const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

//   MOTIONS
const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id='projects'>
<h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>My Projects</h2>

<div className='text-white flex flex-col sm:flex-row justify-center items-center gap-2 py-6 '>

<ProjectLinks onClick={handelLinkChange} name='All' isSelected={tag === 'All'} />

<ProjectLinks onClick={handelLinkChange} name='React' isSelected={tag === 'React'} />

<ProjectLinks onClick={handelLinkChange} name='Next' isSelected={tag === 'Next'} />

<ProjectLinks onClick={handelLinkChange} name='JavaScript' isSelected={tag === 'JavaScript'} />

</div>


<ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
    {filteredProjects.map((project , index) => (
   
   <motion.li
   key={index}
   variants={cardVariants}
   initial="initial"
   animate={isInView ? "animate" : "initial"}
   transition={{ duration: 0.3, delay: index * 0.4 }}
 >

    <ProjectsCard key={project.id} title={project.title} desc={project.desc} imgUrl={project.image} gitUrl={project.gitUrl} liveUrl={project.liveUrl} />
    </motion.li>
    ))}
</ul>
    </section>
  )
}

export default Projects;