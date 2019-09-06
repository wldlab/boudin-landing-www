export default {
  name: 'category',
  title: 'Categories',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nom',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'sort',
      title: 'Ordre',
      type: 'number',
    },
  ],
};
