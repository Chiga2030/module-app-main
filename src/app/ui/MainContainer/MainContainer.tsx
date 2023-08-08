import { ReactNode } from "react"
import { SideMenu } from "../SideMenu"
import { Inter } from 'next/font/google'
import styles from './MainContainer.module.css'


interface Props {
  children: ReactNode
}


const inter = Inter({ subsets: [ 'latin' ] })


export const MainContainer = ({
  children
}: Props): JSX.Element => {
  return (
    <body className={ `${inter.className} ${styles.body}` }>
      <SideMenu />
      <main>
        { children }
      </main>
    </body>
  )
}
