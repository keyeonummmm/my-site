'use client'

import { useState, useEffect } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs } from '@/components/ui/tabs'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

// Login form schema
const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
})

// Signup form schema with additional fields and validation
const signupSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" }),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
})

type LoginFormValues = z.infer<typeof loginSchema>
type SignupFormValues = z.infer<typeof signupSchema>

export default function LoginSignupForm() {
  const [activeTab, setActiveTab] = useState('login')
  const [formKey, setFormKey] = useState(0) // Add a key to force form recreation

  // Login form
  const loginForm = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  })

  // Signup form
  const signupForm = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onChange',
  })

  // Handle tab change with form reset
  const handleTabChange = (tabId: string) => {
    // Reset the forms when switching tabs to ensure clean state
    if (tabId === 'login') {
      loginForm.reset({
        email: '',
        password: '',
      });
    } else {
      signupForm.reset({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    }

    // Increment the form key to force React to remount the form components
    setFormKey(prevKey => prevKey + 1);

    // Update the active tab
    setActiveTab(tabId);
  };

  // Reset forms when component mounts
  useEffect(() => {
    loginForm.reset();
    signupForm.reset();
  }, []);

  // Handle login form submission
  function onLoginSubmit(data: LoginFormValues) {
    console.log('Login form submitted:', data)
    // In a real app, you would handle authentication here
    alert(`Login successful for ${data.email}`)
  }

  // Handle signup form submission
  function onSignupSubmit(data: SignupFormValues) {
    console.log('Signup form submitted:', data)
    // In a real app, you would handle user registration here
    alert(`Account created for ${data.email}`)
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <Tabs
          tabs={[
            { id: 'login', label: 'Login' },
            { id: 'signup', label: 'Sign Up' },
          ]}
          activeTab={activeTab}
          onChange={handleTabChange}
        />
        <CardDescription className="mt-4">
          {activeTab === 'login'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {activeTab === 'login' ? (
          <div key={`login-form-${formKey}`}>
            <Form {...loginForm}>
              <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-4">
                <FormField
                  control={loginForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          key="login-email-input"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={loginForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          {...field}
                          key="login-password-input"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">Login</Button>
              </form>
            </Form>
          </div>
        ) : (
          <div key={`signup-form-${formKey}`}>
            <Form {...signupForm}>
              <form onSubmit={signupForm.handleSubmit(onSignupSubmit)} className="space-y-4">
                <FormField
                  control={signupForm.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          key="signup-name-input"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={signupForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          key="signup-email-input"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={signupForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          {...field}
                          key="signup-password-input"
                        />
                      </FormControl>
                      <FormDescription>
                        Must be at least 8 characters with uppercase and number
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={signupForm.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          {...field}
                          key="signup-confirm-password-input"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">Create Account</Button>
              </form>
            </Form>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button
          variant="link"
          onClick={() => handleTabChange(activeTab === 'login' ? 'signup' : 'login')}
        >
          {activeTab === 'login'
            ? "Don't have an account? Sign up"
            : "Already have an account? Login"}
        </Button>
      </CardFooter>
    </Card>
  )
}
