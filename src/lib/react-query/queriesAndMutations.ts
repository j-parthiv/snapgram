import {
  useQueries,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from '@tanstack/react-query'
import { createUserAccount, singInAccount, signOutAccount } from '../appwrite/api'
import { INewUser } from '@/types'

export const useCreateUserAccount = () =>{
    return useMutation({
        mutationFn: (user: INewUser) => createUserAccount(user)
    })
}
export const useSigninAccount = () =>{
    return useMutation({
        mutationFn: (user: {email: string, password: string}) => singInAccount(user)
    })
}
export const useSignOutAccount = () =>{
    return useMutation({
        mutationFn: () => signOutAccount()
    })
}

