import {FaSlidersH} from 'react-icons/fa'

export default {
  name: 'sliderType',
  type: 'document',
  icon: FaSlidersH,
  title: 'Slider Type',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Slider Type'
    },
    {
      name: 'description',
      type: 'string',
      title: 'Slider Description'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
      media: 'FaSlidersH'
    }
  }
}
