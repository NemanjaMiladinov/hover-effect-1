"use strict";
// image
const image = document.querySelector(".img");
// image overlay
const imageOverlay = document.querySelector(".image-overlay");
// element behind the text
const textOverlay = document.querySelector(".overlay-text");
// div below unsplash link
const linkUnderline = document.querySelector(".link-underline");
// jumping dog text
const text = document.querySelector(".img-info__tittle");
// link to the picture source
const link = document.querySelector(".img-info__link");

// states
let imageOn = true;
let textOn = true;
let linkOn = true;
let colorOn = true;
let elementOn = true;
// ...

const imageZoomAnimation = () => {
  // keyframes
  const increseSize = [{ backgroundSize: "120%" }];
  const normalSize = [{ backgroundSize: "100%" }];

  // keframes options
  const keyframesOPT = {
    iterations: 1,
    duration: 800,
    easing: "ease-in-out",
    fill: "forwards",
  };

  // on off
  if (imageOn) {
    image.animate(increseSize, keyframesOPT);
    imageOn = false;
  } else {
    image.animate(normalSize, keyframesOPT);
    imageOn = true;
  }
};

const textSkewAnimation = () => {
  // keyframes
  const keyframesIn = [{ transform: "skew(-20deg)" }];
  const keyframesOut = [{ transform: "skew(0deg)" }];

  // keyframes options
  const keyframesOPT = {
    iterations: 1,
    duration: 500,
    fill: "forwards",
  };

  // on off
  if (textOn) {
    text.animate(keyframesIn, keyframesOPT);
    textOn = false;
  } else {
    text.animate(keyframesOut, keyframesOPT);
    textOn = true;
  }
};
const textColorAnimation = () => {
  // keyframes
  const keyframesIn = [{ color: "black" }];
  const keyframesOut = [{ color: "white" }];

  // keyframes options
  const keyframesOPT = {
    iterations: 1,
    duration: 500,
    fill: "forwards",
  };

  // on off
  if (colorOn) {
    text.animate(keyframesIn, keyframesOPT);
    link.animate(keyframesIn, keyframesOPT);
    colorOn = false;
  } else {
    text.animate(keyframesOut, keyframesOPT);
    link.animate(keyframesOut, keyframesOPT);
    colorOn = true;
  }
};
const colorChange = (element) => {
  const keyframesIn = [{ backgroundColor: "black" }];
  const keyframesOut = [{ backgroundColor: "white" }];

  const keyframesOPT = {
    iterations: 1,
    duration: 500,
    fill: "forwards",
  };

  if (elementOn) {
    element.animate(keyframesOut, keyframesOPT);
    elementOn = false;
  } else {
    element.animate(keyframesIn, keyframesOPT);
    elementOn = true;
  }
};
const linkUnderlineAnimation = () => {
  const keyframesIn = [{ width: "100%" }];
  const keyframesOut = [{ width: "0%" }];

  const keyframesOPT = {
    iterations: 1,
    duration: 200,
    fill: "forwards",
  };

  if (linkOn) {
    linkUnderline.animate(keyframesIn, keyframesOPT);
    linkOn = false;
  } else {
    linkUnderline.animate(keyframesOut, keyframesOPT);
    linkOn = true;
  }
};
const imageEvent = (element) => {
  element.addEventListener("mouseenter", eventHandler);
  element.addEventListener("mouseleave", eventHandler);

  function eventHandler(e) {
    if (e.type === "mouseenter") {
      console.log("mouseenter");

      imageZoomAnimation();
      imageOverlay.style.opacity = "0";

      return;
    }
    if (e.type === "mouseleave") {
      console.log("mouse leave");

      imageZoomAnimation();
      imageOverlay.style.opacity = "1";

      return;
    }
  }
};
const textEvent = (textElement) => {
  textElement.addEventListener("mouseenter", eventHandler);
  textElement.addEventListener("mouseleave", eventHandler);

  function eventHandler(e) {
    if (e.type === "mouseenter") {
      console.log("mouse enter tittle");

      textSkewAnimation();
      textColorAnimation();
      linkUnderlineAnimation();
      colorChange(textOverlay);

      return;
    }

    if (e.type === "mouseleave") {
      console.log("mouse leave text overlay");

      textSkewAnimation();
      textColorAnimation();
      linkUnderlineAnimation();
      colorChange(textOverlay);

      return;
    }
  }
};

textEvent(text);
imageEvent(image);
