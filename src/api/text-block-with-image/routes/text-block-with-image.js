module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/text-block-with-images',
      handler: 'text-block-with-image.find',
      config: { policies: [] }
    },
    {
      method: 'GET',
      path: '/text-block-with-images/:id',
      handler: 'text-block-with-image.findOne',
      config: { policies: [] }
    },
    {
      method: 'POST',
      path: '/text-block-with-images',
      handler: 'text-block-with-image.create',
      config: { policies: [] }
    },
    {
      method: 'PUT',
      path: '/text-block-with-images/:id',
      handler: 'text-block-with-image.update',
      config: { policies: [] }
    },
    {
      method: 'DELETE',
      path: '/text-block-with-images/:id',
      handler: 'text-block-with-image.delete',
      config: { policies: [] }
    }
  ]
}