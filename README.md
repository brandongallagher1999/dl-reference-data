# dl-reference-data

The main goal of this project it to provice a microservice that serves static data to an inventory management and a pos service. I started this as a request from my parents since they found most commercial solutions to be a bit to complex/expensive for their usecase hence here we are.

## Requirements
1. Node - [Install Node](https://nodejs.org/en/download/)
2. Yarn - [Install Yarn](https://classic.yarnpkg.com/lang/en/docs/install#mac-stable)

## Getting Started
### Installing dependencies
To get started clone the repository, once done navigate to the root and run the command below to install the dependencies.
```shell
yarn install
```
### Starting the service
```shell
yarn start
```

### Runing Tests
```shell
yarn test
```

## Docker
The docker image is currently a work in progress.

## Notes
Currently the schema for the db from where the data is served is mantained in a different private repo in gitlab. I am working on moving it to this one as I do believe it is better if each microservice is responsible for their own tables.