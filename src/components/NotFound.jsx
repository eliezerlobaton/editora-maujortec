import { Link } from 'react-router-dom'

const NotFound = () => (
  <main className='principal'>
    <h2>404!</h2>
    <p>
      Página não encotrada ou removida. <Link to="/">Ir pra Home</Link>
    </p>
  </main>
)

export default NotFound