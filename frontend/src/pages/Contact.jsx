import React from 'react'

const Contact = () => {
  return (
    <section>
      <div className='px-4  mx-auto max-w-screen-md'>
        <h2 className='heading text-center'>
          Contact Us
        </h2>
        <p className='mb-8 lg:mb-16 font-light text-center text__para'>
          Got a technical issue? send us a feedback about the issue..
        </p>

        <form action='#' className='space-u-8'>
          <div className='mt-3'>
            <label htmlFor='email' className='form__label'>
              Your Email
            </label>
            <input type='email' id='email' placeholder='example@gmail.com' className='form__input mt-1' />
          </div>
          <div className='mt-3'>
            <label htmlFor='email' className='form__label'>
              Subject
            </label>
            <input type='text' id='email' placeholder='enter your subject' className='form__input mt-1' />
          </div>
          <div className='mt-3'>
          <label htmlFor='email' className='form__label'>
              Message
            </label>
            <textarea htmlFor='text' className='form__label w-full border border-solid textColor border-2 focus:outline-none focus:border-primaryColor' rows='5'>
              Your message
            </textarea>
          </div>
          <div className='mt-3 text-center'>
            <button className='btn rounded-md' type='submit'>
              Submit message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact