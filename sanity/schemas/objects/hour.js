export default {
  type: "object",
  name: "hour",
  fields: [
    {
      name: "fromTime",
      title: "De",
      type: "timeObject",
      validation: Rule => Rule.required(),
    },
    {
      name: "toTime",
      title: "À",
      type: "timeObject",
      validation: Rule => Rule.required(),
    },
    {
      name: "note",
      title: "Note",
      type: "string",
    },
  ],
  preview: {
    select: {
      fromTime: "fromTime",
      toTime: "toTime",
      note: "note",
    },
    prepare(selection) {
      const { fromTime, toTime, note } = selection
      return {
        title: `${fromTime.hour}h${fromTime.minute || ""} à ${
          toTime.hour
        }h${toTime.minute || ""}`,
        subtitle: note,
      }
    },
  },
}
