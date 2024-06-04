import LinkButton from '@/components/LinkButton'
import NewCarForm from '@/components/NewCarForm'
import prisma from '@/utils/prisma'
import Link from 'next/link'

const fetchBrands = async () => {
  const brands = await prisma.brand.findMany()
  return brands
}

const fetchModels = async () => {
  const models = await prisma.carModel.findMany()
  return models
}

const NewCarPage = async () => {
  const brands = await fetchBrands()
  const models = await fetchModels()

  return (
    <div className="min-h-screen bg-gray-100 p-5 ">
      <LinkButton path='/' text='Home' />
      <NewCarForm brands={brands} models={models} />
    </div>
  )
}

export default NewCarPage
