import { useEffect, useState } from "react";
import AdvertType from "../../model/AdvertType";
import { Grid, FormControl, InputLabel, Select, MenuItem, TextField } from "@mui/material";
import { electricCategoriesArray, electricQualityArray } from "../../config/select-config";

type ElectricalChildFormProps = {
    advertStart: AdvertType
    editEnabled: boolean
}

const ElectricalChildForm: React.FC<ElectricalChildFormProps> = ({ advertStart, editEnabled }) => {

    const [advert, setAdvert] = useState<AdvertType>(advertStart)

    function electricCategoryHandler(event: any) {
        const electricCategory: string = event.target.value;
        const advertCopy = { ...advert };
        advertCopy.otherDetails.electricCategory = electricCategory;
        setAdvert(advertCopy);
    }

    function electricQualityHandler(event: any) {
        const electricQuality: number = event.target.value;
        const advertCopy = { ...advert };
        advertCopy.otherDetails.electricQuality = electricQuality;
        setAdvert(advertCopy);
    }

    useEffect(() => {
        setAdvert(advertStart);
    }, [advertStart])

    return <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12}>
            <FormControl fullWidth required >
                <InputLabel id="select-electric-category">Electric category</InputLabel>
                <Select
                    labelId="select-electric-category"
                    label="Electric category"
                    value={advert.otherDetails?.electricCategory || ''}
                    onChange={electricCategoryHandler}
                    disabled={!editEnabled}
                >
                    {electricCategoriesArray.map(type => <MenuItem value={type} key={type}>{type}</MenuItem>)}
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={12}>
            <FormControl fullWidth required >
                <InputLabel id="select-electric-quality">Quality</InputLabel>
                <Select
                    labelId="select-electric-quality"
                    label="Electric quality"
                    value={advert.otherDetails?.electricQuality || ''}
                    onChange={electricQualityHandler}
                    disabled={!editEnabled}
                >
                    {electricQualityArray.map(type => <MenuItem value={type} key={type}>{type}</MenuItem>)}
                </Select>
            </FormControl>
        </Grid>
    </Grid>
}

export default ElectricalChildForm