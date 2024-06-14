package main

import (
	
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
)


//defining the user defined data-types
type options struct {
	A string
	B string
	C string
	D string
}
type problem struct {
	Question string
	Answer   string
	Options  options
}


//function for pulling the problems
func pullProblem(url string) []problem {
	fmt.Println(url)

	resp, err := http.Get(url)			//Putting the Get request to the specified URL

	if err != nil {						// Handling the error
		fmt.Println("Error, Check the URL")
		os.Exit(1)
	}
	b, err := ioutil.ReadAll(resp.Body)	// converting the resp.Body to byte slice

	var p []problem
	json.Unmarshal(b, &p)				// converting the byte slice to our strut types

	return p							// returning the problems

}
