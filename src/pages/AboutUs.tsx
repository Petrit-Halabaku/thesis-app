import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mb-6">
        Welcome to Codr, your go-to platform for live coding events and
        tech-focused social media content. We're passionate about bringing
        developers together and showcasing the latest trends in programming and
        social media.
      </p>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p>
          Our mission is to create a vibrant community where coders of all
          levels can learn, share, and grow together. We curate and stream live
          coding sessions, tech talks, and collaborative projects from various
          social media platforms, making it easy for you to stay up-to-date with
          the fast-paced world of software development.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Features</h2>
        <ul className="list-disc list-inside">
          <li>Live coding sessions with industry experts</li>
          <li>Interactive tech talks and webinars</li>
          <li>Collaborative projects and hackathons</li>
          <li>Access to a library of past events and resources</li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Join Us</h2>
        <p>
          Become a part of our community today and start exploring the world of
          coding like never before. Whether you're a beginner or a seasoned
          developer, there's something for everyone at Codr.
        </p>
        {/* <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Sign Up Now
        </button> */}
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Upcoming Events</h2>
        <p>
          Check out our latest events below:
          {/* {events.map((event) => (
            <div
              key={event.id}
              className="bg-white shadow-md rounded-lg p-4 mb-4"
            >
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-gray-600">
                {event.platform === "youtube" ? (
                  <YoutubeIcon className="inline mr-2" />
                ) : (
                  <TiktokIcon className="inline mr-2" />
                )}
                {new Date(event.startTime).toLocaleString()}
              </p>
              <img
                src={event.thumbnailUrl}
                alt={event.title}
                className="mt-2 rounded-md"
              />
            </div>
          ))} */}
        </p>
      </section>
      {/* Add more content as needed */}
    </div>
  );
};

export default AboutUs;
