import React from 'react';

const Settings = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>

      <div className="grid grid-cols-3 gap-8">
        {/* SYSTEM */}
        <div className="space-y-4">
          <h3 className="font-semibold">SYSTEM</h3>
          <ul>
            <li>
              <p className="text-sm text-gray-600">Security</p>
              <p className="text-xs text-gray-500">Manage passwords, set up two-factor authentication, and monitor account automation.</p>
            </li>
            <li>
              <p className="text-sm text-gray-600">Documents</p>
              <p className="text-xs text-gray-500">View your document automation merge fields.</p>
            </li>
          </ul>
        </div>

        {/* PERSONAL */}
        <div className="space-y-4">
          <h3 className="font-semibold">PERSONAL</h3>
          <ul>
            <li>
              <p className="text-sm text-gray-600">Profile</p>
              <p className="text-xs text-gray-500">Update your profile information, personal performance settings, and email aliases.</p>
            </li>
            <li>
              <p className="text-sm text-gray-600">LexiQ Mobile App</p>
              <p className="text-xs text-gray-500">Download LexiQ Mobile. Manage your device authorization and notifications.</p>
            </li>
            <li>
              <p className="text-sm text-gray-600">Text Snippets</p>
              <p className="text-xs text-gray-500">Manage your text snippets library.</p>
            </li>
          </ul>
        </div>

        {/* LexiQ SETTINGS */}
        <div className="space-y-4">
          <h3 className="font-semibold">LexiQ SETTINGS</h3>
          <ul>
            <li>
              <p className="text-sm text-gray-600">Firm Preferences</p>
              <p className="text-xs text-gray-500">Set up your practice areas.</p>
            </li>
            <li>
              <p className="text-sm text-gray-600">Billing</p>
              <p className="text-xs text-gray-500">Edit your bill settings, themes, payment profiles, and cost recording options.</p>
            </li>
            <li>
              <p className="text-sm text-gray-600">Text Messaging</p>
              <p className="text-xs text-gray-500">Manage text messaging from LexiQ, including text notifications for calendar events.</p>
            </li>
            <li>
              <p className="text-sm text-gray-600">E-Filing</p>
              <p className="text-xs text-gray-500">Activate e-filing for your firm and file your documents right from LexiQ.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Settings;
