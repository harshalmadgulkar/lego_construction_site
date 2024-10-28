import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const fadeText = useRef(null);

  useGSAP(() => {
    const fadeAnimation = gsap.to(fadeText.current, {
      y: 350,
      scale: 0,
      opacity: 0,
      // duration: 2,
      // delay: 1,
      // yoyo: true,
      scrollTrigger: {
        trigger: fadeText.current,
        scroller: "body",
        // markers: true,
        start: "top 10%",
        end: "bottom 100%",
        scrub: true,
      },
    });

    return () => {
      fadeAnimation.kill(); // Clean up the animation on unmount
    };
  }, []);

  return (
    <>
      <div className="flex text-center mt-10 h-[300vh]">
        <div ref={fadeText} className="flex flex-col gap-6 text-9xl pt-40 ">
          <p className="tracking-[3rem]">
            <span>LEGO</span>
            &nbsp;
            <span>HOUSE</span>
          </p>
          <p className="tracking-wide">ARCHITECTS</p>
        </div>
      </div>
      {/* <div className="flex absolute top-60 gap-20 justify-center">
        <img className="w-1/5" src="../../assets/anm_img_1.jpg" />
        <img className="w-1/5" src="../../assets/anm_img_1.jpg" />
        <img className="w-1/5" src="../../assets/anm_img_1.jpg" />
      </div> */}
    </>
  );
};

export default Hero;
