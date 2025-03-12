
import { useEffect, useState } from "react";
import { useForm } from '@inertiajs/react';
import { PersonalInformation } from "./Components/PersonalInformation";
import { DemographicInformation } from "./Components/DemographicInformation";


export default function RegisterAsResident() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  const { data, setData, post, processing, errors } = useForm({
          first_name: '',
          last_name: '',
          middle_name: '',
          name_extension: '',

          gender: '',
          birthDate: '',
          religion: '',
          ethnicity: '',
    });

    const [formData, setFormData] = useState([
      <PersonalInformation data={data} setData={setData} />,
      <DemographicInformation data={data} setData={setData} />
    ]);
  
    const [formIndex, setFormIndex] = useState(0);

    const [currentForm, setCurrentForm] = useState(formData[formIndex]);

    useEffect(() => {
      setCurrentForm(formData[formIndex]);
    }, [formIndex]);


    const changeFormIndex = (number) => {
      if (number >= formData.length|| number < 0) {
        return;
      }
      setFormIndex(number);
    }


  return (
    <div className="flex justify-center items-center min-h-screen flex-col bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md w-96" onSubmit={handleSubmit}>
        {currentForm}
      </form>
      
      <div className="grid grid-cols-2 rid-row-1 justify-items-center gap-5 mt-4">
        <button className="flex w-40 items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          onClick={() => changeFormIndex(formIndex - 1)}>
          Back
        </button>

        <button className="flex w-40 items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          onClick={() => {changeFormIndex(formIndex + 1), console.log(data)}}>
          Next
        </button>

      </div>


    </div>
    
      );
}