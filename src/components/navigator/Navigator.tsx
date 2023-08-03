import { Box, AppBar, Tabs, Tab } from "@mui/material"
import { useState } from "react"
import { NavLink, Outlet } from "react-router-dom"

const Navigator: React.FC = () => {

    const [value, setValue] = useState<number>(0);

    function onChangeFn(event: any, newValue: number) {
        setValue(newValue);
    }

    return <Box mt={10}>
        <AppBar sx={{ backgroundColor: "lightgray" }}>
            <Tabs value={value} onChange={onChangeFn}>
                <Tab component={NavLink} to={"/"} label={"All adverts"} />
                <Tab component={NavLink} to={"/byCategories"} label={"categories adverts"} />
                <Tab component={NavLink} to={"/byPrices"} label={"Prices adverts"} />
                <Tab component={NavLink} to={"/addAdvert"} label={"Add advert"} />
            </Tabs>
        </AppBar>

        <Outlet></Outlet>
    </Box>
}

export default Navigator