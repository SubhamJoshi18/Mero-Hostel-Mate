import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
      delay: 100, // values from 0 to 3000, with step 50ms
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <>
      <div className="bg-center bg-cover bg-no-repeat">
        <div className="absolute top-0 -z-10">
          <img src="/assets/7.webp" alt="background" />
        </div>
      </div>
    </>
  );
}
