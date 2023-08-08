import Link from "next/link"
import styles from './SideMenu.module.css'


export const SideMenu = (): JSX.Element => {
  return (
    <aside>
      <nav className={ styles.navigation }>
        <Link href={ '/' }>
          First page
        </Link>

        <Link href={ '/second-page' }>
          Second page
        </Link>
      </nav>
    </aside>
  )
}
