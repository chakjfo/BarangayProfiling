
import { useEffect, useState } from "react";
import { educationLevels, employmentStatuses } from "../PageHelper/RegisterAsResidentData";
import { formatToCurrency } from "../PageHelper/InformationFormatter";

export function EducationAndEmploymentInformation({ data, setData }) {
    const [educationStatus, setEducationStatus] = useState("");
    const [educationalAttainment, setEducationalAttainment] = useState("");
    const [Occupation, setOccupation] = useState("");
    const [statusOfEmployment, setStatusOfEmployment] = useState("");
    const [income, setIncome] = useState("₱0.00");

    return (
        <>
            <h2 className="text-2xl font-bold mb-4 text-center">Education & Employment Information</h2>
            <label className="block mb-2">Education Status</label>
            <select
                name="Education Status"
                value={educationStatus} 
                onChange={(e) => {setData('educationStatus', e.target.value), setEducationStatus(e.target.value)}} 
                className="w-full p-2 border rounded mb-4"
                required
            >

                <option value="" disabled>-- Please Select --</option>
                <option key="In-School" value="In-School">In-School</option>
                <option key="Out ofSchool" value="Out-of-School">Out ofSchool</option>
               
            </select>


            <label className="block mb-2">Educational Attainment</label>
            <select
                name="Educational Attainment"
                value={educationalAttainment} 
                onChange={(e) => {setData('educationalAttainment', e.target.value), setEducationalAttainment(e.target.value)}} 
                className="w-full p-2 border rounded mb-4"
                required
            >

                <option value="" disabled>-- Please Select --</option>
                {educationLevels.map((types, index) => (
                    <option key={index} value={types}>{types}</option>
                ))}
            </select>

            <label className="block mb-2">Occupation</label>
            <input
                type="text"
                name="Occupation"
                value={Occupation} 
                onChange={(e) => {setData('occupation', e.target.value), setOccupation(e.target.value)}} 
                className="w-full p-2 border rounded mb-4"
                required
            />

            <label className="block mb-2">Status of Employment</label>
            <select
                name="Status of Employment"
                value={statusOfEmployment} 
                onChange={(e) => {setData('statusOfEmployment', e.target.value), setStatusOfEmployment(e.target.value)}} 
                className="w-full p-2 border rounded mb-4"
                required
            >

                <option value="" disabled>-- Please Select --</option>
                {employmentStatuses.map((types, index) => (
                    <option key={index} value={types}>{types}</option>
                ))}
            </select>


            <label className="block mb-2">Monthly Gross Income</label>
            <input
                type="text"
                name="Monthly Gross Income"
                value={income}
                onChange={(e) => {
                    const formattedValue = formatToCurrency(e.target.value)
                    setIncome(formattedValue);
                    setData("Pension", formattedValue);
                }}
                className="w-full p-2 border rounded mb-4"
                required
            />
        </>
    )
}