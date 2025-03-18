import Banner from "@/components/modules/home/Banner/banner";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/core/theme/mode-toggle";


export default function Home() {
  return (
  <div>
    <ModeToggle/>
    <Button>click now</Button>
    <Banner/>
  </div>
  );
}
