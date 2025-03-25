import Button from "../components/Button.jsx";
import Photo from "../assets/man_writing.png";

const Home = () => {
  return (
    <>
      <section id="landing-page" className="w-full overflow-hidden max-h-max">
        <div className="container mx-auto p-6 flex flex-col md:flex-row-reverse gap-12 md:gap-24 items-center justify-center">
          {/* Text */}
          <div className="text-center md:text-left">
            <h1 className="home-text text-textColor md:text-5xl">
              Let Your Handwriting Speak:
            </h1>
            <h2 className="home-text text-PrimaryBG md:text-3xl">
              Discover the Secrets of Your Inner Self
            </h2>
            <p className="max-w-md font-Outfit text-PrimaryBG sm:text-2xl md:text-xl">
              Our <u>AI-driven platform</u> transforms your samples into{" "}
              <u>personalized insights</u> about your personality & emotional
              state. <br />
              Upload your writing, and discover what your subconscious is
              saying.
            </p>
            <div className="w-max mx-auto md:mx-0 my-4">
              <Button to="/working" label="Learn More" />
            </div>
          </div>
          {/* Image */}
          <div className="h-max w-full md:w-auto flex justify-center">
            <img src={Photo} alt="Illustration" className="max-w-full h-auto" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
