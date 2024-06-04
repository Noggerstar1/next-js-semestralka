'use server'

import { redirect } from 'next/navigation'
import prisma from './prisma'

export const createCar = async (formData: FormData) => {
  const modelId = formData.get('modelId')?.toString()
  const brandId = formData.get('brandId')?.toString()
  const description = formData.get('description')?.toString()
  const location = formData.get('location')?.toString()
  const color = formData.get('color')?.toString()

  const priceEntry = formData.get('price')
  const yearEntry = formData.get('year')
  if((priceEntry && isNaN(Number(priceEntry))) || (yearEntry && isNaN(Number(yearEntry)))) {
    return
  }

  const price = Number(priceEntry);
  const year = Number(yearEntry);

  if (!modelId || !brandId || !description || !location || !price || !color || !year) {
    return
  }

  await prisma.car.create({
    data: {
      modelId: modelId,
      brandId: brandId,
      description: description,
      location: location,
      price: price,
      color: color,
      year: year,
    },
  })

  redirect('/')
}

export const redirectSearchParams = async (formData) => {
  const search = formData.get("search")?.toString();

  if (search) {
    redirect(`/search?search=${search}`);
  } else {
    redirect("/search");
  }
};


export const getCars = async (carName?: string | null) => {
  const cars = await prisma.car.findMany({
    where: {
      model: {
        name: {
          contains: carName || "",
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      model: true,
      brand: true,
    },
  })
  return cars
}

export const getModels = async () => {
  const models = await prisma.carModel.findMany({
    orderBy: {
      createdAt: "desc",
    },
  })
  return models
}

export const getBrands = async () => {
  const brands = await prisma.brand.findMany({
    orderBy: {
      createdAt: "desc",
    },
  })
  return brands
}