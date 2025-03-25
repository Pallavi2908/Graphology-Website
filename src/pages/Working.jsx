import Card from "../components/Card.jsx";
import CardData from "../data/CardData.jsx";
const Working = () => {
  return (
    <>
      <div className="container px-4 py-6 text-center mx-auto">
        <h1 className="font-Koulen text-xl sm:text-2xl md:text-3xl tracking-wider text-textColor">
          How It Works?
        </h1>
        <p className="font-Outfit text-sm sm:text-base md:text-lg text-PrimaryBG">
          <b>Decoding the plot twists in your handwriting</b>
        </p>
      </div>

      {/* Cards - Responsive Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CardData.map((elem, idx) => (
            <Card
              key={idx}
              title={elem.title}
              titleNo={elem.titleNo}
              titlePara={elem.titlePara}
              img={elem.img}
              isEven={idx % 2 === 0}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Working;
