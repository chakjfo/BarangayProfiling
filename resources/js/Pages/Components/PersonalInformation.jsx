import { useEffect, useState } from "react";

export function PersonalInformation({ setData }) {
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [nameExtension, setNameExtension] = useState("");
    const [gender, setGender] = useState("")

    return (
      <> 
        <h2 className="text-2xl font-bold mb-4 text-center">Personal Information</h2>
            <label className="block mb-2">Last Name</label>
            <input
                type="text"
                name="Last Name"
                value={lastName} 
                onChange={(e) => {setData('last_name', e.target.value), setLastName(e.target.value)}} 
                className="w-full p-2 border rounded mb-4"
                required
            />

            <label className="block mb-2">First Name</label>
            <input
                type="text"
                name="First Name"
                value={firstName} 
                onChange={(e) => {setData('first_name', e.target.value), setFirstName(e.target.value)}} 
                className="w-full p-2 border rounded mb-4"
                required
            />

            <label className="block mb-2">Middle Name</label>
            <input
                type="text"
                name="Middle name"
                value={middleName} 
                onChange={(e) => {setData('middle_name', e.target.value), setMiddleName(e.target.value)}} 
                className="w-full p-2 border rounded mb-4"
                required
            />

            <label className="block mb-2">Name Extension</label>
            <input
                type="text"
                name="Name extension"
                value={nameExtension} 
                onChange={(e) => {setData('name_extension', e.target.value), setNameExtension(e.target.value)}}
                className="w-full p-2 border rounded mb-4"
            />

            <label className="block mb-2">Gender</label>
            <select
                name="gender"
                value={gender} 
                onChange={(e) => {setData('gender', e.target.value), setGender(e.target.value)}} 
                className="w-full p-2 border rounded mb-4"
                required
            >

                <option value="" disabled>-- Please Select --</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>

        </>
    );
  }


   