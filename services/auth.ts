import { v4 as uuid } from 'uuid'

type SignInRequestData = {
  userName: string,
  password: string
}

const delay = (amount = 650) => new Promise(resolve => setTimeout(resolve, amount))

export async function signInRequest(data: SignInRequestData){
  await delay()

  return{
    token: uuid(),
    user: {
      name: 'Raphael',
      userName: 'username'
    }
  }

}

export async function recoverUserInformation(){
  await delay()

  return {
    user: {
      name: 'Raphael',
      userName: 'username'
    }
  }
}