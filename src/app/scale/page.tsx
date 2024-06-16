import scaleImg from "../../../public/scale.jpg";
import Hero from "../hero";

export default function ScalePage() {
  return (
    <Hero
      imageData={scaleImg}
      imgAlt="steel factory"
      title="Scale your app to infinity"
    />
  );
}