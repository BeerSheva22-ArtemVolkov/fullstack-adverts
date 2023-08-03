import { Box } from "@mui/material"
import { advertsService } from "../../config/service-config"
import AdvertType from "../../model/AdvertType"
import AdvertForm from "../forms/AdvertForm"

const AddAdvert: React.FC = () => {

    const addNewAdvert = async (newAdvert: AdvertType) => {
        const response = await advertsService.addAdvert(newAdvert)
        console.log(response);
        return response
    }

    return <Box sx={{margin: '10vh'}}>
        <AdvertForm submitFn={addNewAdvert} />
    </Box>
}

export default AddAdvert