module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/menu-header',
      handler: 'menu-header.find',
      config: { policies: [] }
    },
    {
      method: 'PUT',
      path: '/menu-header',
      handler: 'menu-header.update',
      config: { policies: [] }
    },
    {
      method: 'DELETE',
      path: '/menu-header',
      handler: 'menu-header.delete',
      config: { policies: [] }
    }
  ]
}