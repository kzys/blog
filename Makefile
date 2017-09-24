static_dir=en/themes/x17/static

all: en/themes/x17/static/main.min.css en/themes/x17/static/main.min.js

$(static_dir)/main.min.js: $(static_dir)/main.js
	./node_modules/browserify/bin/cmd.js $(static_dir)/main.js -o $@

en/themes/x17/static/main.min.css: postcss.config.js en/themes/x17/static/main.css
	./node_modules/postcss-cli/bin/postcss --config postcss.config.js \
	en/themes/x17/static/main.css -o $@

clean:
	-rm en/themes/x17/static/main.min.css
	-rm en/themes/x17/static/main.min.js

watch:
	cd en && hugo server --watch --buildDrafts
