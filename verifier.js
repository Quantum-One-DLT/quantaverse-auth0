function base64URLEncode(str) {
    return str.toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
}
var verifier = base64URLEncode(crypto.randomBytes(32));

// Dependency: Node.js crypto module
// https://nodejs.org/api/crypto.html#crypto_crypto
function sha256(buffer) {
    return crypto.createHash('sha256').update(buffer).digest();
}
var challenge = base64URLEncode(sha256(verifier));

https://app.fractal.id/authorize
  ?client_id={rZ0cAmPpY2SPgF4bXqBrzndqoTzk1EYsq4RtQ1fNhe0}
  &redirect_uri={https://quantumone.network/callback}
  &response_type=code
  &scope={contact:read}
  &state={abc1234}
