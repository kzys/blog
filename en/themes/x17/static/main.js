function getFootnotes() {
  return document.querySelectorAll("sup a.footnote-ref")
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
  if (document.body.offsetWidth < 1000) {
    moveFootnotesToBottom();
  } else {
    moveFootnotesToRight();
  }
}

function debounce(f) {
  var x;

  return function() {
    if (x) {
      clearTimeout(x);
    }
    x = setTimeout(f, 500);
  }
}

window.addEventListener('resize', function () {
  debounce(moveFootnotes)();
});

setTimeout(function () {
  moveFootnotes();
}, 100);
