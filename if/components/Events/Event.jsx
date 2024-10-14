import Line from '../../assets/hr.png'

const Upcoming = () => {
  return (
    <section className="bg-white py-16">
  <div className="px-4 sm:px-8 md:px-[150px] mx-auto">
    <div className="justify-center items-center text-center mb-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary text-center mb-4">
        Upcoming events
      </h2>
      <p className="text-center text-secondary text-base sm:text-lg max-w-lg sm:max-w-xl mx-auto">
        Be a part of upcoming events currently being organized by <br />
        WHAT-IF Rwanda Organization.
      </p>
      <img
        src={Line}
        alt="line"
        className="py-3 mx-auto w-[80px] sm:w-[111px] border-1"
      />
    </div>

    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row items-center justify-center border-b space-y-6 sm:space-y-0 sm:space-x-6">
        <div className="bg-tertiary p-4 flex flex-col items-center justify-center gap-4 aspect-square w-[100px] sm:w-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 sm:w-12 sm:h-12 stroke-black/95"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
            />
          </svg>

          <span className="text-xs sm:text-sm text-primary">THIS SEPTEMBER</span>
        </div>
        <div className="text-center sm:text-left sm:my-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">
            Fundraising event to provide a mentor to each kid
          </h3>
          <p className="text-secondary text-sm sm:text-base">
            Your small contribution has the potential to make a lasting
            impact for years. One bed today <br />
            will serve this child and many more for years to come.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Upcoming
