export const defaultProps = {
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  distance: "30px",
  duration: 1000,
  desktop: true,
  mobile: true,
};

export const targetElements = [
  {
    element: ".hero__content",
    animation: {
      delay: 300,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    },
  },
  {
    element: ".hero__visual",
    animation: {
      delay: 600,
      origin: window.innerWidth > 768 ? "right" : "bottom",
    },
  },
  {
    element: ".experience__header",
    animation: {
      delay: 400,
      origin: "bottom",
    },
  },
  {
    element: ".experience__item",
    animation: {
      delay: 500,
      origin: "bottom",
      interval: 200,
    },
  },
  {
    element: ".projects__header",
    animation: {
      delay: 300,
      origin: "bottom",
    },
  },
  {
    element: ".project-card",
    animation: {
      delay: 400,
      origin: "bottom",
      interval: 200,
    },
  },
  {
    element: ".contact-cta__content",
    animation: {
      delay: 400,
      origin: "bottom",
    },
  },
  {
    element: ".contact__header",
    animation: {
      delay: 300,
      origin: "bottom",
    },
  },
  {
    element: ".contact__form-col",
    animation: {
      delay: 400,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    },
  },
  {
    element: ".contact__info-col",
    animation: {
      delay: 600,
      origin: window.innerWidth > 768 ? "right" : "bottom",
    },
  },
];
