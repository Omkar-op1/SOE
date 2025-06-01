
import Hero from "./sections/hero";
import Process from "./sections/process";
import Investertable from "./sections/investertable";
import Thinkers from "./sections/thinkers";
import ThinkersClubChatbot from "@/components/chatbot";
import Carousel from "@/components/carousel";
import Testimonials from "./sections/testimonials";
import Brand from "./sections/brand";
import Test from "./sections/ht";
import Main from "./sections/main";
import Faq from "./sections/faq";


export default function Page() {
  return (
    <div>
      <Hero />
      <Main/>
      <Carousel/>
      <Process/>
      {/* <Investertable/>
      <Thinkers/> */}
      {/* <Testimonials/> */}
      <Test/>
      <Brand/>
      <Faq/>
      <ThinkersClubChatbot/>
    </div>
  );
}
