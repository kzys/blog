all: public/en public/ja

public/en: hugo public
	cd en && ../hugo
	mv en/public public/en

public/ja: hugo public
	cd ja && ../hugo
	mv ja/public public/ja

public:
	mkdir public

hugo:
	curl -L https://github.com/gohugoio/hugo/releases/download/v0.59.0/hugo_0.59.0_macOS-64bit.tar.gz | tar zxvf -

clean:
	rm -fr public
