import Link from "next/link"
import { useEffect } from "react"

declare global {
    interface Window {
        responseGoogle: any
    }
}

const Login = () => {
    useEffect(() => {
        window.responseGoogle = (res:any) => {
            console.log(res)
          }
    }, [])
      
    return (
        <div className="flex flex-col rounded-lg bg-white p-12 space-y-4">
        <h1 className="text-xl">Log In</h1>
        <p className='max-w-screen-sm'>
          By continuing, you agree setting up a login-page-example account and agree to our <Link href={'/policies/user-agreement'} className='text-blue-400'>User Agreement</Link> and <Link href={'/policies/privacy-policy'} className='text-blue-400'>Privacy Policy</Link>.
        </p>
        <div id="g_id_onload"
          data-client_id="443765831688-gkpljil6kjf649mjnmjc5a2g1ve6ldse.apps.googleusercontent.com"
          data-context="signin"
          data-ux_mode="popup"
          data-callback="responseGoogle"
          data-auto_prompt="false">
        </div>

        <div className="g_id_signin"
          data-type="standard"
          data-shape="pill"
          data-theme="outline"
          data-text="signin_with"
          data-size="large"
          data-logo_alignment="left">
        </div>
        <div className="flex flex-row justify-between items-center space-x-4">
          <div className="border grow"></div>
          <span>OR</span>
          <div className="border grow"></div>
        </div>
        <input
          type="text"
          className='border bg-slate-100 rounded-full p-4'
          placeholder='Username'
        />
        <input
          type="text"
          className='border bg-slate-100 rounded-full p-4'
          placeholder='Password'
        />
        <button className='bg-green-400 rounded-full p-4 text-white font-bold'>Log In</button>
      </div>
    )
}

export default Login