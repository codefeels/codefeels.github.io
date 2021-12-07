export default function Layout({ children }) {
  return (
    <div>
      <div>
        <a href="/">Return home</a>
      </div>
      <div className="blog">{children}</div>
    </div>
  )
}
