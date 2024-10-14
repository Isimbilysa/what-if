
'use client'
import benita from "@/assets/beni.png";
import Line from "@/assets/hr.png";
import josh from "@/assets/josh.jpg";
import team from "@/assets/mutoni.jpg";
import third from "@/assets/third.jpg";
import { useState } from 'react';

const teamMembers = [
  {
    name: 'Umutoniwase Francois',
    role: 'Mentors manager',
    image: team,
    description: 'I joined WHAT-IF Rwanda after I visited their page on Facebook...',
    fullDescription: 'I joined WHAT-IF Rwanda after I visited their page on Facebook. Since then, I have been working with the team to support and guide our young mentors towards building a better future for Rwanda.',
  },

  {
    name: 'Gwaneza Benita',
    role: 'Mentors manager',
    image: benita,
    description: 'I joined WHAT-IF Rwanda after I visited their page on Facebook...',
    fullDescription: 'I joined WHAT-IF Rwanda after I visited their page on Facebook. Since then, I have been working with the team to support and guide our young mentors towards building a better future for Rwanda.',
  },

  {
    name: 'Gakoni Nogueille',
    role: 'Mentors manager',
    image: third,
    description: 'I joined WHAT-IF Rwanda after I visited their page on Facebook...',
    fullDescription: 'I joined WHAT-IF Rwanda after I visited their page on Facebook. Since then, I have been working with the team to support and guide our young mentors towards building a better future for Rwanda.',
  },
  {
    name: 'Josh Plante',
    role: 'Mentors manager',
    image: josh,
    description: 'I joined WHAT-IF Rwanda after I visited their page on Facebook...',
    fullDescription: 'I joined WHAT-IF Rwanda after I visited their page on Facebook. Since then, I have been working with the team to support and guide our young mentors towards building a better future for Rwanda.',
  },
  {
    name: 'ABAYO Jean Aime',
    role: 'Mentors manager',
    image: team,
    description: 'I joined WHAT-IF Rwanda after I visited their page on Facebook...',
    fullDescription: 'I joined WHAT-IF Rwanda after I visited their page on Facebook. Since then, I have been working with the team to support and guide our young mentors towards building a better future for Rwanda.',
  },
  {
    name: 'ABAYO Jean Aime',
    role: 'Mentors manager',
    image: team,
    description: 'I joined WHAT-IF Rwanda after I visited their page on Facebook...',
    fullDescription: 'I joined WHAT-IF Rwanda after I visited their page on Facebook. Since then, I have been working with the team to support and guide our young mentors towards building a better future for Rwanda.',
  },
  {
    name: 'ABAYO Jean Aime',
    role: 'Mentors manager',
    image: team,
    description: 'I joined WHAT-IF Rwanda after I visited their page on Facebook...',
    fullDescription: 'I joined WHAT-IF Rwanda after I visited their page on Facebook. Since then, I have been working with the team to support and guide our young mentors towards building a better future for Rwanda.',
  },
];

const TheTeam = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const [direction, setDirection] = useState(''); // track animation direction

  const nextSlide = () => {
    setDirection('next'); // Set direction for animation
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(teamMembers.length / 3));
    }, 300); // Animation delay for the transition effect
  };

  const prevSlide = () => {
    setDirection('prev'); // Set direction for animation
    setTimeout(() => {
      setCurrentSlide((prev) =>
        prev === 0 ? Math.ceil(teamMembers.length / 3) - 1 : prev - 1
      );
    }, 300); // Animation delay for the transition effect
  };

  const displayedTeam = teamMembers.slice(currentSlide * 3, currentSlide * 3 + 3);

  return (
    <section className="bg-white py-16">
      <h3 className="text-primary text-center text-[40px] font-bold py-3 ">The team</h3>
      <img src={Line.src} alt="line" className="mx-auto pb-3 w-[88px]" />
      <p className="text-center text-secondary mb-12 font-[400] text-[16px] ">
        Meet the members of the united helping hand, making all WHAT-IF Rwanda’s plan turn into reality
      </p>

      {/* Team Members Grid */}
      <div className="relative mx-[80px] md:px-8 overflow-hidden">
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-3 transform transition-transform duration-500 ease-in-out ${direction === 'next' ? 'animate-slide-left' : direction === 'prev' ? 'animate-slide-right' : ''
            }`}
        >
          {displayedTeam.map((member, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden aspect-square "
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <img
                src={member.image.src}
                alt={member.name}
                className="w-full  object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 text-white">
                <h4 className="text-lg font-[600] text-[20px]  ">{member.name}</h4>
                <p className="text-[16px] font-[500] text-primary  ">{member.role}</p>
                <p
                  className={`mt-2 text-[16px] font-[400] transition-all duration-500 ease-in-out  overflow-hidden 
                  ${hoveredMember === index ? 'opacity-100 max-h-[1000px] translate-y-0' : 'opacity-0 max-h-0 translate-y-2'}`}
                >
                  {hoveredMember === index ? member.fullDescription : member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex float-right pr-[110px]  mt-8 space-x-4">
        <button
          onClick={prevSlide}
          className="flex items-center justify-center bg-primary text-white w-12 h-12 rounded-md  hover:bg-white hover:text-primary hover:border-2 hover:border-primary transition-all"
        >
          &#x2190;
        </button>
        <button
          onClick={nextSlide}
          className="flex items-center justify-center bg-primary text-white w-12 h-12 rounded-md hover:bg-white hover:text-primary hover:border-2 hover:border-primary transition-all"
        >
          &#x2192;
        </button>
      </div>
    </section>
  );
};

export default TheTeam;
