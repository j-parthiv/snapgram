import {
  useQueries,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from '@tanstack/react-query'
import { createUserAccount, singInAccount, signOutAccount, createPost } from '../appwrite/api'
import { INewUser, INewPost } from '@/types'
import { QUERY_KEYS } from './queryKeys'


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

export const useCreatePost = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (post: INewPost) => createPost(post),
      onSuccess: () =>{
        queryClient.invalidateQueries({
            queryKey: [QUERY_KEYS.GET_RECENT_POSTS]
        })
      }
    });
  };
