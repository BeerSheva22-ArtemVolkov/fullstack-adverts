import { useEffect, useState } from "react";
import AdvertType from "../../model/AdvertType";
import { Grid, FormControl, InputLabel, Select, MenuItem, TextField } from "@mui/material";
import { buyTypeArray, propertyTypeArray } from "../../config/select-config";

type PropertyChildFormProps = {
    advertStart: AdvertType
    editEnabled: boolean
}

const PropertyChildForm: React.FC<PropertyChildFormProps> = ({ advertStart, editEnabled }) => {

    const [advert, setAdvert] = useState<AdvertType>(advertStart)

    function propertyTypeHandler(event: any) {
        const propertyType: string = event.target.value;
        const advertCopy = { ...advert };
        advertCopy.otherDetails.propertyType = propertyType;
        setAdvert(advertCopy);
    }

    function propertyBuyTypeHandler(event: any) {
        const propertyBuyType: string = event.target.value;
        const advertCopy = { ...advert };
        advertCopy.otherDetails["propertyBuyType"] = propertyBuyType;
        setAdvert(advertCopy);
    }

    function propertySquareHandler(event: any) {
        const propertySquare: number = event.target.value;
        const advertCopy = { ...advert };
        advertCopy.otherDetails.propertySquare = propertySquare;
        setAdvert(advertCopy);
    }

    function propertyTaxHandler(event: any) {
        const propertyTax: number = event.target.value;
        const advertCopy = { ...advert };
        advertCopy.otherDetails.propertyTax = propertyTax;
        setAdvert(advertCopy);
    }

    useEffect(() => {
        setAdvert(advertStart);
    }, [advertStart])

    return <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12}>
            <FormControl fullWidth required >
                <InputLabel id="select-property-type">Property type</InputLabel>
                <Select
                    labelId="select-property-type"
                    label="Property type"
                    value={advert.otherDetails?.propertyType || ''}
                    onChange={propertyTypeHandler}
                    disabled={!editEnabled}
                >
                    {propertyTypeArray.map(type => <MenuItem value={type} key={type}>{type}</MenuItem>)}
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={12}>
            <FormControl fullWidth required >
                <InputLabel id="select-buy-type">Buy type</InputLabel>
                <Select
                    labelId="select-buy-type"
                    label="Buy type"
                    value={advert.otherDetails?.propertyBuyType || ''}
                    onChange={propertyBuyTypeHandler}
                    disabled={!editEnabled}
                >
                    {buyTypeArray.map(type => <MenuItem value={type} key={type}>{type}</MenuItem>)}
                </Select>
            </FormControl>
        </Grid>
        <Grid item xs={12}>
            <TextField
                required
                onChange={propertySquareHandler}
                type="number"
                fullWidth
                label="Square"
                value={advert.otherDetails?.propertySquare || ''}
                InputProps={{
                    inputProps: { min: 40, max: 5000 }
                }}
                disabled={!editEnabled}
            />
        </Grid>
        <Grid item xs={12}>
            <TextField
                required
                onChange={propertyTaxHandler}
                type="number"
                fullWidth
                label="Tax"
                value={advert.otherDetails?.propertyTax || ''}
                InputProps={{
                    inputProps: { min: 1, max: 10000 }
                }}
                disabled={!editEnabled}
            />
        </Grid>
    </Grid>
}

export default PropertyChildForm