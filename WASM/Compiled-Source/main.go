package main

import (
	"log"

	"syscall/js"
)

func main() {
	log.Println("hi")
	js.Global().Call("updateDOM", "Hello World 2")
}
