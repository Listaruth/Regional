import React from 'react'
import { Link } from 'react-router-dom'
function Nav({search,setSearch}) {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <Link className="navbar-brand" to="#">Mustapha Shop</Link>
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/newproduct">Add Product</Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0" >
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange ={(e)=>setSearch(e.target.value)} />
    </form>
  </div>
</nav>

    
    </>
  )
}

export default Nav