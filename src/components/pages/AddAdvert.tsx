import { Box } from "@mui/material"
import { advertsService } from "../../config/service-config"
import AdvertType from "../../model/AdvertType"
import AdvertForm from "../forms/AdvertForm"

const AddAdvert: React.FC = () => {

    const addNewAdvert = async (newAdvert: AdvertType) => {
        const response = await advertsService.addAdvert(newAdvert)
        return response
    }

    return <Box sx={{marginLeft: '30%', marginRight: '30%'}}>
        <AdvertForm submitFn={addNewAdvert} />
    </Box>
}

export default AddAdvert