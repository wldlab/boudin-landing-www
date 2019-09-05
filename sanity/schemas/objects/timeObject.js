const arrayListNumberItem = (total, step = 1) => {
  return Array(total / step).fill().map((val, index) => ({title: `${index * step}`, value: `${index * step}`}))
}

export default {
  type: 'object',
  name: 'timeObject',
  fields: [
    {
      name: 'hour',
      title: 'Heure',
      type: 'string',
      options: {
        list: arrayListNumberItem(24)
      }
    },
    {
      name: 'minute',
      title: 'Minute',
      type: 'string',
      options: {
        list: arrayListNumberItem(60, 15)
      }
    }
  ],
  preview: {
    select: {
      hour: 'hour',
      minute: 'minute'
    },
    prepare (selection) {
      const {hour, minute} = selection
      return {
        title: `${hour}h${minute || ''}`
      }
    }
  }
}
