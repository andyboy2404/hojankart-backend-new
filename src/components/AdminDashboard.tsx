import React, { useEffect, useState } from 'react';

// ✅ Modal component
const Modal: React.FC<{ onClose: () => void; children: React.ReactNode }> = ({ onClose, children }) => (
  <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
    <div className="bg-white rounded-lg shadow-xl max-w-xl w-full p-8 relative">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl font-bold"
        aria-label="Close modal"
      >
        &times;
      </button>
      {children}
    </div>
  </div>
);

// ✅ AdminDashboard
const AdminDashboard: React.FC = () => {
  const [signups, setSignups] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editId, setEditId] = useState<number | null>(null);
  const [editData, setEditData] = useState<any | null>(null);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [updateError, setUpdateError] = useState('');
  const [updateSuccess, setUpdateSuccess] = useState('');
  const [filterMealStartDate, setFilterMealStartDate] = useState('');
  const [filterIsConverted, setFilterIsConverted] = useState('');

  // ✅ Format date
  function formatDate(dateStr: string) {
    if (!dateStr) return '-';
    const d = new Date(dateStr);/api
    if (isNaN(d.getTime())) return dateStr;
    const day = d.getDate().toString().padStart(2, '0');
    const month = d.toLocaleString('en-US', { month: 'short' });
    const year = d.getFullYear();
    return `${day} ${month} ${year}`;
  }

  // ✅ Fetch data
  useEffect(() => {
    fetch('http://82.29.165.42:5000/api/signups')
      .then(async (res) => {
        if (!res.ok) {
          const err = await res.text();
          throw new Error(`Server responded with ${res.status}: ${err}`);
        }
        return res.json();
      })
      .then((data) => {
        if (!Array.isArray(data)) throw new Error('Unexpected data format');
        setSignups(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setError('Failed to fetch data from server');
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Bhojankart Signups</h2>

      {/* The 'Get First Day Meal for Free T&C!' section is now hidden */}
      {/*
      <section className="mb-6">
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
          <h3 className="font-bold text-lg mb-2">Get First Day Meal for Free</h3>
          <p className="mb-1">T&amp;C!</p>
          <ul className="list-disc ml-6 text-sm">
            <li>Offer valid for new signups only.</li>
            <li>Free meal applicable on first day of meal plan.</li>
            <li>Other terms and conditions may apply.</li>
          </ul>
        </div>
      </section>
      */}

      {/* ✅ Filters */}
      <div className="flex gap-6 mb-4 items-center">
        <div>
          <label className="block text-sm font-semibold mb-1">Meal Start Date</label>
          <input
            type="date"
            className="p-2 border rounded"
            value={filterMealStartDate}
            onChange={e => setFilterMealStartDate(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Is Converted Lead</label>
          <select
            className="p-2 border rounded"
            value={filterIsConverted}
            onChange={e => setFilterIsConverted(e.target.value)}
          >
            <option value="">All</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </div>
      </div>

      {/* ✅ Table */}
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          <p className="mb-4 text-gray-600">Total signups: {signups.length}</p>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 rounded-lg">
              <thead>
                <tr className="bg-green-700 text-white">
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Phone</th>
                  <th className="px-4 py-2">Meals</th>
                  <th className="px-4 py-2">Duration</th>
                  <th className="px-4 py-2">DOB</th>
                  <th className="px-4 py-2">Meal Start Date</th>
                  <th className="px-4 py-2">Is Converted</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {signups
                  .filter((row: any) => {
                    let match = true;
                    if (filterMealStartDate) {
                      match = match && row.mealStartDate === filterMealStartDate;
                    }
                    if (filterIsConverted !== '') {
                      match = match && String(row.isConvertedLeadToBussiness) === filterIsConverted;
                    }
                    return match;
                  })
                  .map((row: any) => (
                    <tr key={row.id} className="border-b">
                      <td className="px-4 py-2">{row.id}</td>
                      <td className="px-4 py-2">{row.fullName}</td>
                      <td className="px-4 py-2">{row.phone}</td>
                      <td className="px-4 py-2">{row.meals}</td>
                      <td className="px-4 py-2">{row.duration}</td>
                      <td className="px-4 py-2">{row.dob}</td>
                      <td className="px-4 py-2">{formatDate(row.mealStartDate)}</td>
                      <td className="px-4 py-2">{row.isConvertedLeadToBussiness ? 'Yes' : 'No'}</td>
                      <td className="px-4 py-2">
                        <button
                          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                          onClick={() => {
                            setEditId(row.id);
                            setEditData({ ...row });
                            setUpdateError('');
                            setUpdateSuccess('');
                          }}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          {/* ✅ Edit Modal */}
          {editData && (
            <Modal onClose={() => { setEditId(null); setEditData(null); }}>
              <h3 className="text-lg font-bold mb-4">Edit Signup (ID: {editId})</h3>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setUpdateLoading(true);
                  setUpdateError('');
                  setUpdateSuccess('');
                  try {
                    // Ensure all fields are present in the update
                    const updatePayload = {
                      fullName: editData.fullName || '',
                      email: editData.email || '',
                      phone: editData.phone || '',
                      meals: editData.meals || '',
                      duration: editData.duration || '',
                      dob: editData.dob || '',
                      mealStartDate: editData.mealStartDate || '',
                      isConvertedLeadToBussiness: !!editData.isConvertedLeadToBussiness,
                    };
                    const res = await fetch(`http://82.29.165.42:5000/api/signups/${editId}`, {
                      method: 'PUT',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(updatePayload),
                    });
                    debugger;
                    const responseText = await res.text();
                    if (!res.ok) {
                      console.error('Update failed:', responseText);
                      setUpdateError(`Server responded with ${res.status}: ${responseText}`);
                      return;
                    }
                    setUpdateSuccess('Record updated successfully!');
                    setEditId(null);
                    setEditData(null);
                    setLoading(true);
                    const newData = await fetch('http://82.29.165.42:5000/api/signups').then(res => res.json());
                    setSignups(newData);
                    setLoading(false); // ✅ Fix: show the table again
                  } catch (err: any) {
                    console.error('Update error:', err);
                    setUpdateError(err.message || 'Update failed');
                  } finally {
                    setUpdateLoading(false);
                  }
                }}
              >
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-semibold mb-1">Name</label>
                    <input type="text" className="w-full p-2 border rounded" value={editData.fullName || ''} onChange={e => setEditData({ ...editData, fullName: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1">Email</label>
                    <input type="email" className="w-full p-2 border rounded" value={editData.email || ''} onChange={e => setEditData({ ...editData, email: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1">Phone</label>
                    <input type="text" className="w-full p-2 border rounded" value={editData.phone || ''} onChange={e => setEditData({ ...editData, phone: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1">Meals</label>
                    <input type="text" className="w-full p-2 border rounded" value={editData.meals || ''} onChange={e => setEditData({ ...editData, meals: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1">Duration</label>
                    <input type="text" className="w-full p-2 border rounded" value={editData.duration || ''} onChange={e => setEditData({ ...editData, duration: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1">DOB</label>
                    <input type="text" className="w-full p-2 border rounded" value={editData.dob || ''} onChange={e => setEditData({ ...editData, dob: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1">Meal Start Date</label>
                    <input
                      type="date"
                      className="w-full p-2 border rounded"
                      value={editData.mealStartDate ? editData.mealStartDate.slice(0, 10) : ''}
                      onChange={e => setEditData({ ...editData, mealStartDate: e.target.value })}
                    />
                  </div>
                  <div className="flex items-center mt-2 col-span-2">
                    <input type="checkbox" id="isConvertedLeadToBussiness" checked={!!editData.isConvertedLeadToBussiness} onChange={e => setEditData({ ...editData, isConvertedLeadToBussiness: e.target.checked })} />
                    <label htmlFor="isConvertedLeadToBussiness" className="ml-2 text-sm font-semibold">Is Converted Lead To Business</label>
                  </div>
                </div>
                {updateError && <p className="text-red-500 mb-2">{updateError}</p>}
                {updateSuccess && <p className="text-green-600 mb-2">{updateSuccess}</p>}
                <div className="flex gap-4">
                  <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800" disabled={updateLoading}>
                    {updateLoading ? 'Updating...' : 'Update'}
                  </button>
                  <button type="button" className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500" onClick={() => { setEditId(null); setEditData(null); }}>
                    Cancel
                  </button>
                </div>
              </form>
            </Modal>
          )}
        </>
      )}
    </div>
  );
};

export default AdminDashboard;
