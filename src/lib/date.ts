const millisecondsToDays = (ml: number) => Math.ceil(ml / (1000 * 3600 * 24))

export const daysAgo = (date: Date) => {
  return millisecondsToDays(new Date().getTime() - date.getTime())
}
