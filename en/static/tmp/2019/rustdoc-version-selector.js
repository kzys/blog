var RELEASES = [
"1.31.1",
"1.31.0",
"1.30.1",
"1.30.0",
"1.29.2",
"1.29.1",
"1.29.0",
"1.28.0",
"1.27.2",
"1.27.1",
"1.27.0",
"1.26.2",
"1.26.1",
"1.26.0",
"1.25.0",
"1.24.1",
"1.24.0",
"1.23.0",
"1.22.1",
"1.22.0",
"1.21.0",
"1.20.0",
"1.19.0",
"1.18.0",
"1.17.0",
"1.16.0",
"1.15.1",
"1.15.0",
"1.14.0",
"1.13.0",
"1.12.1",
"1.12.0",
"1.11.0",
"1.10.0",
"1.9.0",
"1.8.0",
"1.7.0",
"1.6.0",
"1.5.0",
"1.4.0",
"1.3.0",
"1.2.0",
"1.1.0",
"1.0.0",
"1.0.0-alpha.2",
"1.0.0-alpha",
"0.12.0",
"0.11.0",
"0.10",
"0.9",
"0.8",
"0.7",
"0.6",
"0.5",
"0.4",
"0.3",
"0.2",
"0.1",
]

function modifyDocument(currentVersion) {
  var span = document.createElement('span');
  var select = document.createElement('select');
  select.onchange = function (e) {
    window.location = 'https://doc.rust-lang.org/'  + e.target.value + '/';
  };

  RELEASES.forEach(function (v) {
    var option = document.createElement('option');
    option.value = v;
    option.textContent = v;

    if (v == currentVersion) {
      option.selected = 'selected';
    }

    select.appendChild(option);
  });

  span.innerHTML = '&nbsp;';
  span.appendChild(select);

  if (currentVersion !== RELEASES[0]) {
    span.appendChild(document.createTextNode(' \u26a0\ufe0f'));
  }

  var sticker = document.querySelector('#versioninfo .white-sticker');
  var children = sticker.childNodes;

  if (children[children.length-1].textContent.match(/^\s*\d+\.\d+\.\d+$/)) {
    sticker.removeChild(children[children.length-1]);
  }
  sticker.appendChild(span);
}

var m = location.href.match(/\/\/doc\.rust-lang\.org\/(\d.+?)\//);
if (m) {
  modifyDocument(m[1]);
}

/*
s=document.createElement('script');s.type='text/javascript';s.src='http://localhost:1313/en/tmp/2019/rustdoc-version-selector.js';document.body.appendChild(s);
*/
