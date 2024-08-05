import React, { useState } from 'react';
import { TextField, Button, FormControlLabel, Checkbox } from '@mui/material';
import CloseButton from '../../components/CloseButton';

const SettingsPage = () => {
    const [profile, setProfile] = useState({
        username: 'JohnDoe',
        email: 'john.doe@example.com',
    });
    const [notifications, setNotifications] = useState({
        emailNotifications: true,
        smsNotifications: false,
    });

    const handleProfileChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleNotificationsChange = (e) => {
        const { name, checked } = e.target;
        setNotifications({ ...notifications, [name]: checked });
    };

    const handleSave = () => {
        
        console.log('Profile:', profile);
        console.log('Notifications:', notifications);
    };

    return (
        <div className="settings-page" style={{ padding: '20px' }}>
            <CloseButton />
            <h1>Settings</h1>
            <section className="profile-settings" style={{ marginBottom: '20px' }}>
                <h2>Profile Settings</h2>
                <TextField
                    label="Username"
                    name="username"
                    value={profile.username}
                    onChange={handleProfileChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={profile.email}
                    onChange={handleProfileChange}
                    fullWidth
                    margin="normal"
                />
            </section>

            <section className="notification-settings" style={{ marginBottom: '20px' }}>
                <h2>Notification Settings</h2>
                <FormControlLabel
                    control={
                        <Checkbox
                            name="emailNotifications"
                            checked={notifications.emailNotifications}
                            onChange={handleNotificationsChange}
                        />
                    }
                    label="Email Notifications"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="smsNotifications"
                            checked={notifications.smsNotifications}
                            onChange={handleNotificationsChange}
                        />
                    }
                    label="SMS Notifications"
                />
            </section>

            <section className="account-settings">
                <h2>Account Settings</h2>
                <Button variant="contained" color="primary" onClick={handleSave}>
                    Save Changes
                </Button>
            </section>
        </div>
    );
};

export default SettingsPage;
