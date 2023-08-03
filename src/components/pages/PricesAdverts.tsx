import { Box, TextField } from "@mui/material"
import { useSelectorAllAdverts } from "../../hooks/hooks";
import { advertsService } from "../../config/service-config";
import { useEffect, useState } from "react";
import AdvertType from "../../model/AdvertType";
import AdvertsTable from "../tables/AdvertsTable";

const PricesAdverts: React.FC = () => {

    const [adverts, setAdverts] = useState<AdvertType[]>([])
    const [price, setPrice] = useState<number>(0);
    const allAdverts = useSelectorAllAdverts();
    
    function getCurrentAdverts() {
        advertsService.getAdvertsByPrice(price).then(adverts => setAdverts(adverts));
    }

    function priceHandler(event: any) {
        const newPrice: number = event.target.value; 
        setPrice(newPrice || 1);
    }

    useEffect(() => {
        getCurrentAdverts();
    }, [price, allAdverts])

    return <Box sx={{ height: '80vh', width: '95vw' }}>
        <TextField
            onChange={priceHandler}
            type="number"
            fullWidth
            label="Price"
            value={price || 1}
            InputProps={{
                inputProps: { min: 1, max: 10000000 }
            }}
        />
        <AdvertsTable adverts={adverts} />
    </Box>
}

export default PricesAdverts