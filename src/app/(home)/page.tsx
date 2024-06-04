import AddCarButton from '@/components/AddCarButton'
import CarList from '@/components/CarList'
import CarSearchForm from '@/components/CarSearchForm'
import { getCars } from '@/utils/actions'

const HomePage = async ({
  params,
  searchParams
}: {
  params: { slug: string }
  searchParams: { search?: string | null }
}) => {
  const carName = searchParams.search
  const cars = await getCars(carName)
  /* const models = await getModels()
  const brands = await getBrands() */

  return (
    <div className="min-h-screen bg-gray-100 p-5 flex flex-col items-center">
      
        <h1 className="text-4xl font-bold mt-4 mb-4">Cars app</h1>
        <h2 className="text-2xl mb-8">Welcome to our car dealership!</h2>
        <CarSearchForm />
        <div className="max-h-96 overflow-y-auto mt-4">
        <CarList cars={cars} />
        </div>
        <AddCarButton />
        
      </div>
  )
}

export default HomePage
