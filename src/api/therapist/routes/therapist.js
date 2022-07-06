module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/therapists',
      handler: 'therapist.find',
      config: { policies: [] }
    },
    {
      method: 'GET',
      path: '/therapists/:id',
      handler: 'therapist.findOne',
      config: { policies: [] }
    },
    {
      method: 'POST',
      path: '/therapists',
      handler: 'therapist.create',
      config: { policies: [] }
    },
    {
      method: 'PUT',
      path: '/therapists/:id',
      handler: 'therapist.update',
      config: { policies: [] }
    },
    {
      method: 'DELETE',
      path: '/therapists/:id',
      handler: 'therapist.delete',
      config: { policies: [] }
    }
  ]
}