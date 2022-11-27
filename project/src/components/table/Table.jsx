import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "Red Rose",
      img: "https://easemytrip.com/travel/img/rose-gardens-ind.jpg",
      customer: "Sneha Shinde",
      date: "6 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Mogra",
      img: "https://lh3.googleusercontent.com/3uUTJyV9gexxl3EaoJg6L5RJb9mdpq5RPtDjqPXAYhMVNbp9I4G7MouydV-y7DjSmMSEbXhsU5h9PHNOEgudlSzwRAs8A7LoRmINqE3XFFnQL2O51e8QX5vsX3BNSoLECLF70SmmXj0yqOtgrw",
      customer: "Sneha Shinde",
      date: "6 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Purple Rose",
      img: "https://c4.wallpaperflare.com/wallpaper/637/488/20/purple-rose-wallpaper-preview.jpg",
      customer: "Sneha Shinde",
      date: "6 March",
      amount: 350,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Rainbow Colour Roses",
      img: "https://i.pinimg.com/474x/b0/c9/42/b0c94224dd0a79871692521125a96dcb.jpg",
      customer: "Sneha Shinde",
      date: "6 March",
      amount: 9200,
      method: "Online Payments",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "Pink Rose",
      img: "https://m.media-amazon.com/images/I/51ctypqp2UL._SX466_.jpg",
      customer: "Sneha Shinde",
      date: "6 March",
      amount: 2000,
      method: "Online Payments",
      status: "Approved",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
