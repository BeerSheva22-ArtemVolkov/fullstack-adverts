import { Box, Switch, Grid, FormControl, InputLabel, Select, MenuItem, TextField, FormControlLabel, Button, Typography } from "@mui/material"
import AdvertType from "../../model/AdvertType"
import { useState } from "react"
import categoryArray, { CategoryType } from "../../model/CategoryType"
import PropertyChildForm from "./PropertyChildForm"
import ElectricalChildForm from "./ElectricalChildForm"
import VehicleChildForm from "./VehicleChildForm"
import { MAX_PRICE, MIN_PRICE } from "../../config/select-config"

type FormProps = {
    submitFn: (empl: AdvertType) => Promise<Boolean>
    advertUpdated?: AdvertType
    editMode?: boolean
}

const initialAdvert: AdvertType = {
    id: undefined,
    name: '',
    category: "Property",
    price: 0,
    otherDetails: {}
};

const AdvertForm: React.FC<FormProps> = ({ submitFn, advertUpdated, editMode = false }) => {

    function getInitAdvert(): AdvertType {
        return advertUpdated ? { ...advertUpdated, otherDetails: JSON.parse(advertUpdated.otherDetails) } : { ...initialAdvert, otherDetails: {} }
    }

    const [advert, setAdvert] = useState<AdvertType>(getInitAdvert())
    const [editEnabled, setEditEnabled] = useState<boolean>(!editMode)

    function switchEditing() {
        setEditEnabled(!editEnabled)
    }

    function nameHandler(event: any) {
        const name: string = event.target.value;
        const advertCopy = { ...advert };
        advertCopy.name = name;
        setAdvert(advertCopy);
    }

    function categoryHandler(event: any) {
        const category: CategoryType = event.target.value;
        const advertCopy: AdvertType = { ...advert, otherDetails: {} };
        advertCopy.category = category;
        setAdvert(advertCopy);
    }

    function priceHandler(event: any) {
        const price: number = event.target.value;
        const advertCopy = { ...advert };
        advertCopy.price = price;
        setAdvert(advertCopy);
    }

    function onResetFn(event: any) {
        event.preventDefault();
        setAdvert(getInitAdvert());
    }

    async function onSubmitFn(event: any) {
        event.preventDefault();
        const res: Boolean = await submitFn(advert);
        if (res) {
            setAdvert(getInitAdvert());
        }
    }

    const renderComponent = () => {

        switch (advert.category) {
            case 'Property': return <PropertyChildForm advertStart={advert} editEnabled={editEnabled} />;
            case 'Electrical goods': return <ElectricalChildForm advertStart={advert} editEnabled={editEnabled} />;
            case 'Vehicles': return <VehicleChildForm advertStart={advert} editEnabled={editEnabled} />;
            default: return <Typography>none</Typography>
        }
    }

    return <Box>
        {editMode && <FormControlLabel
            control={<Switch
                checked={editEnabled}
                onChange={switchEditing}
                inputProps={{ 'aria-label': 'controlled' }}
            />}
            label="Enable editing"
        />
        }
        <form onSubmit={onSubmitFn} onReset={onResetFn}>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12}>
                    <TextField
                        required
                        onChange={nameHandler}
                        type="text"
                        fullWidth
                        label="Name"
                        value={advert.name}
                        disabled={!editEnabled}
                    />
                </Grid>
                <Grid item xs={12} >
                    <TextField
                        required
                        onChange={priceHandler}
                        type="number"
                        fullWidth
                        label="Price"
                        value={advert.price}
                        disabled={!editEnabled}
                        InputProps={{
                            inputProps: { min: MIN_PRICE, max: MAX_PRICE }
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth required >
                        <InputLabel id="select-category">Category</InputLabel>
                        <Select
                            labelId="select-category"
                            label="Category"
                            value={advert.category}
                            onChange={categoryHandler}
                            disabled={!editEnabled}
                        >
                            {categoryArray.map(category => <MenuItem value={category} key={category}>{category}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    {renderComponent()}
                </Grid>
                {editEnabled && <Grid item xs={6}>
                    <Button variant="contained" fullWidth type="submit">Submit</Button>
                </Grid>}
                {editEnabled && <Grid item xs={6}>
                    <Button variant="contained" fullWidth type="reset">Reset</Button>
                </Grid>}

            </Grid>
        </form>
    </Box >

}

export default AdvertForm