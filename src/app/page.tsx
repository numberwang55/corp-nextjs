import Hero from "./hero";
import homeImg from "/public/home.jpg";

export default function Home() {
  return (
    <Hero imageData={homeImg} imgAlt="Car Factory" title="Professional Cloud Hosting"/>
  );
}
