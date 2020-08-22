import dayjs from "dayjs"

const format = "YYYY-MM"

export function date(dateStr) {
  if (dateStr === "PRESENT") {
    return "Present"
  }

  return dayjs(dateStr).format(format)
}
