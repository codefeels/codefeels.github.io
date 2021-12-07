import Link from '../components/link'

const Footer = () => {
  return (
    <footer style={{ marginTop: 100 }}>
      <Link href="/">Home</Link> <Link href="/archive">Archive</Link>{' '}
      <Link href="https://github.com/codefeels/">Github</Link>{' '}
    </footer>
  )
}

export default Footer
