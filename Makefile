highlight_js=https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.7.0

en/themes/x17/static/highlight.min.js:
	curl --silent \
	$(highlight_js)/highlight.min.js \
	$(highlight_js)/languages/scala.min.js \
	$(highlight_js)/languages/go.min.js > $@

clean:
	-rm en/themes/x17/static/highlight.min.js
