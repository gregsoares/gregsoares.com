import Link from '../Link';

const Footer = () => {
  return (
    <>
      <footer className="relative bg-gray-200 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: 'translateZ(0)' }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-600">Thank you for visiting.</h5>
              {/* <div className='mt-6 lg:mb-0 mb-6'>
                <button
                  className='bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2'
                  type='button'
                >
                  <i className='fab fa-twitter'></i>
                </button>
                <button
                  className='bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2'
                  type='button'
                >
                  <i className='fab fa-facebook-square'></i>
                </button>
                <button
                  className='bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2'
                  type='button'
                >
                  <i className='fab fa-dribbble'></i>
                </button>
                <button
                  className='bg-white text-gray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2'
                  type='button'
                >
                  <i className='fab fa-github'></i>
                </button>
              </div> */}
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 mx-auto">
                  <span className="block uppercase text-gray-800 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <Link to="/" text="Home" />

                    <Link
                      href="https://www.linkedin.com/in/greg-soares/"
                      text="LinkedIn"
                      targetBlank
                    />

                    <Link href="https://github.com/gregsoares" text="Github" targetBlank />
                    <Link
                      href="https://github.com/gregsoares/gregsoares.com"
                      text="GregSoares.com Repo"
                      targetBlank
                    />
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <p className="text-xs text-gray-800 hover:text-gray-800">
                Designed by{' '}
                <a href="https://www.creative-tim.com?ref=nr-footer" className="">
                  Creative-Tim
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
