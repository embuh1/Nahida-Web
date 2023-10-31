import React, { useState } from 'react';

function SettingsPage() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        notification: 'on',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lakukan sesuatu dengan data pengaturan yang disimpan dalam formData
    }

    
    return (
        <div className="container">
            <h1>Pengaturan Akun</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Nama Pengguna:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Nama Pengguna Anda"
                    required
                    value={formData.username}
                    onChange={handleChange}
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Alamat Email Anda"
                    required
                    value={formData.email}
                    onChange={handleChange}
                />

                <label htmlFor="notification">Notifikasi:</label>
                <select
                    id="notification"
                    name="notification"
                    value={formData.notification}
                    onChange={handleChange}
                >
                    <option value="on">Aktif</option>
                    <option value="off">Nonaktif</option>
                </select>

                <button type="submit">Simpan Pengaturan</button>
            </form>
        </div>
    );
}

export default SettingsPage;
