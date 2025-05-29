
import Hero from "./sections/hero";
import Process from "./sections/process";
import Investertable from "./sections/investertable";
import Thinkers from "./sections/thinkers";
import ThinkersClubChatbot from "@/components/chatbot";
import Testimonials from "./sections/testimonials";

import Brand from "./sections/brand";


export default function Page() {
  return (
    <div>
      <Hero />
      <Process/>
      <Investertable/>
      <Thinkers/>
      {/* <Testimonials/> */}
      <Brand/>
      <ThinkersClubChatbot/>
    </div>
  );
}
