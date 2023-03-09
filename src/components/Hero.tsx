export default function Hero() {
  return (
    <div className=" h-[400px] md:h-screen bg-[url('/images/heroImg2.svg')] bg-cover md:bg-cover bg-no-repeat flex justify-center items-center">
      {/* left side container */}
      <div className=' w-1/2 h-full flex flex-col justify-center items-start gap-6 md:gap-8 text-sm  md:text-3xl font-bold '>
        <h3 className='text-orange-500'>
          Enjoy worry-free pet parenthood with our comprehensive care service.
        </h3>
        <h1 className='text-md md:text-4xl lg:text-6xl tracking-wider'>
          Your lovely pet needs a lovely haircut
        </h1>
        <p className='font-normal'>
          Lorem Lipsum Femor de Dosesd Lorem Lipsum Femor de Dosesd
        </p>
        <button className='text-white bg-teal-800 p-2 md:p-4 rounded-full'>
          Book Appointment
        </button>
      </div>

      {/* right side container */}
      <div className=" w-1/2 h-full bg-[url('/images/heroDog.svg')] bg-cover bg-center bg-no-repeat"></div>
    </div>
  );
}
