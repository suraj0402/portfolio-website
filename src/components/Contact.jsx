function Contact() {
    return (
        <section
            id="contact"
            className="bg-slate-900 text-white py-20"
        >
            <div className="max-w-2xl mx-auto px-8">

                <h2 className="text-5xl font-bold text-center mb-12">
                    Contact Me
                </h2>

                <p className="text-center text-slate-400 text-xl mb-12">
                    Interested in working together or discussing opportunities?
                    Feel free to reach out.
                </p>

                <div className="bg-slate-800 p-10 rounded-3xl">

                    <form className="space-y-6">

                        <input
                            type="text"
                            placeholder="Your Name"
                            className="
                                w-full
                                p-5
                                rounded-xl
                                bg-slate-700
                                text-white
                                outline-none
                            "
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            className="
                                w-full
                                p-5
                                rounded-xl
                                bg-slate-700
                                text-white
                                outline-none
                            "
                        />

                        <textarea
                            rows="6"
                            placeholder="Your Message"
                            className="
                                w-full
                                p-5
                                rounded-xl
                                bg-slate-700
                                text-white
                                outline-none
                            "
                        />

                        <button
                            type="submit"
                            className="
                                bg-blue-500
                                hover:bg-blue-600
                                px-8
                                py-4
                                rounded-xl
                                text-lg
                                transition
                            "
                        >
                            Send Message
                        </button>

                    </form>

                </div>

            </div>
        </section>
    );
}

export default Contact;