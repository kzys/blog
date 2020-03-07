cwd=$(shell pwd)

hugo_bin=$(cwd)/tmp/hugo
hugo_version=0.61.0

cf_dist_id=EZLOTA1EGTZ45

ifeq ($(shell uname),Darwin)
hugo_url=https://github.com/gohugoio/hugo/releases/download/v$(hugo_version)/hugo_$(hugo_version)_macOS-64bit.tar.gz
else
hugo_url=https://github.com/gohugoio/hugo/releases/download/v$(hugo_version)/hugo_$(hugo_version)_Linux-64bit.tar.gz
endif

all: public/en public/ja

public/en: $(hugo_bin) public
	cd en && $(hugo_bin)
	mv en/public public/en

public/ja: $(hugo_bin) public
	cd ja && $(hugo_bin)
	mv ja/public public/ja

public:
	mkdir public

$(hugo_bin):
	mkdir -p tmp
	curl --silent -L $(hugo_url) | tar -zx -C tmp -f -

tmp/cf-invalidation.json:
	mkdir -p tmp
	s3cmd sync --acl-public public/ s3://blog.8-p.info-2017/
	aws cloudfront create-invalidation \
		--distribution-id $(cf_dist_id) \
		--paths '/en/*' '/ja/*' > $@

upload: tmp/cf-invalidation.json
	aws cloudfront wait invalidation-completed \
		--distribution-id $(cf_dist_id) \
		--id $(shell jq -r .Invalidation.Id $<)

clean:
	rm -fr public

venv:
	python3 -m virtualenv venv
