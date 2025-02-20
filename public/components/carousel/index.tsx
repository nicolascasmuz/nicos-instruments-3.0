import React, { useState, useEffect, useCallback } from "react";
import { usePrevNextButtons } from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./carousel.module.css";
import { LeftArrowIcon, RightArrowIcon } from "ui/icons";
import { searchBestProducts } from "lib/api";
import { useRouter } from "next/router";

const CarouselComp = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [products, setProducts] = useState([]);
  const router = useRouter();

  async function pullResults() {
    const res = await searchBestProducts();
    const items = res.results;

    const higherPrice = items.sort((pA, pB) => pB.price - pA.price);
    const bestProducts = higherPrice.slice(0, 6);

    setProducts(bestProducts);
  }

  useEffect(() => {
    pullResults();
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const nextSlide = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(nextSlide, 3000);

    emblaApi.on("pointerDown", () => clearInterval(interval));
    emblaApi.on("pointerUp", () => {
      setTimeout(() => {
        const newInterval = setInterval(nextSlide, 3000);
        emblaApi.on("pointerDown", () => clearInterval(newInterval));
      }, 500);
    });

    return () => clearInterval(interval);
  }, [emblaApi, nextSlide]);

  function HandleClick(e) {
    e.preventDefault();
    const attribute = e.target.getAttribute("id");
    const attModified = attribute.toLowerCase().replaceAll(" ", "-");

    router.push("/product/" + attModified);
  }

  return (
    <section className={styles["embla"]}>
      <div className={styles["embla__viewport"]} ref={emblaRef}>
        <div className={styles["embla__container"]}>
          {products.map((r, index) => (
            <div
              className={styles["cat-container"]}
              key={index}
              onClick={HandleClick}
            >
              <img
                className={styles["cat-img"]}
                src={r.pic}
                alt={r.name.toLowerCase().replaceAll(" ", "-")}
                id={r.name}
              />
              <div className={styles["text-overlay"]}>
                <span>
                  {r.name.length > 20
                    ? `${r.name.substring(0, 20)}...`
                    : r.name}
                </span>
                <span>${r.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles["embla__controls"]}>
        <div className={styles["embla__buttons"]}>
          <LeftArrowIcon
            onClick={() => {
              onPrevButtonClick();
            }}
            disabled={prevBtnDisabled}
            className={styles["carousel__arrow"]}
          />
          <RightArrowIcon
            onClick={() => {
              onNextButtonClick();
            }}
            disabled={nextBtnDisabled}
            className={styles["carousel__arrow"]}
          />
        </div>
      </div>
    </section>
  );
};

export default CarouselComp;
