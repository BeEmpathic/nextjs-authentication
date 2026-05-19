import { usersGetAll } from "@/app/actions/usersActions";
import { useState } from "react";

const AllUsersList = () => {
  const [usersAll, setUsersAll] = useState(await usersGetAll);

  return (
    <div>
        <ol>
            {usersAll.length > 0 ? usersAll}        
        </ol>
    </div>
  )
};
