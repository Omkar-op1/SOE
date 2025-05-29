
import Brand from "./sections/brand";
import Hero from "./sections/hero";
import Process from "./sections/process";
import Investertable from "./sections/investertable";
import Thinkers from "./sections/thinkers";
import ThinkersClubChatbot from "@/components/chatbot";

export default function Page() {
  return (
    <div>
      <Hero />
      <Brand />
      {/* <Process/>
      <Investertable/> */}
      <Thinkers/>
      <ThinkersClubChatbot/>
    </div>
  );
}
