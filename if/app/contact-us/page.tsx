'use client';
import { Select } from "@/components/select";
import { axios } from "@/utils/axios";
import { useState } from "react";
import Bg from "../../assets/bg.jpg";

const REASONS = [
    { label: 'I want to get in touch with you', value: 'I want to get in touch with you' },
];

export default function Contact() {
    const [formData, setFormData] = useState({
        fullNames: '',
        email: '',
        message: '',
        reason: '',
        phoneNumber: '',
    });

    const [formErrors, setFormErrors] = useState<any>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [submissionError, setSubmissionError] = useState<string | null>(null);

    const validateForm = () => {
        const errors: Record<string, string> = {};
        if (!formData.fullNames) {
            errors.fullName = 'Full name is required';
        }
        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }
        if (!formData.message) {
            errors.message = 'Message is required';
        }
        return errors;
    };

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const errors = validateForm();
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            setIsLoading(true);
            try {
                const response = await axios.post('/contact-us', {
                    ...formData
                });

                const result = await response.data
                console.log(result);

                if (result.success) {
                    setIsSubmitted(true);
                    setFormData({
                        fullNames: '',
                        email: '',
                        message: '',
                        reason: '',
                        phoneNumber: ""
                    });
                    setSubmissionError(null);  // Reset error
                } else {
                    setSubmissionError('Failed to send message. Please try again.');
                }
            } catch (error) {
                setSubmissionError('An error occurred while sending your message.');
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <div>
            <div className="relative">
                <img
                    src={Bg.src}
                    alt="About Us Hero"
                    className="w-full h-[200px] md:h-[300px] object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center px-4 md:pl-[150px]">
                    <p className="text-primary text-[12px] md:text-[15px] font-[700] opacity-0">
                        WHAT IF RWANDA
                    </p>
                    <h1 className="text-white text-[36px] md:text-[64px] font-bold py-2">
                        Get Involved
                    </h1>
                    <p className="text-white mt-2 text-[14px] md:text-[16px]">
                        Learn more about the organisation and its actions, donate, sponsor, just do what you can to spread love.
                    </p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row p-4 lg:p-8 my-12 lg:px-[150px]">
                <div className="lg:w-1/2 p-4">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Send us a message</h2>
                    <p className="text-secondary mb-8">We'd love to hear from you!</p>

                    {/* Success message */}
                    {isSubmitted && (
                        <div className="p-4 mb-4 text-green-800 bg-green-100 rounded-md">
                            Your message has been sent successfully!
                        </div>
                    )}

                    {/* Error message */}
                    {submissionError && (
                        <div className="p-4 mb-4 text-red-800 bg-red-100 rounded-md">
                            {submissionError}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Full Name */}
                        <div>
                            <label className="block text-[14px] md:text-[16px] font-[400] text-black" htmlFor="fullName">
                                Full name
                            </label>
                            <input
                                type="text"
                                id="fullNames"
                                name="fullNames"
                                placeholder="John Doe"
                                className={`mt-1 p-3 block w-full rounded-md border-1 border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm ${formErrors?.fullName ? 'border-red-500' : ''}`}
                                onChange={handleChange}
                                value={formData.fullNames}
                            />
                            {formErrors?.fullName && <p className="text-red-500 text-sm">{formErrors?.fullName}</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-[14px] md:text-[16px] font-[400] text-black" htmlFor="email">
                                Email address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="johndoe@example.com"
                                className={`mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm ${formErrors?.email ? 'border-red-500' : ''}`}
                                onChange={handleChange}
                                value={formData.email}
                            />
                            {formErrors?.email && <p className="text-red-500 text-sm">{formErrors?.email}</p>}
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label className="block text-[14px] md:text-[16px] font-[400] text-black" htmlFor="phoneNumber">
                                Phone number
                            </label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                name="phoneNumber"
                                placeholder="+250"
                                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                                onChange={handleChange}
                                value={formData.phoneNumber}
                            />
                        </div>

                        {/* Reason */}
                        <div>
                            <label className="block text-[14px] md:text-[16px] font-[400] text-black" htmlFor="reason">
                                Reason
                            </label>
                            <Select
                                options={REASONS}
                                value={formData.reason}
                                setValue={(v) => setFormData({ ...formData, reason: v })}
                                placeholder="Kindly select your reason"
                            />
                            {formErrors?.reason && <p className="text-red-500 text-sm">{formErrors?.reason}</p>}
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-[14px] md:text-[16px] font-[400] text-black" htmlFor="message">
                                Your message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                placeholder="Tell us what you think"
                                className={`mt-1 p-3 block w-full rounded-md border-secondary shadow-sm focus:ring-primary focus:border-primary sm:text-sm ${formErrors?.message ? 'border-red-500' : ''}`}
                                onChange={handleChange}
                                value={formData.message}
                            />
                            {formErrors?.message && <p className="text-red-500 text-sm">{formErrors?.message}</p>}
                        </div>

                        {/* Submit button */}
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-md font-medium rounded-md shadow-sm text-white bg-primary hover:bg-white hover:text-primary hover:border-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Submitting...' : 'Submit'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
