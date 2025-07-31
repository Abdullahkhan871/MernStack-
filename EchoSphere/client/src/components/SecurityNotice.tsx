import React from 'react'

const SecurityNotice: React.FC = () => {
    return (
        <div className="bg-yellow-50 border-b border-yellow-200 p-3">
            <div className="flex items-center justify-center space-x-2 text-sm text-yellow-800">
                <span>🔒</span>
                <span>Messages are end-to-end encrypted. No one outside of this chat, not even WhatsApp can read or listen to them click to learn more.</span>
            </div>
        </div>
    )
}

export default SecurityNotice