import PageLayoutDefault from "../src/components/PagelayoutDefault/PageLayoutDefault";
import LayoutHomePage from "../src/components/LayoutHomePage/LayoutHomePage";
import SlideHomePage from "../src/components/SlideHomePage/SlideHomePage";
export default function Home() {
  return (
    <PageLayoutDefault>
      <LayoutHomePage renderSlide = {() => <SlideHomePage/>}/>
      
    </PageLayoutDefault>
  )
}
