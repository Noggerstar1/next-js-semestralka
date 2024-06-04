import CarItem from './CarItem'
import { CarWithDeps } from '@/types/prismaTypes'

type Props = {
  cars: CarWithDeps[]
}

const CarList = ({ cars }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-3 mt-4">
      {cars.map((car) => (
        <CarItem key={car.id} car={car} />
      ))}
      {(!cars || cars.length === 0) && <div>Žádné auto jsme nenalezli</div>}
    </div>
  )
}

export default CarList
