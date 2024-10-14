import Profile2 from '../../assets/beni.png';
import Comma from '../../assets/comma.png';
import Line from '../../assets/hr.png';
import Profile1 from '../../assets/mutoni.jpg';

const testimonialsData = [
  {
    profile: Profile1,
    name: 'Umutoniwase Francoise',
    text: `Supporting others has always been a part of my life, and I've been blessed to receive the same. Our kids have faced challenges they may not fully understand, and without guidance, these experiences could shape their future. "Being the source of their smile" is about offering hope, strength, and belief in their ability to overcome. "WHAT IF" empowers them with choices, mentorship, and a future to dream big and succeed.`
  },
  {
    profile: Profile2,
    name: ' Gwaneza Benita',
    text: `It's inspiring to witness these children grow into talented individuals, which motivates me to continue making a difference, even in small ways. Mentoring Esther since 2017 has brought me immense joy and pride, making me feel special as her aunt. I'm also deeply grateful for the sisters' unwavering love and dedication to the children. May God bless them.`
  }
];

const Testimonials = () => {
  return (
    <div className="bg-white py-12 text-center mb-9 px-4 md:px-[150px]">
      <div className="justify-center items-center text-center mb-9">
        <h2 className="text-primary text-2xl md:text-3xl font-semibold">Testimonials</h2>
        <p className="text-secondary mt-2 mb-8 text-sm md:text-base">
          Words from members of WHAT IF Rwanda
        </p>
        <img src={Line} alt="line" className="mx-auto w-16 md:w-auto" />
      </div>
      <div className="flex flex-col md:flex-row justify-center md:space-x-[70px] space-y-8 md:space-y-0">
        {testimonialsData.map((testimonial, index) => (
          <div 
            key={index} 
            className="max-w-lg shadow-lg shadow-slate-100 p-8 md:p-14 mx-auto md:mx-0"
          >
            <img
              className="rounded-full mx-auto w-[80px] md:w-[114px] aspect-square"
              src={testimonial.profile}
              alt={testimonial.name}
            />
            <img
              className="w-[50px] md:w-[70px] h-[39px] aspect-square mt-4 mx-auto"
              src={Comma}
              alt="comma icon"
            />
            <h3 className="text-black font-[600] text-[18px] md:text-[20px] mt-4">
              {testimonial.name}
            </h3>
            <p className="text-[#7D8690] mt-2 text-[14px] md:text-[16px] font-[400]">
              {testimonial.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
