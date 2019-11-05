export default {
  name: 'product',
  title: 'Produits',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nom',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Categorie',
      type: 'reference',
      to: [{ type: 'category' }],
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
      name: 'sortOrder',
      title: 'Ordre',
      type: 'number',
    },
  ],
};
