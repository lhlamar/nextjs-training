'use client';

import { useState } from "react";
import { CheckIcon } from '@heroicons/react/solid';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/sendMessage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (res.ok) {
                const data = await res.json();
                setResponseMessage(data.status);
                setIsSubmitted(true);
            } else {
                setResponseMessage('Failed to send');
            }
        } catch (error) {
            setResponseMessage(`An error occurred: ${error}`);
        }
    };

    const handleResetForm = () => {
        setName('');
        setEmail('');
        setMessage('');
        setResponseMessage('');
        setIsSubmitted(false);
    };

    return (
        <div className="relative w-96 m-auto">
            <h1 className="text-center text-5xl mb-5">
                Contact Me
            </h1>
    
            <div className="flex flex-col w-full space-y-2">
                <form onSubmit={handleSubmit}>
                    {/* Relative container to limit the "Sent" overlay area */}
                    <div className="relative">
                        {/* Input container that will blur when submitted */}
                        <div id="inputContainer" className={`flex flex-col w-full ${isSubmitted ? 'blur-sm' : 'blur-none'}`}>
                            <div className="w-full flex flex-col">
                                <label htmlFor="name">Name:</label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="bg-darker placeholder:text-foreground placeholder:text-lg rounded-md p-3"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="emails">Email:</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Email@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-darker placeholder:text-foreground placeholder:text-lg rounded-md p-3"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="message">Message:</label>
                                <textarea
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="bg-darker placeholder:text-foreground placeholder:text-lg rounded-md p-3"
                                    placeholder="Message.."
                                />
                            </div>
                        </div>
    
                        {/* "Sent" overlay positioned absolutely within this container */}
                        {isSubmitted && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="flex flex-row bg-background p-6 rounded-md border-emerald-600 border-2">
                                    <h1 className="text-foreground text-4xl font-bold">
                                        Sent
                                    </h1>
                                    <CheckIcon className="h-auto w-10 text-emerald-500"></CheckIcon>
                                </div>
                            </div>
                        )}
                    </div>
    
                    <div className="flex flex-col space-y-3 py-3">
                        {!isSubmitted && (
                            <button type="submit" className="text-xl w-56 mx-auto font-bold hover:bg-foreground hover:text-background text-foreground bg-darker p-2 rounded-md transition-colors duration-300">
                                Send
                            </button>
                        )}
                        <button
                            type="button"
                            onClick={handleResetForm}
                            className="text-xl w-56 mx-auto font-bold hover:bg-foreground hover:text-background text-foreground bg-darker p-2 rounded-md transition-colors duration-300">
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
    
}
