import Card from "../components/Card.jsx";
import CardData from "../data/CardData.jsx";
const Working = () => {
  return (
    <>
      <div className="container p-2 text-center mx-auto mb-4">
        <h1 className="font-Koulen text-2xl tracking-wider text-textColor md:text-2xl">
          How It Works?
        </h1>
        <p className="font-Outfit  text-PrimaryBG ">
          <b>Decoding the plot twists in your handwriting</b>
        </p>
      </div>
      {/* Cards */}
      <div className="container mx-auto">
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
    </>
  );
};

export default Working;
