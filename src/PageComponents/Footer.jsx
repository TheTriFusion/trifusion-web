import React from 'react'

const FooterPage = () => {
  return (
    <>
        <section>
            <div className='bg-white border border-black m-2'>
        <div className="h-max w-full flex flex-col gap-0 justify-evenly m:grid m:grid-cols-2 2xl:flex 2xl:flex-row 2xl:gap-2" >
            <div className="2xl:mt-4 text-center h-72 flex flex-col items-center justify-center gap-0 font-libre">
                <img src="../images/company-logo.jpg" alt="" className="w-32 h-32 m-4" />
                <h1 className="text-4xl">The TriFusion</h1>
                <p>(All right reserved)</p>
            </div>
            <div className="w-full 2xl:mt-4 h-72 flex flex-col justify-center items-center 2xl:w-72 m:h-max">
                <h1 className="text-center text-2xl m-4 font-libre">Connect To Us Through</h1>
                <ul className="gap-4 flex flex-col text-base mt-2 justify-center items-center 2xl:justify-start 2xl:items-start font-raleway xxm:text-xl">
                    <li>Sector-5, R.C. Vyas Colony
                        <br/>
                        Bhilwara, Rajasthan, 311001
                    </li>
                    <li>+91-6378122780 / +91-8005814384</li>
                    <li>thetrifusion@gmail.com</li>
                    <li>www.thetrifusion.com</li>
                </ul>
            </div>
            <div className="w-full 2xl:mt-4 h-72 flex flex-col justify-center items-center m:max-3xl:w-72">
                <h1 className="text-center text-2xl m-4 font-libre">Important Links</h1>
                <ul className="gap-4 grid grid-cols-2 text-base mt-2 justify-center items-center m:max-3xl:justify-start m:max-3xl:items-start font-raleway xxm:text-xl">
                    
                        <a href="https://www.instagram.com/thetrifusion/">
                        <li>Instagram</li>
                        </a>
                    <a href="https://wa.me/6378133780">
                        <li>Whatsapp</li>
                        </a>
                        <a href="https://www.linkedin.com/in/the-trifusion-4660032b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                        <li>LinkedIn</li>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61557420276022">
                        <li>Facebook</li>
                        </a>
                </ul>
            </div>
            <div className="w-full 2xl:mt-4 h-72 flex flex-col justify-center items-center 2xl:w-72">
                <h1 className="text-center text-2xl m-4 font-libre">Get to Us</h1>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7210.395256932822!2d74.6326986376564!3d25.36469220502349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968c2550919a8a7%3A0xb52d32f05198ba59!2sSector%205%2C%20R%20C%20Vyas%20Colony%2C%20Bhilwara%2C%20Rajasthan%20311001!5e0!3m2!1sen!2sin!4v1710324788989!5m2!1sen!2sin"
                  allowfullscreen=""
                  referrerpolicy="no-referrer-when-downgrade"
                  title="companyAddress"
                  className="w-full h-48 py-8 px-8"
                ></iframe>
            </div>
        </div>
            </div>
        </section>
    </>
  )
}

export default FooterPage