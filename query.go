package main

import (
  "fmt"
  "log"

  "github.com/PuerkitoBio/goquery"
)

func ExampleScrape() {
  doc, err := goquery.NewDocument("http://metalsucks.net") 
  if err != nil {
    log.Fatal(err)
  }

  doc.Find(".reviews-wrap article .review-rhs").Each(func(i int, s *goquery.Selection) {
    band := s.Find("h3").Text()
    title := s.Find("i").Text()
    fmt.Printf("Review %d: %s - %s\n", i, band, title)
  })
}

func mainexe() {//cannot have 2 go files with main functions in the same directory
  ExampleScrape()
}