import React, { useState } from 'react';
import { Search, Phone, Video, MoreVertical, Paperclip, Mic, Send, Smile } from 'lucide-react';
import VoiceNote from "./VoiceNote";
import SecurityNotice from './SecurityNotice';
import illustration from "../assets/Illustration.png"
import Image from './Image';

interface Contact {
    id: string;
    name: string;
    avatar: string;
    lastMessage: string;
    time: string;
    unreadCount?: number;
    isOnline?: boolean;
    isPinned?: boolean;
}

interface Message {
    id: string;
    text?: string;
    time: string;
    isSent: boolean;
    isRead?: boolean;
    images?: string[];
    audio?: { duration: string };
}

const WhatsAppClone: React.FC = () => {
    const [selectedContact, setSelectedContact] = useState<string>('');
    const [message, setMessage] = useState('');
    const [activeTab, setActiveTab] = useState<string>('favourites');

    const contacts: Contact[] = [
        {
            id: 'cody-fisher',
            name: 'Cody Fisher',
            avatar: '/api/placeholder/40/40',
            lastMessage: 'Haha oh man',
            time: '05:14 pm',
            isPinned: true
        },
        {
            id: 'jane-cooper',
            name: 'Jane Cooper',
            avatar: '/api/placeholder/40/40',
            lastMessage: 'Haha that\'s terrifying 😅',
            time: '07:38 am',
            isOnline: true
        },
        {
            id: 'floyd-miles',
            name: 'Floyd Miles',
            avatar: '/api/placeholder/40/40',
            lastMessage: 'perfect!',
            time: '11:49 pm',
            unreadCount: 5
        },
        {
            id: 'marvin-mckinney',
            name: 'Marvin McKinney',
            avatar: '/api/placeholder/40/40',
            lastMessage: 'omg, this is amazing...',
            time: '07:40 am',
            unreadCount: 1
        },
        {
            id: 'courtney-henry',
            name: 'Courtney Henry',
            avatar: '/api/placeholder/40/40',
            lastMessage: 'aww',
            time: '08:20 pm',
            unreadCount: 1
        },
        {
            id: 'dianne-russell',
            name: 'Dianne Russell',
            avatar: '/api/placeholder/40/40',
            lastMessage: 'I\'ll be there in 2 mins',
            time: '2m ago'
        }
    ];

    const messages: Message[] = [
        {
            id: '1',
            images: [
                'https://picsum.photos/200/300',
                'https://picsum.photos/200/300',
                'https://picsum.photos/200/300',
                'https://picsum.photos/200/300',
                'https://picsum.photos/200/300',
                'https://picsum.photos/200/300',
                'https://picsum.photos/200/300',
            ],
            time: '3 days ago',
            isSent: false
        },
        {
            id: '2',
            text: 'Here are some photos, you were asking about. 😊',
            time: '3 days ago',
            isSent: false
        },
        {
            id: '3',
            audio: { duration: '01:15' },
            time: '3 days ago',
            isSent: false
        },
        {
            id: '4',
            text: 'Thanks a lot man! btw love the pictures',
            time: '3 days ago',
            isSent: true,
            isRead: true
        }
    ];

    const currentContact = contacts.find(c => c.id === selectedContact);

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
                {/* Header */}
                <div className="p-4 border-b border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                <div className="w-6 h-6 bg-white rounded-full"></div>
                            </div>
                            <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                                <div className="w-6 h-6 bg-teal-500 rounded-full"></div>
                            </div>
                        </div>
                        <MoreVertical className="w-5 h-5 text-gray-500" />
                    </div>

                    {/* Search */}
                    <div className="relative">
                        <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search or start a new chat"
                            className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-gray-200">
                    {(['favourites', 'friends', 'groups',] as const).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex-1 py-3 px-4 text-sm font-medium capitalize ${activeTab === tab
                                ? 'text-teal-600 border-b-2 border-teal-600 bg-teal-50'
                                : 'text-gray-600 hover:text-gray-800'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Contacts List */}
                <div className="flex-1 overflow-y-auto">
                    {contacts.map((contact) => (
                        <div
                            key={contact.id}
                            onClick={() => setSelectedContact(contact.id)}
                            className={`flex items-center p-4 hover:bg-gray-50 cursor-pointer ${selectedContact === contact.id ? 'bg-green-50' : ''
                                }`}
                        >
                            <div className="relative">
                                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                                    <span className="text-sm font-medium text-gray-600">
                                        {contact.name.split(' ').map(n => n[0]).join('')}
                                    </span>
                                </div>
                                {contact.isOnline && (
                                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                                )}
                            </div>

                            <div className="ml-3 flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm font-medium text-gray-900 truncate">
                                        {contact.name}
                                    </h3>
                                    <span className="text-xs text-gray-500">{contact.time}</span>
                                </div>
                                <p className="text-sm text-gray-500 truncate">{contact.lastMessage}</p>
                            </div>

                            <div className="ml-2 flex flex-col items-end space-y-1">
                                {contact.isPinned && (
                                    <div className="w-4 h-4 text-gray-400">📌</div>
                                )}
                                {contact.unreadCount && (
                                    <div className="bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                        {contact.unreadCount}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
                {currentContact ? (
                    <>
                        {/* Chat Header */}


                        {/* Security Notice */}
                        <SecurityNotice />

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.isSent ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-xs lg:max-w-md ${msg.isSent ? 'order-2' : 'order-1'}`}>
                                        <div
                                            className={`px-4 py-2 rounded-lg ${msg.isSent
                                                ? 'bg-green-500 text-white'
                                                : 'bg-white text-gray-900'
                                                }`}
                                        >
                                            {msg?.images && (
                                                <div className="grid grid-cols-2 gap-1 mb-2">
                                                    <Image msg={msg?.images} />
                                                </div>
                                            )}

                                            {msg.audio && (
                                                <div className="flex items-center space-x-2 py-1">
                                                    <VoiceNote />
                                                </div>
                                            )}

                                            {msg.text && <p className="text-sm">{msg.text} ---- ok</p>}
                                            <div className={`flex items-center justify-end mt-1 space-x-1 ${msg.isSent ? 'text-green-100' : 'text-gray-500'
                                                }`}>
                                                <span className="text-xs">{msg.time}</span>
                                                {msg.isSent && (
                                                    <div className="flex">
                                                        <div className="w-3 h-3">
                                                            <svg viewBox="0 0 16 15" className="fill-current">
                                                                <path d="M10.91 3.316l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" />
                                                            </svg>
                                                        </div>
                                                        {msg.isRead && (
                                                            <div className="w-3 h-3 -ml-1">
                                                                <svg viewBox="0 0 16 15" className="fill-current bg-green-500">
                                                                    <path d="M10.91 3.316l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" />
                                                                </svg>
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Message Input */}
                        <div className="bg-white border-t border-gray-200 p-4">
                            <div className="flex items-center space-x-3">
                                <button className="p-2 hover:bg-gray-100 rounded-full">
                                    <Smile className="w-5 h-5 text-gray-600" />
                                </button>
                                <button className="p-2 hover:bg-gray-100 rounded-full">
                                    <Paperclip className="w-5 h-5 text-gray-600" />
                                </button>

                                <div className="flex-1 relative">
                                    <input
                                        type="text"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Say Something..."
                                        className="w-full px-4 py-2 bg-gray-50 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div>

                                {message.trim() ? (
                                    <button className="p-2 bg-green-500 hover:bg-green-600 rounded-full">
                                        <Send className="w-5 h-5 text-white" />
                                    </button>
                                ) : (
                                    <button className="p-2 hover:bg-gray-100 rounded-full">
                                        <Mic className="w-5 h-5 text-gray-600" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex-1 flex items-center justify-center bg-gray-50">
                        <div className="text-center">
                            <img className="w-64 h-64 bg-gray-200 rounded-full mx-auto mb-8" src={illustration} />
                            <h2 className="text-2xl font-medium text-gray-900 mb-2">Welcome to WhatsApp</h2>
                            <p className="text-gray-600">Select a chat to start messaging</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WhatsAppClone;