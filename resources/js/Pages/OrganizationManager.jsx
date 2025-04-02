import { useState } from "react";
import { usePage } from '@inertiajs/react';

export default function OrganizationManager() {
    const [filter, setFilter] = useState("view all organization");

    // TODO: GET ALL ORGANIZATION DATA FROM BACKEND
    const { testOrgs } = usePage().props;

    const [selectedItems, setSelectedItems] = useState(new Set());


    const handleCheckboxChange = (id) => {
        const updatedSelectedItems = new Set(selectedItems);

        if (updatedSelectedItems.has(id)) {
            updatedSelectedItems.delete(id);
        } else {
            updatedSelectedItems.add(id);
        }

        setSelectedItems(updatedSelectedItems);
    };

    

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const applyFilter = () => {
        if (filter === "request only") {
            setData(prevData => prevData.filter(item => item.request));
        } 
    };

    return (
        <div className="p-4">
            <div className="mb-4">
                <select value={filter} onChange={handleFilterChange} className="p-2 border rounded w-60">
                    <option value="view all organization">View All Organizations</option>
                    <option value="request only">Request Only</option>
                </select>
                <button onClick={applyFilter} className="ml-2 p-2 bg-blue-500 text-white rounded">Apply Changes</button>
            </div>
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr className="bg-gray-100 border-b">
                        <th className="p-2 border-r">ID</th>
                        <th className="p-2 border-r">Name</th>
                        <th className="p-2 border-r">Organization</th>
                        <th className="p-2 border-r">Status</th>
                        <th className="p-2">Select</th>
                    </tr>
                </thead>
                <tbody>
                    {testOrgs.map((item) => (
                        <tr key={item.id} className="border-b">
                            <td className="p-2 border-r text-center">{item.id}</td>
                            <td className="p-2 border-r">{item.name}</td>
                            <td className="p-2">HELLO</td>
                            <td className="p-2">{item.status}</td>
                            
                            <td className="p-2 text-center">
                                <input 
                                    type="checkbox" 
                                    checked={item.Select} 
                                    onChange={() => handleCheckboxChange(item.id)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}