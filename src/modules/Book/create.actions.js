const fs = require( 'fs' )

const listFilesIn = ( path ) => fs.readdirSync( path )
const removeJSExtension = ( action ) => action.replace( '.js', '' )

module.exports = ( path ) => listFilesIn( path ).map( removeJSExtension )