import React from 'react'

const Testomonial = () => {
  return (
    <div className='bg-black flex justify-center items-center flex-col'>
      <div className='flex justify-center items-center flex-col pt-20'>
        <h5 className='text-primary'>What</h5>
        <h2 className='text-white'>OUR CLIENT SAYS</h2>
        <h5 className='text-primary'>ABOUT UNSOLVED</h5>
      </div>
     
        <div className='testimonial-section mt-[11rem]'>
          <div className="testimonial-photo">
            {/* <div className='testimonial-img'> */}
            <img src='https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fCUzQm1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' alt='testimonial photo' />
            {/* </div> */}
          </div>
          <div className="testimonial-content flex justify-center items-center flex-col p-[10rem] text-center gap-x-5.5">
            <h5 className='text-primary font-bold'>MD at Paisa Groww</h5>
            <hr className="my-2 w-[8rem] border-t-2 border-primary font-bold text-primary" />
            <p className='pt-[1rem]'>“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy lorem ipsum is simply dummy text of the printing and typesetting industry.
              Lorem ipsum has been the industry standard dummy lorem is simply dummy text”</p>
          </div>
        </div>
      
    </div>
  )
}

export default Testomonial