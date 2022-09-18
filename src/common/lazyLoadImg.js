const lazyImageObserverFunc = (lazyImages) => {
  let lazyImageObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return;
        const lazyImage = target;
        lazyImage.src = lazyImage.dataset.src;
        lazyImage.classList.remove("lazy");
        lazyImageObserver.unobserve(lazyImage);
      });
    },
    { rootMargin: "0px 0px -120px 0px" }
  );
  lazyImages.forEach(function (lazyImage) {
    lazyImageObserver.observe(lazyImage);
  });
};

export default lazyImageObserverFunc;
