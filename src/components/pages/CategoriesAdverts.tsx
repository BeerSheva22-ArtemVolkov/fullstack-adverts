import { Box, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { GridColDef, DataGrid } from "@mui/x-data-grid";
import { useSelectorAllAdverts } from "../../hooks/hooks";
import { advertsService } from "../../config/service-config";
import { useEffect, useState } from "react";
import AdvertType from "../../model/AdvertType";
import categoryArray, { CategoryType } from "../../model/CategoryType";
import AdvertsTable from "../tables/AdvertsTable";

const CategoriesAdverts: React.FC = () => {

    const [adverts, setAdverts] = useState<AdvertType[]>([])
    const [category, setCategory] = useState<CategoryType>("Vehicles");
    const allAdverts = useSelectorAllAdverts();

    function getCurrentAdverts() {
        advertsService.getAdvertsByCategory(category).then(advs => {
            setAdverts(advs)
        });
    }

    function categoryHandler(event: any) {
        const newCategory: CategoryType = event.target.value;
        setCategory(newCategory);
    }

    useEffect(() => {
        getCurrentAdverts();
    }, [category, allAdverts])

    return <Box sx={{ height: '80vh', width: '95vw' }}>
        <FormControl fullWidth required >
            <InputLabel id="select-category">Category</InputLabel>
            <Select
                labelId="select-category"
                label="Category"
                value={category}
                onChange={categoryHandler}
            >
                {categoryArray.map(category => <MenuItem value={category} key={category}>{category}</MenuItem>)}
            </Select>
        </FormControl>
        <AdvertsTable adverts={adverts} />
    </Box>
}

export default CategoriesAdverts