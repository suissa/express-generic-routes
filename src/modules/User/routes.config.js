module.exports = [
  { method: 'get',
    path: '/',
    action: 'find',
    middleware: [ 'middleware1', 'middleware2' ]
  },
  { method: 'get',
    path: '/:id',
    action: 'findOne'
  },
  { method: 'post',
    path: '/',
    action: 'create'
  },
  { method: 'put',
    path: '/:id',
    action: 'update'
  },
  { method: 'delete',
    path: '/:id',
    action: 'remove'
  }
]