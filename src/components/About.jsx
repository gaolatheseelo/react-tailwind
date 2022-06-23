import React from "react";

const Aboutus = () => {
    const details = [
        {
          id: 1,
          title: "99.99%",
          subtitle: "uptime",
        },
        {
          id: 2,
          title: "24/7",
          subtitle: "customer serviced",
        },
        {
          id: 3,
          title: "10GB",
          subtitle: "free storage",
        },
        {
          id: 4,
          title: "Domain",
          subtitle: "free with sign up",
        },
      ];
  return (
    <div name="about" className="w-full h-fit text-white bg-gray-900">
      <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto h-full px-3 py-12">
        <div className="px-4 py-12 text-center">
        <h2 className="text-5xl font-bold">
            By African <span className="text-lightColor">Developers</span> for{" "}
            All <span className="text-lightColor">Developers</span>
          </h2>
          <p className="text-xl py-8 text-gray-500">
            Startled that over nothing hear and or it into. Lenore cushioned
            angels something bust if from and for laden. Opened said nothing i
            entreating a shorn nothing that, word perched.He bird repeating
            moment that repeating mortals rapping prophet a with.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 px-2 py-4 w-full h-full">
          {details.map(({ id, title, subtitle }) => (
            <div
              key={id}
              className="flex items-center justify-center odd:skew-x-12 even:-skew-x-12 hover:skew-x-0 duration-300"
            >
              <div className="flex flex-col items-center justify-center w-64 h-64 py-8 rounded-full shadow-lg shadow-lightColor">
                <p className="text-5xl font-bold text-lightColor">{title}</p>
                <p className="text-gray-400 mt-2 capitalize">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>
       
      </div>
    </div>
  );
};

export default Aboutus;
