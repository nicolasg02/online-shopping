import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({children}) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-200">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
