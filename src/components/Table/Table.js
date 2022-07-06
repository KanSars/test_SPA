import React, { useState, useEffect } from "react";
import TableFooter from './TableFooter/TableFooter';
import useTable from "../../hooks/useTable";
import './table.scss';

const Table = ({ data }) => {
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);

    function formatDate(created_date) {
        const date = new Date(created_date);
        const dayOfMonth = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const hour = date.getHours();
        const minutes = date.getMinutes();

        return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`;
    }

    function formatAuthor({ surname, name, patronymic }) {
        return `${surname} ${name[0]}.${patronymic[0]}.`
    }

    function formatStatus(status) {
        const statuses = {
            new: 'Новое',
            completed: 'Выполнено',
            assigned_to: 'Присвоено',
            started: 'Выполняется',
            declined: 'Отменено',
        }
        return `${statuses[status] ?? status}`
    }

    useEffect(() => {
        if ((data.length - rowsPerPage * (page - 1)) <= 0) setPage(1);
    }, [range]);

    return (
        <div className="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>Номер/Дата</th>
                        <th>Тип задания/Автор</th>
                        <th>Аккаунт/Терминал</th>
                        <th>Статус</th>
                    </tr>
                </thead>
                <tbody>
                    {slice.map((el) => (
                        <tr className="hr-line" key={el.id}>
                            <td>
                                <div className="table-cell">
                                    <div className="truncate">№{el.id}</div>
                                    <div className="truncate">{formatDate(el.created_date)}</div>
                                </div>
                            </td>
                            <td>
                                <div className="table-cell">
                                    <div className="truncate">{el.order_type.name}</div>
                                    <div className="truncate">{formatAuthor(el.created_user)}</div>
                                </div>
                            </td>
                            <td>
                                <div className="table-cell">
                                    <div className="truncate">{el.account.name}</div>
                                    <div className="truncate">{el.terminal.name}</div>
                                </div>
                            </td>
                            <td className="status-cell">
                                <div className={`status ${el.status}`}>
                                    {formatStatus(el.status)}
                                </div>
                                <div>&nbsp;</div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <TableFooter range={range} setPage={setPage} rowsPerPage={rowsPerPage} setRowsPerPage={setRowsPerPage} page={page} data={data} />
        </div>
    )
}

export default Table;
