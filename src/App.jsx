import Footer from "./Component/Footer";
import Header from "./Component/Header";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./Component/ScrollToTop";

function App() {
  // useEffect(() => {
  //   const pc = particlesCursor({
  //     el: document.getElementById("banner"),
  //     gpgpuSize: 512,
  //     colors: [0x8eff00, 0x0000ff],
  //     color: 0xff0000,
  //     coordScale: 0.8,
  //     noiseIntensity: 0.001,
  //     noiseTimeCoef: 0.0001,
  //     pointSize: 5,
  //     pointDecay: 0.0025,
  //     sleepRadiusX: 250,
  //     SleepRadiusY: 250,
  //     sleepTimeCoefX: 0.001,
  //     sleepTimeCoefY: 0.002,
  //   });

  // }, []);

  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
