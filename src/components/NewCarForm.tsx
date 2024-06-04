'use client';

import { createCar } from '@/utils/actions';
import { Brand, CarModel } from '@prisma/client';
import { useState } from 'react';
import BrandAndModelFormFields from './BrandAndModelFormFields';

const NewCarForm = ({
  models,
  brands,
}: {
  models: CarModel[];
  brands: Brand[];
}) => {
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [color, setColor] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    
    await createCar(formData)

    event.target.reset();

    setDescription('');
    setLocation('');
    setPrice('');
    setColor('');
    setYear('');
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-100 p-5">
      <form onSubmit={handleSubmit} className="w-full max-w-2xl flex flex-col items-center">
        <h1 className="text-4xl font-bold mt-4 mb-8 text-center">Add a New Car</h1>
        <BrandAndModelFormFields models={models} brands={brands} />
        
        <div className="mb-4 w-full">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4 w-full">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4 w-full">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4 w-full">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="color">
            Color
          </label>
          <input
            type="text"
            id="color"
            name="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4 w-full">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="year">
            Year
          </label>
          <input
            type="number"
            id="year"
            name="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add Car
        </button>
      </form>
    </div>
  );
};

export default NewCarForm;
