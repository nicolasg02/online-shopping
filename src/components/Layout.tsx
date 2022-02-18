import Navbar from "./Navbar"
import Footer from "./Footer"

interface IProps {
  children: React.ReactNode
}

function Layout({ children }: IProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-16 flex-1">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout