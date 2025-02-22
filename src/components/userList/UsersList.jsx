import React, { useState } from 'react';
import useUsers from '../hooks/useUsers'; 

const UsersList = () => {
    const { users } = useUsers(); // Obtiene los usuarios del hook
    const [search, setSearch] = useState('');

    const filteredUsers = users.filter((usuario) =>
        usuario.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <h1>Lista de Usuarios</h1>
            <input
                type="text"
                placeholder="Buscar por nombre..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Apellido</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map((usuario) => (
                        <tr key={usuario.id}>
                            <td>{usuario.name}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.last_name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersList;
