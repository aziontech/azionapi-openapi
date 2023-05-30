#!/bin/sh

types=("go" "php")

git config --global user.email "patrick.menoti@gmail.com"
git config --global user.name "PatrickMenoti"
for type in ${types[@]}; do
    for file in ${FILESCHANGED[@]}; do
        removed=$(echo ${file} | cut -d. -f1);
        npx @openapitools/openapi-generator-cli generate -i $file -g ${type} -o ./${type}/${removed} --package-name ${removed};\
    done
    cd ${type}
    git checkout -b generated-sdk
    git add .
    git commit -m "Auto-Generated SDK"
    git push origin generated-sdk
    gh pr create --body "Auto-generated SDK" --title "Auto-generated SDK"
    cd ..
done
