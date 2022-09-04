# Search-Engine
* A search engine that works with any language.
* It works with `Meilisearch` but queried via an express backend.
* Clone the code and spin it up on Docker using `sudo docker compose up -d`
* To start using it, do the following.
# Upload your data (/add) that you want to be searchable by
* [x] Passing the search index as `refIndex` in your POST request header
* [x] Passing the data in your `request body`
* `To smoothen the process, its best to conduct this process via a Cloud function`
# To search (/search) for data in the engine
* [x] Passing the search index as `refIndex` in your GET request header
* [x] Passing the search query as `query` in your GET request header
# To secure your engine
* [x] Replace your `MEILI_MASTER_KEY` with a strong password in the `docker-compose.yaml` file
* [x] Do the same for the `MEILI_KEY` in the same `docker-compose.yaml` file
* [x] The two keys should be the same
# Benefits
* [x] The service is `lightning fast`
* [x] It is equiped with a `load balancer` and therefore can be scaled infinitely
* [x] It is very easy to use
