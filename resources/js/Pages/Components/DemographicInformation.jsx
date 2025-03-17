import { Religions, Ethnicities, Civil_Status } from "../PageHelper/RegisterAsResidentData";
import { useEffect, useState } from "react";


export function DemographicInformation({ setData }) {
    const [birthDate, setBirthDate] = useState("");
    const [age, setAge] = useState(0);
    const [civilStatus, setCivilStatus] = useState('');
    const [religion, setReligion] = useState("");
    const [ethnicity, setEthnicity] = useState("");

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
            name="Civil Status"
            value={civilStatus} 
            onChange={(e) => {setData('civilStatus', e.target.value), setCivilStatus(e.target.value)}} 
            className="w-full p-2 border rounded mb-4"
            required
        >   
            <option value="" disabled>-- Please Select --</option>
            {Civil_Status.map((status, index) => (
                <option key={index} value={status}>{status}</option>
            ))}
        </select>

        <label className="block mb-2">Religion</label>

        <select
            name="Religion"
            value={religion} 
            onChange={(e) => {setData('religion', e.target.value), setReligion(e.target.value)}} 
            className="w-full p-2 border rounded mb-4"
            required
        >
            <option value="" disabled>-- Please Select --</option>
            {Religions.map((religion, index) => (
                    <option key={index} value={religion}>{religion}</option>
            ))}
        </select>

        <label className="block mb-2">Ethnicity</label>
        <select
            name="ethnicity"
            value={ethnicity} 
            onChange={(e) => {setData('ethnicity', e.target.value), setEthnicity(e.target.value)}} 
            className="w-full p-2 border rounded mb-4"
            required
        >   
            <option value="" disabled>-- Please Select --</option>
            {Ethnicities.map((ethnicity, index) => (
                <option key={index} value={ethnicity}>{ethnicity}</option>
            ))}
        </select>

      </>
    )
}