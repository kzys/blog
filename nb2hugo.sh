#! /bin/sh

for i in $(find en/nb -not -path '*/\.*' -name '*.ipynb')
do
    year=$(basename $(dirname $i))
    nb2hugo "$i" --site-dir en --section posts/$year --use-page-bundle

    md_path=$(echo $i | sed -e 's,nb,content/posts,; s,\.ipynb$,/index.md,g')
    sed -i.bak 's/\!\[\(.*\)\](\(\(.*\)\))/{{< img alt="\1" src="\2" >}}/' "$md_path"
done

