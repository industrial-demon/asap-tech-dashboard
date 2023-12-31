'use client'

import { Button } from '@radix-ui/themes'
import { observer } from 'mobx-react-lite'
import { GhostInput } from '~/shared/ui/ghost-input/ghost-input'
import { useAuthForm } from './auth-form.model'

export const AuthForm = observer(() => {
  const { form, onSubmit } = useAuthForm()
  return (
    <form onSubmit={(e)=> {
      e.preventDefault()
      form.handleSubmit(onSubmit)()
    }}>
      <div className="max-w-lg">
        <div>
          <GhostInput
            {...form.register('email')}
            type="email"
            label="Email address"
          />
        </div>

        <div>
          <GhostInput
            {...form.register('password')}
            name="password"
            type="password"
            label="Password"
          />
        </div>

        <Button color="blue" type="submit">
          Sign in
        </Button>
      </div>
    </form>
  )
})
