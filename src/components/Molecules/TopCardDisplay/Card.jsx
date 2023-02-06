const Card = ({ title, description, icon, iconBackgroundColor, keyIndex }) => {
  return (
    title &&
    description && (
      <div
        className='lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center'
        key={`card-${keyIndex}`}
      >
        <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg'>
          <div className='px-4 py-5 flex-auto'>
            <div
              className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full ${iconBackgroundColor}`}
            >
              {icon && <i className={icon}></i>}
            </div>
            <h6 className='text-lg font-semibold' id={`card-${keyIndex}-title`}>
              {title}
            </h6>
            {description?.map((paragraph, index) => (
              <p key={index} className='m-2 text-sm text-gray-500'>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    )
  )
}
export default Card
