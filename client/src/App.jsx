import { Route, Routes } from 'react-router-dom'
import AulaAdd from './Aula/pages/Add.aulas'
import Aulas from './Aula/pages/Page.aulas'
import DetAulaAdd from './DetAulas/pages/Add.detaulas'
import DetAulas from './DetAulas/pages/Page.detaulas'
import Layout from './components/NavbarFilter'
import NotFound from './pages/NotFound'
// import AulaForm from './Aula/pages/Form.aulas'
// import Cookie from './Cookie/pages/Page.cookies'
import Home from './pages/Page.Home'

function App() {
  // const isAuth = useAuthStore((state) => state.isAuth)
  return (
    <>
      <Layout />
      <div className='h-full container mx-auto max-w-prose md:max-w-5xl mt-28 px-10'>
        <img src='/Logo-Universidad-Mariana.png' alt='' className='opacity-5 scale-125 absolute left-1/2 -translate-x-1/2  top-[15%] md:scale-150 -z-10' />
        <Routes>
          <Route index element={<Home />} />
          {/* <Route path="/login" element={<Cookie />} /> */}
          {/* </Route> */}
          {/* <Route path='/usuarios/login' element={<LoginUsuario />} /> */}
          {/* <Route element={<ProtectRoute isAllow={isAuth} />}> */}
          <Route path='/aulas'>
            <Route index element={<Aulas />} />
            <Route path='add' element={<AulaAdd />} />
          </Route>
          <Route path='/detaulas'>
            <Route index element={<DetAulas />} />
            <Route path='add' element={<DetAulaAdd />} />
          </Route>
          {/* <Route path='/usuarios'>
            <Route index element={<Usuario />} />
            <Route path='new' element={<AddUsuariosForm />} />
          </Route> */}
          {/* </Route> */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}
export default App
