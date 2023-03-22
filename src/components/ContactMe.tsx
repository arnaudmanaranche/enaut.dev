import type { ReactElement } from 'react'

import { Button } from '@/components/Button'

export const ContactMe = (): ReactElement => (
  <Button to="mailto:hello@enaut.dev">Send me an email</Button>
)
