ifeq ($(shell uname),Darwin)
hugo_url=https://github.com/gohugoio/hugo/releases/download/v0.59.0/hugo_0.59.0_macOS-64bit.tar.gz
else
hugo_url=https://github.com/gohugoio/hugo/releases/download/v0.59.0/hugo_0.59.0_Linux-64bit.tar.gz
endif

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
	curl -L $(hugo_url) | tar zxvf -

clean:
	rm -fr public
