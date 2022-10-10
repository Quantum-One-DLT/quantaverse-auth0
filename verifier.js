function base64URLEncode(str) {
    return str.toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
}

var verifier = base64URLEncode(crypto.randomBytes(32));
console.log("code_verifier: ", verifier)

if(verifier){
    var challenge = base64URLEncode(sha256(verifier));
    console.log("code_challenge: ",challenge)
}

function sha256(buffer) {
    return crypto.createHash('sha256').update(buffer).digest();
}

<a href="https://app.fractal.id/authorize?
  response_type=code&
  code_challenge=CODE_CHALLENGE&
  code_challenge_method=s256&
  client_id=rZ0cAmPpY2SPgF4bXqBrzndqoTzk1EYsq4RtQ1fNhe0&
  redirect_uri=https://quantumone.network/oauth/callback&
  state={abc1234}">
  Sign In
  </a> 

var axios = require("axios").default;

var options = {
  method: 'POST',
  url: 'https://quantumone.network/oauth/token',
  headers: {'content-type': 'application/x-www-form-urlencoded'},
  data: new URLSearchParams({
    grant_type: 'authorization_code',
    client_id: 'rZ0cAmPpY2SPgF4bXqBrzndqoTzk1EYsq4RtQ1fNhe0',
    code_verifier: 'YOUR_GENERATED_CODE_VERIFIER',
    code: 'YOUR_AUTHORIZATION_CODE',
    redirect_uri: 'http://localhost:3001'
  })
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
