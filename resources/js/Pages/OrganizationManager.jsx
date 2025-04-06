import { useEffect, useState } from "react";
import { usePage } from '@inertiajs/react';

export default function OrganizationManager() {
    //TODO: Make it so that apply change will grab the organizationDataState and re-apply the data
    //TODO: Maybe make a set of all data changed on hashmap (userid, organization name, status) and then put update their row in database instead of iterating all data and updating
    //TODO: make filter, maybe every iteration on map check what's the filter condition in ((organizationDataState || []).map) and decide if show or not show the row
    const [filter, setFilter] = useState("view all organization");

    const { organizationData, userData } = usePage().props;
    const [organizationDataState, setOrganizationDataState] = useState();

    const statusMap = {
        accepted: "rejected",
        rejected: "pending",
        pending: "accepted",
    };
    

    useEffect(() => {
        setOrganizationDataState(organizationData);
       
    }, [organizationData])




    const applyFilter = () => {
        console.log("TEST FILTER")
    };

    const getUserNameById = (userId) => {
        const user = userData.find(user => user.id === userId);
        return user ? user.name : "Unknown"; 
    };

    const changeUserStatus = (rowId, userId, organizationName) => { 
        const user = organizationDataState.find(user => 
            user.user_id === userId && user.organization_name === organizationName
        );

        const user_status = user.status
        const newStatus = statusMap[user_status] || user_status;

        const updatedOrganizationData = organizationDataState.map((item, index) => {
            if (index === rowId - 1) {
                return { ...item, status: newStatus };
            }
            return item;
        });
        setOrganizationDataState(updatedOrganizationData);
    }

    

    return (
        <div className="p-4">
            <div className="mb-4">
                <select value={filter} onChange={(e) => {setFilter(e.target.value)}} className="p-2 border rounded w-60">
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
                       
                    </tr>
                </thead>
                <tbody>
                    {(organizationDataState || []).map((item) => (
                        <tr key={item.id} className="border-b">
                            <td className="p-2 border-r text-center">{item.user_id}</td>
                            <td className="p-2 border-r">{getUserNameById(item.user_id)}</td>
                            <td className="p-2">{item.organization_name}</td>
                            <td className="p-2 hover:text-yellow-600 cursor-pointer text-center border-r select-none"
                                onClick={() => changeUserStatus(item.id, item.user_id, item.organization_name)}
                            >{item.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}