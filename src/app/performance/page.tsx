import performanceImg from "../../../public/performance.jpg";
import Hero from "../hero";

export default function PerformancePage() {
  return (
    <Hero
      imageData={performanceImg}
      imgAlt="welding"
      title="We serve high performance applications"
    />
  );
}
