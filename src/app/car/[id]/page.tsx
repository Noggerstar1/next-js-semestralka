import LinkButton from '@/components/LinkButton'
import prisma from '@/utils/prisma'
import Link from 'next/link'

const fetchCarDetail = async (id: string) => {
  const car = await prisma.car.findUnique({
    where: {
      id: id,
    },
    include: {
      model: true,
      brand: true,
    },
  })
  return car
}

const CarDetailPage = async ({ params }: { params: { id: string } }) => {
  const car = await fetchCarDetail(params.id)

  return (
    <div className="min-h-screen bg-gray-100 p-5 flex flex-col items-center">
       <LinkButton path='/' text='Home' />
      <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-3xl font-bold mb-5 text-blue-500 text-center">{car?.model.name} - {car?.brand.name}</h1>
        <div className="flex flex-col space-y-2">
          <div className="text-gray-700"><strong>Description:</strong> {car?.description}</div>
          <div className="text-gray-700"><strong>Location:</strong> {car?.location}</div>
          <div className="text-gray-700"><strong>Price:</strong> ${car?.price}</div>
          <div className="text-gray-700"><strong>Color:</strong> {car?.color}</div>
          <div className="text-gray-700"><strong>Year:</strong> {car?.year}</div>
        </div>
      </div>
    </div>
  )
}

export default CarDetailPage
