import { CarWithDeps } from '@/types/prismaTypes'
import Link from 'next/link'

const CarItem = ({ car }: { car: CarWithDeps }) => {
  
  const truncateText = (text: string | null, maxLength: number) => {
    if (text && text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  };

  return (
    
    <Link href={`car/${car.id}`} className="cursor-pointer">
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-row hover:bg-gray-200 transition duration-300 ease-in-out">
            <h2 className="text-xl font-bold mr-6 flex-shrink-0">{car.model.name}</h2>
            <div className="text-xl mr-6 flex-shrink-0">{car.brand.name}</div>
            <div className="text-gray-700 overflow-hidden text-ellipsis whitespace-nowrap">{truncateText(car.description, 50)}</div>
          </div>
    </Link>
    
  )
}

export default CarItem
