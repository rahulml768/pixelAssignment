import React, { useEffect, useLayoutEffect, useState } from 'react';
import { api } from '../api/api.jsx';


// list of user details in the form of table
 const UserList = () => {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const[loading,setLoading] = useState(true)

  //fetching userdata
  useLayoutEffect(() => {
   
    fetchUserData();
   
  }, []);


  const fetchUserData = async () => {
    try {
      const res = await api.get("/usersdata");
      console.log(res.data.apiData)
      setUsers(res.data.apiData);
      setFiltered(res.data.apiData);
    } catch (err) {
      console.error("Fetch error:", err);
    }
    finally {
      setLoading(false); 
    }
  };

  //handling search input
  useEffect(() => {
    const keyword = search.toLowerCase();
    const result = users.filter(user =>
      Object.values(user).some(val =>
        String(val).toLowerCase().includes(keyword)
      )
    );
    setFiltered(result);
  },[search,users])

 // handling sorting
  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });

    const sorted = [...filtered].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    setFiltered(sorted);
  };

  //list of coloumns
  const columns = [
    "city", "state", "country", "postcode", "streetNumber", "name", "latitude", "longitude","profile"
  ];

  if(loading){
    return <p className='text-center align-top mt-10 text-lg"'>Loading...</p>
  }
else{
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-2 text-center">User List</h2>
      <p className="mb-4 text-gray-600 text-center">Random User List</p>
      <input
        type="text"
        placeholder="Search user"
        className="border p-2 mb-5 w-full max-w-md "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              {columns.map(col => (
                <th
                  key={col}
                  onClick={() => handleSort(col)}
                  className="p-2 cursor-pointer border-r"
                >
                  {col}
                  {sortConfig.key === col && (
                    sortConfig.direction === 'asc' ? ' ▲' : ' ▼'
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((user, id) => (
              <tr key={id} className="border-t">
                {columns.map(col => (
                <td key={col} className="p-2 text-center border-r">
                {col === 'profile' ? (
                  <img
                    src={user[col]}
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover inline-block"
                  />
                ) : (
                  user[col]
                )}
              </td>
                ))}
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={columns.length} className="text-center p-4 text-gray-500">
                  No matching users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
            }
};
export default UserList;
