import { useEffect, useState } from "react";
import AdvertType from "../../model/AdvertType";
import { Grid, FormControl, InputLabel, Select, MenuItem, TextField } from "@mui/material";
import { MAX_MILAGE, MAX_YEAR, MIN_MILAGE, MIN_YEAR } from "../../config/select-config";

type ElectricalChildFormProps = {
    advertStart: AdvertType
    editEnabled: boolean
}

const VehicleChildForm: React.FC<ElectricalChildFormProps> = ({ advertStart, editEnabled }) => {

    const [advert, setAdvert] = useState<AdvertType>(advertStart)

    function vehicleBrandHandler(event: any) {
        const vehicleBrand: string = event.target.value;
        const advertCopy = { ...advert };
        advertCopy.otherDetails.vehicleBrand = vehicleBrand;
        setAdvert(advertCopy);
    }

    function vehicleModelHandler(event: any) {
        const vehicleModel: string = event.target.value;
        const advertCopy = { ...advert };
        advertCopy.otherDetails.vehicleModel = vehicleModel;
        setAdvert(advertCopy);
    }

    function vehicleYearHandler(event: any) {
        const vehicleYear: number = event.target.value;
        const advertCopy = { ...advert };
        advertCopy.otherDetails.vehicleYear = vehicleYear;
        setAdvert(advertCopy);
    }

    function vehicleColorHandler(event: any) {
        const vehicleColor: string = event.target.value;
        const advertCopy = { ...advert };
        advertCopy.otherDetails.vehicleColor = vehicleColor;
        setAdvert(advertCopy);
    }

    function vehicleMileageHandler(event: any) {
        const vehicleMileage: number = event.target.value;
        const advertCopy = { ...advert };
        advertCopy.otherDetails.vehicleMileage = vehicleMileage;
        setAdvert(advertCopy);
    }

    useEffect(() => {
        setAdvert(advertStart);
    }, [advertStart])

    return <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12}>
            <TextField
                onChange={vehicleBrandHandler}
                type="text"
                fullWidth
                label="Brand"
                value={advert.otherDetails?.vehicleBrand || ''}
            />
        </Grid>
        <Grid item xs={12}>
            <TextField
                onChange={vehicleModelHandler}
                type="text"
                fullWidth
                label="Model"
                value={advert.otherDetails?.vehicleModel || ''}
            />
        </Grid>
        <Grid item xs={12}>
            <TextField
                onChange={vehicleYearHandler}
                type="number"
                fullWidth
                label="Year"
                value={advert.otherDetails?.vehicleYear || ''}
                InputProps={{
                    inputProps: { min: MIN_YEAR, max: MAX_YEAR }
                }}
            />
        </Grid>
        <Grid item xs={12}>
            <TextField
                onChange={vehicleColorHandler}
                type="text"
                fullWidth
                label="Color"
                value={advert.otherDetails?.vehicleColor || ''}
            />
        </Grid>
        <Grid item xs={12}>
            <TextField
                onChange={vehicleMileageHandler}
                type="number"
                fullWidth
                label="Mileage"
                value={advert.otherDetails?.vehicleMileage || ''}
                InputProps={{
                    inputProps: { min: MIN_MILAGE, max: MAX_MILAGE }
                }}
            />
        </Grid>
    </Grid>
}

export default VehicleChildForm

