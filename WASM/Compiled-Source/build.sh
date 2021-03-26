#! /bin/bash

GOOS=js GOARCH=wasm go build -o main.wasm
gzip -9 -v -c main.wasm > ./www/main.wasm.gz