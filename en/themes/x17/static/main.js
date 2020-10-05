var BREAKPOINT_WIDTH_REM = 70;
var MOVE_FOOTNOTES_AFTER_INITIAL_LOAD = 50;
var DEBOUNCE_INTERVAL = 500;

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
  var style = getComputedStyle(document.documentElement);
  var remToPixel = parseInt(style.fontSize);
  var breakpointWidth = BREAKPOINT_WIDTH_REM * remToPixel;
  if (document.body.offsetWidth < breakpointWidth) {
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
    x = setTimeout(f, DEBOUNCE_INTERVAL);
  }
}

window.addEventListener('resize', function () {
  debounce(moveFootnotes)();
});

setTimeout(function () {
  moveFootnotes();
}, MOVE_FOOTNOTES_AFTER_INITIAL_LOAD);
