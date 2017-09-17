const ACTIONS_FOLER = '/actions'
const ACTIONS_PATH = '.' + ACTIONS_FOLER
const ACTIONS_PATH_FULL = __dirname + ACTIONS_FOLER

const Middlewares = require( './middlewares' )
const createActions = require( './create.actions' )
const createController = require( './create.controller' )( ACTIONS_PATH_FULL )
const Controller = createController( createActions( ACTIONS_PATH_FULL ) )

const CONFIG = {
  Middlewares,
  Controller
}
const createRoutes = require( './create.routes' )( CONFIG )

module.exports = ( router ) => createRoutes( router, require( './routes.config' ) )
