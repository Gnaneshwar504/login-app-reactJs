import './index.css'

const Logout = props => {
  const {logout} = props

  return (
    <button className="logout-button" type="button" onClick={logout}>
      logout
    </button>
  )
}
export default Logout
