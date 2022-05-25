
const Heading = ({children}) => {
  return (
    <div className="max-w-6xl mx-auto h-48 bg-gray-800">
    <h1 className=" text-5xl md:text-9xl font-bold py-20 heading-margin-top md:text-left">
      {children}
    </h1>
  </div>
  )
}

export default Heading