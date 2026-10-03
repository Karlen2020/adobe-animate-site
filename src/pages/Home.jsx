import { Helmet } from "../components/common/Helmet";
import Hero from "../components/sections/Hero";
import CardGridSection from "../components/sections/CardGridSection";
import { whyUsFeatures, programs } from "../data/content";
import { BookIcon, ExamIcon, MonitorIcon } from "../components/common/icons";

const whyUsIcons = [<BookIcon />, <ExamIcon />, <MonitorIcon />];

function Home() {
  return (
    <>
      <Helmet
        title="Adobe Animate 2D ուսուցում — Գլխավոր էջ"
        description="Adobe Animate 2D անիմացիոն ծրագրի ուսուցման հարթակ՝ տեսադասերով, դասընթացներով և գործնական առաջադրանքներով։"
      />

      <Hero />
    </>
  );
}

export default Home;
