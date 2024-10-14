// 
// import About from '../../assets/About.png'
import Line from '../../assets/hr.png'

const Program = () => {
  return (
   <section className="bg-white py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
      About our programs
    </h2>
    <img src={Line} alt="line" className="w-[80px] sm:w-[111px] mb-4" />
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-[50px]">
      <div>
        <p className="text-lg sm:text-xl font-bold text-black mb-4">
          Mentorship program
        </p>
        <p className="text-sm sm:text-base text-secondary mb-6 max-w-full lg:max-w-2xl">
          Our Mentorship Program is dedicated to creating external family bonds for children from vulnerable communities. Many of these children have lost one or both parents and face a world where love, protection, and support are scarce. In response, our mentors step in as “aunties” and “uncles,” offering the care and emotional support these children need. Mentors celebrate key milestones like baptisms, class promotions, and birthdays with their mentees, and provide comfort and encouragement during challenging times such as illness or personal struggles. The involvement of each mentor is supported by a contribution of a minimum of 5,000 RWF per month. While this may seem modest individually, when combined with other contributions, it creates a substantial impact, ensuring that each child receives the essential care and nurturing they need to thrive.
        </p>
      </div>
      <div>
        <p className="text-lg sm:text-xl font-bold text-black mb-4">
          Sponsorship program
        </p>
        <p className="text-sm sm:text-base text-secondary mb-6 max-w-full lg:max-w-2xl">
          Our Sponsorship Program provides crucial financial support to cover the essential needs of children at the Iramiro Center. By sponsoring a child, you contribute to their overall well-being, helping to provide food, education, health care, and other necessities. Your sponsorship also plays a vital role in ensuring these children have the resources they need to succeed and grow. Each contribution, whether a one-time gift or a recurring donation, directly supports the child’s development and helps create a stable and supportive environment. Your financial support, combined with the collective efforts of others, makes a significant difference in the lives of these children, offering them the chance to build a brighter future.
        </p>
      </div>
    </div>

    <button className="px-6 py-4 w-fit rounded-full bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all mt-6">
      Get Involved
    </button>
  </div>
</section>

  )
}

export default Program
