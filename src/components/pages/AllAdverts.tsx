import { Box } from "@mui/material"
import { useSelectorAllAdverts } from "../../hooks/hooks";
import AdvertsTable from "../tables/AdvertsTable";

const AllAdverts: React.FC = () => {

    const adverts = useSelectorAllAdverts();

    return <Box sx={{ height: '80vh', width: '95vw' }}>
        <AdvertsTable adverts={adverts}/>
    </Box>
}

export default AllAdverts