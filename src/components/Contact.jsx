import { useState } from "react";
import axios from "axios";

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);

        try {

            await axios.post(
                // "https://portfolio-backend-8bsg.onrender.com/contact",
                "http://localhost:8080/contact",
                formData
            );

            alert("Message sent successfully");

            setFormData({
                name: "",
                email: "",
                message: ""
            });

        } catch (error) {

            console.error(error);

            alert("Failed to send message");
        }

        setLoading(false);
    };

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

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
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
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            required
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
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            required
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
                            disabled={loading}
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
                            {loading
                                ? "Sending..."
                                : "Send Message"}
                        </button>

                    </form>

                </div>

            </div>
        </section>
    );
}

export default Contact;