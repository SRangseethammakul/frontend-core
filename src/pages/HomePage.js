import React from "react";
import Typical from "react-typical";
const HomePage = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="display-4">
          {" "}
          <Typical
            steps={["Hello", 1000, "Hello world!", 500]}
            loop={Infinity}
            wrapper="p"
          />
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
