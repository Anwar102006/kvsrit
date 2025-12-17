import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Newspaper, ClipboardList, Briefcase, FileText, Calendar, ExternalLink, ChevronRight } from 'lucide-react'

const tabs = [
    { id: 'news', label: 'News & Events', icon: Newspaper },
    { id: 'exams', label: 'Examinations', icon: ClipboardList },
    { id: 'placements', label: 'Placements', icon: Briefcase },
    { id: 'circulars', label: 'Circulars', icon: FileText },
]

const newsData = {
    news: [
        { date: '2023-24', title: 'College Admission Application Form', link: '#' },
        { date: '17-06-2023', title: 'Fee Payment for College Account Number', link: '#' },
        { date: '07-12-2023', title: 'Student Transfer Information', link: '#' },
        { date: '25-03-2025', title: 'MCA MBA IV SEM REGISTRATION MARCH-2025', link: '#' },
        { date: '25-03-2025', title: 'MCA MBA IV SEM REGISTRATION MAY-2025', link: '#' },
    ],
    exams: [
        { date: '12-02-2024', title: 'EXTERNAL TIMETABLE FOR-I MBA/MCA I SEM(R-23) MAR-2024', link: '#' },
        { date: '03-02-2024', title: 'NOTIFICATION FOR-I MBA/MCA I SEM(R-23) MAR-2024', link: '#' },
        { date: '08-01-2024', title: 'NOTIFICATION FOR-I B TECH I SEM(R-23) FEB-2024', link: '#' },
        { date: '22-06-2020', title: 'MBA IV Semester Regular & Supply Exam 2020', link: '#' },
        { date: '18-06-2020', title: 'B.Tech IV Year II Semester R15 Exams 2020', link: '#' },
    ],
    placements: [
        { date: '28-01-2020', title: 'List of Gold Medalists for Batch 2015-2019', link: '#' },
        { date: '11-02-2020', title: 'B.Tech III Year I Sem R15 Results Released', link: '#' },
        { date: '30-01-2020', title: 'B.Tech IV Year I Sem R15 Results Released', link: '#' },
        { date: '2024', title: 'Campus Placement Drive - TCS', link: '#' },
        { date: '2024', title: 'Campus Placement Drive - Infosys', link: '#' },
    ],
    circulars: [
        { date: '25-03-2025', title: 'NOTIFICATION FOR PROJECT VIVO VOCE', link: '#' },
        { date: '25-03-2025', title: 'M. TECH. III SEM SUPPLY REGISTRATION', link: '#' },
        { date: '22-05-2020', title: 'JnanaBhumi Scholarships Ineligible List 2019-20', link: '#' },
        { date: '20-01-2020', title: 'M.Tech Academic Calendar 4th Sem (2018-19)', link: '#' },
        { date: '20-01-2020', title: 'B.Tech I Year II Semester Academic Calendar', link: '#' },
    ],
}

const NewsEvents = () => {
    const [activeTab, setActiveTab] = useState('news')
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, margin: '-100px' })

    return (
        <section id="events" className="py-20 bg-[var(--color-background)]">
            <div className="container mx-auto px-4 md:px-6" ref={containerRef}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="section-title title-underline inline-block">Latest Updates</h2>
                    <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto mt-6 text-lg text-center leading-relaxed">
                        Stay updated with the latest news, events, examination schedules, and important circulars.
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    {/* Tabs - Aligned with table */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="flex flex-wrap justify-center sm:justify-start gap-4 mb-6 px-1"
                    >
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-t-xl font-semibold text-sm md:text-base transition-all duration-200 border-t border-x border-b-0 ${activeTab === tab.id
                                    ? 'bg-white text-[var(--color-primary)] border-[var(--color-border)] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] translate-y-[1px] z-10'
                                    : 'bg-[var(--color-background)] text-[var(--color-text-secondary)] border-transparent hover:bg-[var(--color-surface)] opacity-70 hover:opacity-100'
                                    }`}
                            >
                                <tab.icon size={18} strokeWidth={2} />
                                <span>{tab.label}</span>
                            </button>
                        ))}
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-b-2xl rounded-tr-2xl rounded-tl-none border border-[var(--color-border)] overflow-hidden shadow-xl"
                            >
                                {/* Header with icon */}
                                <div className="bg-[var(--color-primary)] px-6 py-4 flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/0 via-white/10 to-black/0 opacity-30" />
                                    <h3 className="text-lg md:text-xl font-bold text-white flex items-center gap-3 font-['Outfit'] relative z-10 uppercase tracking-wider">
                                        <span className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                                            {(() => {
                                                const Icon = tabs.find((t) => t.id === activeTab)?.icon
                                                return Icon ? <Icon size={20} strokeWidth={2} /> : null
                                            })()}
                                        </span>
                                        {tabs.find((t) => t.id === activeTab)?.label}
                                    </h3>
                                </div>

                                {/* Items */}
                                <div className="divide-y divide-[var(--color-border)]">
                                    {newsData[activeTab].map((item, index) => (
                                        <motion.a
                                            key={index}
                                            href={item.link}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            className="flex flex-col md:flex-row items-center gap-4 md:gap-6 px-8 py-6 hover:bg-[var(--color-surface)] transition-all group"
                                        >
                                            {/* Date Badge */}
                                            <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
                                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg min-w-[160px] justify-center group-hover:border-[var(--color-primary-light)] transition-colors">
                                                    <Calendar size={16} className="text-[var(--color-primary)]" strokeWidth={2} />
                                                    <span className="text-sm font-bold text-[var(--color-text-secondary)] group-hover:text-[var(--color-primary)] transition-colors">
                                                        {item.date}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Title */}
                                            <p className="flex-grow text-[var(--color-text-primary)] text-lg font-medium text-center md:text-left leading-snug group-hover:text-[var(--color-primary)] transition-colors">
                                                {item.title}
                                            </p>

                                            {/* Link Icon */}
                                            <div className="flex-shrink-0 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                                                <ExternalLink
                                                    size={20}
                                                    strokeWidth={2}
                                                    className="text-[var(--color-primary)]"
                                                />
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>

                                {/* View More */}
                                <div className="px-8 py-5 bg-[var(--color-surface)] border-t border-[var(--color-border)] flex justify-center">
                                    <a
                                        href="#all-news"
                                        className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-primary)] hover:gap-3 transition-all uppercase tracking-wide"
                                    >
                                        View all {tabs.find((t) => t.id === activeTab)?.label}
                                        <ChevronRight size={16} strokeWidth={2} />
                                    </a>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div >
        </section >
    )
}

export default NewsEvents
