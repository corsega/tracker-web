import times from 'lodash.times'
import { v4 as uuid } from 'uuid'

export const issues = times(10, () => {
  const id = `i_${uuid()}`
  return {
    id,
    title: `Issue #${id}`,
    description: ``,
    createdAt: (new Date()).toISOString(),
  }
})