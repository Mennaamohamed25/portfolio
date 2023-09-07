"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabsButton from "./TabsButton";

// DATA ARRAY FOR TABS (SKILLS, ect..)

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-3 gap-4">
        <Image src="/Images/js.svg" alt="javascript" width={40} height={40} />

        <Image src="/Images/react.svg" alt="React png" width={40} height={40} />

        <Image src="/Images/ts.svg" alt="TypeScript  " width={40} height={40} />

        <Image src="/Images/redux.svg" alt="Redux  " width={40} height={40} />

        <Image src="/Images/next.svg" alt="Redux  " width={40} height={40} />

        <Image
          src="/Images/html.svg"
          alt="HTML HTML5 "
          width={40}
          height={40}
        />

        <Image src="/Images/css.svg" alt="CSS CSS3 " width={40} height={40} />

        <Image src="/Images/sass.svg" alt="SASS " width={40} height={40} />

        <Image
          src="/Images/boot.svg"
          alt="Bootstrap  "
          width={40}
          height={40}
        />
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-style-none">
        <li className="mb-4">
          Frontend development diploma at Route IT center
        </li>

        <li>Frontend development diploma in 1MAC</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <p> Bachelor of Business administration at Ain Shams Class 2020</p>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  // Function to handel the tabs control
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white " id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 ">
        {/* IMAGE */}
        <Image
          src="/Images/about.png.jpeg"
          alt="my pic"
          width={400}
          height={400}
          className="m-auto sm:m-0  rounded-lg  mb-16 sm:mb-0"
        />
        {/* HEADER */}
        <div>
          <h2 className="text-4xl font-bold text-white mb-4 ">About Me</h2>
          <p className="text-base lg:text-lg">
            I&apos;m a Frontend developer with a passion for creating interactive and
            responsive web applications. I have experience working with
            JavaScript, ES6 , React js , Redux , Next js , TypeScript , JQuery ,
            HTML5 , CSS3, Context API and GitHub. I&apos;m a quick learner and i&apos;m
            always looking to expend my knowledge and skill set. I&apos;m a team
            player and I&apos;m excited to work with others to create amazing
            applications.
          </p>
          {/* TABS */}
          <div className="flex flex-row mt-8">
            <TabsButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabsButton>
            <TabsButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabsButton>
            <TabsButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabsButton>
          </div>

          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
