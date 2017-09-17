const createAction = ( action, ACTIONS_PATH ) => ( {
  [ action ]: require( `${ ACTIONS_PATH }/${ action }` )
} )

const toController = ( createAction, ACTIONS_PATH ) => ( obj, action ) => 
  Object.assign( obj, createAction( action, ACTIONS_PATH ) )

module.exports = ( ACTIONS_PATH ) => ( actions ) => 
  actions.reduce( toController( createAction, ACTIONS_PATH ), {} )