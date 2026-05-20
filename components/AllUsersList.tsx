import { usersGetAll } from "@/app/actions/usersActions";
import { useState, useEffect } from "react";

interface User {
  username: string;
  password: string;
}

const AllUsersList = async () => {
  const [usersAll, setUsersAll] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await usersGetAll();
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
        {usersAll.length > 0
          ? usersAll.map((user, index) => <li key={index}>{user.username}</li>)
          : "<p>No users found</p>"}
      </ol>
    </div>
  );
};
