package main

import (
    "fmt"
    "log"
    "time"
    //"encoding/json"
    "github.com/couchbase/gocb/v2"
    // Include this import if you want to run a Search query using regular Search index features.
    //"github.com/couchbase/gocb/v2/search"
    "github.com/couchbase/gocb/v2/vector"
    pd "github.com/PipedreamHQ/pipedream-go"
)
// Struct to represent the trigger object
type Trigger struct {
	WordEmbeddings WordEmbeddings `json:"word_embeddings"`
}

// Struct to represent the word_embeddings object
type WordEmbeddings struct {
	ReturnValue []float64 `json:"$return_value"`
}

// Make sure to change CB_USERNAME, CB_PASSWORD, and CB_HOSTNAME to the username, password, and hostname for your database.
func main() {
	// Access the "word_embeddings" object from the parsed map
	wordEmbeddings, ok := pd.Steps["word_embeddings"].(map[string]interface{})
	if !ok {
		fmt.Println("Error: 'word_embeddings' is not an object")
		return
	}

	// Access the "$return_value" array from the "word_embeddings" object
	returnValue, ok := wordEmbeddings["$return_value"].([]interface{})
	if !ok {
		fmt.Println("Error: '$return_value' is not an array of float64")
		return
	}

  // Create a top-level array to store converted float64 values
	var floatArray []float32

	// Convert each element to float64 and append to top-level array
	for _, val := range returnValue {
		if f, ok := val.(float64); ok {
			floatArray = append(floatArray, float32(f))
		} else {
			fmt.Println("Error: Value is not a float64")
		}
	}

    connstr := "connection"
    username := "username"
    password := "password"
	  // Make sure to change the bucket, and scope names to match where you stored the sample data in your database. 
    bucket_name := "bucket"
    scope_name := "scope"

    cluster, err := gocb.Connect(connstr, gocb.ClusterOptions{
        Authenticator: gocb.PasswordAuthenticator{
            Username: username,
            Password: password,
        },
        SecurityConfig: gocb.SecurityConfig{
            TLSSkipVerify: true, // Disables TLS certificate verification
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    bucket := cluster.Bucket(bucket_name)
    err = bucket.WaitUntilReady(5*time.Second, nil)
    if err != nil {
        log.Fatal(err)
    }

    scope := bucket.Scope(scope_name)
    request := gocb.SearchRequest{
        VectorSearch: vector.NewSearch(
            []*vector.Query{
            vector.NewQuery("index_search_field", floatArray),
        },
        nil,
       ),
    }
 
	// Change the limit value to return more results. Change the fields array to return different fields from your Search index.
    opts := &gocb.SearchOptions{Limit: 10, Fields: []string{"*"}}
 
	// Make sure to change the index name to match your Search index. 
    matchResult, err := scope.Search("index-search-name", request, opts)
    if err != nil {
        log.Fatal(err)
    }

      // Create a struct to represent the document
      	type Document struct {
      		DocumentID string            `json:"transaction_id"`
      		Fields     interface{} `json:"transaction_details"`
      	}

      // Create a slice to hold multiple documents
	      var documents []Document
  
    for matchResult.Next() {
      
        row := matchResult.Row()
        docID := row.ID
        var fields interface{}
        err := row.Fields(&fields)
        fmt.Println(matchResult.Next())
        if err != nil {
            log.Fatal(err)
        }
      
      	// Create a Document object
      	document := Document{
      		DocumentID: docID,
      		Fields:     fields,
      	}
        // Append the document to the slice
	      documents = append(documents, document)
        fmt.Println("Document ID: %s, Fields: %v\n", docID, fields)
      }
      // Marshal the Document object to JSON
      //jsonData, err := json.Marshal(documents)
      if err != nil {
        		fmt.Println("Error:", err)
        		return
      }
      pd.Export("documents", documents)
  
    
}