module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/news',
      handler: 'new.find',
      config: { policies: [] }
    },
    {
      method: 'GET',
      path: '/news/:id',
      handler: 'new.findOne',
      config: { policies: [] }
    },
    {
      method: 'POST',
      path: '/news',
      handler: 'new.create',
      config: { policies: [] }
    },
    {
      method: 'PUT',
      path: '/news/:id',
      handler: 'new.update',
      config: { policies: [] }
    },
    {
      method: 'DELETE',
      path: '/news/:id',
      handler: 'new.delete',
      config: { policies: [] }
    }
  ]
}