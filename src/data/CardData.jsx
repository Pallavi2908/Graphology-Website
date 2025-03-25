import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
const CardData = [
  {
    title: "Upload Your Handwriting",
    titleNo: "#1",
    titlePara:
      "Simply take a clear photo or scan of your handwriting and upload it through our secure platform. The image should be well-lit, with each letter visible and free of smudges for the most accurate results.",
    img: img1,
  },
  {
    title: "Processing Your Handwriting",
    titleNo: "#2",
    titlePara:
      "Once uploaded, our advanced AI begins processing. Through a series of steps—such as enhancing contrast, removing background noise —our system prepares your handwriting for detailed analysis.",
    img: img2,
  },
  {
    title: "Analysis and Results",
    titleNo: "#3",
    titlePara:
      "After processing, our AI generates insights about your handwriting, including style, personality traits, and more. Results are displayed on your dashboard.",
    img: img3,
  },
  {
    title: "Feature Analysis",
    titleNo: "#4",
    titlePara:
      "Specific handwriting features are extracted using OpenCV2 and Python-based image processing techniques. These methods allow for precise, mathematical measurement of characteristics in the handwriting, such as line thickness, pressure, and letter formation.",
    img: img4,
  },
  {
    title: "Report Generation",
    titleNo: "#5",
    titlePara:
      "Finally, the language model compiles the analysis into a PDF report. This report is generated with LLM’s capabilities, providing detailed and personalized feedback on the psychological traits inferred from the handwriting.",
    img: img5,
  },
];
export default CardData;
