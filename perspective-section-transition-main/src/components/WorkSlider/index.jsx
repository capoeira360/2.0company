"use client";
import { useEffect, useRef } from "react";
import styles from "./style.module.css";

export default function WorkSlider() {
  const carouselRef = useRef(null);
  const listRef = useRef(null);
  const thumbRef = useRef(null);
  const timeRef = useRef(null);
  const nextBtnRef = useRef(null);
  const prevBtnRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const list = listRef.current;
    const thumb = thumbRef.current;
    const time = timeRef.current;
    const nextBtn = nextBtnRef.current;
    const prevBtn = prevBtnRef.current;

    if (!carousel || !list || !thumb || !time || !nextBtn || !prevBtn) return;

    // Initialize thumbnail order
    if (thumb.children.length > 0) {
      thumb.appendChild(thumb.children[0]);
    }

    const timeRunning = 3000;
    const timeAutoNext = 7000;
    let runTimeOut;
    let runNextAuto = setTimeout(() => {
      nextBtn.click();
    }, timeAutoNext);

    const showSlider = (type) => {
      const sliderItems = list.querySelectorAll(`.${styles.item}`);
      const thumbItems = thumb.querySelectorAll(`.${styles.item}`);

      if (type === "next") {
        list.appendChild(sliderItems[0]);
        thumb.appendChild(thumbItems[0]);
        carousel.classList.add(styles.next);
      } else {
        list.prepend(sliderItems[sliderItems.length - 1]);
        thumb.prepend(thumbItems[thumbItems.length - 1]);
        carousel.classList.add(styles.prev);
      }

      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carousel.classList.remove(styles.next);
        carousel.classList.remove(styles.prev);
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextBtn.click();
      }, timeAutoNext);
    };

    const onNext = () => showSlider("next");
    const onPrev = () => showSlider("prev");
    nextBtn.addEventListener("click", onNext);
    prevBtn.addEventListener("click", onPrev);

    return () => {
      nextBtn.removeEventListener("click", onNext);
      prevBtn.removeEventListener("click", onPrev);
      clearTimeout(runTimeOut);
      clearTimeout(runNextAuto);
    };
  }, []);

  return (
    <div className={styles.workSlider}>
      <div className={styles.carousel} ref={carouselRef}>
        <div className={styles.list} ref={listRef}>
          {[1, 2, 3, 4].map((i) => (
            <div className={styles.item} key={`slide-${i}`}>
              <img src={`/images/slider/img${i}.jpg`} alt={`Slide ${i}`} />
              <div className={styles.content}>
                <div className={styles.author}>TAPit Studio</div>
                <div className={styles.title}>Featured Work</div>
                <div className={styles.topic}>Project {i}</div>
                <div className={styles.des}>
                  We craft performant interfaces with thoughtful motion. This is a placeholder description.
                </div>
                <div className={styles.buttons}>
                  <button>See More</button>
                  <button>Contact</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.thumbnail} ref={thumbRef}>
          {[1, 2, 3, 4].map((i) => (
            <div className={styles.item} key={`thumb-${i}`}>
              <img src={`/images/slider/img${i}.jpg`} alt={`Thumb ${i}`} />
              <div className={styles.content}>
                <div className={styles.title}>Project {i}</div>
                <div className={styles.description}>Description</div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.arrows}>
          <button id="prev" ref={prevBtnRef}>&lt;</button>
          <button id="next" ref={nextBtnRef}>&gt;</button>
        </div>

        <div className={styles.time} ref={timeRef}></div>
      </div>
    </div>
  );
}
