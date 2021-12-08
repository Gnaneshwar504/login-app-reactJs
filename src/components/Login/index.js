import './index.css'

const Login = props => {
  const {login} = props

  return (
    <button className="login-button" type="button" onClick={login}>
      login
    </button>
  )
}
export default Login
