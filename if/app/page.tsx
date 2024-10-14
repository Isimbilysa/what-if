
import BgImage from "@/assets/bg.jpg";
import Community from "@/assets/Community.png";
import Donate from "@/assets/donate.png";
import Volunteer from "@/assets/volunteer.png";
import Who from "@/assets/who.png";
import { PlusIcon } from '@heroicons/react/24/solid';
import Events from "../components/Events/Event";
import Join from '../components/Join/Join';
import Program from "../components/Program/program";
import Testimonials from '../components/Testimonial/Testimonial';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative">
        <img
          src={BgImage.src}
          alt="Hero"
          className="w-full h-[70vh] object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center gap-4 text-white bg-gradient-to-r from-black/80 to-transparent px-4 sm:px-8 md:px-[150px]">
          <h6 className="text-primary font-bold text-[12px] sm:text-[15px]">
            WHAT IF RWANDA
          </h6>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4">
            Be a source for their smile
          </h1>
          <p className="text-xl sm:text-md opacity-80 mb-6 w-full md:w-1/2">
            WHAT IF-Rwanda is an organization started by Rwandan Youth who seek to bring a smile to needy kids in their community by providing basic needs such as food, clothing, education, and love. Also, there is a mentorship program for the kids.
          </p>
          <div className="flex items-center space-x-4">
            <button className="flex items-center bg-primary text-black px-6 sm:px-7 py-2 sm:py-3 rounded-full hover:bg-transparent hover:text-primary hover:border-primary border-2 border-transparent transition-all">
              <PlusIcon className="h-5 w-5 mr-2" />
              Get Involved
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-2">
            Get involved
          </h2> */}
          <div className="flex flex-wrap justify-center  gap-8">
            {/* First Row: 3 Divs */}
            <div className="text-center py-5 px-3 w-fit md:max-w-sm">
              <div className="flex items-center justify-center mb-4">
                <img src={Donate.src} alt="Donate" className="h-16 w-16" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">DONATE</h3>
              <p className="text-secondary mb-4">
                Your financial contributions, no matter the size, help us sustain and expand our programs, ensuring we can reach more children and provide them with the support they need.

              </p>
              <button className="bg-white text-primary px-6 py-3 rounded-full border-2 border-primary hover:bg-primary hover:text-white transition-all">
                Donate
              </button>
            </div>

            <div className="text-center py-5 px-3 w-fit md:max-w-sm">
              <div className="flex items-center justify-center mb-4">
                <img src={Volunteer.src} alt="Volunteer" className="h-16 w-16" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">Become a Mentor</h3>
              <p className="text-secondary mb-4">
                Offer your time and care to a child in need, creating a meaningful connection that supports their growth and well-being.
              </p>
              <button className="bg-white text-primary px-6 py-3 rounded-full border-2 border-primary hover:bg-primary hover:text-white transition-all">
                Join us
              </button>
            </div>

            <div className="text-center py-5 px-3 w-fit md:max-w-sm">
              <div className="flex items-center justify-center mb-4">
                <img src={Community.src} alt="Community Visit" className="h-16 w-16" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">Sponsor a Child</h3>
              <p className="text-secondary mb-4">
                Provide financial support to cover a child's essential needs and contribute to their overall development.
              </p>
              <button className="bg-white text-primary px-6 py-3 rounded-full border-2 border-primary hover:bg-primary hover:text-white transition-all">
                Contact us
              </button>
            </div>

            <div className="text-center  py-5 px-3 w-fit md:max-w-sm ">
              <div className="flex items-center justify-center mb-4">
                <img src={Community.src} alt="Community Visit" className="h-16 w-16" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">Volunteer </h3>
              <p className="text-secondary mb-4">
                Experience our community firsthand. Witness resilience, share experiences, and inspire empathy through our unique visits.
              </p>
              <button className="bg-white text-primary px-6 py-3 rounded-full border-2 border-primary hover:bg-primary hover:text-white transition-all">
                Contact us
              </button>
            </div>

            <div className="text-center py-5 px-3 w-fit md:max-w-sm md:col-span-1">
              <div className="flex items-center justify-center mb-4">
                <img src={Community.src} alt="Community Visit" className="h-16 w-16" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">Spread the Word</h3>
              <p className="text-secondary mb-4">
                Share our mission with friends, family, and your network to amplify our message and encourage others to join us in making a positive impact.

              </p>
              <button className="bg-white text-primary px-6 py-3 rounded-full border-2 border-primary hover:bg-primary hover:text-white transition-all">
                Contact us
              </button>
            </div>
          </div>
        </div>
        <p className="text-center text-secondary text-lg max-w-4xl mx-auto mt-16">
          Every action you take helps us build a brighter future for these children. Whether through mentorship, financial support, or spreading the word, your involvement is invaluable in creating lasting change. Together, we can be the source of their smiles and a beacon of hope in their lives.
        </p>
      </section>



      <section className="bg-white h-fit" style={{
        backgroundImage: `url(${Who.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        {/* <img
          src={Who.src}  
          alt="Who we are"
          className="w-full  object-cover"
        /> */}
        <div className="inset-0 flex flex-col my-[100px] text-white bg-black/80 md:px-[80px] px-4 md:mx-[160px]  md:w-[848px] w-full  md:py-20 py-[20px]">
          <h2 className="text-3xl md:text-4xl font-bold text-primary ">Who we are</h2>
          <p className='text-white mb-4'>Get to know what WHAT-IF RWANDA really is. Its work and the people behind its operation.</p>

          <p className=" mb-6  ">
            Situated at the Iramiro Center in Busanza, Kanombe, our organization is dedicated to making a difference in the lives of 34 children born with HIV/AIDS. The children, without families to love, protect, and care for them, are under the devoted care of 10 nuns who call themselves <i>“Inshuti zabakene”</i> meaning “Friends of the Poor.”
          </p>
          <button className="  flex items-center text-center justify-center bg-transparent text-primary px-6 py-3 rounded-full py-4 border-primary border-2 hover:bg-primary hover:text-white  transition-all w-[168px] h-[54px] ">
            Join the team
          </button>
        </div>
      </section>
      <Events />
      <Program />
      <Testimonials />
      <Join />
    </div>
  );
}

export default Home;
