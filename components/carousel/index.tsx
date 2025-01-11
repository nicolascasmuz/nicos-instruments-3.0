import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Image from "next/image";
import arrowLeft from "../../resources/arrow-left.png";
import arrowRight from "../../resources/arrow-right.png";

const CarouselDiv = styled.div`
    min-width: 300px;
    max-width: 1000px;
    position: relative;
    margin: 0 30px;

    .carousel-wrapper .arrow {
      top: 50%;
      height: 46px;
      width: 46px;
      cursor: pointer;
      position: absolute;
      transform: translateY(-50%);
    }
  
    .carousel-wrapper .arrow:first-child {
      left: 12px;
      z-index: 10;
    }
  
    .carousel-wrapper .arrow:last-child {
      right: 13px;
      z-index: 10;
    }
  
    .carousel-wrapper .carousel {
      cursor: pointer;
      overflow: hidden;
      white-space: nowrap;
      scroll-behavior: smooth;
      margin: 0 35px;
    }

    .carousel {
      gap: 8px;
    }

    .carousel.dragging {
      cursor: grab;
      scroll-behavior: auto;
    }

    .carousel.dragging img {
      pointer-events: none;
    }
  
    .carousel img {
      height: 340px;
      object-fit: cover;
      width: 100%;
      margin-right: 8px;
    }
  
    @media (min-width: 469px) {
      .carousel img {
        height: 340px;
        object-fit: cover;
        width: calc(100% / 2);
        margin-right: 8px;
      }
    }
  
    @media (min-width: 769px) {
      .carousel img {
        height: 340px;
        object-fit: cover;
        width: calc(100% / 3);
        margin-right: 8px;
      }
    }
  
    .carousel img:first-child {
      margin-left: 0px;
    }

    .cat-container {
      position: relative;
      height: 176px;
      text-align: center;
    }

    @media (min-width: 1000px) {
      .cat-container {
        height: 238px;
      }
    }

    .cat-container .cat-img {
      transition: all 0.25s;
    }

    .text-overlay {
      display: flex;
      flex-direction: column;
      align-items: start;
    }

    .cat-container .text-overlay {
      position: absolute;
      bottom: 10px;
      left: 10px;
      font-family: "Bebas Neue", cursive;
      font-size: 25px;
      opacity: 0;
      color: #fafafa;
      margin: 0;
      transition: all 0.25s;
    }

    .cat-container:hover {
      .text-overlay {
        opacity: 1;
      }
      .cat-img {
        filter: blur(3px) brightness(0.2);
      }
    }
    }
  `;

export function CarouselComp() {
  const [products, setProducts] = useState([]);
  const [resultsFetched, setResultsFetched] = useState(false);

  useEffect(() => {
    if (!resultsFetched) {
      pullResults();
      setResultsFetched(true);
    }
  }, [resultsFetched]);

  async function pullResults() {
    fetch(
      "https://preview.contentful.com/spaces/boc2rp8m0dgi/environments/master/entries?access_token=Y1_N0gShtcshwQbkaOPc2u0lA-7zD8351Q0NWQCRCsU&&content_type=nicosStock"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const items = data.items;

        const sortProducts = items.sort((pA, pB) => {
          if (pA.fields.price < pB.fields.price) {
            return 1;
          }
          if (pA.fields.price > pB.fields.price) {
            return -1;
          }
          return 0;
        });

        const bestProducts = sortProducts.slice(0, 6);

        setProducts(bestProducts);
      });
  }

  useEffect(() => {
    const carouselEl = document.querySelector(".carousel");
    const firstImgEl = carouselEl
      ? carouselEl.querySelectorAll("img")[0]
      : null;
    const arrowsEl = document.querySelectorAll(".carousel-wrapper .arrow");

    const interval = setInterval(() => {
      if (carouselEl) {
        carouselEl.scrollLeft++;
      }
    }, 100);

    let isDragStart = false,
      prevPageX,
      prevScrollLeft;

    let firstImgWidth = firstImgEl ? firstImgEl.clientWidth + 40 : 0;

    arrowsEl.forEach((arrow) => {
      arrow.addEventListener("click", () => {
        clearInterval(interval);
        if (carouselEl) {
          carouselEl.scrollLeft +=
            arrow.id === "left" ? -firstImgWidth : firstImgWidth;
        }
      });
    });

    function dragStart(e) {
      isDragStart = true;
      prevPageX = e.pageX;
      prevScrollLeft = carouselEl ? carouselEl.scrollLeft : 0;
    }

    function dragging(e) {
      if (!isDragStart || !carouselEl) return;
      e.preventDefault();
      carouselEl.classList.add("dragging");
      let positionDiff = e.pageX - prevPageX;
      carouselEl.scrollLeft = prevScrollLeft - positionDiff;
    }

    function dragStop() {
      isDragStart = false;
      if (carouselEl) {
        carouselEl.classList.remove("dragging");
      }
    }

    if (carouselEl) {
      carouselEl.addEventListener("mousedown", (e) => {
        dragStart(e);
        clearInterval(interval);
      });
      carouselEl.addEventListener("mousemove", dragging);
      carouselEl.addEventListener("mouseup", dragStop);
    }
  }, [products]);

  return (
    <CarouselDiv>
      <div className="carousel-wrapper">
        <Image id="left" className="arrow" src={arrowLeft} alt="arrow-left" />
        <div className="carousel">
          {products.map((r, index) => (
            <div className="cat-container" key={index}>
              <img
                className="cat-img"
                src={r.fields.url}
                alt={r.fields.title.toLowerCase().replaceAll(" ", "-")}
              />
              <div className="text-overlay">
                <span>
                  {r.fields.title.length > 20
                    ? `${r.fields.title.substring(0, 20)}...`
                    : r.fields.title}
                </span>
                <span>${r.fields.price}</span>
              </div>
            </div>
          ))}
        </div>
        <Image
          id="right"
          className="arrow"
          src={arrowRight}
          alt="arrow-right"
        />
      </div>
    </CarouselDiv>
  );
}
