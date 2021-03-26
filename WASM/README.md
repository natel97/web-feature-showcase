# Web Assembly

You can use other languages to compile code to web assembly for the browser to use. This example is very simple and updates a DOM element with a computed value (well, kind of haha).

This example was Gzipped for performance reasons.

Note: your language may provide a specific file to parse the wasm file. This example pulls the `wasm_exec.js` file from Go. This file was located at `"$(go env GOROOT)/misc/wasm/wasm_exec.js"`

It is recommended to stream the file, however I wasn't able to get that to work.
