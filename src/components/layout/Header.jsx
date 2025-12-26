import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone, Mail, Search, User } from 'lucide-react'

const navItems = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'About Us',
        href: '/about',
        children: [
            { label: 'About Us', href: '/about#about' },
            { label: 'Vision & Mission', href: '/about#vision' },
            { label: 'Affiliation & Accreditation', href: '/about#accreditation' },
            { label: 'Management', href: '/about#management' },
            { label: 'Principal', href: '/about#principal' },
            { label: 'Administration', href: '/about#administration' },
        ],
    },
    {
        label: 'Admissions',
        href: '/admissions',
        children: [
            { label: 'Admission Procedure', href: '/admissions#admission-procedure' },
            { label: 'Criteria for Admission', href: '/admissions#criteria' },
            { label: 'Programs Offered', href: '/admissions#programs' },
            { label: 'Fee Structure', href: '/admissions#fee' },
            { label: 'Scholarships', href: '/admissions#scholarships' },
        ],
    },
    {
        label: 'Academics',
        href: '/academics',
        children: [
            { label: 'Academic Calendar', href: '/academics#calendar' },
            { label: 'Regulations & Syllabus', href: '/academics#syllabus' },
            { label: 'Exam Cell', href: '/academics#exam' },
            { label: 'R&D Cell', href: '/academics#rnd' },
            { label: 'IQAC', href: '/academics#iqac' },
            { label: 'Policies', href: '/academics#policies' },
        ],
    },
    {
        label: 'Departments',
        href: '/#courses',
        children: [
            { label: 'Computer Science & Engineering', href: '/department/CSE' },
            { label: 'CSE (AI & ML)', href: '/department/CSEAIML' },
            { label: 'Electronics & Communication', href: '/department/ECE' },
            { label: 'Electrical & Electronics', href: '/department/EEE' },
            { label: 'Mechanical Engineering', href: '/department/MECH' },
            { label: 'Civil Engineering', href: '/department/CIVIL' },
            { label: 'MBA', href: '/department/MBA' },
            { label: 'MCA', href: '/department/MCA' },
        ],
    },
    {
        label: 'Placements',
        href: '/placements',
        children: [
            { label: 'About T&P', href: '/placements#tp' },
            { label: 'Placement Record', href: '/placements#record' },
            { label: 'Internships', href: '/placements#internships' },
            { label: 'News & Events', href: '/placements#events' },
        ],
    },
    {
        label: 'Campus Life',
        href: '/campus-life',
        children: [
            { label: 'Facilities', href: '/campus-life#facilities' },
            { label: 'Infrastructure', href: '/campus-life#infrastructure' },
            { label: 'Events', href: '/campus-life#events' },
            { label: 'Gallery', href: '/campus-life#gallery' },
        ],
    },
    {
        label: 'Contact',
        href: '/contact',
    },
]

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const searchInputRef = useRef(null)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Focus search input when opened
    useEffect(() => {
        if (isSearchOpen && searchInputRef.current) {
            searchInputRef.current.focus()
        }
    }, [isSearchOpen])

    // Close dropdowns on route change
    useEffect(() => {
        setActiveDropdown(null)
        setIsSearchOpen(false)
        setIsMobileMenuOpen(false)
    }, [location])

    const handleDropdownEnter = (index) => {
        setActiveDropdown(index)
    }

    const handleDropdownLeave = () => {
        setActiveDropdown(null)
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault()
        if (searchQuery.trim()) {
            // Handle search - can be expanded to actual search functionality
            console.log('Searching for:', searchQuery)
            setSearchQuery('')
            setIsSearchOpen(false)
        }
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50" role="banner">
            {/* Top Bar */}
            <div className="bg-[var(--color-primary-dark)] text-white py-2 hidden md:block">
                <div className="container mx-auto px-4 flex justify-between items-center text-sm">
                    <div className="flex items-center gap-8">
                        <a
                            href="tel:9704333789"
                            className="flex items-center gap-2 hover:text-[var(--color-accent-light)] transition-colors"
                            aria-label="Call us at 9704333789"
                        >
                            <Phone size={14} aria-hidden="true" />
                            <span>9704333789</span>
                        </a>
                        <a
                            href="mailto:drkvsr.principal@gmail.com"
                            className="flex items-center gap-2 hover:text-[var(--color-accent-light)] transition-colors"
                            aria-label="Email us at drkvsr.principal@gmail.com"
                        >
                            <Mail size={14} aria-hidden="true" />
                            <span>drkvsr.principal@gmail.com</span>
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="/#alumni" className="hover:text-[var(--color-accent-light)] transition-colors">Alumni</a>
                        <span className="text-[var(--color-primary-light)]" aria-hidden="true">|</span>
                        <a href="/#grievance" className="hover:text-[var(--color-accent-light)] transition-colors">Grievance Cell</a>
                        <span className="text-[var(--color-primary-light)]" aria-hidden="true">|</span>
                        <a href="/#mandatory" className="hover:text-[var(--color-accent-light)] transition-colors">Mandatory Disclosures</a>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <motion.nav
                className={`transition-all duration-300 ${isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-lg'
                    : 'bg-white/90 backdrop-blur-sm'
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                role="navigation"
                aria-label="Main navigation"
            >
                <div className="w-full">
                    <div className="flex items-center py-2 px-4 gap-4">
                        {/* Logo - Aligned to far left */}
                        <Link
                            to="/"
                            className="flex items-center gap-3 group flex-shrink-0"
                            aria-label="Dr. K.V. Subba Reddy Institute of Technology - Home"
                        >
                            <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                                <span className="text-white font-bold text-xl lg:text-2xl font-['Outfit']">K</span>
                            </div>
                            <div className="hidden sm:block">
                                <h1 className="text-base lg:text-lg font-bold text-[var(--color-text-primary)] leading-tight font-['Outfit'] mb-0">
                                    Dr. K.V. Subba Reddy
                                </h1>
                                <p className="text-xs lg:text-sm text-[var(--color-text-secondary)] mt-0">
                                    Institute of Technology
                                </p>
                            </div>
                        </Link>

                        {/* Desktop Navigation - Equally distributed across available space */}
                        <nav className="hidden lg:flex items-center justify-center flex-1 ml-8" aria-label="Primary">
                            <div className="flex items-center justify-center gap-8">
                                {/* Login Button - Grouped with nav items using gap */}
                                <Link
                                    to="/login"
                                    className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm 
                                        bg-[var(--color-primary-light)]/20 text-[var(--color-text-primary)] 
                                        hover:bg-[var(--color-primary)] hover:text-white hover:shadow-md
                                        transition-all duration-300 ease-in-out
                                        focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30
                                        flex-shrink-0"
                                    aria-label="Go to login page"
                                >
                                    <User size={18} aria-hidden="true" />
                                    <span>Login</span>
                                </Link>

                                {navItems.map((item, index) => (
                                    <div
                                        key={index}
                                        className="relative group flex justify-center"
                                        onMouseEnter={() => handleDropdownEnter(index)}
                                        onMouseLeave={handleDropdownLeave}
                                    >
                                        <Link
                                            to={item.href}
                                            className={`
                                                flex items-center gap-1.5 
                                                px-3 py-5
                                                text-sm font-medium rounded-lg 
                                                transition-all duration-300 ease-in-out
                                                relative
                                                ${activeDropdown === index
                                                    ? 'bg-[var(--color-primary)] text-white shadow-md'
                                                    : 'text-[var(--color-text-primary)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)]'
                                                }
                                            `}
                                            aria-expanded={item.children ? activeDropdown === index : undefined}
                                            aria-haspopup={item.children ? 'menu' : undefined}
                                        >
                                            <span className="relative z-10 whitespace-nowrap">{item.label}</span>
                                            {item.children && (
                                                <ChevronDown
                                                    size={14}
                                                    className={`transition-transform duration-300 ease-in-out relative z-10 ${activeDropdown === index ? 'rotate-180' : ''}`}
                                                    aria-hidden="true"
                                                />
                                            )}
                                        </Link>

                                        <AnimatePresence>
                                            {item.children && activeDropdown === index && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                                                    transition={{
                                                        duration: 0.3,
                                                        ease: [0.4, 0, 0.2, 1]
                                                    }}
                                                    className="
                                                        absolute top-full left-1/2 -translate-x-1/2
                                                        pt-2
                                                        min-w-[260px] 
                                                        w-max max-w-[320px]
                                                        z-[100]
                                                    "
                                                    role="menu"
                                                >
                                                    {/* Dropdown Arrow */}
                                                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-[var(--color-border)] transform rotate-45 z-10" />

                                                    <div className="relative bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2),0_4px_6px_-2px_rgba(0,0,0,0.1)] border border-[var(--color-border)] overflow-hidden py-2">
                                                        {item.children.map((child, childIndex) => (
                                                            <Link
                                                                key={childIndex}
                                                                to={child.href}
                                                                onClick={() => setActiveDropdown(null)}
                                                                className="
                                                                    block 
                                                                    px-4 py-3
                                                                    text-sm text-[var(--color-text-primary)]
                                                                    hover:bg-[var(--color-primary)]/5
                                                                    hover:text-[var(--color-primary)]
                                                                    hover:pl-5
                                                                    transition-all duration-300 ease-in-out
                                                                    border-l-2 border-transparent
                                                                    hover:border-l-[var(--color-primary)]
                                                                    focus:outline-none focus:bg-[var(--color-primary)]/5
                                                                    focus:text-[var(--color-primary)]
                                                                    focus:border-l-[var(--color-primary)]
                                                                    focus:ring-2 focus:ring-[var(--color-primary)]/20
                                                                    focus:ring-inset
                                                                "
                                                                role="menuitem"
                                                                tabIndex={0}
                                                            >
                                                                {child.label}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>
                        </nav>

                        {/* Search Button - Far Right */}
                        <div className="hidden lg:block relative flex-shrink-0">
                            <button
                                onClick={() => setIsSearchOpen(!isSearchOpen)}
                                className="
                                        p-2 rounded-lg 
                                        hover:bg-[var(--color-primary-light)]/20 
                                        transition-all duration-300 ease-in-out
                                        focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30
                                    "
                                aria-label={isSearchOpen ? 'Close search' : 'Open search'}
                                aria-expanded={isSearchOpen}
                                aria-controls="search-form"
                            >
                                {isSearchOpen ? (
                                    <X size={20} className="text-[var(--color-text-primary)] transition-transform duration-300" aria-hidden="true" />
                                ) : (
                                    <Search size={20} className="text-[var(--color-text-primary)] transition-transform duration-300" aria-hidden="true" />
                                )}
                            </button>

                            <AnimatePresence>
                                {isSearchOpen && (
                                    <motion.form
                                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            scale: 1
                                        }}
                                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                        transition={{
                                            duration: 0.2,
                                            ease: [0.4, 0, 0.2, 1]
                                        }}
                                        onSubmit={handleSearchSubmit}
                                        className="
                                                absolute right-0 top-[calc(100%+0.5rem)]
                                                w-[280px] sm:w-[320px]
                                                bg-white
                                                border border-[var(--color-border)]
                                                rounded-lg
                                                shadow-lg
                                                p-2
                                                z-[1001]
                                            "
                                        style={{
                                            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.06)'
                                        }}
                                    >
                                        <input
                                            ref={searchInputRef}
                                            type="search"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            placeholder="Search..."
                                            className="
                                                    w-full px-4 py-2.5 text-sm 
                                                    border border-[var(--color-border)] rounded-md
                                                    focus:outline-none 
                                                    focus:border-[var(--color-primary)] 
                                                    focus:ring-2 focus:ring-[var(--color-primary)]/20
                                                    bg-white
                                                    transition-all duration-200
                                                "
                                            aria-label="Search the website"
                                        />
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden p-2 rounded-lg hover:bg-[var(--color-primary-light)]/20 transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-menu"
                        >
                            {isMobileMenuOpen ? (
                                <X size={24} className="text-[var(--color-text-primary)]" aria-hidden="true" />
                            ) : (
                                <Menu size={24} className="text-[var(--color-text-primary)]" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        id="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-[var(--color-border)]"
                        role="navigation"
                        aria-label="Mobile navigation"
                    >
                        <div className="container mx-auto px-4 py-4 max-h-[70vh] overflow-y-auto">
                            {/* Mobile Login Button */}
                            <div className="mb-4 pb-4 border-b border-[var(--color-border)]">
                                <Link
                                    to="/login"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center justify-center gap-2 px-4 py-3 bg-[var(--color-primary)] rounded-lg text-sm font-medium text-white hover:bg-[var(--color-primary-dark)] transition-all shadow-md"
                                    aria-label="Go to login page"
                                >
                                    <User size={18} aria-hidden="true" />
                                    <span>Login</span>
                                </Link>
                            </div>

                            {/* Mobile Search */}
                            <form onSubmit={handleSearchSubmit} className="mb-4">
                                <div className="relative">
                                    <input
                                        type="search"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search..."
                                        className="w-full px-4 py-3 pl-10 text-sm border border-[var(--color-border)] rounded-lg focus:outline-none focus:border-[var(--color-primary)]"
                                        aria-label="Search the website"
                                    />
                                    <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" aria-hidden="true" />
                                </div>
                            </form>

                            {/* Mobile Navigation Links */}
                            {navItems.map((item, index) => (
                                <div key={index} className="border-b border-[var(--color-border)] last:border-0">
                                    <Link
                                        to={item.href}
                                        className="block py-3 text-[var(--color-text-primary)] font-medium"
                                        onClick={() => !item.children && setIsMobileMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                    {item.children && (
                                        <div className="pl-4 pb-2">
                                            {item.children.map((child, childIndex) => (
                                                <Link
                                                    key={childIndex}
                                                    to={child.href}
                                                    className="block py-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header >
    )
}

export default Header
