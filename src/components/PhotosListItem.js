import { GoTrashcan } from "react-icons/go";
import { useRemovePhotoMutation } from "../store";

function PhotosListItem({photo}) {

    const [removePhoto] = useRemovePhotoMutation();

    const handleClick = () => {
        removePhoto(photo);
    }

    return <div className="relative cursor-pointer m-2" onClick = {handleClick}>
        <img className="h-20 w-20" src={photo.url} alt = "random pic"/>
        <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
            <GoTrashcan />
        </div>
    </div>
}

export default PhotosListItem;