import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import Router from 'next/router'
import * as yup from 'yup'
import Head  from "next/head";
import { useRouter } from 'next/router'
import { useContext } from "react";
import { AuthContext } from "../context/auth";

let schema = yup.object().shape({
  userName: yup.string().required(),
  password: yup.string().required()
}).required()

type users = {
  user: string,
  userName: string,
  password: string
}

const users: Array<users> = [
  {
    user: 'username',
    userName: 'username',
    password: 'teste%40example.com'
  },
  {
    user: 'pass',
    userName: 'password',
    password: 'teste123'
  },
]

export default function Login(){

  const { signIn } = useContext(AuthContext)

  async function handleSignIn(data: any) {
    await signIn(data)
  }

  console.log(users)

  const { register, handleSubmit, formState: { errors } } = useForm<users>({ resolver: yupResolver(schema)})
  const onSubmit: SubmitHandler<users> = async(data, e) => {
    var userFiltered = users.find(function(obj) { return obj.userName == data.userName })

    if(userFiltered?.password == data.password){
      e?.preventDefault
      await signIn(data)
    }
  }

  return(
    <>
      <Head>
        <title>Login - Tracking Trade</title>
      </Head>

      <div className="vh-100 bg-dark-blue bg-opacity-75 d-flex justify-content-center align-items-center">
        <div className="p-5 bg-light shadow login radius">

          <h1 className="mb-4 fs-1">Login</h1>

          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="mb-3">

              <label htmlFor="inputUser" className="form-label">Username</label>
              <input type="text" 
              className="form-control" 
              id="inputUser" 
              {...register('userName')} defaultValue=''/>

              <p>{errors.userName && "Insira o usuário"}</p>
            </div>

            <div className="mb-3">

              <label htmlFor="inputPassword" className="form-label">Password</label>
              <input type="password" 
              className="form-control" 
              id="inputPassword"
              {...register('password')} defaultValue=''/>
              {errors.password && "Insira a senha"}

            </div>

            <button type="submit" className="btn btn-primary w-100">Submit</button>

          </form>
        </div>
      </div>
    </>
  )
}