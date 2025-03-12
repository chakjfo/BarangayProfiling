import { Civil_Status } from "../PageHelper/RegisterAsResidentData"
import { useEffect, useState } from "react";

export function DemographicInformation({ data, setData }) {
    const [birthDate, setBirthDate] = useState("2004-11-11");
    const [age, setAge] = useState(0);
    const [civilStatus, setCivilStatus] = useState('Single');
    const [religion, setReligion] = useState("");

    const dataChange = (type, data) => {
        setData(type, data)
    }

    const calculatedAge = () => {
        const birth = new Date(birthDate);
        const today = new Date();
        let age = today.getFullYear() - birth.getFullYear();
        if (today < new Date(today.getFullYear(), birth.getMonth(), birth.getDate())) age--;
        return age;
    }
    

    return (
        <> 
        <h2 className="text-2xl font-bold mb-4 text-center">Demographics Information</h2>

        <label className="block mb-2">Birth Date</label>
        <input
            type="date"
            name="birthDate"
            value={birthDate}
            onChange={(e) => {
                setBirthDate(e.target.value);
                setData("birthDate", e.target.value);
                setAge(calculatedAge());
            }}
            className="w-full p-2 border rounded mb-4"
            required
            max={new Date().toISOString().split('T')[0]}
        />

            
        <label className="block mb-2">Age</label>
        <input
            type="number"
            name="age"
            value={age}
            className="w-full p-2 border rounded mb-4 bg-gray-100 cursor-not-allowed"
            min="0"
            readOnly
        />

        <label className="block mb-2">Civil Status</label>
        <select
            name="gender"
            value={civilStatus} 
            onChange={(e) => {dataChange('gender', e.target.value), setCivilStatus(e.target.value)}} 
            className="w-full p-2 border rounded mb-4"
            required
        >
            {Civil_Status.map((status, index) => (
                <option key={index} value={status}>{status}</option>
            ))}
        </select>

        <label className="block mb-2">Religion</label>
        <input
            type="text"
            name="Last Name"
            value={religion} 
            onChange={(e) => {dataChange('religion', e.target.value), setReligion(e.target.value)}} 
            className="w-full p-2 border rounded mb-4"
            required
        />

        <label className="block mb-2">Ethnicity</label>
        <input
            type="text"
            name="Last Name"
            value={data.ethnicity} 
            onChange={(e) => setData('last_name', e.target.value)} 
            className="w-full p-2 border rounded mb-4"
            required
        />

      </>
    )
}