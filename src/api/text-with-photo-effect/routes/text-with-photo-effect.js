module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/text-with-photo-effects',
      handler: 'text-with-photo-effect.find',
      config: { policies: [] }
    },
    {
      method: 'GET',
      path: '/text-with-photo-effects/:id',
      handler: 'text-with-photo-effect.findOne',
      config: { policies: [] }
    },
    {
      method: 'POST',
      path: '/text-with-photo-effects',
      handler: 'text-with-photo-effect.create',
      config: { policies: [] }
    },
    {
      method: 'PUT',
      path: '/text-with-photo-effects/:id',
      handler: 'text-with-photo-effect.update',
      config: { policies: [] }
    },
    {
      method: 'DELETE',
      path: '/text-with-photo-effects/:id',
      handler: 'text-with-photo-effect.delete',
      config: { policies: [] }
    }
  ]
}