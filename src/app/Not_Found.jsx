import Link from 'next/link'

const Not_Found = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Sorry</p>
      <Link href="/">Return to Home page.</Link>
    </div>
  )
}

export default Not_Found
