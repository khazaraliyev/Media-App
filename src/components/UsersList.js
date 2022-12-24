import { useEffect } from "react";
import { useSelector } from "react-redux";
import Skeleton from "../Skeleton";
import { fetchUsers, addUser } from "../store";
import Button from './Button';
import { useThunk } from "../hooks/use-thunk";
import UsersListItem from "./UsersListItem";



function UsersList() {

    const[doFetchUsers, isUserLoading, loadingError] = useThunk(fetchUsers);
    const[doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);

    const { data } = useSelector((state) => {
        return state.users;
    })

    useEffect( () => {
       doFetchUsers();
    }, [doFetchUsers])

    const handleUserAdd = () => {
       doCreateUser();
    }

    let content;

    if(isUserLoading)
    {
       content = <Skeleton times={4} className="h-10 w-full"/> 
    } else if(loadingError){
        content = "Error while loading users..."
    } else {
        content = data.map((user) => {
            return <UsersListItem key = {user.id} user = {user}/>         
        })
    }

    return (
        <div>
            <div className="flex flex-row justify-between items-center m-3">
                <h1 className="m-2 text-xl">Users</h1>
                {
                    <Button onClick = {handleUserAdd} loading = {isCreatingUser}>
                        + Add User
                    </Button>
                }

                {
                    creatingUserError && "Error creating user"
                }
            </div>
            {content}
        </div>
    )
}

export default UsersList;