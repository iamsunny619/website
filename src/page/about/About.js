// About.jsx
import React from "react";

const About = () => {
  return (
    <div className="bg-primary min-h-screen text-text">
      <header className="bg-primary p-4 text-center">
        <h1 className="text-text text-3xl font-bold">About Me</h1>
        <p className="text-text text-lg">Passionate Web Developer</p>
      </header>

      <section className="container mx-auto mt-8 p-8 bg-primary text-text">
        <div>
          <p className="text-text mb-4">
            Hello! I'm [Your Name], a dedicated web developer with a focus on
            creating delightful and interactive online experiences. My journey
            in the digital realm involves translating ideas into visually
            appealing and user-friendly websites.
          </p>
          <p className="text-text">
            With a strong foundation in HTML, CSS, and JavaScript, I bring
            creativity and precision to every project. I believe in the power of
            clean code and responsive design to deliver seamless and enjoyable
            user interactions. Let's build something amazing together!
          </p>
        </div>
      </section>

      <section className="bg-primary text-secondary p-8 mt-8">
        <h2 className="text-secondary text-2xl font-bold mb-4">Skills</h2>
        <ul className="list-disc list-inside">
          <li>Web Development</li>
          <li>HTML, CSS, JavaScript</li>
          <li>Responsive Design</li>
          <li>User Interface (UI) Design</li>
          {/* Add more skills as needed */}
        </ul>
      </section>
    </div>
  );
};

export default About;
