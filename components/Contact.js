import { useRouter } from "next/router";

function Contact() {
    const router = useRouter();  
    const confirmationScreenVisible = router.query?.success && router.query.success === "true";
      return (
          <section>
            <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800 antialiased">
              <h1 className=" text-5xl md:text-9xl font-bold py-15 text-center md:text-left">
                Contact.
              </h1>
            </div>
            <div className="relative z-10 rounded-md shadow-md  p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 -mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:ml-4">
                  <header className="">
                    <h1 className="text-gray-50 font-semibold text-2xl">
                      Get in touch, let&apos;s talk.
                    </h1>
                    <p className="font-light text-base text-gray-200 mt-2">
                      Fill in the details and I&apos;ll get back to you as soon as I can.
                    </p>
                  </header>
                  <div className="icons-container inline-flex flex-col my-20">
                    <div className="flex flex-row items-center space-x-6 rounded-md p-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-envelope-fill h-4 w-4 text-blue-500"
                        viewBox="0 0 16 16"
                      >
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                      </svg>
                      <p className="text-gray-50 font-light text-sm">
                        phillemail89@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              { !confirmationScreenVisible ? ( <form
                  className="form rounded-lg bg-white p-4 flex flex-col"
                  method="POST"
                  name="contact-form"
                  action="contact/?success=true"
                  data-netlify="true"
                >
                  <label htmlFor="name" className="text-sm text-gray-600 mx-4">
                    {" "}
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
                    name="name"
                  />
                  <label
                    htmlFor="email"
                    className="text-sm text-gray-600 mx-4 mt-4"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
                    name="email"
                  />
                  <label
                    htmlFor="message"
                    className="text-sm text-gray-600 mx-4 mt-4"
                  >
                    Message
                  </label>
                  <textarea
                    rows="4"
                    type="text"
                    className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
                    name="message"
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-blue-500 rounded-md w-1/2 mx-4 mt-8 py-2 text-gray-50 text-xs font-bold"
                  >
                    Send Message
                  </button>
                </form>
              ) : (
                  <h3>I will get back to you.</h3>
              )}
              </div>
            </div>
          </section>
      );
}

export default Contact