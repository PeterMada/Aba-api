module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/price-lists',
      handler: 'price-list.find',
      config: { policies: [] }
    },
    {
      method: 'GET',
      path: '/price-lists/:id',
      handler: 'price-list.findOne',
      config: { policies: [] }
    },
    {
      method: 'POST',
      path: '/price-lists',
      handler: 'price-list.create',
      config: { policies: [] }
    },
    {
      method: 'PUT',
      path: '/price-lists/:id',
      handler: 'price-list.update',
      config: { policies: [] }
    },
    {
      method: 'DELETE',
      path: '/price-lists/:id',
      handler: 'price-list.delete',
      config: { policies: [] }
    }
  ]
}