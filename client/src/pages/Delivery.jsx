import axios from "axios";
import { useState } from "react";

export default function Delivery() {
  const [formData, setFormData] = useState({
    pickAddress: "",
    pickName: "",
    pickTel: "",
    pickEmail: "",
    deliAddress: "",
    deliName: "",
    deliContact: "",
    deliEmail: "",
    goodType: "",
    deliProvider: "",
    priority: "",
    pickDate: "",
    pickTime: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post('http://127.0.0.1:8000/api/delivery-save', formData);
    if (res.success) {
        console.log(res.message);
        
    } else {
        console.log(res.status);
        
    }
    
    
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-center pt-5 ">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gray-900">
            Delivery Information
          </h2>
          <p className="mt-1 text-sm/6 text-gray-600">
            Fill the Delivery Information
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-8">
            <div className="md:col-span-4 ">
              <label
                htmlFor="pickAddress"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Pickup Address
              </label>
              <div className="mt-2">
                <input
                  value={formData.pickAddress}
                  onChange={(e) =>
                    setFormData({ ...formData, pickAddress: e.target.value })
                  }
                  type="text"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="md:col-span-4">
              <label
                htmlFor="pickName"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Pick Name
              </label>
              <div className="mt-2">
                <input
                  value={formData.pickName}
                  onChange={(e) =>
                    setFormData({ ...formData, pickName: e.target.value })
                  }
                  type="text"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="md:col-span-4">
              <label
                htmlFor="pickTel"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Pickup Contact No
              </label>
              <div className="mt-2">
                <input
                  value={formData.pickTel}
                  onChange={(e) =>
                    setFormData({ ...formData, pickTel: e.target.value })
                  }
                  type="number"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="md:col-span-4">
              <label
                htmlFor="pickEmail"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Pickup Email
              </label>
              <div className="mt-2">
                <input
                  value={formData.pickEmail}
                  onChange={(e) =>
                    setFormData({ ...formData, pickEmail: e.target.value })
                  }
                  type="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="md:col-span-4">
              <label
                htmlFor="deliAddress"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Delivery Address
              </label>
              <div className="mt-2">
                <input
                  value={formData.deliAddress}
                  onChange={(e) =>
                    setFormData({ ...formData, deliAddress: e.target.value })
                  }
                  type="text"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="md:col-span-4">
              <label
                htmlFor="deliName"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Delivery Name
              </label>
              <div className="mt-2">
                <input
                  value={formData.deliName}
                  onChange={(e) =>
                    setFormData({ ...formData, deliName: e.target.value })
                  }
                  type="text"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="deliContact"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Delivery Contact No
              </label>
              <div className="mt-2">
                <input
                  value={formData.deliContact}
                  onChange={(e) =>
                    setFormData({ ...formData, deliContact: e.target.value })
                  }
                  type="text"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="md:col-span-5">
              <label
                htmlFor="deliEmail"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Delivery Email
              </label>
              <div className="mt-2">
                <input
                   value={formData.deliEmail}
                   onChange={(e) =>
                     setFormData({ ...formData, deliEmail: e.target.value })
                   }
                  type="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="goodType"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Type Of Good
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="goodType"
                  value={formData.goodType}
                  onChange={(e) => setFormData({ ...formData, goodType: e.target.value })}
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option value="Document">
                    Document
                  </option>
                  <option value="Document">Parcel</option>
                </select>
              </div>
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="deliProvider"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Delivery Provider
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                 id="deliProvider"
                 value={formData.deliProvider}
                 onChange={(e) => setFormData({ ...formData, deliProvider: e.target.value })}
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option value="DHL">DHL</option>
                  <option value="STARTRACK">STARTRACK</option>
                  <option value="ZOOM2U">ZOOM2U</option>
                  <option value="TGE">TGE</option>
                </select>
              </div>
            </div>

            <div className="md:col-span-3">
              <label
                htmlFor="priority"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Priority
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                 id="priority"
                 value={formData.priority}
                 onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option value="Standard">Standard</option>
                  <option value="Express">Express</option>
                  <option value="Immediate">Immediate</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="pickDate"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Shipment Pickup Date
              </label>
              <div className="mt-2">
                <input
                id="pickDate"
                 value={formData.pickDate}
                 onChange={(e) =>
                   setFormData({ ...formData, pickDate: e.target.value })
                 }
                  type="date"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="pickTime"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Shipment Pickup Time
              </label>
              <div className="mt-2">
                <input
                  value={formData.pickTime}
                  onChange={(e) =>
                    setFormData({ ...formData, pickTime: e.target.value })
                  }
                  type="time"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col-2 justify-center pt-1 pb-7">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save Delivery Information
        </button>
      </div>
    </form>
  );
}
