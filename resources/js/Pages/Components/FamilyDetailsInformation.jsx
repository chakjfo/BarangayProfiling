import { familyRelationOptions, houseOccupancyTypes, lotOccupancyData } from "../PageHelper/RegisterAsResidentData";


export function FamilyDetailsInformation({ data, setData }) {

    return (
        <>
            <h2 className="text-2xl font-bold mb-4 text-center">Family Details</h2>

            <label className="block mb-2">Person Type</label>
            <select
                name="PersonType"
                value={data.personType} 
                onChange={(e) => {setData('personType', e.target.value)}} 
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
                value={data.familyRelations} 
                onChange={(e) => {setData('familyRelations', e.target.value)}} 
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
                value={data.bloodType} 
                onChange={(e) => {setData('bloodType', e.target.value)}} 
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
                value={data.houseOccupancy} 
                onChange={(e) => {setData('houseOccupancy', e.target.value)}} 
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
                value={data.lotOccupancy} 
                onChange={(e) => {setData('lotOccupancy', e.target.value)}} 
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