import React from 'react';

const TableProduct = () => {
    let arrPerson = [
        {nama: "Virgi", Pekerjaan: "Unicorn"},
        {nama: "Thomas", Pekerjaan: "Sensor parkir"},
        {nama: "Andre", Pekerjaan: "DJ"},
        {nama: "Yeko", Pekerjaan: "Supir"},
        {nama: "Daniel", Pekerjaan: "Support"},
    ]

    const renderTable = () => {
        return arrPerson.map((val, index) => {
            return (
                <tr>
                    <td> {index + 1} </td>
                    <td> {val.nama} </td>
                    <td> {val.Pekerjaan} </td>
                </tr>
            )
            
        })
    }

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th> No </th>
                    <th> Nama </th>
                    <th> Pekerjaan </th>
                </tr> 
                </thead>
                <tbody> {renderTable()} </tbody>
            </table>
        </div>
    )
}

export default TableProduct