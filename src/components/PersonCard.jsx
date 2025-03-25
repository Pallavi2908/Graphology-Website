const PersonCard = ({ name, photo, quote }) => {
  return (
    <div className=" h-72 md:m-3 md:w-1/3 w-2/3  flex flex-col gap-8">
      <div className="mx-auto mt-2">
        <a href="https://github.com/Pallavi2908/PysFer" title="To repo link...">
          <img
            src={photo}
            className="rounded-full w-[200px] h-[200px]"
            alt=""
          ></img>
        </a>
      </div>
      <div className="mx-auto">
        <h2 className="text-textColor font-bold font-Outfit text-center">
          {name}
        </h2>
        <p className="text-SecondaryBG text-center italic">{quote}</p>
      </div>
    </div>
  );
};

export default PersonCard;
