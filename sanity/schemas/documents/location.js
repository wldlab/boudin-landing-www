export default {
  name: "location",
  title: "Localisations",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nom",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      name: "desription",
      title: "Description",
      type: "string",
    },
    {
      name: "openningHour",
      title: "Heure d'ouverture",
      type: "array",
      of: [{ type: "oppeningHour" }],
      validation: Rule => Rule.required(),
    },
    {
      name: "sort",
      title: "Ordre",
      type: "number",
    },
  ],
}
