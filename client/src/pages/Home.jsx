import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const addDelivery = () => {
        navigate('/delivery');
    }

  return (
    <div className="flex flex-col-2 justify-center pt-1 pb-7">
        <button
        onClick={addDelivery}
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add Delivery Information
        </button>
      </div>
  )
}

export default Home