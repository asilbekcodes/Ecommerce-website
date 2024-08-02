
const Footer = () => {
    return (
      <div>
          <footer className="bg-white  mt-20">
          <div className="mx-auto w-full max-w-screen-xl">
            <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
              <div>
                <ul className="flex items-center justify-between text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4 ">
                    <a href="#" className=" hover:underline">
                    400 University Drive Suite 200 Coral Gables,
                    FL 33134 USA
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-10 text-sm font-semibold text-gray-400 uppercase">
                  Links
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline dark:text-gray-900">
                      Discord Server
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline dark:text-gray-900">
                      Twitter
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline dark:text-gray-900">
                      Facebook
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline dark:text-gray-900">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-10 text-sm font-semibold text-gray-400 uppercase">
                  Help
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline dark:text-gray-900">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline dark:text-gray-900">
                      Licensing
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline dark:text-gray-900">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-10 text-sm font-semibold text-gray-400 uppercase ">
                  NewsLetter
                </h2>
                
            <form className="flex items-center max-w-lg mx-auto">   
                <label  className="sr-only">Search</label>
                <div className="relative w-full">
                    <input type="text" id="voice-search" className="bg-gray-50  text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5 input-className" placeholder="Enter Your Email Address" required />
                </div>
                <button type="submit" className="inline-flex items-center button-className py-2.5 px-3 ms-2 text-sm font-medium  text-black rounded-lg border">
                SUBSCRIBE
                </button>
            </form>
  
              </div>
            </div>
            <div className="border-t-2 px-4 py-6 bg-white text-black  md:flex md:items-center md:justify-between">
              <span className="text-xl  sm:text-center">
                © 2023 <a href="https://flowbite.com/">Flowbite™</a>. All Rights
                Reserved.
              </span>
            </div>
          </div>
        </footer>
      </div>
    )
  }
  
  export default Footer