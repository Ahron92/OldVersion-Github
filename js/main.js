//모듈화
(function (window, document) {
  "use strict"; //엄격한 자바스크립트를 적겠어라는 뜻

  const $toggles = document.querySelectorAll(".toggle"); // NodeList 유사배열
  const $toggleBtn = document.getElementById("toggle-btn");
  //$를 적는 이유는 요소를 담고 있음을 알려주는 방법

  $toggleBtn.addEventListener("click", function () {
    toggleElements();
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 1024) {
      offElements();
    }
  });

  function toggleElements() {
    [].forEach.call($toggles, function (toggle) {
      toggle.classList.toggle("on");
    });
  }

  function offElements() {
    [].forEach.call($toggles, function (toggle) {
      toggle.classList.remove("on");
    });
  }
})(window, document);
