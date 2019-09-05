import dayToConditionalString from "../../../utils/dayToConditionalString"

export default {
  name: "oppeningHour",
  title: "Heure d'ouverture",
  type: "object",
  fields: [
    {
      name: "day",
      title: "Jours",
      type: "array",
      of: [{ type: "string" }],
      validation: Rule => Rule.required(),
      options: {
        list: [
          {
            value: "1",
            title: "Lundi",
          },
          {
            value: "2",
            title: "Mardi",
          },
          {
            value: "3",
            title: "Mercredi",
          },
          {
            value: "4",
            title: "Jeudi",
          },
          {
            value: "5",
            title: "Vendredi",
          },
          {
            value: "6",
            title: "Samedi",
          },
          {
            value: "0",
            title: "Dimanche",
          },
        ],
      },
    },
    {
      name: "hours",
      title: "Heure d'ouverture",
      type: "array",
      validation: Rule => Rule.required(),
      of: [{ type: "hour" }],
    },
  ],
  preview: {
    select: {
      hours: "hours",
      day: "day",
    },
    prepare(selection) {
      const { day } = selection

      return {
        title: dayToConditionalString(day),
      }
    },
  },
}
