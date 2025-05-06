import React from "react";
import { Helmet } from "react-helmet-async";

const About = () => {
  const cards = [
    {
      title: "Our Mission",
      text: "To connect job seekers with meaningful opportunities and empower them to achieve their career goals.",
      icon: "🚀",
    },
    {
      title: "Our Vision",
      text: "To become the leading job platform where talent meets opportunity with speed, trust, and simplicity.",
      icon: "🌍",
    },
    {
      title: "Why Choose Us",
      text: "Smart job matching, real-time alerts, and personalized career support — all in one platform.",
      icon: "💡",
    },
  ];

  return (

    <div>
       <Helmet>
          <title>About page</title>
       </Helmet>
   
    <section className="bg-white py-16 px-6 sm:px-10 md:px-20 lg:px-32">
        
      <div className="max-w-6xl mx-auto">
     
        <h2 className="text-4xl font-bold text-blue-600 mb-6">About Us</h2>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to <span className="font-semibold text-blue-500">Job Seeker BD</span>, your go-to platform for discovering exciting career opportunities.
          We aim to simplify the job search process with powerful tools, smart matching, and a growing network of top employers.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Whether you're a recent graduate looking for your first role or a seasoned professional ready for a new challenge, JobQuest provides
          the resources and guidance you need to take your career to the next level.
        </p>

        {/* Cards Section */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 border border-gray-100"
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-600">{card.title}</h3>
              <p className="text-gray-600">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    </div>
  );
};

export default About;