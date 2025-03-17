import { useEffect, useState } from "react";
import { formatToCurrency } from "../PageHelper/InformationFormatter";


export function ResidencyAndDurationInformation({ data, setData }) {
    const [yearStarted, setYearStarted] = useState('');
    const [pension, setPension] = useState('₱0.00');
    const [isPregnant, setIsPregnant] = useState('')
   
    return (
        <>
            <h2 className="text-2xl font-bold mb-4 text-center">Residency & Duration</h2>
            <label className="block mb-2">Year Started Staying in the Barangay</label>
            <input
                type="number"
                name="yearStarted"
                value={yearStarted} 
                onChange={(e) => {
                    setData('yearStartedStaying', e.target.value), 
                    setYearStarted(e.target.value)
                }} 

                onBlur={(e) => {
                    const currentYear = new Date().getFullYear();
                    let value = parseInt(e.target.value, 10);

                    if (value >= 1900 && value <= currentYear) {
                        setYearStarted(value);
                        setData('yearStartedStaying', value);
                    } else {
                        setYearStarted(currentYear);
                    }
                }}
                className="w-full p-2 border rounded mb-4"
                min={1900}
                max={new Date().getFullYear()} 
                required
            />

            <label className="block mb-2">Pension</label>
            <input
                type="text"
                name="Pension"
                value={pension}
                onChange={(e) => {
                    const formattedValue = formatToCurrency(e.target.value)
                    setPension(formattedValue);
                    setData("monthlyGrossIncome", formattedValue);
                }}
                className="w-full p-2 border rounded mb-4"
                required
            />


            {data.gender === "Female" ? (
                <>
                    <label className="block mb-2">If Pregnant</label>
                    <select
                        name="Status of Employment"
                        value={isPregnant}
                        onChange={(e) => {
                            setData("statusOfEmployment", e.target.value);
                            setIsPregnant(e.target.value);
                        }}
                        className="w-full p-2 border rounded mb-4"
                    >
                        <option value="" disabled>-- Please Select --</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </>
            ) : (
                <>
                    <label className="block mb-2">If Pregnant</label>
                    <select
                        name="Status of Employment"
                        value={isPregnant}
                        onChange={(e) => {
                            setData("statusOfEmployment", e.target.value);
                            setIsPregnant(e.target.value);
                        }}
                        className="w-full p-2 border rounded mb-4"
                        disabled
                    >
                        <option value="" disabled>-- Please Select --</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </>
)}
            
           
            
        </>
    )
}