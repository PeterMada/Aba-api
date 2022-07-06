module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/settings',
      handler: 'setting.find',
      config: { policies: [] }
    },
    {
      method: 'PUT',
      path: '/settings',
      handler: 'setting.update',
      config: { policies: [] }
    },
    {
      method: 'DELETE',
      path: '/settings',
      handler: 'setting.delete',
      config: { policies: [] }
    }
  ]
}