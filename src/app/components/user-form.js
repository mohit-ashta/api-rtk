"use client"; // Ensure client-side rendering

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, useGetUsersQuery, useUpdateUserMutation, useAddUserMutation, useDeleteUserMutation } from "../redux/formSlice/getUser";

export default function UserForm() {
  const dispatch = useDispatch();
  const initialData = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  };
  const [formData, setFormData] = useState(initialData);
  const [editing, setEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const {data } = useGetUsersQuery("getUsersDetails");
  const [updateUser] = useUpdateUserMutation();
  const [addUser] = useAddUserMutation();
  const [deleteUser] = useDeleteUserMutation();

  const getUser = useSelector(state=>state.userApi.queries['getUsers("getUsersDetails")']?.data);

  console.log(getUser,"final");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userForm = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
    };

    if (editingId) {
      try {
        await updateUser({ id: editingId, data: userForm })
        setEditing(false);
        setEditingId(null);
        setFormData(initialData);
      } catch (error) {
        console.error("Error updating user:", error);
        alert("Error updating user. Please try again.");
      }
    } else {
      try {
        await addUser(userForm)
        setFormData(initialData);
      } catch (error) {
        console.error("Error adding user:", error);
        alert("Error adding user. Please try again.");
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEdit = (item) => {
    setFormData(item);
    setEditingId(item.id);
    setEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id)
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Error deleting user. Please try again.");
    }
  };

  return (
    <>
      <div>
      <section className="py-3">
  <div className="container px-4 mx-auto">
    <div className="p-8 bg-slate-500 rounded-xl max-w-xxl">
     
      <form >
      
      
        <div className="flex flex-wrap items-start -mx-4">
         
          <div className="w-full sm:w-2/3 px-4">
            <div className="max-w-xl">
              <div className="flex flex-wrap -mx-4 -mb-10">
                <div className="w-full md:w-1/2 px-4 mb-10">
                  <div className="relative w-full h-14 py-4 px-3 border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg">
                    <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500">First Name</span>
                    <input className="block w-full outline-none bg-transparent text-gray-50 placeholder-gray-50 font-semibold" id="formInput2-7" type="text"  onChange={handleChange} value={formData.firstName} name="firstName"/>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-4 mb-10">
                  <div className="relative w-full h-14 py-4 px-3 border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg">
                    <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500">Last Name</span>
                    <input className="block w-full outline-none bg-transparent text-gray-50 placeholder-gray-50 font-semibold" id="formInput2-8" type="text"  onChange={handleChange} value={formData.lastName} name="lastName"/>
                  </div>
                </div>
               
                <div className="w-full md:w-1/2 px-4 mb-10">
                  <div className="relative w-full h-14 py-4 px-3 border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg">
                    <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500">Phone Number</span>
                    <input className="block w-full outline-none bg-transparent text-gray-50 placeholder-gray-50 font-semibold" id="formInput2-10" type="number"  onChange={handleChange} value={formData.phoneNumber} name="phoneNumber"/>
                  </div>
                </div>
                <div className="w-full px-4 mb-10">
                  <div className="relative w-full h-14 py-4 px-3 border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg">
                    <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500">Email</span>
                    <input className="block w-full outline-none bg-transparent text-gray-50 placeholder-gray-50 font-semibold" id="formInput2-11" type="email" onChange={handleChange} value={formData.email} name="email"/>
                  </div>
                </div>
                <div className="w-full px-4 mb-10">
                <button onClick={handleSubmit} className="bg-white px-4 rounded-sm">
                  { editing ? "update" : "submit" }
                </button>
             </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</section>

        <div>
         
          <section className="bg-gray-50 py-8 px-4">
  <table className="table-auto w-full bg-white shadow rounded">
    <thead className="border-b border-gray-100">
      <tr>
      <th className="pl-6 py-6">
          <a className="flex items-center text-xs text-gray-500" href="#">
            <p>Sr.No.</p>
          </a>
        </th>
        <th className="pl-6 py-6">
          <a className="flex items-center text-xs text-gray-500" href="#">
            <p>Firt Name</p>
          </a>
        </th>
        <th>
          <a className="flex items-center text-xs text-gray-500" href="#">
            <p>Last Name</p>
          </a>
        </th>
        <th>
          <a className="flex items-center text-xs text-gray-500" href="#">
            <p>Email</p>
          </a>
        </th>
        <th>
          <a className="flex items-center text-xs text-gray-500" href="#">
            <p>Phone Number</p>
          </a>
        </th>
        <th>
          <a className="flex items-center text-xs text-gray-500" href="#">
            <p>Action</p>
          </a>
        </th>
      </tr>
    </thead>
    <tbody>

      {getUser?.map((user,id) => {


return(
  <tr key={user.id} className="text-xs bg-blue-50 border-b border-gray-100">
     <td className="pl-6 py-6 bg-blue-100">{id+1}</td>
  <td className="pl-6 py-6 bg-blue-100">{user.firstName}</td>
  <td className="pl-6">{user.lastName}</td>
  <td> {user.email}</td>
  <td>{user.phoneNumber}</td>
  <td className="cursor-pointer"
  
  >
    <button   onClick={() => (
      handleEdit(user)
)}>
    Edit</button>
    <button  className="ms-4"  onClick={() => (
      handleDelete(user.id)
)}>
    Delete</button>
  </td>
  
</tr>
)
      }
                
            )}
    </tbody>
  </table>
</section>
        </div>
      </div>
      </>
  );
}
