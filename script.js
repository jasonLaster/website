(() => {
  let heroTimelineIndex = 1;
  let heroTimelineInterval;

  function updateHeroTimeline() {
    const markers = document.querySelectorAll(`.hero .timeline .marker`);

    markers.forEach((marker) => {
      marker.classList.remove("selected");
    });

    const marker = document.querySelector(
      `.hero .timeline :nth-child(${heroTimelineIndex + 1})`
    );
    marker.classList.add("selected");
  }

  function markerOnEnter(e) {
    const index = [
      ...e.currentTarget.parentElement.querySelectorAll(".marker"),
    ].findIndex((el) => el === e.currentTarget);
    clearInterval(heroTimelineInterval);
    heroTimelineIndex = index;
    updateHeroTimeline();
  }

  function incrementHeroTimelineIndex() {
    const markers = document.querySelectorAll(`.hero .timeline .marker`);
    heroTimelineIndex = (heroTimelineIndex + 1) % markers.length;
  }

  function markerOnLeave() {
    incrementHeroTimelineIndex();
    setupHeroTimeline();
  }

  function setupHeroTimeline() {
    heroTimelineInterval = setInterval(() => {
      updateHeroTimeline();
      incrementHeroTimelineIndex();
    }, 1000);
  }

  function main() {
    setupHeroTimeline();
    document.querySelectorAll(".timeline .marker").forEach((marker) => {
      marker.addEventListener("mouseenter", markerOnEnter);
      marker.addEventListener("mouseleave", markerOnLeave);
    });
  }

  setTimeout(main, 500);
})();

function setupDebuggingTimeline() {
  const widths = [
    [106, 91, 44, 73],
    [71, 63, 29, 49],
    [93, 81, 36, 61],
    [58, 49, 22, 35],
    [106, 91, 44, 73],
    [71, 63, 29, 49],
    [93, 81, 36, 61],
    [58, 49, 22, 35],
  ];

  let index = 0;
  let markers = document.querySelectorAll(".debugging-timeline .marker");
  const markerOffset =
    document.querySelector(".debugging-timeline").getBoundingClientRect()
      .height / markers.length;

  function update() {
    document.querySelector(".debugging-timeline .tooltip").style.top =
      (index + 1) * markerOffset - 10;
    index = (index + 1) % (markers.length - 1);

    widths[index].forEach((width, rIndex) => {
      document.querySelector(
        `.debugging-timeline .tooltip g rect:nth-child(${rIndex + 1})`
      ).width.baseVal.value = width;
    });
  }

  setInterval(update, 1000);
}

setTimeout(() => {
  setupDebuggingTimeline();
}, 1000);

let prevOffset;
window.addEventListener("scroll", function (e) {
  const offset = window.pageYOffset;
  const nav = document.querySelector(".nav");
  const threshold = 20;

  if (prevOffset > threshold && offset > threshold) {
    return;
  }

  if (offset > threshold) {
    nav.classList.add("offset");
  } else {
    nav.classList.remove("offset");
  }
  prevOffset = offset;
});
