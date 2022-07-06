module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/menu-footer',
      handler: 'menu-footer.find',
      config: { policies: [] }
    },
    {
      method: 'PUT',
      path: '/menu-footer',
      handler: 'menu-footer.update',
      config: { policies: [] }
    },
    {
      method: 'DELETE',
      path: '/menu-footer',
      handler: 'menu-footer.delete',
      config: { policies: [] }
    }
  ]
}