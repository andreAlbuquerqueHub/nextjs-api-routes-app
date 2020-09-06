import Link from 'next/link'
import styles from '../styles.module.css'

export default function Person({ person }) {
  return (
    <li className={styles.hello}>
      <Link href="/person/[id]" as={`/person/${person.id}`}>
        <a>{person.name}</a>
      </Link>
      <br></br>
      <Link href="/images/[id]" as={`/images/${person.id}`}>
        <a>Show image</a>
      </Link>
    </li>
  )
}
