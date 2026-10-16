// Videos load only when their play button is clicked; carousels are native scroll areas with buttons and a counter.
(function () {
  "use strict";

  document.querySelectorAll(".player[data-src]").forEach(function (player) {
    var button = player.querySelector(".play");
    if (!button) return;
    button.addEventListener("click", function () {
      var video = document.createElement("video");
      video.controls = true;
      video.autoplay = true;
      video.playsInline = true;
      video.preload = "auto";
      video.poster = player.querySelector("img").src;
      video.src = player.dataset.src;
      if (player.dataset.vtt) {
        var track = document.createElement("track");
        track.kind = "subtitles";
        track.srclang = "en";
        track.label = "English";
        track.src = player.dataset.vtt;
        track.default = true;
        video.appendChild(track);
      }
      video.setAttribute("aria-label", button.getAttribute("aria-label"));
      player.replaceChildren(video);
      video.focus();
    });
  });

  // Only one video plays at a time.
  document.addEventListener("play", function (e) {
    document.querySelectorAll("video").forEach(function (v) {
      if (v !== e.target) v.pause();
    });
  }, true);

  // The way back to the episode list shows up once the list has scrolled out of view.
  var list = document.querySelector(".toc");
  var back = document.querySelector(".to-list");
  if (list && back) {
    var toggle = function () {
      back.classList.toggle("show", list.getBoundingClientRect().bottom < 0);
    };
    window.addEventListener("scroll", toggle, { passive: true });
    toggle();
  }

  document.querySelectorAll(".carousel").forEach(function (carousel) {
    var track = carousel.querySelector(".track");
    var slides = track.querySelectorAll("img");
    var prev = carousel.querySelector(".prev");
    var next = carousel.querySelector(".next");
    var count = carousel.querySelector(".count");
    var total = slides.length;

    function current() {
      return Math.round(track.scrollLeft / track.clientWidth);
    }
    function update() {
      var i = current();
      count.textContent = (i + 1) + " / " + total;
      prev.disabled = i <= 0;
      next.disabled = i >= total - 1;
    }
    function go(i) {
      i = Math.max(0, Math.min(total - 1, i));
      track.scrollTo({ left: i * track.clientWidth });
    }

    prev.addEventListener("click", function () { go(current() - 1); });
    next.addEventListener("click", function () { go(current() + 1); });
    track.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") { e.preventDefault(); go(current() - 1); }
      if (e.key === "ArrowRight") { e.preventDefault(); go(current() + 1); }
    });
    var pending = 0;
    track.addEventListener("scroll", function () {
      cancelAnimationFrame(pending);
      pending = requestAnimationFrame(update);
    }, { passive: true });
    window.addEventListener("resize", update);
    update();
  });
})();
