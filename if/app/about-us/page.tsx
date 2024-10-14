import Bg from '@/assets/bg.jpg'
import Line from '@/assets/hr.png'
import Mentor from '@/assets/Mentor.png'
import Mission from '@/assets/mission.jpg'
import TheTeam from '@/components/Team/team'
import { sharedMetadata } from '@/utils/shared-meta'
import { Metadata } from 'next'
import Join from '../../components/Join/Join'

export const metadata: Metadata = {
    ...sharedMetadata,
    title: "WHAT IF-Rwanda | About Us",
};


const AboutUs = () => {
    return (
        <div className="bg-white ">
            {/* Hero Section */}
            <div className="relative">
                <img
                    src={Bg.src}
                    alt="About Us Hero"
                    className="w-full h-[200px] md:h-[300px] object-cover" // Adjust height for mobile and larger screens
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center px-4 md:px-[150px] text-center md:text-left">
                    {/* <p className="text-primary text-[12px] md:text-[15px] font-[700] opacity-0 md:opacity-100"> 
      WHAT IF RWANDA
    </p> */}
                    <h1 className="text-white text-[36px] md:text-[64px] font-bold py-2">
                        About Us
                    </h1>
                    <p className="text-white text-sm md:text-base mt-2">
                        Learn more about the organisation and its actions.
                    </p>
                </div>
            </div>

            <section className="flex flex-col items-center justify-center py-12 bg-white text-center px-[20vw] px-[150px]">
                <h6 className="py-3 ">How We Contribute</h6>
                <h2 className="text-primary text-3xl font-bold  ">Our story</h2>
                <img src={Line.src} alt="line" className="my-4  w-[88px]" />
                <p className="text-black text-[24px] font-[500] mb-4  ">
                    "Empowering Dreams: Building Hope for Rwanda's Vulnerable Youth"
                </p>
                <p className="text-[#AEAEB2] text-[16px] font-[400]  mb-8">
                    WHAT IF-Rwanda is a youth-driven movement dedicated to bringing hope and positive change to vulnerable communities, with a focus on children who are our present and future. Currently working with the Iramiro Center, we collaborate with 10 nuns known as 'Inshuti zabakene,' or 'Friends of the Poor,' to provide an enabling environment where children can dream and hope for a better tomorrow. Our mentorship and sponsorship programs aim to create external loving families for these children, offering them essential support and guidance to foster their growth and aspirations.

                </p>
                <button className=" font-[400] bg-transparent border-2 border-primary text-primary font-semibold py-4 px-8 rounded-full py-4 hover:bg-primary hover:text-white transition duration-300 text-[16px]">
                    Get involved
                </button>
            </section>

            <div className="mx-auto py-12 px-4 lg:px-[150px]">
                <div className="">
                    <div className="grid grid-cols-1 lg:grid-cols-2 px-4 lg:px-6 gap-4">
                        <img
                            src={Mission.src}
                            alt="Mission"
                            className="object-cover h-[20vh] lg:h-[30vh] w-full"
                        />
                        <div className="">
                            <p className="text-[#C7C7CC] font-[400] text-[10px] lg:text-[12px]">
                                Our Aim is
                            </p>
                            <h2 className="text-primary text-[24px] lg:text-[40px] font-bold">
                                Our mission
                            </h2>
                            <img src={Line.src} alt="line" className="py-3 w-[50px] lg:w-[88px]" />
                            <p className="text-secondary mt-2 text-[14px] lg:text-base">
                                Drawing on our life experiences, we strive to empower individuals from
                                underserved communities to envision and aspire to a better future. By
                                nurturing their dreams and hopes, we enable them to take decisive
                                action that drives meaningful change in their lives and communities.
                            </p>
                        </div>
                        <div className="py-4 px-4 flex flex-col gap-4 justify-center h-full">
                            <p className="text-[#C7C7CC] font-[400] text-[10px] lg:text-[12px]">
                                Our Aim is
                            </p>
                            <h2 className="text-primary text-[24px] lg:text-[40px] font-bold">
                                Our vision
                            </h2>
                            <img src={Line.src} alt="line" className="py-3 w-[50px] lg:w-[88px]" />
                            <p className="text-secondary mt-2 text-[14px] lg:text-base">
                                To create a world where every vulnerable child is nurtured, empowered,
                                and given the opportunity to realize their full potential, transforming
                                their lives and communities through love, mentorship, and sustainable
                                support. We envision a future where hope thrives, dreams are attainable,
                                and every child smiles with the confidence of a brighter tomorrow.
                            </p>
                        </div>
                        <img
                            src={Mission.src}
                            alt="Vision"
                            className="object-cover h-[20vh] lg:h-[30vh] w-full"
                        />
                    </div>
                </div>
            </div>


            <section className="bg-[#E7EAF2] py-16 flex flex-col md:flex-row items-center justify-center">
                <div className="flex flex-col md:flex-row px-4 md:px-[100px] gap-6 items-center md:items-start">
                    <img
                        src={Mentor.src}
                        alt="Founder"
                        className="w-[250px] h-[250px] md:w-[572px] md:h-[572px] rounded-full py-4 object-cover mb-6 md:mb-0 md:mr-8"
                    />
                    <div className="text-secondary px-4 md:px-0 gap-5">
                        <h6 className="text-[#C7C7CC] text-[12px] md:text-[13px] py-3">
                            How We Contribute
                        </h6>
                        <h3 className="text-primary text-[24px] md:text-[40px] font-bold mb-4">
                            Word from the Founder
                        </h3>
                        <img src={Line.src} alt="line" className="pb-3 w-[50px] md:w-[88px]" />
                        <p className="mb-4 text-[#AEAEB2] font-[400] text-[14px] md:text-base">
                            I'm Silas Gasasira, the founder of WHAT IF-Rwanda. My journey into
                            development practice is deeply rooted in my early life experiences in
                            post-genocide Rwanda. Born in 1994, just months after the genocide, I
                            grew up in a family struggling to meet basic needs amidst deep-seated
                            divisions. Tragically, in 1998, I witnessed my beloved grandfather, who
                            was like a father to me, fatally shot during rebel attacks. This loss
                            marked a turning point in my life. At the age of five, I was enrolled in
                            an orphanage school eight kilometers away. Despite the long, difficult
                            trek each day, I attended school not for a love of learning but for the
                            promise of a simple meal of porridge and bread – luxuries in my world.
                            <br /><br />
                            My life took a dramatic turn when I was selected to join the African
                            Children's Choir (ACC) at the age of eight. This opportunity introduced
                            me to a new family and a world of possibilities beyond my humble
                            beginnings. Traveling as a young ambassador for Africa, I experienced
                            firsthand the transformative power of dreams realized and opportunities
                            seized. The ACC's motto, "Helping Africa's most vulnerable child today
                            so that they can help Africa tomorrow," became ingrained in me. This
                            philosophy shaped my understanding of giving back and helping others.
                            <br /><br />
                            In 2016, another pivotal moment occurred when I lost Rucibigango Leo, a
                            man who had become a father figure to me. His life of selflessness and
                            the ACC motto inspired me to continue his legacy of helping the less
                            fortunate. To honor him, I organized a charity event on my 22nd
                            birthday, which led to the birth of WHAT IF-Rwanda. The name embodies
                            the idea of creating possibilities for others, and our organization now
                            runs two main programs: mentorship and sponsorship. Through these
                            programs, we provide vulnerable children with love, care, guidance, and
                            financial support, ensuring they have the chance to dream and believe in
                            a better future.
                        </p>
                        <p className="font-[500] text-[18px] md:text-[20px]">
                            Silas Ntikirutimana Gasasira
                        </p>
                        <p className="italic font-[400] text-[14px] md:text-[16px]">
                            Founder of What-if Rwanda organization
                        </p>
                    </div>
                </div>
            </section>

            <TheTeam />

            <Join />
        </div>
    )
}

export default AboutUs
