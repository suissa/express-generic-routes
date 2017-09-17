const middleware1 = ( req, res, next ) => {
  console.log( 'middleware1' )
  next()
}
const middleware2 = ( req, res, next ) => {
  console.log( 'middleware2' )
  next()
}

module.exports = {
  middleware1,
  middleware2
}