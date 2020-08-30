import React from "react";

const About = () => {
  return (
    <main>
      <h1>About page</h1>
      <p>
        This application was developed with the intentation of demostrate
        knowledge.
      </p>
      <p>
        If you want to see the code, you can do it{" "}
        <a href="https://github.com/ivansevillaa/next-fruits" target="_blank">
          in this repo
        </a>
      </p>
      <p>
        If you want to see more about my work, check my{" "}
        <a href="https://github.com/ivansevillaa" target="_blank">
          github profile
        </a>
      </p>
      <p>Thanks for visiting.</p>

      <style jsx>{`
        a {
          color: #4183c4;
          text-decoration: none;
        }
      `}</style>
    </main>
  );
};

export default About;
