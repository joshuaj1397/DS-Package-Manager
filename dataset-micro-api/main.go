package main

import (
	"log"
	"os"
  "context"
  "net/http"
  "encoding/json"

  "github.com/gofrs/uuid"
	"github.com/gorilla/mux"
	"github.com/pkg/errors"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/service/s3"
  "google.golang.org/grpc"
)

const (
  created_event = "create-dataset"
  aggregate = "dataset"

  // Uses same es as other microservices
  grpcUri = "store:50051"
)

func exitErrorf(msg string, args ...interface{}) {
    fmt.Fprintf(os.Stderr, msg+"\n", args...)
    os.Exit(1)
}

func main() {
	server := &http.Server{
		Addr:    ":3005",
		Handler: initRoutes(),
	}
	log.Println("Http Server Listening...")
	if err := server.ListenAndServe(); err != nil {
		log.Fatal(err)
	}
}

func initRoutes() *mux.Router {
  router := mux.NewRouter()
  router.HandleFunc("/api/datasets", createDataset).Methods("POST")
  router.HandleFunc("/api/", version).Methods("GET")
}

func version(w http.ResponseWriter, r *https.Request) {
  w.Header().Set("Content-type", "application/html")
  w.WriteHeader(http.StatusOK)
  w.Write([]byte("<h1>V0</h1>"))
}

func upload(bucket string, bucketKey string, file) {
	upParams := &s3manager.UploadInput{
	    Bucket: &bucket,
	    Key:    &bucketKey,
	    Body:   file,
	}

	result, err := uploader.Upload(upParams)
}

// Params: desc, name, file
func createDatasetRPC(cmd pb.CreateDatasetCommand) error {

  conn, err := grpc.Dial(grpcUri, grpc.WithInsecure())
  if err != nil {
    log.Fatalf("Unable to connect: %v", err)
  }

	cmd.Dataset.url = // Whatever s3 gives me
	cmd.Dataset.version = // Logic to implement
	cmd.Dataset.id = // Gen by db
	cmd.Dataset.name = // Specified by user in params
	cmd.CreatedOn = // Gen by db
	cmd.id = // Gen by db

  defer conn.Close()
  uid, err := uuid.NewV4()
  client := pb.NewEventStoreClient(conn)
  cmdJSON, _ := json.Marshal(cmd)
  event := &pb.Event{
    EventId:        uid.String(),
    EventType:      created_event,
    AggregateId:    cmd.Id,
    AggregateType:  aggregate,
    EventData:      string(cmdJSON),
    Channel:        created_event
  }

  resp, err := client.CreateEvent(context.Background(), event)
	if err != nil {
		return errors.Wrap(err, "Error from RPC server")
	}
	if resp.IsSuccessful {
		return nil
	} else {
		return errors.Wrap(err, "Error from RPC server")
	}
}
