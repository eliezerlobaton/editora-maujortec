import { NavLink } from 'react-router-dom'

let linkCorrente = {
  color: "#027399"
}

const Navegacao = () => {
  return (
    <ul>
      <li>
        <NavLink style={linkCorrente} to="/">Home</NavLink>
      </li>
      <li>
        <NavLink style={linkCorrente} to="/frontend">Frontend</NavLink>
      </li>
      <li>
        <NavLink style={linkCorrente} to="/programacao">Programação</NavLink>
      </li>
      <li>
        <NavLink style={linkCorrente} to="/design">Design</NavLink>
      </li>
      <li>
        <NavLink style={linkCorrente} to="/catalogo">Catálogo</NavLink>
      </li>
    </ul>
  )
}

export default Navegacao;