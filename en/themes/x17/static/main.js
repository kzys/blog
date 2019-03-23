function getFootnotes() {
  return document.querySelectorAll("sup.footnote-ref a")
}

function moveFootnotesToRight() {
  getFootnotes().forEach(function (a) {
    var href = a.hash.split(/:/)
    var id = 'fn:' + href[1];

    var li = document.getElementById(id);
    li.style.position = 'absolute';
    li.style.top = a.parentNode.offsetTop + 'px';
  });
}

function moveFootnotesToBottom() {
  getFootnotes().forEach(function (a) {
    var href = a.hash.split(/:/)
    var id = 'fn:' + href[1];

    var li = document.getElementById(id);
    li.style.position = 'static';
  });
}

function moveFootnotes() {
  if (document.body.offsetWidth < 1200) {
    moveFootnotesToBottom();
  } else {
    moveFootnotesToRight();
  }
}

window.addEventListener('resize', function () {
  moveFootnotes();
});

setTimeout(function () {
  moveFootnotes();
}, 1);
