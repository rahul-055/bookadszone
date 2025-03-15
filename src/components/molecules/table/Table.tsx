import React from 'react';
import { ProductTableProps } from '../../../typescheck/interfaces';
import './table.css'
import ProductImg from '../../atoms/imageitem/ProductImg';
import ComIcon from '../../atoms/icon/ComIcon';
import { ICONS } from '../../../data/Icon';
function Table(props: ProductTableProps) {
    return (
        <div className="table-container">
            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            {props.headers.map((header, index) => (
                                <th key={index} className='lbl-title-3'>{header.toUpperCase()}</th>
                            ))}
                            {props.isAction && <th className='lbl-title-3 action-lbl'>Action</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {props.data.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {props.headers.map((header, colIndex) => (
                                    <td key={colIndex} className='lbl-title-4'>
                                        {header.toLowerCase() === "image" && row[header] ? (
                                            <ProductImg srcUrl={row[header]} />
                                        ) : (
                                            String(row[header]) || "-"
                                        )}
                                    </td>
                                ))}
                                {props.isAction && <td className="actions flex-grop-3">
                                    <ComIcon icon={ICONS.setting} badge={false} />
                                    <ComIcon icon={ICONS.mail} badge={false} />
                                    <ComIcon icon={ICONS.notification} badge={false} />
                                    {/* <FaEye className="view-icon" onClick={() => props.onView(row)} /> */}
                                    {/* <FaEdit className="edit-icon" onClick={() => props.onEdit(row)} /> */}
                                    {/* <FaTrash className="delete-icon" onClick={() => props.onDelete(row)} /> */}
                                </td>
                                }
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;