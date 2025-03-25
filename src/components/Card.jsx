import { motion } from "framer-motion";

const Card = ({ title, titleNo, titlePara, img, isEven }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="flex md:flex-row flex-col rounded-lg gap-8 mx-auto p-8 container mb-4 items-center"
    >
      {/* Text Section */}
      <div className="flex flex-col justify-center gap-2 md:gap-4 h-full md:justify-center">
        <div className="flex gap-4 items-center">
          <span className="font-Outfit text-xl font-extrabold text-green-500 md:text-2xl">
            {titleNo}
          </span>
          <h2 className="font-Koulen tracking-wide text-textColor text-lg bg-SecondaryBG rounded-full px-2 py-1">
            {title}
          </h2>
        </div>
        <div>
          <p className="font-Outfit text-base text-textColor">{titlePara}</p>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-max h-max">
        <img className="w-64 h-auto" alt="img" src={img} />
      </div>
    </motion.div>
  );
};

export default Card;
