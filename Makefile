highlight_js=https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.7.0

en/themes/x17/static/highlight.js:
	echo > $@
	curl $(highlight_js)/highlight.min.js >> $@
	curl $(highlight_js)/languages/go.min.js >> $@
