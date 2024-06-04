'use client'
import { Brand, CarModel } from '@prisma/client'
import { Fragment, useMemo, useState } from 'react'

const BrandAndModelFormFields = ({
  models,
  brands,
}: {
  models: CarModel[]
  brands: Brand[]
}) => {
  const [brandId, setBrandId] = useState('')

  const filteredModels = useMemo(() => {
    return models.filter((model) => model.brandId === brandId)
  }, [brandId, models])
  
  return (
    <Fragment>
      <div className="mb-4 w-full">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brandId">
          Brand
        </label>
        <select
          name="brandId"
          id="brandId"
          required
          value={brandId}
          onChange={(e) => {
            setBrandId(e.target.value)
          }}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select a brand</option>
          {brands.map((brand) => (
            <option key={brand.id} value={brand.id}>
              {brand.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4 w-full">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="modelId">
          Model
        </label>
        <select
          name="modelId"
          id="modelId"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select a model</option>
          {filteredModels.map((model) => (
            <option key={model.id} value={model.id}>
              {model.name}
            </option>
          ))}
        </select>
      </div>
    </Fragment>
  )
}

export default BrandAndModelFormFields
