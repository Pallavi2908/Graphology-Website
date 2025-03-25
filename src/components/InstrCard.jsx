const InstrCard = ({ titleNo, title, titlePara }) => {
  return (
    <div className="h-36 w-2/3 rounded-lg border-2 border-dashed border-SecondaryBG p-4 my-3 overflow-hidden text-ellipsis">
      <h2 className="mb-2 text-lg font-Koulen font-semibold tracking-wide text-SecondaryBG text-center break-words">
        {titleNo}
        {title}
      </h2>
      <p className="font-Outfit text-center text-PrimaryBG">{titlePara}</p>
    </div>
  );
};
export default InstrCard;
