cwd=$(shell pwd)
hugo_bin=$(cwd)/tmp/hugo
cf_dist_id=EZLOTA1EGTZ45

ifeq ($(shell uname),Darwin)
hugo_url=https://github.com/gohugoio/hugo/releases/download/v0.59.0/hugo_0.59.0_macOS-64bit.tar.gz
else
hugo_url=https://github.com/gohugoio/hugo/releases/download/v0.59.0/hugo_0.59.0_Linux-64bit.tar.gz
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
	aws s3 sync --acl public-read --size-only public/ s3://blog.8-p.info-2017
	aws cloudfront create-invalidation \
		--distribution-id $(cf_dist_id) \
		--paths '/en/*' '/ja/*' > $@

upload: tmp/cf-invalidation.json
	aws cloudfront wait invalidation-completed \
		--distribution-id $(cf_dist_id) --id $(shell jq -r .Invalidation.Id tmp/invalidation.json)

clean:
	rm -fr public
