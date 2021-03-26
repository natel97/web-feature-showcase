# Compiled Source

This is the source file I compiled from. Note that this was in the GOPATH of my machine and my directory structure was different.

This code is very basic, it just logs and updates a DOM element via a function call.

## Building

Go supports web assembly out of the box with the following command

```bash
GOOS=js GOARCH=wasm go build -o main.wasm
```

I gziped it to improve the speed
gzip -9 -v -c main.wasm > ./www/main.wasm.gz
