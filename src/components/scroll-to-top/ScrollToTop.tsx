import { useState, useEffect } from "react";
import "./scrollToTop.scss";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="top-to-btm">
      {showTopBtn && (
        <div className="icon-position" onClick={goToTop}>
          <i className="bx bx-up-arrow-alt"></i>
        </div>
      )}
    </div>
  );
};
export default ScrollToTop;
