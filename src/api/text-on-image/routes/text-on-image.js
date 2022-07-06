module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/text-on-images',
      handler: 'text-on-image.find',
      config: { policies: [] }
    },
    {
      method: 'GET',
      path: '/text-on-images/:id',
      handler: 'text-on-image.findOne',
      config: { policies: [] }
    },
    {
      method: 'POST',
      path: '/text-on-images',
      handler: 'text-on-image.create',
      config: { policies: [] }
    },
    {
      method: 'PUT',
      path: '/text-on-images/:id',
      handler: 'text-on-image.update',
      config: { policies: [] }
    },
    {
      method: 'DELETE',
      path: '/text-on-images/:id',
      handler: 'text-on-image.delete',
      config: { policies: [] }
    }
  ]
}