function collectAllFootnotes() {
  var anchorsInBody = document.querySelectorAll("sup.footnote-ref a");
  var result = [];
  for (var a of anchorsInBody) {
    var id = a.hash.substring(1);
    var li = document.getElementById(id);
    result.push([a, li]);
  }
  return result;
}

function moveFootnotesToRight() {
  collectAllFootnotes().forEach(function (v) {
    var a = v[0];
    var li = v[1];
    li.style.position = 'absolute';
    li.style.top = a.parentNode.offsetTop + 'px';
  });
}

function moveFootnotesToBottom() {
  collectAllFootnotes().forEach(function (v) {
    var li = v[1];
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
