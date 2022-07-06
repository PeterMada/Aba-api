module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/workshops',
      handler: 'workshop.find',
      config: { policies: [] }
    },
    {
      method: 'GET',
      path: '/workshops/:id',
      handler: 'workshop.findOne',
      config: { policies: [] }
    },
    {
      method: 'POST',
      path: '/workshops',
      handler: 'workshop.create',
      config: { policies: [] }
    },
    {
      method: 'PUT',
      path: '/workshops/:id',
      handler: 'workshop.update',
      config: { policies: [] }
    },
    {
      method: 'DELETE',
      path: '/workshops/:id',
      handler: 'workshop.delete',
      config: { policies: [] }
    }
  ]
}