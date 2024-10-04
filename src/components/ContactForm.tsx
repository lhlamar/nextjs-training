export default function ContactForm() {
    return(
        <form className="flex flex-col w-96 space-y-2">
            <label htmlFor="name">Name</label>
            <input id="name" className="bg-darker placeholder:text-foreground placeholder:text-lg rounded-md p-3" placeholder="Name"></input>
            <label htmlFor="emails">Email</label>
            <input id="email" className="bg-darker placeholder:text-foreground placeholder:text-lg rounded-md p-3" placeholder="Email@example.com"></input>
            <label htmlFor="message">Message</label>
            <textarea id="message" className="bg-darker placeholder:text-foreground placeholder:text-lg rounded-md p-3" placeholder="Message.."></textarea>
            <div className="flex flex-col m-auto space-y-3 py-3">
                <button type="submit" className="text-xl w-56 font-bold hover:bg-foreground hover:text-background text-foreground bg-darker p-2 rounded-md transition-colors duration-300">Save</button>
                <button type="reset" className="text-xl w-56 font-bold hover:bg-foreground hover:text-background text-foreground bg-darker p-2 rounded-md transition-colors duration-300">Reset</button>
            </div>
        </form>

    );
}