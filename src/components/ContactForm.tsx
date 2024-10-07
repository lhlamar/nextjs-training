'use client';

import { useState } from "react";

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
        <div>
            <h1 className="text-center text-5xl">
                Contact Me
            </h1>

            {!isSubmitted ? (
                <form className="flex flex-col w-96 space-y-2" onSubmit={handleSubmit}>
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
                    <div className="flex flex-col m-auto space-y-3 py-3">
                        <button type="submit" className="text-xl w-56 font-bold hover:bg-foreground hover:text-background text-foreground bg-darker p-2 rounded-md transition-colors duration-300">
                            Send
                        </button>
                        {/* Moved Reset button into the same container */}
                        <button
                            type="button"
                            onClick={handleResetForm}
                            className="text-xl w-56 font-bold hover:bg-foreground hover:text-background text-foreground bg-darker p-2 rounded-md transition-colors duration-300">
                            Reset
                        </button>
                    </div>
                </form>
            ) : (
                <div className="text-center py-5">
                    <p className="text-2xl font-semibold">{responseMessage}</p>
                    {/* Centered Reset button when form is submitted */}
                    <div className="flex flex-col m-auto space-y-3 py-3">
                        <button
                            type="button"
                            onClick={handleResetForm}
                            className="text-xl w-56 font-bold hover:bg-foreground hover:text-background text-foreground bg-darker p-2 rounded-md transition-colors duration-300">
                            Reset Form
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
