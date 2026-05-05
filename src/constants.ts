import { 
  Beaker, 
  Battery, 
  Cpu, 
  FlaskConical, 
  FileText, 
  GraduationCap, 
  Users, 
  Image as ImageIcon,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronRight,
  Award
} from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'Professor', id: 'professor' },
  { label: 'Research', id: 'research' },
  { label: 'Publications', id: 'publications' },
  { label: 'Our Team', id: 'team' },
  { label: 'Instruments', id: 'instruments' },
  { label: 'Activity', id: 'activity' },
];

export const PROFESSOR_INFO = {
  name: '張恕豪 助理教授',
  nameEn: 'Shu-Hao Chang',
  title: 'Assistant Professor',
  affiliation: '中原大學化學工程學系',
  lab: '奈米材料與元件實驗室 (工學714)',
  office: '工422',
  email: 'changsh@cycu.edu.tw',
  officePhone: '03-2654137',
  labPhone: '03-2654157',
  education: [
    '國立清華大學 化工系 博士',
    '國立成功大學 化工系 學士'
  ],
  experience: [
    { year: '2019–2020', role: 'Applied Materials (CTO Office)', location: '美國加州矽谷' },
    { year: '2016–2019', role: '友達光電 / ARC 研發中心 高級工程師', location: '' },
    { year: '2013–2014', role: '美國密西根大學 化工系 訪問學者', location: '' }
  ],
  expertise: [
    '奈米材料合成與鑑定',
    '金屬氧化物／硫化物開發',
    '生質碳與仿生材料開發'
  ],
  researchAreas: [
    '電池電極材料開發 (LIB, LSB, SIB, ZIB)',
    '壓力感測器元件',
    '光催化材料開發'
  ]
};

export const RESEARCH_CATEGORIES = [
  {
    id: 'nanomaterials',
    title: 'Nanomaterials',
    titleZh: '奈米材料',
    description: '奈米材料合成與結構控制，包括 monomers → nuclei → nanocrystals 成長機制。',
    details: [
      '奈米材料合成與結構控制',
      '成長機制研究 (Monomers → Nuclei → Nanocrystals)',
      '多孔與自組裝材料 (Breath Figure)',
      '奈米結構設計與功能材料特性化'
    ],
    image: 'https://images.unsplash.com/photo-1532187875605-1ef6c016b148?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'battery',
    title: 'Battery',
    titleZh: '電池研究',
    description: '鋰離子電池、鋰硫電池等次世代電池技術開發。',
    details: [
      '鋰離子電池 (LIB) 與鋰硫電池 (LSB)',
      '鈉離子電池 (SIB) 與鋅離子電池 (ZIB)',
      '金屬氧化物與硫化物電極材料',
      '能量儲存機制探討與性能提升'
    ],
    image: 'https://images.unsplash.com/photo-1548142381-125027829875?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sensors',
    title: 'Pressure Sensors',
    titleZh: '壓力感測器',
    description: '柔性壓力感測器開發，應用於穿戴式電子產品。',
    details: [
      '壓阻式柔性壓力感測器',
      'PANI / PDMS / 仿生材料開發',
      '穿戴式感測器 (穿戴鞋墊、手指感測)',
      '人體動作與壓力偵測系統整合'
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'others',
    title: 'Others',
    titleZh: '其他研究',
    description: '光催化、環境處理及半導體功能材料。',
    details: [
      '光催化材料開發',
      '環境污染處理 (水處理、空氣淨化)',
      '半導體與功能材料介面工程',
      '多領域跨界應用 (能源 / 環境 / 元件)'
    ],
    image: 'https://images.unsplash.com/photo-1581093458791-9f3c32dcab89?auto=format&fit=crop&q=80&w=800'
  }
];

export const PUBLICATIONS = {
  journals: [
    { 
      authors: 'Dai, Jianan et al.', 
      year: 2024, 
      title: 'Regulating the electronic structure to construct root-soil-like S-scheme BiVO4/Nd-TiO2 heterojunction for visible degradation and hydrogen evolution', 
      journal: 'Separation and Purification Technology', 
      page: '129037' 
    },
    { 
      authors: 'Dai, Jianan et al.', 
      year: 2024, 
      title: 'Interface engineering of Ti3C2 MXene assisted anatase/rutile TiO2 heterostructure for photocatalytic tetracycline removal and H2 production', 
      journal: 'Journal of Water Process Engineering', 
      page: '64, 105649' 
    },
    { 
      authors: 'Chang, Shu-Hao* et al.', 
      year: 2024, 
      title: 'Elevating piezoresistive pressure sensor performance with biomimetic PDMS and plasma treatment', 
      journal: 'SSRN', 
      page: '' 
    },
    { 
      authors: 'Duan, Yinli et al.', 
      year: 2023, 
      title: 'Highly efficient hydrogen generation via In2O3(ZnO)4 photocatalyst', 
      journal: 'Separation and Purification Technology', 
      page: '319' 
    },
    { 
      authors: 'Wang, Yu-Shun et al.', 
      year: 2023, 
      title: 'Breath figure fabricated porous CoS materials for lithium-sulfur battery cathode', 
      journal: 'Chemical Engineering Journal (cover article)', 
      page: '' 
    },
    { 
      authors: 'Chang, Shu-Hao et al.', 
      year: '2013–2016', 
      title: 'Series of nanomaterials and photovoltaic device publications including ACS Nano, Energy & Environmental Science, Nanoscale, RSC Advances', 
      journal: '', 
      page: '' 
    }
  ],
  conferences: [
    { 
      authors: 'Chang, Shu-Hao* et al.', 
      year: 2024, 
      title: 'Lithophilic silver nanowires for dendrite suppression in lithium metal batteries', 
      venue: 'ACEPS-12' 
    },
    { 
      authors: 'Chang, Shu-Hao* et al.', 
      year: 2024, 
      title: 'Breath figure derived porous nanostructures for lithium-sulfur batteries', 
      venue: 'MRS Spring Meeting' 
    },
    { 
      authors: 'Chen, Po-Yu et al.', 
      year: 2023, 
      title: 'Next-generation electrodes for battery stability enhancement', 
      venue: 'TwIChE' 
    },
    { 
      authors: 'Tsai, Yi-Jing et al.', 
      year: 2023, 
      title: 'Porous cobalt sulfide as polysulfide absorber in lithium-sulfur batteries', 
      venue: 'TACT Conference' 
    },
    { 
      authors: 'Chu, Yung-Hsun et al.', 
      year: 2023, 
      title: 'Biomass-derived carbon for lithium-sulfur batteries', 
      venue: 'Carbon Materials Conference' 
    }
  ],
  patents: [
    { id: 'I742728', title: 'Memory device and data access method', year: 2021, region: 'Taiwan' },
    { id: 'I734452', title: 'Memory device and writing method', year: 2021, region: 'Taiwan' },
    { id: 'I692077', title: 'Semiconductor substrate and fabrication method', year: 2020, region: 'Taiwan' },
    { id: 'I662594', title: 'Flexible substrate and circuit structure fabrication method', year: 2019, region: 'Taiwan' },
    { id: 'I396782', title: 'Method for preparing granular nanocomposites', year: 2013, region: 'Taiwan' }
  ]
};

export const INSTRUMENTS = [
  { name: 'Electrospinning system', url: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=600' },
  { name: 'Electrochemical workstation', url: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=600' },
  { name: 'Tube furnace', url: 'https://images.unsplash.com/photo-1596496356943-43cc82314544?auto=format&fit=crop&q=80&w=600' },
  { name: 'UV-Vis spectrometer', url: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&q=80&w=600' },
  { name: 'Vapor doping system', url: 'https://images.unsplash.com/photo-1581093196867-9ec9f9797771?auto=format&fit=crop&q=80&w=600' }
];

export const ACTIVITIES = [
  { date: '2026/01', title: 'Lab Annual Dinner', url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800' },
  { date: '2025/12', title: 'Seminar Presentation', url: 'https://images.unsplash.com/photo-1475721027785-f74dea93575b?auto=format&fit=crop&q=80&w=800' },
  { date: '2025/10', title: 'Conference Participation', url: 'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=800' }
];

export const TEAM = {
  members: [
    { name: '現任研究生 A', status: 'Master Student' },
    { name: '現任研究生 B', status: 'Master Student' },
    { name: '現任研究生 C', status: 'Master Student' }
  ],
  alumni: [
    { name: '畢業研究生 X', year: 2024 },
    { name: '畢業研究生 Y', year: 2023 }
  ]
};
