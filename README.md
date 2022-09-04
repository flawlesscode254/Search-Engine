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
# Consuming your search engine in your front end

- Install the package by running

```bash
    npm i search-engine-query
```
- Ensure that your `Search Engine` is running and you have its `url`

# Prerequisites

- A `url` to where your Engine is running
- The `searchIndex` to which you want to store your data or query from

# Using the Package to make queries to your Search Engine

- In the example below
- `http://localhost:2357` is my parent url where my search engine is running
- `movies` is my search index
- The json object in the `tryAddData` is my sample data am adding for it to be searchable
- `Gun` is my sample search query

```javascript
import { addSearchableData, searchData } from ("search-engine-query");

const tryAddData = async () => {
  await addSearchableData("http://localhost:2357/search", "movies", {
    id: 2,
    title: "Smoking Gun",
  }).then((res) => console.log(res));
};

tryAddData();

const tryGetData = async () => {
  await searchData("http://localhost:2357/search", "movies", "Gun").then(
    (res) => console.log(res)
  );
};

tryGetData();
```
