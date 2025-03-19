import { Religions, Ethnicities, Civil_Status } from "../PageHelper/RegisterAsResidentData";
import { calculatedAge } from "../PageHelper/InformationFormatter";


export function DemographicInformation({ data, setData }) {


    return (
        <> 
        <h2 className="text-2xl font-bold mb-4 text-center">Demographics Information</h2>

        <label className="block mb-2">Birth Date</label>
        <input
            type="date"
            name="birthDate"
            value={data.birthDate}
            onChange={(e) => {
              setData("birthDate", e.target.value);}}
            className="w-full p-2 border rounded mb-4"
            required
            max={new Date().toISOString().split('T')[0]}
        />
            
        <label className="block mb-2">Age</label>
        <input
            type="number"
            name="age"
            value={calculatedAge(data.birthDate)}
            className="w-full p-2 border rounded mb-4 bg-gray-100 cursor-not-allowed"
            min="0"
            readOnly
        />

        <label className="block mb-2">Civil Status</label>
        <select
            name="Civil Status"
            value={data.civilStatus} 
            onChange={(e) => {setData('civilStatus', e.target.value)}} 
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
            value={data.religion} 
            onChange={(e) => {setData('religion', e.target.value)}} 
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
            value={data.ethnicity} 
            onChange={(e) => {setData('ethnicity', e.target.value)}} 
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