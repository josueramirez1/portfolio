//Thank you HTML page

function successPage() {
  const redirect = "index.html";

  let count = 6;
  let timer = document.getElementById("timer");

  function countDown() {
    if (count > 0) {
      count--;
      timer.innerHTML = "This page will redirect in " + count + " seconds";

      setTimeout(() => {
        countDown();
      }, 1000);
    } else {
      window.location.href = redirect;
    }
  }
  countDown();
}

successPage();
