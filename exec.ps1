docker build --rm -t auth0-react-01-login .
docker run --init -p 3001:3001 -p 3002:3002 -it auth0-react-01-login
