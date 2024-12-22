import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <div
      className={`{
        'h-full' 
      }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      <Image alt={title} src={imgSrc} width={544} height={306} />
      <div className="p-6">
        <h2 className="mb-2 text-2xl font-bold">{title}</h2>
        <p className="mb-4 text-gray-700">{description}</p>
      </div>
    </div>
  </div>
)

export default Card
