"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Member from "./components/Member";
import Event from "./components/Event";
import { RiUserCommunityFill } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi";

export default function Home() {
  const [year, setYear] = useState("2025-2026"); // default selected year

  // Members data
  // we define a type for clarity so we don't need to resort to `any`
  interface MemberData {
    name: string;
    position: string;
    pronouns: string;
  }

  const membersByYear: Record<string, MemberData[]> = {
    "2025-2026": [
      { name: "Dana Kim", position: "President", pronouns: "she/her" },
      { name: "Vivian Choi", position: "Vice-President", pronouns: "she/her" },
      { name: "Aiden Yoon", position: "Treasurer", pronouns: "he/him" },
      { name: "Sunny Hwang", position: "Webmaster", pronouns: "he/him" },
      { name: "Ariel Chun", position: "Secretary", pronouns: "she/her" },
      { name: "Claire Cho", position: "Member", pronouns: "she/her" },
      { name: "Rebecca Jeong", position: "Member", pronouns: "she/her" },
    ],
    "2024-2025": [
      { name: "Artem Kim", position: "President", pronouns: "he/him" },
      { name: "Tanvi Kumar", position: "Vice-President", pronouns: "she/her" },
      { name: "Dana Kim", position: "Secretary", pronouns: "she/her" },
      { name: "Vivian Choi", position: "Webmaster", pronouns: "she/her" },
      { name: "Aiden Yoon", position: "Treasurer", pronouns: "he/him" },
      { name: "Roenne Arjona", position: "Member", pronouns: "she/her" },
    ],
  };

  return (
    <>
      {/* Banner */}
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('/banner.jpg')", height: "100vh" }}
      >
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="relative flex flex-col h-full items-center justify-center">
          <h1
            className="text-white md:text-8xl md:px-0 px-8 text-7xl font-bold mb-3 text-center"
            data-aos="fade-down"
          >
            Computer Science Honor Society
          </h1>
          <p
            className="text-white md:text-4xl text-3xl mb-12"
            data-aos="fade-up"
          >
            Busan Foreign School
          </p>
          <Button color="blue" href="#learn-more" data-aos="fade-up">
            Learn more
          </Button>
        </div>
      </div>

      {/* Learn more section */}
      <div id="learn-more" className="container mx-auto">
        <div className="mb-12" data-aos="fade-right">
          <h1 className="text-7xl text-white md:text-left text-center mt-16 font-bold mb-5">
            Who are{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500 text-transparent bg-clip-text">
              we
            </span>
            ?
          </h1>
          <p className="text-2xl text-white md:px-0 px-8 md:ml-16">
            The BFS Computer Science Honor Society is an organization supported
            by the Computer Science Teachers Association and established at BFS
            to encourage students’ enthusiasm for computer science, to honor
            academic excellence, and to promote service.
          </p>
        </div>
        <div
          className="md:grid md:grid-cols-12 md:text-left text-center mb-12"
          data-aos="fade-right"
        >
          <h1 className="md:col-span-4 text-7xl text-white self-center font-bold md:mb-0 mb-5">
            Our{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500 text-transparent bg-clip-text">
              Goals
            </span>
          </h1>
          <div className="md:col-span-8 grid auto-rows-auto gap-4 md:px-0 px-8">
            <Card
              title="Recognize and Promote Academic Excellence"
              color="blue"
              icon={HiOutlineAcademicCap}
            >
              Celebrate and encourage high-achieving students in computer
              science through honor rolls, awards, and scholarship
              opportunities.
            </Card>
            <Card
              title="Foster Professional Development"
              color="blue"
              icon={FaLaptopCode}
            >
              Provide workshops, speaker events, and mentorship programs that
              help members build technical skills, leadership qualities, and
              career-readiness.
            </Card>
            <Card
              title="Serve and Engage the Community"
              color="blue"
              icon={RiUserCommunityFill}
            >
              Organize outreach activities—such as coding clubs for younger
              students, hackathons, or open-source contributions—to share
              computing knowledge and give back.
            </Card>
          </div>
        </div>
      </div>

      {/* Club photos */}
      <div className="container mx-auto mb-12">
        <div
          className="md:grid md:grid-cols-4 md:px-0 px-8 grid auto-rows-auto gap-6"
          data-aos="fade-down"
        >
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="relative h-48 w-full shadow-xl">
              <Image
                className="object-cover rounded-2xl transition-transform duration-300 ease-in-out hover:scale-110"
                src={`/ClubPhotos/${num}.jpg`}
                alt="cshs"
                fill
              />
            </div>
          ))}
        </div>
      </div>

      {/* Club members */}
      <div id="members" className="container mx-auto mb-12">
        <h1
          className="text-7xl text-white font-bold text-center"
          data-aos="fade-right"
        >
          Our Club{" "}
          <span className="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-transparent bg-clip-text">
            Hackers
          </span>
        </h1>

        {/* Year selection buttons */}
        <div className="flex justify-center mt-5 gap-x-5 mb-12" data-aos="fade-right">
          <Button
            color={year === "2024-2025" ? "green" : "blue"}
            onClick={() => setYear("2024-2025")}
          >
            2024-2025
          </Button>
          <Button
            color={year === "2025-2026" ? "green" : "blue"}
            onClick={() => setYear("2025-2026")}
          >
            2025-2026
          </Button>
        </div>

        {/* Members list */}
        <div className="lg:grid grid-col-3 gap-y-8" data-aos="fade-up">
          {membersByYear[year].map((member, idx) => (
            <div className="flex justify-center gap-x-5 mb-5" key={idx}>
              <Member
                name={member.name}
                position={member.position}
                pronouns={member.pronouns}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Events */}
      <div className="container mx-auto mb-16" id="events" data-aos="fade-right">
        <h1 className="text-7xl text-white font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-transparent bg-clip-text">
            Get involved
          </span>{" "}
          with our events!
        </h1>

        <div className="grid auto-rows-auto gap-y-5 md:px-0 px-8">
          <Event
            name="Gamemaker Workshop"
            date=""
            finished={true}
            eventType="Workshop"
            description="A fun 2d platformer development workshop for beginners to explore their interests in game design."
          />
          <Event
            name="Codementum"
            date=""
            finished={true}
            eventType="Competition"
            description="We at BFS hosted the Codementum Competition in partnership with Hack Club, Shark.dev, and student leaders from CSHS, bringing together elementary school students to explore coding in a fun and collaborative way. Participants tackled creative challenges, built projects, and shared their ideas, guided by mentors and student organizers who encouraged curiosity and problem-solving."
          />
          <Event
            name="GoDot Platformer Workshop"
            date="October 15, 2025"
            finished={true}
            eventType="Workshop"
            description="BFS hosted an exciting workshop through BFS_Shark.dev to teach students how to create their own 2D platformer games using the Godot game engine. Participants learned the fundamentals of game development, brought their ideas to life, and uploaded their completed games to GitHub to share with the community."
          />
          <Event
            name="Boba Drops Workshop"
            date="April 24, 2025"
            finished={true}
            eventType="Workshop"
            description="We at BFS hosted the Bob Drops Workshop to help students create their own websites and celebrate their presence on the web. Participants brought their personal ideas to life using HTML and CSS, hosted their sites on GitHub, and proudly shared their work with the community—earning a boba reward along the way."
          />
          <Event
            name="Scrapyard Busan"
            date="March 15-16, 2025"
            finished={true}
            eventType="Hackathon"
            description="We at BFS High School’s Computer Science Honor Society hosted Korea’s first-ever ScrapYard Hackathon, bringing together students from Busan, Daegu, Seoul, and beyond to create clever and delightfully useless projects. Inspired by our own hackathon experiences earlier this year, we planned and executed the event with guidance from Dr. Barnes and support from Hack Club, welcoming over 50 participants who built 18 unique projects."

          />        </div>
      </div>
    </>
  );
}
