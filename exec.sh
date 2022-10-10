#!/usr/bin/env bash
docker build -t auth0-react-02-calling-an-api .
docker run --init -p 3001:3001 -p 3002:3002 -it auth0-react-02-calling-an-api
