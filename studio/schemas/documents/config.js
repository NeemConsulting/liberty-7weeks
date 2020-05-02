export default {
  name: 'config',
  title: 'Configuration',
  type: 'document',
  fields: [
    {
      name: 'ga',
      title: 'Google Analytics ID',
      description: 'Please enter code ga_xxxxx',
      type: 'string'
    },
    {
      name: 'someOtherKey',
      title: 'Other Keys',
      description: 'Please enter other keys placeholder',
      type: 'string'
    }
  ]
}
