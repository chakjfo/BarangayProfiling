import { useEffect, useState } from "react";
import { formatToCurrency } from "../PageHelper/InformationFormatter";
import { calculatedAge } from "../PageHelper/InformationFormatter";


export function ResidencyAndDurationInformation({ data, setData }) {
    const [isSenior, setIsSenior] = useState()

    useEffect(() => {
        const age = calculatedAge(data.birthDate)
        age >= 60 ? setIsSenior("Yes") : setIsSenior("No");
    }, [])
  
    useEffect(()=> {
        if (data.gender  !== "Female") {
            setData("isPregnant", "No")
            console.log("USER IS NOW MALE!")
        }
    }, [data.gender])

    return (
        <>
            <h2 className="text-2xl font-bold mb-4 text-center">Residency & Duration</h2>
            <label className="block mb-2">Year Started Staying in the Barangay</label>
            <input
                type="number"
                name="yearStarted"
                value={data.yearStartedStaying} 
                onChange={(e) => {
                    setData('yearStartedStaying', e.target.value) 
                }} 

                onBlur={(e) => {
                    const currentYear = new Date().getFullYear();
                    let value = parseInt(e.target.value, 10);

                    if (value >= 1900 && value <= currentYear) {
                        
                        setData('yearStartedStaying', value);
                    } else {
                        setData('yearStartedStaying', currentYear);
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
                value={data.pension}
                onChange={(e) => {
                    const formattedValue = formatToCurrency(e.target.value)
                    setData("pension", formattedValue);
                }}
                className="w-full p-2 border rounded mb-4"
                required
            />


            {data.gender === "Female" ? (
                <>
                    <label className="block mb-2">If Pregnant</label>
                    <select
                        name="Status of Employment"
                        value={data.isPregnant}
                        onChange={(e) => {
                            setData("isPregnant", e.target.value);
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
                    <label className="block mb-2">Is Pregnant</label>
                    <select
                        name="Is Pregnant"
                        value={data.isPregnant}
                        onChange={(e) => {
                            setData("isPregnant", e.target.value);
                        }}
                        className="w-full p-2 border rounded mb-4"
                        disabled
                    >
                        <option value="" disabled>-- Please Select --</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </>)}

            <label className="block mb-2">Senior Citizen</label>
                <input
                    type="Text"
                    name="Senior Citizen"
                    value={isSenior}
                    disabled
                    className="w-full p-2 border rounded mb-4">
                </input>
        </>)}