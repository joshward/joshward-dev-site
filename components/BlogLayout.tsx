const BlogLayout: React.FC = ({ children }) => {
  return (
    <div className="p-5 md:p-10 md:w-3/5 md:mx-auto">
      <h1 className="text-indigo-100 text-4xl md:text-5xl mb-10">
        Josh's Blog
      </h1>
      {children}
    </div>
  )
}

export default BlogLayout
