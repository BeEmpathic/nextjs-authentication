"use client";
import { usersGetAll } from "@/app/actions/usersActions";
import { useState, useEffect } from "react";

interface User {
  username: string;
  plainPassword: string;
  password: string;
}

const UsersAllList = () => {
  const [usersAll, setUsersAll] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await usersGetAll();
        console.log(data);
        if (Array.isArray(data)) {
          setUsersAll(data);
        }
      } catch (err) {
        console.error("Failed to fetch users in component", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading users...</div>;

  return (
    <div
      className={`absolute bg-slate-800 text-slate-100 p-6 rounded-lg border border-slate-700 shadow-xl tranistion-all duration-300 ease-in-out z-0 inset-0 ${isOpen ? "translate-x-full" : "translate-x-0"}`}
    >
      {/* // might be problem with -translate-x-full here */}
      <div
        className={`transition-all ease-in-out duration-300 absolute top-0 ${isOpen ? "opacity-100" : "opacity-0"} opacity-0 hover:opacity-100 hover:text-black bottom-0 left-0 w-4 flex items-center justify-center translate-z-full z-50`}
      >
        {/* looks like this button might have broken css classes too- */}
        <div className="hover-area"></div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="opactiy-0 group-hover/auth:opacity-100 bg-slate-700 hover:bg-slate-200 w-4 h-8 rounded-l flex items-center justify-center text-[10px] font-mono tranistion-opacity cursor-pointer shadow-md"
          title="Toggle Users List"
        >
          {isOpen ? "◀" : "▶"}
        </button>
      </div>
      <ol>
        {usersAll.length > 0 ? (
          usersAll.map((user, index) => (
            <li key={index}>
              <p>Username: {user.username}</p>
              <p>Password: {user.plainPassword}</p>
            </li>
          ))
        ) : (
          <p>No users found</p>
        )}
      </ol>
    </div>
  );
};

export default UsersAllList;
