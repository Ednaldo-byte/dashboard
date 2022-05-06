import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router'
import * as yup from 'yup'
import Head  from "next/head";
import Link from "next/link";

let schema = yup.object().shape({
  userName: yup.string().required(),
  password: yup.string().required()
}).required()

type inputs = {
  userName: string,
  password: string
}

type users = {
  userName: string,
  password: string
}

const users: Array<users> = [
  {
    userName: 'username',
    password: 'teste%40example.com'
  },
  {
    userName: 'password',
    password: 'teste123'
  },
]

export default function Login(){

  console.log(users)

  const router = useRouter()

  const { register, handleSubmit, formState: { errors } } = useForm<inputs>({ resolver: yupResolver(schema)})
  const onSubmit: SubmitHandler<inputs> = (data) => {
    const verifyUser = users.filter((user: users) => {
      if (user.userName == data.userName){
        return true
      }
    })
    if(verifyUser[0].password = data.password){
      router.push('/')
    }
  }

  return(
    <>
      <Head>
        <title>Login - Tracking Trade</title>
      </Head>

      <div className="vh-100 bg-primary bg-opacity-75 d-flex justify-content-center align-items-center">
        <div className="p-5 bg-light shadow login">
          <h1 className="mb-4">Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="inputUser" className="form-label">Username</label>
              <input type="text" className="form-control" id="inputUser" aria-describedby="emailHelp"
              {...register('userName')}/>
              <p>{errors.userName && "Insira o usuário"}</p>
            </div>
            <div className="mb-3">
              <label htmlFor="inputPassword" className="form-label">Password</label>
              <input type="password" className="form-control" id="inputPassword"
              {...register('password')}/>
              {errors.password && "Insira a senha"}
            </div>
            <Link href={'/'}><button type="submit" className="btn btn-primary w-100">Submit</button></Link>
          </form>
        </div>
      </div>
    </>
  )
}