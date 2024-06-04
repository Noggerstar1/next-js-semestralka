'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation'

const AddCarButton = () => {
    const router = useRouter()
    const onClick = () => {
        router.push("/car/new")
    }
  
    return (
        <button
        onClick={onClick}
      className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 mt-4"
      >
      Add a New Car
    </button>
  )
}

export default AddCarButton
