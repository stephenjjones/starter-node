# Starterkit for Node, Express, React

STATUS: WIP - do not use. This is just a playground.

### TODO
* SSL with LetsEncrypt
* auth w/o cookies?

### Express packages
* express

#### Middleware
* body-parser
  - form parsing
* morgan (logging)
* express.static (static files for local dev)
* passport
* passport facebook
* passport local
* passport google

### Password hashing
[storm path on argon2](https://stormpath.com/blog/secure-password-hashing-in-node-with-argon2)
use argon2

`$ brew install gcc`
`$ npm install -g node-gyp`
`$ npm install -S argon2` or `$ CXX=g++-5 npm install argon2`
