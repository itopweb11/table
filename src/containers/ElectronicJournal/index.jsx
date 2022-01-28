import React from "react";
import {Table} from "reactstrap";
import {tableHeadData, tableBodyData} from './helpers';
import PopoverItem from "../components/PopoverItem";

const ElectronicJournal = () => {
    const TableHead = () => tableHeadData.map(item => (
        <th
            style={{width: item.width}}
            key={item.id}
        >
            {item.title}
        </th>
    ))

    const TableBody = () => (
        tableBodyData.map((item, idx) => (
            <tr key={idx}>
                {
                    Object.keys(item)
                        .map((elem, index) => {
                            return [0, 1].includes(index)
                                ? <td key={index}>
                                    <span>{item[elem]}</span>
                                </td>
                                : <PopoverItem
                                    key={index}
                                    value={item[elem]}
                                    index={`${idx}${index}`}
                                    parentData={item}
                                    columnTitle={tableHeadData[index].title}
                                />
                        })
                }
            </tr>
        ))
    )

    return (
        <div className="electronicJournal container mt-5">
            <h1 className="fs-3">Электронный журнал</h1>
            <Table bordered className="mt-4">
                <thead>
                <tr>
                    <TableHead/>
                </tr>
                </thead>
                <tbody>
                <TableBody/>
                </tbody>
            </Table>
        </div>
    )
}

export default ElectronicJournal;