import { DataGrid, GridActionsCellItem, GridColDef } from "@mui/x-data-grid"
import AdvertType from "../../model/AdvertType"
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Modal, Paper, PaperProps } from "@mui/material"
import { Delete, Edit } from "@mui/icons-material"
import { advertsService } from "../../config/service-config"
import { useMemo, useState } from "react"
import AdvertForm from "../forms/AdvertForm"

const columnsCommon: GridColDef[] = [
    {
        field: 'id', headerName: 'ID', flex: 0.2, headerClassName: 'data-grid-header',
        align: 'center', headerAlign: 'center'
    },
    {
        field: 'category', headerName: 'Category', flex: 0.2, headerClassName: 'data-grid-header',
        align: 'center', headerAlign: 'center'
    },
    {
        field: 'price', headerName: 'Price', flex: 0.2, headerClassName: 'data-grid-header',
        align: 'center', headerAlign: 'center'
    },
    {
        field: 'name', headerName: 'Name', flex: 0.2, headerClassName: 'data-grid-header',
        align: 'center', headerAlign: 'center'
    }
]

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    maxHeight: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflowY: "scroll"
};

type AdvertsTableProps = {
    adverts: AdvertType[]
}

const AdvertsTable: React.FC<AdvertsTableProps> = ({ adverts }) => {
    
    const actionsColumns: GridColDef[] = [
        {
            field: 'actions', type: "actions", getActions: (params) => {
                return [
                    <GridActionsCellItem
                        label="delete"
                        icon={<Delete />}
                        onClick={() => openDeleteDialog(params.id)}
                    />,
                    <GridActionsCellItem
                        label="update"
                        icon={<Edit />}
                        onClick={() => openUpdateDialog(params.id)}
                    />
                ];
            }
        }
    ]

    const [deleteDialogOpened, setDeleteDialogOpened] = useState<boolean>(false);
    const [updateDialogOpened, setUpdateDialogOpened] = useState<boolean>(false);
    const [advertToUpdate, setAdvertToUpdate] = useState<AdvertType | null>();
    const [adctionID, setActionID] = useState<number>(0)

    const columns = useMemo(() => getColumns(), [adverts]);

    function openDeleteDialog(id: any) {
        setActionID(id);
        setDeleteDialogOpened(true);
    }

    function closeDeleteDialog() {
        setDeleteDialogOpened(false);
    }

    function openUpdateDialog(id: any) {
        setActionID(id);
        const advert = adverts.find(advert => advert.id == id)         
        setAdvertToUpdate(advert)
        setUpdateDialogOpened(true);
    }

    function closeUpdateDialog() {
        setUpdateDialogOpened(false);
    }

    function getColumns(): GridColDef[] {
        let res: GridColDef[] = columnsCommon;
        res = res.concat(actionsColumns);
        return res;
    }

    async function actualRemoveAdvert() {
        const response = await advertsService.deleteAdvert(adctionID)
        closeDeleteDialog()
    }

    async function actualUpdateAdvert(advertToUpdate: AdvertType) {
        const response = await advertsService.updateAdvert(adctionID, advertToUpdate);
        closeUpdateDialog()
        return response;
    }


    return <Box>
        <DataGrid columns={columns} rows={adverts} />
        <Dialog
            open={deleteDialogOpened}
            onClose={closeDeleteDialog}
            sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
            aria-labelledby="draggable-dialog-title"
        >
            <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                Delete advert
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you shure?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={closeDeleteDialog}>
                    Cancel
                </Button>
                <Button onClick={actualRemoveAdvert}>
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
        <Modal
            open={updateDialogOpened}
            onClose={closeUpdateDialog}
        >
            <Box sx={style}>
                <AdvertForm submitFn={actualUpdateAdvert} advertUpdated={advertToUpdate!} />
            </Box>
        </Modal>
        {/* <Modal
            open={openWatch}
            onClose={() => {
                setFlWatch(false)
                setWatchMode('')
            }}
            aria-labelledby="modal-modal-title"
        >
            <Box sx={style}>
                <EmployeeForm
                    submitFn={updateEmployee}
                    employeeUpdated={employee.current}
                    watchMode={watchMode}
                    deleteFn={() => {
                        removeEmployee(employee.current!.id)
                        setFlWatch(false)
                    }} />
            </Box>
        </Modal> */}
    </Box>
}

export default AdvertsTable