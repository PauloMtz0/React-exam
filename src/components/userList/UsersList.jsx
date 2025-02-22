import React from 'react'

const UsersList = ({users}) => {
    return (
        <div>
            <h1>Lista de Usuarios</h1>
            <table>
                <thead>
                    <tr>
                        <th>nombre</th>
                        <th>email</th>
                        <th>Apellido</th>
                    </tr>
                </thead>
                <tbody>
                {users.map((usuario) => (
                
                <tr key={usuario.id}>
                    <td>{usuario.name}</td>
                    <td>{usuario.email}</td>
                    <td>{usuario.last_name}</td>
                </tr>   
                ))}
                </tbody>
            </table>
        </div >
    );
};

export default UsersList
