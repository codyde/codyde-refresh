import Image from "next/image";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import SubHead from "./SubHead";
import HeaderText from "./HeaderText";

const Hero: React.FC = () => {
  return (
    <div className="grid lg:flex lg:flex-row mt-4 lg:mt-36">
      <div className="w-full lg:w-1/3 justify-center">
        <Image
          src="/images/me.png"
          alt="Picture of Cody speaking at LaunchDarkly Galaxy"
          height={400}
          width={400}
          className="shadow-2xl rounded-2xl mx-auto"
        />
      </div>
      <div className="w-full lg:w-2/3 space-y-8 lg:pl-8">
        <div className="border-b-4 border-b-orange-600">
          {/* <p className="text-4xl md:text-6xl font-bold text-orange-600 pt-4 lg:pt-0">
            Hello, My name is Cody 👋
          </p> */}
          <HeaderText />
          {/* <p className="text-lg md:text-2xl font-semilight  pt-4  pb-8">
            I'm a builder, marketer, husband, father, friend, and frequent BBQ
            cooker
          </p> */}
          {/* <SubHead /> */}
          <div className="py-8 flex flex-row justify-center space-x-3">
          <a
              href="https://github.com/codyde"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={32} className="dark:text-white text-black" />
            </a>
            <a
              href="https://twitter.com/codydearkland"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter
                size={32}
                className="dark:text-white text-black "
              />
            </a>
            <a
              href="https://linkedin.com/in/codydearkland"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={32}
                className="dark:text-white text-black "
              />
            </a>
           
            <a
              href="https://instagram.com/codydearkland"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={32}
                className="dark:text-white text-black"
              />
            </a>
          </div>
        </div>
        <p className="text-lg xl:text-xl">
        I'm a builder, marketer, husband, father, friend, and frequent BBQ cooker. 
        </p>
        
        <p className="text-lg xl:text-xl">
        I work at{" "}
          <a
            className="text-orange-500 font-bold hover:text-orange-500/50"
            href="https://www.launchdarkly.com"
          >
            LaunchDarkly
          </a>{" "}
          where I look after the Developer Experience team. Our team delivers technical enablement internally and externally, builds technical and thought leadership content across written, presentation, and video platforms, creates field demonstration content, builds developer education content and engages in community and advocacy activities.
        </p>

        <p className="text-lg xl:text-xl">
          When I'm not doing leadershippy things, I enjoy creating content
          across all mediums - video, written, or presentation. I love learning
          and the majority of my slack messages are something new I learned in
          any given week. I'm passionate about mental health, community, and
          mentorship. When I'm not working, I'm hanging out with my wife{" "}
          <a
            className="text-orange-500 font-bold hover:text-orange-500/50"
            href="https://www.instagram.com/p/CvT_pMWxTNO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          >
            Shannon
          </a>
          , our daughters{" "}
          <a
            className="text-orange-500 font-bold hover:text-orange-500/50"
            href="https://www.instagram.com/p/C1QilXFxryU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          >
            Hayley and Morgan
          </a>
          , training my{" "}
          <a
            className="text-orange-500 font-bold hover:text-orange-500/50"
            href="https://www.instagram.com/p/Cshs_POhloU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          >
            Goldendoodle Charlie
          </a>
          , or working on my BBQ craft and the journey to smoke the perfect
          piece of meat.
        </p>
        <p className="text-lg xl:text-xl">
          In my past lives I've had a variety of engineering, operational, and
          architecture roles within the utility industry, as well as a mix of
          sales, marketing, and advocacy roles at VMware, HashiCorp, and Kong.
        </p>
      </div>
    </div>
  );
};

export default Hero;
