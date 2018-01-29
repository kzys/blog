require('prismjs')
require('prismjs/components/prism-python')

function moveFootnotesToRight() {
  var xs = document.querySelectorAll("article a[rel='footnote']")
  xs.forEach(function (a) {
    var href = a.hash.split(/:/)
    var id = 'fn:' + href[1];

    var li = document.getElementById(id);
    li.style.position = 'absolute';
    li.style.top = a.offsetTop + 'px';
  });
}

function moveFootnotesToBottom() {
  var xs = document.querySelectorAll("article a[rel='footnote']")
  xs.forEach(function (a) {
    var href = a.hash.split(/:/)
    var id = 'fn:' + href[1];

    var li = document.getElementById(id);
    li.style.position = 'static';
  });
}

function moveFootnotes() {
  if (document.body.offsetWidth < 800) {
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
