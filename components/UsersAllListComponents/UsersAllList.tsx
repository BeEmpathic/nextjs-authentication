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
      className={`main-list-div absolute bg-slate-800 text-slate-100 p-6 rounded-lg border border-slate-700 shadow-xl transition-all duration-300 ease-in-out z-0 inset-0 ${isOpen ? "translate-y-full" : "translate-y-0"}`}
    >
      {/* // might be problem with -translate-x-full here */}
      <div
        className={`p-5 the-button-wrapper group/users inset-x-0 transition-all ease-in-out duration-300 absolute translate-y-full ${isOpen ? "opacity-100" : "opacity-0"} hover:opacity-100 hover:text-black border bottom-0 flex items-center justify-center z-50`}
      >
        {/* looks like this button might have broken css classes too- */}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="opacity-0 group-hover/users:opacity-100 bg-slate-700 hover:bg-slate-200 w-8 h-4 rounded-l flex items-center justify-center text-[10px] font-mono transition-opacity duration-300 ease-in-out cursor-pointer shadow-md"
          title="Toggle Users List"
        >
          {isOpen ? "▼" : "▲"}
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
