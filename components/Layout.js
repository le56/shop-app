import Footer from "./Footer"
import Header from "./Header"
import Loading from "./Loading"
export default function Layout({ children }) {
    return (
      <>
        <Loading></Loading>
        <Header></Header>
        <main>{children}</main>
        <Footer></Footer>
      </>
    )
  }