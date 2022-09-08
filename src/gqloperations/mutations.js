import {gql} from '@apollo/client'
export const SIGNUP_USER = gql`

mutation{
    register(adminregisterData:{
    
      email:"sandeep123@gmail.com",
      password:"sandeep123@#$",
      name:"sandeep yadav"
    }){
      accessToken
      refreshToken
    }
  }
`