module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/external-links',
      handler: 'external-link.find',
      config: { policies: [] }
    },
    {
      method: 'GET',
      path: '/external-links/:id',
      handler: 'external-link.findOne',
      config: { policies: [] }
    },
    {
      method: 'POST',
      path: '/external-links',
      handler: 'external-link.create',
      config: { policies: [] }
    },
    {
      method: 'PUT',
      path: '/external-links/:id',
      handler: 'external-link.update',
      config: { policies: [] }
    },
    {
      method: 'DELETE',
      path: '/external-links/:id',
      handler: 'external-link.delete',
      config: { policies: [] }
    }
  ]
}