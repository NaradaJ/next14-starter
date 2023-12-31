import Link from 'next/link'

const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Sorry</p>
      <Link href="/">Return to Home page.</Link>
    </div>
  )
}

export default NotFound
