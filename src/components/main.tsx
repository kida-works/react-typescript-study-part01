import { ReactNode } from "react"

const Main = ( {children} : { children: ReactNode}) => {
  return(
    <main>
      <h2>ノゲノラは面白いな〜！</h2>
      {children}
    </main>
  )
}

export default Main