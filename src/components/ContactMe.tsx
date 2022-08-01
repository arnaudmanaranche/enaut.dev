import type { ReactElement } from 'react'

import { Button } from './Button'

export const ContactMe = (): ReactElement => (
  <Button to="mailto:arnaud.mana@gmail.com">Send me an email</Button>
)
