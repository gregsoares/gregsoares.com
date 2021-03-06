import React from "react";

export const MernTemplate = () => {
  return (
    <div className="mx-4 my-16 overflow-hidden border border-gray-700 rounded-md shadow-md sm:mx-auto lg:max-w-4xl md:max-w-2xl xs:max-w-lg sm:max-w-lg brand-lighterBlue">
      <h3 className="my-6 text-2xl text-center text-gray-400 sm:text-3xl ">
        MERN Starter Template
      </h3>
      <div className="flex flex-col items-center justify-center leading-normal tracking-wide text-center ">
        <img
          src="https://camo.githubusercontent.com/0dc9dfa3011c33bcee27650ad28fd1090d7f21d2/68747470733a2f2f692e6962622e636f2f6e7333724e78502f7365727665722d6170702e706e67"
          alt="Main Application file"
          className="object-cover object-center w-full max-h-60-screen"
        />
      </div>

      <div className="py-8 mx-8 ">
        The template provides the first few steps in creating a server,
        connecting it to a database, and running a bare create-react-app
        instance.
        <p className="leading-relaxed tracking-wide text-justify sm:mx-2 md:mx-4">
          <span className="pl-2"></span>
        </p>
        <ol className="mx-6 my-3 list-disc list-inside">
          <li className="my-1">MongoDB</li>
          <li className="my-1">ExpressJs</li>
          <li className="my-1">ReactJs</li>
          <li className="my-1">NodeJs</li>
          <li className="my-1">Heroku Deployment Ready</li>
        </ol>
        <div className="w-full p-0 my-3 ">
          <img
            src="https://camo.githubusercontent.com/df364c67033104c8a6d98902d9277cffecb676c9/68747470733a2f2f692e6962622e636f2f4a6d43484236362f7365727665722e706e67"
            alt="Server File"
            className="mx-auto"
          />
        </div>
        <p className="my-3 leading-relaxed tracking-wide text-justify sm:mx-2 md:mx-4">
          <span className="pl-2">B</span>ack-End setup is REST API ready,
          MongoDB can be easily managed with mongoose, and the client side is
          concurrently served with server with{" "}
          <code>
            <i>npm run dev</i>{" "}
          </code>{" "}
          command.
          {`\n`}
          The client-side is all inside the <i>client</i> folder, in case I need
          just the front-end I'd copy that folder and all is in order.
        </p>
        {/* <p className="mt-5 leading-relaxed tracking-wide text-justify sm:mx-2 md:mx-4">
          <span className="pl-2">L</span>orem ipsum dolor sit amet consectetur
          adipisicing elit. Recusandae, quam? Iusto consequuntur consectetur
          vero eius alias vel, quaerat exercitationem?
        </p> */}
      </div>

      {/* Footer section */}
      <div className="mt-2 text-center text-grey-darker">
        <h3 className=" ">
          <a
            className="block w-full py-4 mt-8 tracking-wide text-gray-300 border rounded shadow-md brand-blue-gradient hover:border-white hover:border-2 hover:text-white hover:shadow-lg"
            href="https://github.com/gregsoares/MERN_StartTemplate"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Repository
          </a>
        </h3>
      </div>
    </div>
  );
};
