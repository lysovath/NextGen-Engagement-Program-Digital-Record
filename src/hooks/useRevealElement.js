import { useEffect } from "react";
/*
    This hook is used to reveal element and take effect when the element is within view
    It has a class by default and a threshold 0-1 to determine how much of the element is visible before it takes effect
    It also has a class to remove and a class to add when the element is revealed, by default it will remove opacity-0 and translate-y-10 and add opacity-100 and translate-y-0
*/
export default function useRevealElment(
  className = "reveal-card",
  threshold = 0.1,
  classToRemove = ["opacity-0", "translate-y-10"],
  classToAdd = ["opacity-100", "translate-y-0"]
) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove(...classToRemove);
            entry.target.classList.add(...classToAdd);
          }
        });
      },
      { threshold }
    );

    const elements = document.querySelectorAll(`.${className}`);
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [className, threshold, classToRemove, classToAdd]);
}