import { CurrencyExchange, Visibility } from "@mui/icons-material";
export const itemsColumn = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Drug", width: 130 },
  { field: "stock", headerName: "Stock", width: 130 },
  { field: "price", headerName: "Price", width: 130 },
  {
    field: "action",
    headerName: "Action",
    width: 120,
    renderCell: (params) => (
      <div className="action-btn">
        <Visibility className="action-icon" />
        <CurrencyExchange className="action-icon" />
      </div>
    ),
  },
];
export const salesColumn = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "device_name", headerName: "Item", width: 200 },
  { field: "quantity", headerName: "Qty", width: 40 },
  { field: "cost", headerName: "Cost", width: 130 },
  {
    field: "createdAt",
    headerName: "Date",
    width: 180,
    renderCell: (params) => <>{params.row.createdAt}</>,
  },
];
export const itemSalesColumn = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "createdAt",
    headerName: "Date",
    width: 170,
    renderCell: (params) => <>{params.row.createdAt}</>,
  },
  { field: "quantity", headerName: "Qty", width: 40 },
  { field: "cost", headerName: "Cost", width: 130 },
];

export const data = [
  {
    name: "Jan",
    sales: 2400,
  },
  {
    name: "Feb",
    sales: 1398,
  },
  {
    name: "Mar",
    sales: 1800,
  },
  {
    name: "Apr",
    sales: 3908,
    amt: 2000,
  },
  {
    name: "May",
    sales: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    sales: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    sales: 4300,
  },
  {
    name: "Aug",
    sales: 3908,
  },
  {
    name: "Sep",
    sales: 4800,
  },
  {
    name: "Oct",
    sales: 3800,
  },
  {
    name: "Nov",
    sales: 4300,
  },
  {
    name: "Dec",
    sales: 6300,
  },
];
