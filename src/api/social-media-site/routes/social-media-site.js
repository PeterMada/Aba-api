module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/social-media-sites',
      handler: 'social-media-site.find',
      config: { policies: [] }
    },
    {
      method: 'GET',
      path: '/social-media-sites/:id',
      handler: 'social-media-site.findOne',
      config: { policies: [] }
    },
    {
      method: 'POST',
      path: '/social-media-sites',
      handler: 'social-media-site.create',
      config: { policies: [] }
    },
    {
      method: 'PUT',
      path: '/social-media-sites/:id',
      handler: 'social-media-site.update',
      config: { policies: [] }
    },
    {
      method: 'DELETE',
      path: '/social-media-sites/:id',
      handler: 'social-media-site.delete',
      config: { policies: [] }
    }
  ]
}