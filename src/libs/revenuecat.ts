export interface RevenueCatMetrics {
  revenue: number
  new_customers: number
  active_subscriptions: number
  chartData: number[]
  period: string
}

const formatDateRange = (
  startTimestamp: number,
  endTimestamp: number
): string => {
  const start = new Date(startTimestamp * 1000)
  const end = new Date(endTimestamp * 1000)
  const formatOptions: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
  }
  return `${start.toLocaleDateString(
    'en-US',
    formatOptions
  )} - ${end.toLocaleDateString('en-US', formatOptions)}`
}

export const getRevenueCatMetrics = (): Promise<RevenueCatMetrics> => {
  const apiKey = process.env.REVENUECAT_API_KEY

  if (!apiKey) {
    return Promise.resolve({
      revenue: 0,
      new_customers: 0,
      active_subscriptions: 0,
      chartData: [],
      period: 'Last 28 days',
    })
  }

  const projectId = '5cdc4ee1'
  const endDate = new Date().toISOString().split('T')[0]
  const startDate = new Date(Date.now() - 28 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split('T')[0]

  const chartUrl = `https://api.revenuecat.com/v2/projects/${projectId}/charts/revenue?start_date=${startDate}&end_date=${endDate}`
  const metricsUrl = `https://api.revenuecat.com/v2/projects/${projectId}/metrics/overview`

  const headers = {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  }

  return fetch(chartUrl, { headers })
    .then((chartRes) => {
      if (!chartRes.ok) {
        console.error('RevenueCat chart API error:', chartRes.status)
        return null
      }
      return chartRes.json()
    })
    .then((chartResponse) => {
      return fetch(metricsUrl, { headers }).then((metricsRes) => {
        if (!metricsRes.ok) {
          console.error('RevenueCat metrics API error:', metricsRes.status)
          return { metrics: [], chartResponse: null }
        }
        return metricsRes.json().then((metricsData) => ({
          metrics: metricsData.metrics,
          chartResponse,
        }))
      })
    })
    .then((result) => {
      const allValues = result.chartResponse?.values ?? []
      const revenueValues = allValues
        .filter((v: { measure: number }) => v.measure === 0)
        .map((v: { value: number }) => v.value)

      const startTimestamp = result.chartResponse?.start_date ?? 0
      const endTimestamp = result.chartResponse?.end_date ?? 0
      const dateRange = formatDateRange(startTimestamp, endTimestamp)

      const getMetricValue = (id: string) =>
        result.metrics.find((m: { id: string }) => m.id === id)?.value ?? 0

      return {
        revenue: getMetricValue('revenue'),
        new_customers: getMetricValue('new_customers'),
        active_subscriptions: getMetricValue('active_users'),
        chartData: revenueValues,
        period: dateRange,
      }
    })
    .catch((error) => {
      console.error('Error fetching RevenueCat data:', error)
      return {
        revenue: 0,
        new_customers: 0,
        active_subscriptions: 0,
        chartData: [],
        period: 'Last 28 days',
      }
    })
}
