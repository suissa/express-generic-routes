const createRoute = ( router, { Controller, Middlewares } = CONFIG  ) => 
  ( route ) => 
    ( route.middleware )
      ? router[ route.method ]
        ( route.path, 
          ...route.middleware.map( m => Middlewares[ m ] ), 
          Controller[ route.action ] 
        )
      : router[ route.method ]
        ( route.path, Controller[ route.action ] )

const createRoutes = (  CONFIG ) => 
  ( router, routes ) => {
    routes.map( createRoute( router, CONFIG  ) )
    return router
  }

module.exports = createRoutes