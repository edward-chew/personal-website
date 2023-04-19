import ReturnHome from '../ReturnHome'

export default function ProjectPageLayout({children} : any) {
  return (
    <>
      {children}
      <ReturnHome/>
    </>
  )
}