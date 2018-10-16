const SECONDS_TO_MILLISECONDS = 1000

export const formatUnixTime = (
  unix,
  locale = 'en-GB',
  options = {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
  }
) =>
  new Date(unix * SECONDS_TO_MILLISECONDS).toLocaleDateString(locale, options)
