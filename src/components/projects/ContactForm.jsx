import React, { useState, useRef, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiPhone, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { CursorContext } from '../../context/CursorContext'; // 2. Import the CursorContext

const ContactForm = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [formStatus, setFormStatus] = useState('idle'); // 'idle', 'sending', 'success', 'error'
    // 3. Get the function to change the cursor's variant
    const { setCursorVariant } = useContext(CursorContext);

    // 4. Create the event handlers
    const handleMouseEnter = () => setCursorVariant('link');
    const handleMouseLeave = () => setCursorVariant('default');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = "Name is required.";
        if (!formData.email) {
            tempErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Email is not valid.";
        }
        if (!formData.message) tempErrors.message = "Message is required.";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        setFormStatus('sending');

        emailjs.send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            formData,
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        ).then((result) => {
            console.log(result.text);
            setFormStatus('success');
            setFormData({ name: '', email: '', message: '' }); // Clear form
        }, (error) => {
            console.log(error.text);
            setFormStatus('error');
        });
    };

    // Animation Variants
    const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
    const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } };

    return (
        <motion.div
            className="container mx-auto px-4 py-8 sm:px-6 lg:px-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            // 5. Apply handlers to each individual link as well
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-center text-slate-900 dark:text-white mb-4">Get In Touch</motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-center text-slate-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
                Have a project in mind? Let's connect! I’d love to hear from you.
            </motion.p>

            {/* NEW: Wrapper to center the content and control its max-width */}
            <div className="max-w-5xl mx-auto">
                {/* NEW: Info cards are now in a horizontal row above the form */}
                <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                    <div className="flex items-start gap-4 p-6 rounded-lg bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 backdrop-blur-sm">
                        <div className="shrink-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-purple-900/50 flex items-center justify-center">
                            <FiMail className="text-blue-600 dark:text-purple-300 text-2xl" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Email</h3>
                            <a href="mailto:hadiuzzaman.bappy@example.com" className="text-blue-600 dark:text-purple-400 font-medium hover:underline break-all">
                                hbappy79@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-6 rounded-lg bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 backdrop-blur-sm">
                        <div className="shrink-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-purple-900/50 flex items-center justify-center">
                            <FiPhone className="text-blue-600 dark:text-purple-300 text-2xl" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Phone</h3>
                            <a href="tel:+1234567890" className="text-blue-600 dark:text-purple-400 font-medium">(+880) 1521-318670</a>
                        </div>
                    </div>
                </motion.div>

                {/* Form is now below the info cards, taking up the full width of the centered container */}
                <motion.form ref={formRef} onSubmit={handleSubmit} variants={itemVariants} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className={`form-input ${errors.name ? 'border-red-500' : ''}`} />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>
                        <div>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className={`form-input ${errors.email ? 'border-red-500' : ''}`} />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>
                    </div>
                    <div>
                        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows="6" className={`form-input ${errors.message ? 'border-red-500' : ''}`}></textarea>
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>
                    <div className="flex items-center gap-4">
                        <button type="submit" disabled={formStatus === 'sending'}
                            // 5. Apply handlers to each individual link as well
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            className="w-full px-6 py-3 bg-purple-700 text-white font-semibold rounded-full shadow-lg hover:bg-purple-800 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50 disabled:scale-100">
                            {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>
                    </div>
                    <AnimatePresence>
                        {formStatus === 'success' && (
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="flex items-center gap-2 p-3 rounded-lg bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-700">
                                <FiCheckCircle /> Message sent successfully!
                            </motion.div>
                        )}
                        {formStatus === 'error' && (
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="flex items-center gap-2 p-3 rounded-lg bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-700">
                                <FiAlertCircle /> Oops! Something went wrong. Please try again.
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.form>
            </div>
        </motion.div>
    );
};

export default ContactForm;