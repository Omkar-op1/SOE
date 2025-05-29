
import Brand from "./sections/brand";
import Hero from "./sections/hero";
import Process from "./sections/process";
import Thinkers from "./sections/thinkers";
import Investertable from "./sections/investertable" ;




export default function Page() {
  return (
    <div>
      <Hero />
      <Brand />
      <Process/>
      <Investertable/>
      <Thinkers/>
    </div>
  );
}
