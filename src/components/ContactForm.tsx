'use client';

import { useState } from "react";
import { CheckIcon } from '@heroicons/react/solid';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form";
import * as z from "zod";
import { contactFormSchema } from "../zod_schema/contactForm";

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
    });
    type ContactFormData = z.infer<typeof contactFormSchema>;

    const onSubmit: SubmitHandler<ContactFormData> = async(data) => {
        try {
            const res = await fetch('/api/sendMessage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                const responseData = await res.json();
                setResponseMessage(responseData.status);
                setIsSubmitted(true);
            } else {
                setResponseMessage('Failed to Send');
            }
        }
        catch (error) {
            setResponseMessage(`An error occurred: ${error}`);
        }
    };

    const handleResetForm = () => {
        reset();
        setName('');
        setEmail('');
        setMessage('');
        setResponseMessage('');
        setIsSubmitted(false);
    };

    return (
        <div className="w-96 min-h-screen">
            <h1 className="text-center text-5xl mb-5">
                Contact Me
            </h1>
    
            <div className="flex flex-col w-full space-y-2">
                <form onSubmit={handleSubmit(onSubmit)}>
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
                                    {...register("name")}
                                    onChange={(e) => setName(e.target.value)}
                                    className="bg-darker placeholder:text-foreground placeholder:text-lg rounded-md p-3"
                                />
                                {errors.name && <p className="text-red-500">{typeof errors.name?.message === 'string' ? errors.name.message : ''}</p>}
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="emails">Email:</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Email@example.com"
                                    value={email}
                                    {...register("email")}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-darker placeholder:text-foreground placeholder:text-lg rounded-md p-3"
                                />
                                {errors.email && <p className="text-red-500">{typeof errors.email?.message === 'string' ? errors.email.message: ''}</p>}
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="message">Message:</label>
                                <textarea
                                    id="message"
                                    value={message}
                                    {...register("message")}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="bg-darker placeholder:text-foreground placeholder:text-lg rounded-md p-3"
                                    placeholder="Message.."
                                />
                                {errors.message && <p className="text-red-500">{typeof errors.message?.message === 'string' ? errors.message.message: ''}</p>}
                            </div>
                        </div>
    
                        {/* "Sent" overlay positioned absolutely within this container */}
                        {isSubmitted && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="flex flex-row bg-background p-6 rounded-md border-emerald-600 border-2">
                                    <h1 className="text-foreground text-4xl font-bold">
                                        {responseMessage}
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
