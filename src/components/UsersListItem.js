import { GoTrashcan } from "react-icons/go";
import { useThunk } from "../hooks/use-thunk";
import { removeUser } from "../store";
import AlbumsList from "./AlbumsList";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";

function UsersListItem({user}) {

    const[doRemoveUser, isLoading, error] = useThunk(removeUser); 

    const handleRemove = () => {
        doRemoveUser(user);
    }

    const header = <>
                    <Button className='m-3' onClick = {handleRemove} loading = {isLoading}>
                        <GoTrashcan />
                    </Button>
                    {error && "Error removing user..."}
                    {user.name}
                </>;

      return (
      <ExpandablePanel header={header}>
        <AlbumsList user={user}/>
      </ExpandablePanel>
      )              
}

export default UsersListItem;