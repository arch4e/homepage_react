import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'

/* components */
import About    from './About'
import Article  from './Article'
import Gallery  from './Gallery'
import Posts    from './Posts'
import Products from './Products'

/* stylesheets */
import '../styles/global.css'
import '../styles/app.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index              element={ <About />   } />
          <Route path='posts'       element={ <Posts />   } />
          <Route path='posts/:slug' element={ <Article /> } />
          <Route path='gallery'     element={ <Gallery /> } />
          <Route path='products'    element={ <Products /> } />
        </Route>
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </>
  )
}

function Layout() {
  return(
    <>
      <div id='header'>
        <span className='logo'>
          <Link to='/'>arch<span>IV</span>e</Link>
        </span>
        <ul className='nav'>
          <li><Link to='/posts'>Posts</Link></li>
          <li><Link to='/gallery'>Gallery</Link></li>
          <li><Link to='/products'>Products</Link></li>
        </ul>
      </div>

      <div id='main'>
        <Outlet />
      </div>

      <div id='footer'>
        <p>&copy; 2022 arch4e.com all rights reserved.</p>
      </div>
    </>
  )
}

function NotFound() {
  return (
    <div id='error-404'>
      <span className='accent-color'>404</span><span>Not Found.</span>
    </div>
  )
}

export default App