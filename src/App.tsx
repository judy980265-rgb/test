import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Routes, Route, Link, NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
import { 
  NAV_LINKS, 
  PROFESSOR_INFO, 
  RESEARCH_CATEGORIES, 
  PUBLICATIONS, 
  INSTRUMENTS, 
  ACTIVITIES, 
  TEAM 
} from './constants';
import { 
  FileText, 
  GraduationCap, 
  FlaskConical, 
  Users, 
  ImageIcon, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  ChevronRight,
  Database,
  Search,
  BookOpen,
  Award,
  Menu,
  X,
  Home as HomeIcon,
  Activity as ActivityIcon
} from 'lucide-react';

// --- Utility Components ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary-900">{title}</h2>
    {subtitle && <p className="text-lg text-primary-600 font-medium">{subtitle}</p>}
    <div className="w-20 h-1 bg-primary-600 mx-auto mt-4 rounded-full" />
  </div>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-2xl shadow-sm border border-slate-100 p-6 overscroll-none hover:shadow-md transition-shadow duration-300 ${className}`}>
    {children}
  </div>
);

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
    className="pt-24 pb-20 min-h-screen"
  >
    {children}
  </motion.div>
);

// --- Pages ---

const Home = () => {
  const navigate = useNavigate();
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-slate-900">
      <div className="absolute inset-0 opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=2000" 
          alt="Lab Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/50" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="inline-block px-4 py-1 bg-primary-600/20 text-primary-400 rounded-full text-sm font-bold border border-primary-600/30 mb-6">
            中原大學 化學工程學系
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter">
            張恕豪實驗室
          </h1>
          <h2 className="text-3xl md:text-4xl font-light text-slate-300 mb-8 font-sans">
            Shu-Hao Chang Research Group
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="h-20 w-1 bg-primary-600 rounded-full hidden md:block" />
            <div>
              <p className="text-xl md:text-2xl text-slate-300 font-medium mb-12 max-w-2xl leading-relaxed">
                奈米材料與元件實驗室致力於<span className="text-white font-bold">奈米結構設計</span>、<span className="text-white font-bold">儲能技術</span>及<span className="text-white font-bold">感測元件</span>的創新研發。
              </p>
              <button 
                onClick={() => navigate('/research')}
                className="group px-8 py-4 bg-primary-600 text-white rounded-full font-bold text-lg hover:bg-primary-700 transition-all flex items-center gap-2 shadow-xl shadow-primary-600/20"
              >
                Explore Research Areas
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProfessorPage = () => (
  <PageWrapper>
    <div className="container mx-auto px-6">
      <SectionTitle title="Professor" subtitle="張恕豪 助理教授" />
      <div className="grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-4">
          <Card className="p-0 overflow-hidden sticky top-28">
            <div className="aspect-[3/4] bg-slate-200">
               <img 
                src="https://images.unsplash.com/photo-1594824813573-231f439d733e?auto=format&fit=crop&q=80&w=600" 
                alt="Professor Shu-Hao Chang" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-primary-900">{PROFESSOR_INFO.name}</h3>
              <p className="text-lg text-primary-600 mb-6">{PROFESSOR_INFO.nameEn}</p>
              
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-primary-600 shrink-0" />
                  <a href={`mailto:${PROFESSOR_INFO.email}`} className="hover:text-primary-600">{PROFESSOR_INFO.email}</a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-primary-600 shrink-0" />
                  <span>Office: {PROFESSOR_INFO.officePhone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-primary-600 shrink-0" />
                  <span>Lab: {PROFESSOR_INFO.labPhone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-primary-600 shrink-0" />
                  <span>{PROFESSOR_INFO.office} / {PROFESSOR_INFO.lab}</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="md:col-span-8 space-y-12">
          <div>
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
              <GraduationCap className="text-primary-600" />
              教育背景 Education
            </h4>
            <ul className="list-disc list-inside space-y-2 text-slate-600">
              {PROFESSOR_INFO.education.map((edu, idx) => <li key={idx}>{edu}</li>)}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
              <ActivityIcon className="text-primary-600" />
              專業經歷 Experience
            </h4>
            <div className="space-y-4">
              {PROFESSOR_INFO.experience.map((exp, idx) => (
                <div key={idx} className="flex gap-4">
                  <span className="font-bold text-primary-600 w-24 shrink-0">{exp.year}</span>
                  <div>
                    <p className="font-medium text-slate-900">{exp.role}</p>
                    {exp.location && <p className="text-sm text-slate-500">{exp.location}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Search className="text-primary-600" />
                研究專長 Expertise
              </h4>
              <ul className="space-y-2 text-slate-600">
                {PROFESSOR_INFO.expertise.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <ChevronRight size={16} className="mt-1 text-primary-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Database className="text-primary-600" />
                研究領域 Areas
              </h4>
              <ul className="space-y-2 text-slate-600">
                {PROFESSOR_INFO.researchAreas.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <ChevronRight size={16} className="mt-1 text-primary-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageWrapper>
);

const ResearchPage = () => {
  const navigate = useNavigate();
  return (
    <PageWrapper>
      <div className="container mx-auto px-6">
        <SectionTitle title="Research" subtitle="重點研究領域" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESEARCH_CATEGORIES.map((cat) => (
            <motion.div
              key={cat.id}
              whileHover={{ y: -8 }}
              onClick={() => navigate(`/research/${cat.id}`)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-primary-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium border border-white px-4 py-2 rounded-full">Explore</span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-primary-900 mb-1">{cat.title}</h3>
                <p className="text-sm text-primary-600 font-medium mb-3">{cat.titleZh}</p>
                <p className="text-slate-600 text-sm line-clamp-3">{cat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

const ResearchDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const cat = RESEARCH_CATEGORIES.find(c => c.id === id);

  if (!cat) return <div className="pt-40 text-center">Category not found</div>;

  return (
    <PageWrapper>
      <div className="container mx-auto px-6">
        <button 
          onClick={() => navigate('/research')}
          className="mb-8 flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all"
        >
          ← Back to Research
        </button>
        
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-4xl font-bold text-primary-900 mb-2">{cat.title}</h3>
              <p className="text-xl text-primary-600 font-medium mb-8">{cat.titleZh}</p>
              
              <ul className="space-y-6">
                {cat.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border-l-4 border-primary-600">
                    <span className="mt-1 bg-primary-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold shrink-0">{idx + 1}</span>
                    <span className="text-lg text-slate-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-video md:aspect-square">
              <img src={cat.image} className="w-full h-full object-cover shadow-inner" alt={cat.title} />
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

const PublicationsPage = () => {
  const [activeTab, setActiveTab] = useState<'journal' | 'conference' | 'patent'>('journal');

  return (
    <PageWrapper>
      <div className="container mx-auto px-6">
        <SectionTitle title="Publications" subtitle="研究成果" />
        
        <div className="text-center mb-12">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 px-6 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full text-sm font-semibold transition-colors"
          >
            <BookOpen size={18} />
            See more on Google Citations
            <ExternalLink size={14} />
          </a>
        </div>

        <div className="flex justify-center mb-12 flex-wrap gap-4">
          {(['journal', 'conference', 'patent'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full text-lg font-bold transition-all ${
                activeTab === tab 
                  ? 'bg-primary-600 text-white shadow-lg scale-105' 
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200 shadow-sm'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              {activeTab === 'journal' && PUBLICATIONS.journals.map((pub, idx) => (
                <div key={idx} className="flex gap-6 p-6 border-b border-slate-100 last:border-0 hover:bg-slate-50 rounded-2xl transition-colors">
                  <div className="shrink-0 w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 font-bold">
                    {idx + 1}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary-600 mb-1 uppercase tracking-wider">{pub.year}</p>
                    <h5 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{pub.title}</h5>
                    <p className="text-slate-600 italic">
                      <span className="font-semibold text-slate-800 not-italic">{pub.authors} </span>
                      {pub.journal} {pub.page && `, ${pub.page}`}
                    </p>
                  </div>
                </div>
              ))}

              {activeTab === 'conference' && PUBLICATIONS.conferences.map((pub, idx) => (
                <div key={idx} className="flex gap-6 p-6 border-b border-slate-100 last:border-0 hover:bg-slate-50 rounded-2xl transition-colors">
                   <div className="shrink-0 w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 font-bold">
                    {idx + 1}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary-600 mb-1 uppercase tracking-wider">{pub.year}</p>
                    <h5 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{pub.title}</h5>
                    <p className="text-slate-600 font-semibold">{pub.authors}</p>
                    <p className="text-slate-500 font-medium">{pub.venue}</p>
                  </div>
                </div>
              ))}

              {activeTab === 'patent' && PUBLICATIONS.patents.map((pat, idx) => (
                <div key={idx} className="flex gap-6 p-6 border-b border-slate-100 last:border-0 hover:bg-slate-50 rounded-2xl transition-colors items-center">
                  <div className="shrink-0 w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 font-bold text-xs p-2 text-center text-balance">
                    {pat.id}
                  </div>
                  <div className="flex-1">
                    <h5 className="text-lg font-bold text-slate-900 mb-1 leading-tight">{pat.title}</h5>
                    <p className="text-sm text-slate-500">{pat.region}, {pat.year}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </PageWrapper>
  );
};

const TeamPage = () => (
  <PageWrapper>
    <div className="container mx-auto px-6 text-center">
      <SectionTitle title="Our Team" subtitle="團隊成員與校友" />
      
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center justify-center gap-2">
            <Users className="text-primary-600" />
            Members
          </h3>
          <div className="space-y-4 text-left">
            {TEAM.members.map((member, idx) => (
              <Card key={idx} className="flex items-center justify-between p-4 px-6">
                <span className="font-bold text-slate-800">{member.name}</span>
                <span className="text-sm text-primary-600 font-medium px-3 py-1 bg-primary-50 rounded-full">{member.status}</span>
              </Card>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center justify-center gap-2">
            <GraduationCap className="text-primary-600" />
            Alumni
          </h3>
          <div className="space-y-4 text-left">
            {TEAM.alumni.map((alum, idx) => (
              <Card key={idx} className="flex items-center justify-between p-4 px-6">
                <span className="font-bold text-slate-800">{alum.name}</span>
                <span className="text-sm text-slate-500 font-medium">{alum.year} Graduate</span>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  </PageWrapper>
);

const InstrumentsPage = () => (
  <PageWrapper>
    <div className="container mx-auto px-6">
      <SectionTitle title="Instruments" subtitle="實驗室儀器設備" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {INSTRUMENTS.map((inst, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-slate-100 shadow-sm"
          >
            <img 
              src={inst.url} 
              alt={inst.name} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-primary-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 text-center">
              <span className="text-white font-bold text-lg">{inst.name}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </PageWrapper>
);

const ActivityPage = () => (
  <PageWrapper>
    <div className="container mx-auto px-6">
      <SectionTitle title="Activity" subtitle="實驗室近況與活動紀錄" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ACTIVITIES.map((act, idx) => (
          <div key={idx} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            <div className="relative overflow-hidden rounded-xl aspect-[16/10] mb-4">
              <img 
                src={act.url} 
                alt={act.title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <p className="text-sm font-bold text-primary-600 mb-1">{act.date}</p>
            <h4 className="text-lg font-bold text-slate-900">{act.title}</h4>
          </div>
        ))}
      </div>
    </div>
  </PageWrapper>
);

// --- Layout Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled || !isHome ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold">SH</div>
          <div className="flex flex-col">
            <span className={`font-bold leading-none ${scrolled || !isHome ? 'text-primary-900' : 'text-white'}`}>張恕豪實驗室</span>
            <span className={`text-[10px] font-medium leading-none mt-1 opacity-70 ${scrolled || !isHome ? 'text-primary-600' : 'text-primary-100'}`}>SHU-HAO CHANG LAB</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <NavLink
              key={link.id}
              to={link.id === 'home' ? '/' : `/${link.id}`}
              className={({ isActive }) => `text-sm font-bold transition-colors uppercase tracking-wider hover:text-primary-600 ${
                isActive 
                  ? 'text-primary-600' 
                  : (scrolled || !isHome ? 'text-primary-900' : 'text-white/90')
              }`}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <button 
          className={`lg:hidden ${scrolled || !isHome ? 'text-primary-900' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {NAV_LINKS.map(link => (
                <NavLink
                  key={link.id}
                  to={link.id === 'home' ? '/' : `/${link.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) => `text-left font-bold py-2 border-b border-slate-50 last:border-0 ${
                    isActive ? 'text-primary-600' : 'text-primary-900'
                  }`}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 py-16">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold">SH</div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-white leading-none">張恕豪實驗室</span>
              <span className="text-[10px] font-medium leading-none mt-1 text-slate-500 uppercase tracking-wider">Shu-Hao Chang Lab</span>
            </div>
          </div>
          <p className="text-lg max-w-md mb-8">
            中原大學化學工程學系<br />
            奈米材料與元件實驗室 (工學714)
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
          <ul className="space-y-4">
            {NAV_LINKS.map(link => (
              <li key={link.id}>
                <Link to={link.id === 'home' ? '/' : `/${link.id}`} className="hover:text-primary-500 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Info</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Mail size={18} className="text-primary-600 shrink-0 mt-1" />
              <span>{PROFESSOR_INFO.email}</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={18} className="text-primary-600 shrink-0 mt-1" />
              <span>{PROFESSOR_INFO.officePhone} (Office)</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-primary-600 shrink-0 mt-1" />
              <span>{PROFESSOR_INFO.affiliation}<br />桃園市中壢區中北路200號</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p>© {new Date().getFullYear()} Shu-Hao Chang Research Group. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="https://www.cycu.edu.tw/" target="_blank" className="hover:text-white transition-colors" rel="noreferrer">CYCU</a>
          <a href="https://che.cycu.edu.tw/" target="_blank" className="hover:text-white transition-colors" rel="noreferrer">CYCU Chemical Engineering</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-primary-100 selection:text-primary-900">
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/professor" element={<ProfessorPage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/research/:id" element={<ResearchDetail />} />
            <Route path="/publications" element={<PublicationsPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/instruments" element={<InstrumentsPage />} />
            <Route path="/activity" element={<ActivityPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
