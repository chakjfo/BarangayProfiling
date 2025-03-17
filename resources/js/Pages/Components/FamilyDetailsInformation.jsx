import { useState } from "react";
import { familyRelationOptions, houseOccupancyTypes, lotOccupancyData } from "../PageHelper/RegisterAsResidentData";


export function FamilyDetailsInformation({ setData }) {
    const [personType, setPersonType] = useState("");
    const [familyRelations, setFamilyRelations] = useState("");
    const [bloodType, setBloodType] = useState("");
    const [houseOccupancy, setHouseOccupancy] = useState("");
    const [lotOccupancy, setLotOccupancy] = useState("");

    return (
        <>
            <h2 className="text-2xl font-bold mb-4 text-center">Family Details</h2>

            <label className="block mb-2">Person Type</label>
            <select
                name="PersonType"
                value={personType} 
                onChange={(e) => {setData('personType', e.target.value), setPersonType(e.target.value)}} 
                className="w-full p-2 border rounded mb-4"
                required
            >   
                <option value="" disabled>-- Please Select --</option>
              
                <option key={"Head"} value={"Head"}>Head</option>
                <option key={"FamilyMember"} value={"Family Member"}>Family Member</option>
            </select>


            <label className="block mb-2">Relation to the Family Head</label>
            <select
                name="RelationToFamily"
                value={familyRelations} 
                onChange={(e) => {setData('familyRelations', e.target.value), setFamilyRelations(e.target.value)}} 
                className="w-full p-2 border rounded mb-4"
                required
            >   
              

                <option value="" disabled>-- Please Select --</option>
                {familyRelationOptions.map((relation, index) => (
                    <option key={index} value={relation}>{relation}</option>
                ))}
            </select>


            <label className="block mb-2">Blood Type</label>
            <select
                name="Civil Status"
                value={bloodType} 
                onChange={(e) => {setData('bloodType', e.target.value), setBloodType(e.target.value)}} 
                className="w-full p-2 border rounded mb-4"
                required
            >   
              
                <option value="" disabled>-- Please Select --</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
            </select>


            <label className="block mb-2">House Occupancy</label>
            <select
                name="House Occupancy"
                value={houseOccupancy} 
                onChange={(e) => {setData('houseOccupancy', e.target.value), setHouseOccupancy(e.target.value)}} 
                className="w-full p-2 border rounded mb-4"
                required
            >   
              

                <option value="" disabled>-- Please Select --</option>
                {houseOccupancyTypes.map((types, index) => (
                    <option key={index} value={types}>{types}</option>
                ))}
            </select>

            <label className="block mb-2">Lot Occupancy</label>
            <select
                name="lotOccupancy"
                value={lotOccupancy} 
                onChange={(e) => {setData('lotOccupancy', e.target.value); setLotOccupancy(e.target.value)}} 
                className="w-full p-2 border rounded mb-4"
                required
            >   
                <option value="" disabled>-- Please Select --</option>
                {lotOccupancyData.map((type) => (
                    <option key={type} value={type}>{type}</option>
                ))}
            </select>
        
        </>
    )
}