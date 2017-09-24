highlight_js=https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.7.0

all: en/themes/x17/static/main.min.css en/themes/x17/static/highlight.min.js

en/themes/x17/static/main.min.css: postcss.config.js en/themes/x17/static/main.css
	./node_modules/postcss-cli/bin/postcss --config postcss.config.js \
	en/themes/x17/static/main.css -o $@

en/themes/x17/static/highlight.min.js:
	curl --silent \
	$(highlight_js)/highlight.min.js \
	$(highlight_js)/languages/scala.min.js \
	$(highlight_js)/languages/go.min.js > $@

clean:
	-rm en/themes/x17/static/highlight.min.js
	-rm en/themes/x17/static/main.min.css
