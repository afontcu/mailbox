import { formatUnixTime } from '@/common/date.js'
import capitalize from 'lodash.capitalize'

export const normalizeData = messages =>
  messages.map(message => ({
    ...message,
    subject: capitalize(message.subject),
    date: formatUnixTime(message.time_sent),
  }))
