static_dir=en/themes/x17/static

all: $(static_dir)/main.min.css $(static_dir)/main.min.js

$(static_dir)/main.min.js: $(static_dir)/main.js
	./node_modules/browserify/bin/cmd.js $(static_dir)/main.js -o $@

$(static_dir)/main.min.css: postcss.config.js $(static_dir)/main.css
	./node_modules/postcss-cli/bin/postcss \
	--config postcss.config.js $(static_dir)/main.css -o $@

watch-css: postcss.config.js $(static_dir)/main.css
	./node_modules/postcss-cli/bin/postcss --watch \
	--config postcss.config.js $(static_dir)/main.css -o \
	$(static_dir)/main.min.css

clean:
	-rm $(static_dir)/main.min.css $(static_dir)/main.min.js

watch:
	cd en && hugo server --watch --buildDrafts
