import React from "react";

const MeetTheTeam = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">Meet the Team</h2>
        <p className="mt-4 text-lg text-gray-600">
          The minds behind Zoro Innovations
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {/* CEO */}
        <div className="flex flex-col items-center text-center">
          <img
            src="/assets/narendra-babu.jpg"
            alt="Narendra Babu"
            className="w-40 h-40 rounded-full object-cover shadow-lg mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-900">Narendra Babu</h3>
          <p className="text-sm text-gray-500">Founder & CEO</p>
          <p className="mt-2 text-sm text-gray-600">
            Leading Zoro Innovations with vision, innovation, and a drive for excellence.
          </p>
        </div>

        {/* HR */}
        <div className="flex flex-col items-center text-center">
          <img
            src="/assets/rohan.jpg"
            alt="Rohan A"
            className="w-40 h-40 rounded-full object-cover shadow-lg mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-900">Rohan A</h3>
          <p className="text-sm text-gray-500">Head of HR</p>
          <p className="mt-2 text-sm text-gray-600">
            Ensuring a strong, collaborative culture and a people-first workplace.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
