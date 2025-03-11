
import { useState } from "react";

export default function RegisterAsResident() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted", formData);
      };
    
      return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <form 
            className="bg-white p-6 rounded-lg shadow-md w-96"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
            <label className="block mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-4"
              required
            />
    
            <label className="block mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-4"
              required
            />
    
            <label className="block mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-4"
              required
            />
    
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Register
            </button>
          </form>
        </div>
      );
}