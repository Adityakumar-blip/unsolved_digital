import React from "react";

const Contact = () => {
  return (
    <div className="bg-white">
      <div className="p-[3rem]">
        <h2 className="text-primary text-3xl sm:text-7xl font-bold ">
          It's Your Time
        </h2>
        <p className="text-primary text-black text-2xl font-normal">
          We've talked everything about us, let's talk about you
        </p>
      </div>
      <div className="main-contact sm:p-[4rem] flex justify-center items-center mb-[4rem]">
        <div className="contact-first">
          <div className="contact-second flex flex-row">
            <div className="contact-details ">
              <div className="contact-map"></div>
              <div className="contact-info flex flex-row ">
                <div className="contact-links bg-black ">
                  <h5>Top Links</h5>
                  <ul className="contact-list">
                    <li className="mb-[1rem]">
                      <p>Contact</p>
                    </li>
                    <li>
                      <p>Services</p>
                    </li>
                    <li>
                      <p>About</p>
                    </li>
                    <li>
                      <p>Privacy Policy</p>
                    </li>
                  </ul>
                  <p>
                    Unlock the Mystery of Digital Solutions - Say Hii to the
                    Unsolved! ✋
                  </p>
                </div>
                <div className="contact-address bg-black">
                  <p>Ahmedabad Gujarat</p>
                  <hr className="my-2 w-[8rem] border-t-2 border-primary font-bold text-primary" />
                  <p>+91 7668742078</p>
                  <hr className="my-2 w-[8rem] border-t-2 border-primary font-bold text-primary" />
                  <p>Unsolved.agency@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="contact-form bg-black ">
              <h4 className="text-white font-bold">
                Where Problems End, Solutions Begin
              </h4>
              <h5>DO you facing problem like Web Development</h5>
              <div className="contact-fields flex flex-col gap-[1rem]">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  required
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-[3rem] focus:outline-none focus:ring focus:ring-gray-100  dark:bg-transparent dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
                <div className="flex flex-col gap-[1rem] ">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-[3rem] focus:outline-none focus:ring focus:ring-gray-100 focus:border-indigo-300 dark:bg-transparent dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                  <select className="rounded-[3rem] h-[2.5rem] p-[10px]">
                    <option>test 1</option>
                    <option>test 2</option>
                    <option>test 3</option>
                    <option>test 4</option>
                  </select>
                </div>
                <div className="contact-range"></div>
                <button className="contact-submit">Get Solved</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
