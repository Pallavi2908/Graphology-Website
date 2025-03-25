import { useState } from "react";
import Person from "../components/PersonCard.jsx";
import Cat1 from "../assets/cat1.jpg";
import Cat2 from "../assets/cat2.jpg";
import Cat3 from "../assets/cat3.jpg";

const About = () => {
  return (
    <>
      <div className=" flex flex-col md:flex-row justify-between md:gap-3 gap-y-12 md:p-4  ">
        <Person
          name="Aayushman Garg"
          photo={Cat2}
          quote="Doesn't like renewing the API key every month"
        />
        <Person
          name="Pallavi Sinha"
          photo={Cat1}
          quote="Died 10 times while trying to center div"
        />
        <Person name="Vedant Arora" photo={Cat3} quote="...Waiting for turn" />
      </div>
    </>
  );
};

export default About;
