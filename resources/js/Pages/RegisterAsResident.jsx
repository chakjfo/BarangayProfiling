
import { useEffect, useState, useMemo } from "react";
import { useForm } from '@inertiajs/react';

import { 
  PersonalInformation, DemographicInformation, FamilyDetailsInformation, 
  EducationAndEmploymentInformation, ResidencyAndDurationInformation 
} from "./PageHelper/InformationComponentBarrel";
import { stringify } from "postcss";

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
          civilStatus: '',

          personType: '',
          familyRelations: '',
          bloodType: '',
          houseOccupancy: '',
          lotOccupancy: '',


          educationalAttainment: '',
          educationStatus: '',
          occupation: '',
          statusOfEmployment: '',
          monthlyGrossIncome: '₱0.00',

          yearStartedStaying: '',
          pension: '₱0.00',
          isPregnant: '',

    });

   
    const formSteps = [
      PersonalInformation,
      DemographicInformation,
      FamilyDetailsInformation,
      EducationAndEmploymentInformation,
      ResidencyAndDurationInformation
    ];
    
    const [formIndex, setFormIndex] = useState(0);
    
    const currentForm = useMemo(() => {
      const FormComponent = formSteps[formIndex];
      return <FormComponent setData={setData} data={data} />;
    }, [formIndex, setData, data]);
    
    const changeFormIndex = (number) => {
      if (number >= formSteps.length || number < 0) return;
      setFormIndex(number);
    };

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
          onClick={() => {changeFormIndex(formIndex + 1)}}>
          Next
        </button>

      </div>


    </div>
    
      );
}