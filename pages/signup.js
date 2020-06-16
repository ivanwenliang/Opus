import React from 'react'
import { useRouter } from 'next/router'

import { useAuth } from '../hooks/use-auth'
import PublicLayout from '../layouts/PublicLayout'
import FullScreenAuth from '../components/Auth'

export default () => {
  const auth = useAuth()
  const router = useRouter()

  const signUp = ({ email, password }) => {
    auth
      // hardcoded display name for now
      .signUp(email, password, 'Ivan')
      .then(() => router.push('/dashboard'))
      .catch((error) => {
        alert(error.message)
      })
  }

  return (
    <PublicLayout>
      <FullScreenAuth
        type="Sign Up"
        onSubmit={signUp}
        header="Sign up for a new account"
      />
    </PublicLayout>
  )
}
