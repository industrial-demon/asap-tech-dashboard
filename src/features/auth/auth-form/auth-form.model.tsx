
import { useSession, signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'


interface SignInValues {
  email: string
  password: string
}

export const useAuthForm = () => {
  const form = useForm<SignInValues>({
    defaultValues: {
      email: '',
      password: ''
    }
  })
  const session = useSession()
  const searchParams = useSearchParams()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  console.log(session)
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard'

  const onSubmit = async (values:SignInValues) => {
    try {
      setLoading(true)
      const res = await signIn("credentials", {
      
        email: values.email,
        password: values.password,
        callbackUrl: '/dashboard'
      })

      setLoading(false)
    
      if (res?.ok) {
      //  router.push(callbackUrl)
      } else {
        
      }
    } catch (error: any) {
      setLoading(false)
     
    }
  }
  return {
    form,
    onSubmit
  }
}
