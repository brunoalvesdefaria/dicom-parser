#!/bin/bash

set -e

if [ "$#" != 1 ]; then
    echo "Please provide tag to checkout" >&2
    exit 1
fi
tag="$1"

while [ "$PWD" != '/' -a ! -f ./dist/dicom-parser.js ]; do
    cd ..
done

if [ ! -f ./dist/dicom-parser.js ]; then
    echo "Run me from the dicom-parser repo" >&2
    exit 1
fi

basename=$(basename $PWD)
src=dicom-parser-npm-git
dest=dicom-parser-npm

cd ..

rm -rf $src $dest

git clone $basename $src
mkdir $dest


cp $src/package.json $dest
cp $src/README.md $dest
cp $src/CHANGELOG.md $dest
cp $src/LICENSE $dest
cp -r $src/dist $dest
cp -r $src/docs $dest
cp -r $src/src $dest
cp $src/.npmignore $dest

rm -rf $src

echo "Check out $dest"
