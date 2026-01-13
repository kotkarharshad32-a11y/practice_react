import Header from "../../../header";
import fares from "../../../../assets/fare.json";
import "./Tables.css"
import {
    useReactTable,
    getCoreRowModel,
    flexRender
} from "@tanstack/react-table";

const stations = [
    { id: 1, name: "Thane" },
    { id: 2, name: "Mulund" },
    { id: 3, name: "Mumbai" },
    { id: 4, name: "Panvel " },
    { id: 5, name: "Bhandup" },
    { id: 6, name: "Airoli" },
    { id: 7, name: "Mansarovar" },
    { id: 8, name: "Digha" },
    { id: 9, name: "Roha" },
    { id: 10, name: "Badlapur" },
    { id: 11, name: "Bhivandi" },
    { id: 12, name: "Chembur" },
    { id: 13, name: "Dadar" },
    { id: 14, name: "Dahisar" },
    { id: 15, name: "Lalbaug" },
    { id: 16, name: "Bandra" },
    { id: 17, name: "CSMT" },
    { id: 18, name: "Borivali" },
    { id: 19, name: "Jogishvari" },
    { id: 20, name: "Kalyan" },


];

const Tables = () => {

    const data = fares.map(row => {
        const obj = { station_id: row.station_id };
        stations.forEach(st => {
            obj[st.id] = row.fare[st.id];
        });
        return obj;
    });

    const columns = [
        {
            header: "Station Name",
            accessorKey: "station_id",
            cell: info =>
                stations.find(s => s.id === info.getValue())?.name
        },
        ...stations.map(station => ({
            header: station.name,
            accessorKey: station.id.toString(),
            cell: info => (
                <input
                    value={info.getValue()}
                    className="fare-input"
                    readOnly
                />
            )
        }))
    ];

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel()
    });

    return (
        <div className="App">
            <Header />

            <div className="fare-container">
                <h2 className="fare-title">Fare Matrix</h2>

                <div className="fare-table-wrapper">
                    <table className="fare-table">
                        <thead>
                            {table.getHeaderGroups().map(hg => (
                                <tr key={hg.id}>
                                    {hg.headers.map(h => (
                                        <th key={h.id}>
                                            {flexRender(h.column.columnDef.header, h.getContext())}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>

                        <tbody>
                            {table.getRowModel().rows.map(row => (
                                <tr key={row.id}>
                                    {row.getVisibleCells().map(cell => (
                                        <td key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Tables;
