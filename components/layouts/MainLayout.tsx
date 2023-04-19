import Navigation from '../Navigation'

export default function Layout({children} : any) {
  return (
    <>
      <Navigation/>
      <main className="content-wrapper">{children}</main>
    </>
  )
}