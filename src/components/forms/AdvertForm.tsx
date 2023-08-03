import { Box, Switch, Grid, FormControl, InputLabel, Select, MenuItem, TextField, FormLabel, RadioGroup, FormControlLabel, Radio, FormHelperText, Button, Typography } from "@mui/material"
import AdvertType from "../../model/AdvertType"
import { useEffect, useState } from "react"
import categoryArray, { CategoryType } from "../../model/CategoryType"

type FormProps = {
    submitFn: (empl: AdvertType) => Promise<Boolean>
    advertUpdated?: AdvertType
}

const initialAdvert: AdvertType = {
    id: undefined,
    name: '',
    category: "Property",
    price: 0,
    // otherDetails: JSON.stringify({ propertyType: 'Flat', propertyBuyType: '', square: 0, tax: 0 })
    otherDetails: {}
};

const AdvertForm: React.FC<FormProps> = ({ submitFn, advertUpdated }) => {

    // console.log({...advertUpdated, otherDetails: JSON.parse(advertUpdated!.otherDetails)});

    const [advert, setAdvert] = useState<AdvertType>(advertUpdated || initialAdvert)

    console.log(advert);

    function nameHandler(event: any) {
        const name: string = event.target.value;
        const advertCopy = { ...advert };
        advertCopy.name = name;
        setAdvert(advertCopy);
    }

    function categoryHandler(event: any) {
        const category: CategoryType = event.target.value;
        const advertCopy = { ...advert };
        advertCopy.category = category;
        setAdvert(advertCopy);
    }

    function priceHandler(event: any) {
        const price: number = event.target.value;
        const advertCopy = { ...advert };
        advertCopy.price = price;
        setAdvert(advertCopy);
    }

    function propertyTypeHandler(event: any) {
        const propertyType: string = event.target.value;
        const advertCopy = { ...advert };
        // const advertCopyDetails = JSON.parse(advert.otherDetails);
        // advertCopyDetails.propertyType = propertyType;
        // advertCopy.otherDetails = JSON.stringify(advertCopyDetails);
        advertCopy.otherDetails.propertyType = propertyType;
        setAdvert(advertCopy);
    }

    function propertyBuyTypeHandler(event: any) {
        const propertyBuyType: string = event.target.value;
        const advertCopy = { ...advert };
        // const advertCopyDetails = JSON.parse(advert.otherDetails);
        // advertCopyDetails.propertyBuyType = propertyBuyType;
        // advertCopy.otherDetails = JSON.stringify(advertCopyDetails);
        advertCopy.otherDetails.propertyBuyType = propertyBuyType;
        setAdvert(advertCopy);
    }

    function propertySquareHandler(event: any) {
        const propertySquare: number = event.target.value;
        const advertCopy = { ...advert };
        // const advertCopyDetails = JSON.parse(advert.otherDetails);
        // advertCopyDetails.propertySquare = propertySquare;
        // advertCopy.otherDetails = JSON.stringify(advertCopyDetails);
        advertCopy.otherDetails.propertySquare = propertySquare;
        setAdvert(advertCopy);
    }

    function propertyTaxHandler(event: any) {
        const propertyTax: number = event.target.value;
        const advertCopy = { ...advert };
        // const advertCopyDetails = JSON.parse(advert.otherDetails);
        // advertCopyDetails.propertyTax = propertyTax;
        // advertCopy.otherDetails = JSON.stringify(advertCopyDetails);
        advertCopy.otherDetails.propertyTax = propertyTax;
        setAdvert(advertCopy);
    }

    function electricCategoryHandler(event: any) {
        const electricCategory: string = event.target.value;
        const advertCopy = { ...advert };
        // const advertCopyDetails = JSON.parse(advert.otherDetails);
        // advertCopyDetails.electricCategory = electricCategory;
        // advertCopy.otherDetails = JSON.stringify(advertCopyDetails);
        advertCopy.otherDetails.electricCategory = electricCategory;
        setAdvert(advertCopy);
    }

    function electricQualityHandler(event: any) {
        const electricQuality: number = event.target.value;
        const advertCopy = { ...advert };
        // const advertCopyDetails = JSON.parse(advert.otherDetails);
        // advertCopyDetails.electricQuality = electricQuality;
        // advertCopy.otherDetails = JSON.stringify(advertCopyDetails);
        advertCopy.otherDetails.electricQuality = electricQuality;
        setAdvert(advertCopy);
    }

    function vehicleBrandHandler(event: any) {
        const vehicleBrand: string = event.target.value;
        const advertCopy = { ...advert };
        // const advertCopyDetails = JSON.parse(advert.otherDetails);
        // advertCopyDetails.vehicleBrand = vehicleBrand;
        // advertCopy.otherDetails = JSON.stringify(advertCopyDetails);
        advertCopy.otherDetails.vehicleBrand = vehicleBrand;
        setAdvert(advertCopy);
    }

    function vehicleModelHandler(event: any) {
        const vehicleModel: string = event.target.value;
        const advertCopy = { ...advert };
        // const advertCopyDetails = JSON.parse(advert.otherDetails);
        // advertCopyDetails.vehicleModel = vehicleModel;
        // advertCopy.otherDetails = JSON.stringify(advertCopyDetails);
        advertCopy.otherDetails.vehicleModel = vehicleModel;
        setAdvert(advertCopy);
    }

    function vehicleYearHandler(event: any) {
        const vehicleYear: number = event.target.value;
        const advertCopy = { ...advert };
        // const advertCopyDetails = JSON.parse(advert.otherDetails);
        // advertCopyDetails.vehicleYear = vehicleYear;
        // advertCopy.otherDetails = JSON.stringify(advertCopyDetails);
        advertCopy.otherDetails.vehicleYear = vehicleYear;
        setAdvert(advertCopy);
    }

    function vehicleColorHandler(event: any) {
        const vehicleColor: string = event.target.value;
        const advertCopy = { ...advert };
        // const advertCopyDetails = JSON.parse(advert.otherDetails);
        // advertCopyDetails.vehicleColor = vehicleColor;
        // advertCopy.otherDetails = JSON.stringify(advertCopyDetails);
        advertCopy.otherDetails.vehicleColor = vehicleColor;
        setAdvert(advertCopy);
    }

    function vehicleMileageHandler(event: any) {
        const vehicleMileage: number = event.target.value;
        const advertCopy = { ...advert };
        // const advertCopyDetails = JSON.parse(advert.otherDetails);
        // advertCopyDetails.vehicleMileage = vehicleMileage;
        // advertCopy.otherDetails = JSON.stringify(advertCopyDetails);
        advertCopy.otherDetails.vehicleMileage = vehicleMileage;
        setAdvert(advertCopy);
    }

    // function setPropertyDetails() {
    //     advert.otherDetails = JSON.stringify({ propertyType: '', propertyBuyType: '', propertySquare: 0, propertyTax: 0 })
    // }

    // function setElectricDetails() {
    //     advert.otherDetails = JSON.stringify({ electricCategory: '', electricQuality: '' })
    // }

    // function setVehicleDetails() {
    //     advert.otherDetails = JSON.stringify({ vehicleBrand: '', vehicleModel: '', vehicleYear: 0, vehicleColor: '', vehicleMileage: 0 })
    // }

    function onResetFn(event: any) {
        event.preventDefault();
        setAdvert(advertUpdated || initialAdvert);
    }

    async function onSubmitFn(event: any) {
        event.preventDefault();
        const res: Boolean = await submitFn(advert);
        if (res) {
            setAdvert(advertUpdated || initialAdvert);
        }
    }

    const renderComponent = () => {

        if (typeof advert.otherDetails == 'string') {
            advert.otherDetails = JSON.parse(advert.otherDetails);
        }

        switch (advert.category) {
            case 'Property': return <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12}>
                    <FormControl fullWidth required >
                        <InputLabel id="select-property-type">Property type</InputLabel>
                        <Select
                            labelId="select-property-type"
                            label="Property type"
                            // value={JSON.parse(advert.otherDetails).propertyType}
                            value={advert.otherDetails?.propertyType || ''}
                            onChange={propertyTypeHandler}
                        >
                            <MenuItem value="Flat" key="Flat">Flat</MenuItem>
                            <MenuItem value="Double" key="Double">Double</MenuItem>
                            <MenuItem value="Villa" key="Villa">Villa</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth required >
                        <InputLabel id="select-buy-type">Buy type</InputLabel>
                        <Select
                            labelId="select-buy-type"
                            label="Buy type"
                            // value={JSON.parse(advert.otherDetails).propertyBuyType}
                            value={advert.otherDetails?.propertyBuyType || ''}
                            onChange={propertyBuyTypeHandler}
                        >
                            <MenuItem value="Purchase" key="Purchase">Purchase</MenuItem>
                            <MenuItem value="Rent" key="Rent">Rent</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        onChange={propertySquareHandler}
                        type="number"
                        fullWidth
                        label="Square"
                        // value={JSON.parse(advert.otherDetails).propertySquare}
                        value={advert.otherDetails?.propertySquare || ''}
                        InputProps={{
                            inputProps: { min: 40, max: 5000 }
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        onChange={propertyTaxHandler}
                        type="number"
                        fullWidth
                        label="Tax"
                        // value={JSON.parse(advert.otherDetails).propertyTax}
                        value={advert.otherDetails?.propertyTax || ''}
                        InputProps={{
                            inputProps: { min: 1, max: 10000 }
                        }}
                    />
                </Grid>
            </Grid>;
            case 'Electrical goods': return <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12}>
                    <FormControl fullWidth required >
                        <InputLabel id="select-electric-category">Electric category</InputLabel>
                        <Select
                            labelId="select-electric-category"
                            label="Electric category"
                            // value={JSON.parse(advert.otherDetails).electricCategory}
                            value={advert.otherDetails.electricCategory}
                            onChange={electricCategoryHandler}
                        >
                            <MenuItem value="Fridge" key="Fridge">Fridge</MenuItem>
                            <MenuItem value="TV" key="TV">TV</MenuItem>
                            <MenuItem value="PC" key="PC">PC</MenuItem>
                            <MenuItem value="Smartphone" key="Smartphone">Smartphone</MenuItem>
                            <MenuItem value="Drone" key="Drone">Drone</MenuItem>
                            <MenuItem value="AMP" key="AMP">AMP</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth required >
                        <InputLabel id="select-electric-quality">Quality</InputLabel>
                        <Select
                            labelId="select-electric-quality"
                            label="Electric quality"
                            // value={JSON.parse(advert.otherDetails).electricQuality}
                            value={advert.otherDetails.electricQuality}
                            onChange={electricQualityHandler}
                        >
                            <MenuItem value="New" key="New">New</MenuItem>
                            <MenuItem value="Used" key="Used">Used</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>;
            case 'Vehicles': return <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12}>
                    <TextField
                        onChange={vehicleBrandHandler}
                        type="text"
                        fullWidth
                        label="Brand"
                        // value={JSON.parse(advert.otherDetails).electricCategory}
                        value={advert.otherDetails.electricCategory}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        onChange={vehicleModelHandler}
                        type="text"
                        fullWidth
                        label="Model"
                        // value={JSON.parse(advert.otherDetails).vehicleModel}
                        value={advert.otherDetails.vehicleModel}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        onChange={vehicleYearHandler}
                        type="number"
                        fullWidth
                        label="Year"
                        // value={JSON.parse(advert.otherDetails).vehicleYear}
                        value={advert.otherDetails.vehicleYear}
                        InputProps={{
                            inputProps: { min: 1885, max: new Date().getFullYear() }
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        onChange={vehicleColorHandler}
                        type="text"
                        fullWidth
                        label="Color"
                        // value={JSON.parse(advert.otherDetails).vehicleColor}
                        value={advert.otherDetails.vehicleColor}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        onChange={vehicleMileageHandler}
                        type="number"
                        fullWidth
                        label="Mileage"
                        // value={JSON.parse(advert.otherDetails).vehicleMileage}
                        value={advert.otherDetails.vehicleMileage}
                        InputProps={{
                            inputProps: { min: 0, max: 1000000 }
                        }}
                    />
                </Grid>
            </Grid>;
            default: return <Typography>none</Typography>
        }
    }

    // useEffect(() => {
    //     if (!advertUpdated) {
    //         console.log(advert.category);
    //         switch (advert.category) {
    //             case "Property":
    //                 setPropertyDetails()
    //                 break;
    //             case "Vehicles":
    //                 setVehicleDetails()
    //                 break;
    //             case "Electrical goods":
    //                 setElectricDetails()
    //                 break;
    //             default:
    //                 break;
    //         }
    //     }
    // }, [advert.category])

    return <Box sx={{ marginTop: { sm: "25vh" } }}>

        <form onSubmit={onSubmitFn} onReset={onResetFn}>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12}>
                    <TextField
                        onChange={nameHandler}
                        type="text"
                        fullWidth
                        label="Name"
                        value={advert.name}
                    />
                </Grid>
                <Grid item xs={12} >
                    <TextField
                        onChange={priceHandler}
                        type="number"
                        fullWidth
                        label="Price"
                        value={advert.price}
                        InputProps={{
                            inputProps: { min: 1, max: 10000000 }
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
                        >
                            {categoryArray.map(category => <MenuItem value={category} key={category}>{category}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    {renderComponent()}
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" fullWidth type="submit">Submit</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" fullWidth type="reset">Reset</Button>
                </Grid>

            </Grid>

            {/* <Box sx={{ marginTop: { xs: "10vh", sm: "5vh" }, textAlign: "center" }}>
                
                {watchMode == 'admin' && <Button type="button" onClick={() => deleteFn?.(employeeUpdated!.id)}>Delete User</Button>}
            </Box> */}
        </form>
    </Box>

}

export default AdvertForm