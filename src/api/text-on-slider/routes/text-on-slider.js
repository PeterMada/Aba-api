module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/text-on-sliders',
      handler: 'text-on-slider.find',
      config: { policies: [] }
    },
    {
      method: 'GET',
      path: '/text-on-sliders/:id',
      handler: 'text-on-slider.findOne',
      config: { policies: [] }
    },
    {
      method: 'POST',
      path: '/text-on-sliders',
      handler: 'text-on-slider.create',
      config: { policies: [] }
    },
    {
      method: 'PUT',
      path: '/text-on-sliders/:id',
      handler: 'text-on-slider.update',
      config: { policies: [] }
    },
    {
      method: 'DELETE',
      path: '/text-on-sliders/:id',
      handler: 'text-on-slider.delete',
      config: { policies: [] }
    }
  ]
}