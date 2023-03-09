export default function Services() {
  return (
    <>
      <h1 className='text-4xl md:text-6xl text-slate-300 font-bold'>
        Services
      </h1>

      {/*grid*/}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-white'>
        {/* item 1 */}
        <div className=" h-[240px] lg:h-[300px] xl:h-[600px] flex justify-start items-center bg-[url('/images/service1.jpg')] bg-cover bg-no-repeat bg-center">
          {/* left side */}
          <div className=' w-1/2 h-full flex flex-col justify-end items-center'>
            <div className=' w-full h-full text-center flex flex-col justify-center items-center gap-2 md:gap-2 xl:gap-8'>
              <h1 className='text-white text-2xl md:text-4xl xl:text-8xl font-bold'>
                Vet Clinic
              </h1>
              <p className='text-xs md:text-md lg:text-lg w-3/4'>
                A range of services to keep your furry friends healthy and
                happy.
              </p>
              <button className='text-white bg-teal-800 p-1 md:p-2 lg:p-4 rounded-full'>
                Book Appointment
              </button>
            </div>
          </div>
        </div>

        {/* item 2 */}
        <div className=" h-[240px] lg:h-[300px] xl:h-[600px] flex justify-end items-center bg-[url('/images/service2.jpg')] bg-cover bg-no-repeat bg-center">
          {/* left side */}
          <div className=' w-3/4 h-full flex flex-col justify-end items-center'>
            <div className=' w-full h-full text-center flex flex-col justify-center items-center gap-2 md:gap-2 xl:gap-8'>
              <h1 className='text-white text-2xl md:text-4xl xl:text-8xl font-bold'>
                Grooming
              </h1>
              <p className='text-xs md:text-md lg:text-lg w-1/2'>
                We maintain your pet’s appearance and hygiene
              </p>
              <button className='text-white bg-teal-800 p-1 md:p-2 lg:p-4 rounded-full'>
                Book Appointment
              </button>
            </div>
          </div>
        </div>

        {/* item 3 */}
        <div className=" h-[240px] lg:h-[300px] xl:h-[600px] flex justify-end items-center bg-[url('/images/service3.jpg')] bg-cover bg-no-repeat bg-center">
          {/* left side */}
          <div className=' w-3/4 h-full flex flex-col justify-end items-center'>
            <div className=' w-full h-full text-center flex flex-col justify-center items-center gap-2 md:gap-2 xl:gap-8'>
              <h1 className='text-white text-2xl md:text-4xl xl:text-8xl font-bold'>
                Creche
              </h1>
              <p className='text-xs md:text-md lg:text-lg w-1/2'>
                Leave your pet with us for the day and let them enjoy a fun and
                comfortable stay while you&apos;re away
              </p>
              <button className='text-white bg-teal-800 p-1 md:p-2 lg:p-4 rounded-full'>
                Book Appointment
              </button>
            </div>
          </div>
        </div>

        {/* item 4 */}
        <div className=" h-[240px] lg:h-[300px] xl:h-[600px] flex justify-end items-center bg-[url('/images/service4.jpg')] bg-cover bg-no-repeat bg-center">
          {/* left side */}
          <div className=' w-3/4 h-full flex flex-col justify-end items-center'>
            <div className=' w-full h-full text-center flex flex-col justify-center items-center gap-2 md:gap-2 xl:gap-8'>
              <h1 className='text-white text-2xl md:text-4xl xl:text-8xl font-bold'>
                Pet Bakery
              </h1>
              <p className='text-xs md:text-md lg:text-lg w-1/2'>
                Treat your pet with delicious and healthy homemade pet treats
                from our artisan pet bakery
              </p>
              <button className='text-white bg-teal-800 p-1 md:p-2 lg:p-4 rounded-full'>
                Book Appointment
              </button>
            </div>
          </div>
        </div>

        {/* item 5 */}
        <div className=" h-[240px] lg:h-[300px] xl:h-[600px] flex justify-start items-center bg-[url('/images/service7.jpeg')] bg-cover bg-no-repeat bg-center">
          {/* left side */}
          <div className='w-1/2 h-full flex flex-col justify-end items-center'>
            <div className=' w-full h-full text-center flex flex-col justify-start xl:justify-center items-center gap-2 md:gap-2 xl:gap-8'>
              <h1 className='text-white text-2xl md:text-4xl xl:text-8xl font-bold '>
                Pet Store
              </h1>
              <p className='text-xs md:text-md lg:text-lg xl:w-2/3'>
                Your one-stop shop for all pet’s needs, from toys to treats,
                beds to bowls, and everything in between
              </p>
              <button className='text-white bg-teal-800 p-1 md:p-2 lg:p-4 rounded-full'>
                Book Appointment
              </button>
            </div>
          </div>
        </div>

        {/* item 6 */}
        <div className=" h-[240px] lg:h-[300px] xl:h-[600px] flex justify-start items-center bg-[url('/images/service6.jpeg')] bg-cover bg-no-repeat bg-center">
          {/* left side */}
          <div className='w-1/2 h-full flex flex-col justify-end items-center'>
            <div className=' w-full h-full text-center flex flex-col justify-center items-center gap-2 md:gap-2 xl:gap-8'>
              <h1 className='text-white text-2xl md:text-4xl xl:text-8xl font-bold'>
                Pick up and Drop
              </h1>
              <p className='text-xs md:text-md lg:text-lg xl:w-2/3'>
                We make life easier for you and your furry companion by offering
                reliable and convenient pet transportation services
              </p>
              <button className='text-white bg-teal-800 p-1 md:p-2 lg:p-4 rounded-full'>
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
