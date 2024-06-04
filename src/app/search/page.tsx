import CarList from '@/components/CarList'
import CarSearchForm from '@/components/CarSearchForm'
import LinkButton from '@/components/LinkButton'
import { getCars } from '@/utils/actions'
import Link from 'next/link'

const SearchPage = async ({
  params,
  searchParams
}: {
  params: { slug: string }
  searchParams: { search?: string | null }
}) => {
  const carName = searchParams.search
  const cars = await getCars(carName)

  return (
    <div className="min-h-screen bg-gray-100 p-5 flex flex-col items-center">
       <LinkButton path='/' text='Home' />
      <h2>Your search query: <strong>{carName}</strong></h2>
      <CarList cars={cars} />
      
    </div>
  )
}

export default SearchPage
