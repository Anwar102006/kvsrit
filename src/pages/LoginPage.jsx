import { motion } from 'framer-motion'
import { GraduationCap, Users, Briefcase, ArrowRight, Lock, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    const loginOptions = [
        {
            id: 'student',
            title: 'Student Login',
            description: 'Access your student portal, grades, and course materials',
            icon: GraduationCap,
            color: 'from-blue-500 to-blue-600',
            hoverColor: 'hover:from-blue-600 hover:to-blue-700',
            bgLight: 'bg-blue-50',
            textColor: 'text-blue-600',
            link: '/student-login'
        },
        {
            id: 'faculty',
            title: 'Faculty Login',
            description: 'Manage courses, attendance, and student records',
            icon: Users,
            color: 'from-purple-500 to-purple-600',
            hoverColor: 'hover:from-purple-600 hover:to-purple-700',
            bgLight: 'bg-purple-50',
            textColor: 'text-purple-600',
            link: '/faculty-login'
        },
        {
            id: 'management',
            title: 'Management Login',
            description: 'Administrative access and institutional management',
            icon: Briefcase,
            color: 'from-emerald-500 to-emerald-600',
            hoverColor: 'hover:from-emerald-600 hover:to-emerald-700',
            bgLight: 'bg-emerald-50',
            textColor: 'text-emerald-600',
            link: '/management-login'
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-32 pb-20 px-4">
            <div className="container mx-auto max-w-6xl">
                {/* Page Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] mb-6 shadow-lg">
                        <Lock className="text-white" size={36} />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-4 font-['Outfit']">
                        Login Portal
                    </h1>
                    <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                        Select your role to access the appropriate portal
                    </p>
                </motion.div>

                {/* Login Options Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
                >
                    {loginOptions.map((option) => {
                        const Icon = option.icon
                        return (
                            <motion.div
                                key={option.id}
                                variants={itemVariants}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group"
                            >
                                <Link
                                    to={option.link}
                                    className="block h-full"
                                    aria-label={`Login as ${option.title}`}
                                >
                                    <div className="relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                                        {/* Decorative gradient background */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${option.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                                        {/* Content */}
                                        <div className="relative p-8 flex flex-col items-center text-center h-full">
                                            {/* Icon */}
                                            <div className={`w-20 h-20 rounded-2xl ${option.bgLight} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-md`}>
                                                <Icon className={option.textColor} size={40} strokeWidth={1.5} />
                                            </div>

                                            {/* Title */}
                                            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-3 font-['Outfit']">
                                                {option.title}
                                            </h2>

                                            {/* Description */}
                                            <p className="text-[var(--color-text-secondary)] mb-6 flex-grow">
                                                {option.description}
                                            </p>

                                            {/* CTA Button */}
                                            <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${option.color} ${option.hoverColor} text-white font-semibold shadow-md group-hover:shadow-xl transition-all duration-300`}>
                                                <span>Access Portal</span>
                                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                                            </div>
                                        </div>

                                        {/* Decorative corner accent */}
                                        <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${option.color} opacity-10 rounded-bl-full`} />
                                    </div>
                                </Link>
                            </motion.div>
                        )
                    })}
                </motion.div>

                {/* Divider */}
                <div className="relative my-12">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50 text-sm text-[var(--color-text-muted)]">
                            Need Help?
                        </span>
                    </div>
                </div>

                {/* Help Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="bg-white rounded-2xl shadow-md p-8 border border-gray-100"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Contact Support */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                                <Mail className="text-blue-600" size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">
                                    Forgot Password?
                                </h3>
                                <p className="text-sm text-[var(--color-text-secondary)] mb-2">
                                    Contact your respective department or IT support for password reset assistance.
                                </p>
                                <a
                                    href="mailto:drkvsr.principal@gmail.com"
                                    className="text-sm text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] font-medium inline-flex items-center gap-1 group"
                                >
                                    Email Support
                                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>

                        {/* First Time Login */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0">
                                <Lock className="text-purple-600" size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">
                                    First Time Login?
                                </h3>
                                <p className="text-sm text-[var(--color-text-secondary)] mb-2">
                                    New students and faculty members will receive login credentials via email after registration.
                                </p>
                                <Link
                                    to="/contact"
                                    className="text-sm text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] font-medium inline-flex items-center gap-1 group"
                                >
                                    Contact Us
                                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Back to Home */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="text-center mt-12"
                >
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors group"
                    >
                        <ArrowRight size={18} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
                        <span>Back to Home</span>
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}

export default LoginPage
