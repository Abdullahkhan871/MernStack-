import React from 'react'

interface HeaderValue {
    currentContact
}


const Header: React.FC<HeaderValue> = () => {
    return (
        <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
                <div className="relative">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-gray-600">
                            {currentContact.name.split(' ').map(n => n[0]).join('')}
                        </span>
                    </div>
                    {currentContact.isOnline && (
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                </div>
                <div>
                    <h2 className="font-medium text-gray-900">{currentContact.name}</h2>
                    {currentContact.isOnline && (
                        <p className="text-sm text-green-500">Online</p>
                    )}
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Phone className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Video className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Search className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                    <MoreVertical className="w-5 h-5 text-gray-600" />
                </button>
            </div>
        </div>
    )
}

export default Header