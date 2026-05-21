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

  useEffect(() => {
    const fetchData = () => {
      try {
        const data = usersGetAll();
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
    <div>
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
