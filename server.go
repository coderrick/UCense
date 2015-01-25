package main

import (
	//"fmt"
	"github.com/go-martini/martini"
	"github.com/martini-contrib/render"
	//"net/http"
)

func main() {
  m := martini.Classic()
  m.Use(render.Renderer(render.Options{
	Layout: "layoutIndex",
	Extensions: []string{".tmpl", ".html"},
  }))
  
  m.Get("/", func(ren render.Render) {
	
	ren.HTML(200, "video", nil)
  })
  m.Run()
}
