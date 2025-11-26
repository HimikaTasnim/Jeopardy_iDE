// questionsData.js
const questions = [
  // ================= Category 1 =================
  {
    id: "0-1",
    category: "Market Systems & Livelihood Goals",
    points: 100,
    q: "What is the primary aim of the B4CA project?",
    correct: "To develop a sustainable, climate-resilient bamboo sector that enhances livelihoods.",
    options: [
      "To increase rice production in Cox’s Bazar.",
      "To develop a sustainable, climate-resilient bamboo sector that enhances livelihoods.",
      "To promote tourism in the region.",
      "To establish new textile industries."
    ],
    explanation: "Reinforces project goals and livelihood focus. This aligns with the project’s goal to foster a sustainable bamboo sector that improves livelihoods."
  },
  {
    id: "0-2",
    category: "Market Systems & Livelihood Goals",
    points: 200,
    q: "Define Systemic Change in the context of the bamboo market system.",
    correct: "A transformational shift in how market actors, enablers, and support services interact to sustain inclusive growth.",
    options: [
      "A small improvement in one part of the system.",
      "A temporary change affecting one stakeholder.",
      "A transformational shift in how market actors, enablers, and support services interact to sustain inclusive growth.",
      "An increase in product output."
    ],
    explanation: "Highlights systemic perspective. Systemic change refers to deep, transformational shifts in market dynamics and stakeholder interactions."
  },
  {
    id: "0-3",
    category: "Market Systems & Livelihood Goals",
    points: 300,
    q: "Name two principles of Market Systems Development emphasized in B4CA.",
    correct: "Systems thinking and systemic change.",
    options: [
      "Product standardization and mass production.",
      "Systems thinking and systemic change.",
      "Monopoly creation and price fixing.",
      "Top-down control and direct subsidies."
    ],
    explanation: "Core MSD principles guiding interventions. These MSD principles guide holistic, systemic interventions for sustainable development."
  },
  {
    id: "0-4",
    category: "Market Systems & Livelihood Goals",
    points: 400,
    q: "How do value flows differ from product flows in a market system?",
    correct: "Product flows refer to physical goods, value flows relate to money and value distribution among actors.",
    options: [
      "Product flows refer to physical goods, value flows relate to money and value distribution among actors.",
      "They are the same; both mean the movement of raw materials.",
      "Product flows are faster than value flows.",
      "Value flows only occur at the end of the supply chain."
    ],
    explanation: "Clarifies key dynamics in value chains. Product flows involve physical movement, while income (value) flows refer to monetary transactions."
  },
  {
    id: "0-5",
    category: "Market Systems & Livelihood Goals",
    points: 500,
    q: "Give an example of an enabler in the bamboo sector and its role.",
    correct: "A financial institution providing affordable loans to bamboo SMEs to expand operations.",
    options: [
      "A local market stall selling bamboo crafts.",
      "A financial institution providing affordable loans to bamboo SMEs to expand operations.",
      "A community festival showcasing bamboo products.",
      "An awareness campaign about bamboo benefits."
    ],
    explanation: "Demonstrates enabling environment factors. Enablers like financial institutions provide critical support that facilitates sector growth."
  },

  // ================= Category 2 =================
  {
    id: "1-1",
    category: "Climate Change & Environmental Context",
    points: 100,
    q: "Why is bamboo considered a climate-resilient resource?",
    correct: "It grows quickly, regenerates after harvesting, and sequesters high amounts of carbon.",
    options: [
      "It requires chemical fertilizers.",
      "It grows quickly, regenerates after harvesting, and sequesters high amounts of carbon.",
      "It needs very little sunlight.",
      "It only grows in deserts."
    ],
    explanation: "Links bamboo to climate resilience. Bamboo’s regenerative capacity and carbon sequestration make it vital for adaptation and mitigation."
  },
  {
    id: "1-2",
    category: "Climate Change & Environmental Context",
    points: 200,
    q: "What environmental challenge in Cox’s Bazar does bamboo help address?",
    correct: "Deforestation caused by firewood demand and shelter construction.",
    options: [
      "Desertification.",
      "Deforestation caused by firewood demand and shelter construction.",
      "Melting glaciers.",
      "Urban air pollution."
    ],
    explanation: "Relates local problem to bamboo. Bamboo provides a renewable alternative to reduce deforestation pressures."
  },
  {
    id: "1-3",
    category: "Climate Change & Environmental Context",
    points: 300,
    q: "How does bamboo contribute to climate change mitigation?",
    correct: "By absorbing more CO2 than many tree species and providing sustainable alternatives to timber.",
    options: [
      "By increasing soil erosion.",
      "By absorbing more CO2 than many tree species and providing sustainable alternatives to timber.",
      "By replacing plastic with metal.",
      "By reducing rainfall."
    ],
    explanation: "Connects bamboo to mitigation benefits. Bamboo reduces carbon emissions through sequestration and sustainable substitution."
  },
  {
    id: "1-4",
    category: "Climate Change & Environmental Context",
    points: 400,
    q: "What role does bamboo play in disaster resilience?",
    correct: "It provides strong, flexible materials for resilient housing and stabilizes soil against erosion.",
    options: [
      "It provides strong, flexible materials for resilient housing and stabilizes soil against erosion.",
      "It attracts tourists.",
      "It generates electricity.",
      "It removes salt from water."
    ],
    explanation: "Relates to resilience-building. Bamboo supports structural resilience and reduces disaster vulnerability."
  },
  {
    id: "1-5",
    category: "Climate Change & Environmental Context",
    points: 500,
    q: "Why is ecosystem restoration important for bamboo sector development?",
    correct: "Healthy ecosystems ensure sustainable bamboo growth, biodiversity, and long-term sector viability.",
    options: [
      "Because it reduces tourism.",
      "Healthy ecosystems ensure sustainable bamboo growth, biodiversity, and long-term sector viability.",
      "Because it lowers crop yields.",
      "It increases pesticide usage."
    ],
    explanation: "Links ecology with sector sustainability. Ecosystem restoration safeguards bamboo resources for future use."
  },

  // ================= Category 3 =================
  {
    id: "2-1",
    category: "Gender & Social Inclusion",
    points: 100,
    q: "Why is gender inclusion important in the bamboo value chain?",
    correct: "It ensures women and marginalized groups benefit equally from sector opportunities.",
    options: [
      "Because women should only do handicrafts.",
      "It ensures women and marginalized groups benefit equally from sector opportunities.",
      "It decreases productivity.",
      "It discourages youth involvement."
    ],
    explanation: "Stresses equity in sector development. Inclusive participation enhances fairness and sector sustainability."
  },
  {
    id: "2-2",
    category: "Gender & Social Inclusion",
    points: 200,
    q: "What role can women play in bamboo enterprises?",
    correct: "They can lead production, design, and marketing of bamboo products.",
    options: [
      "Only collecting bamboo.",
      "They can lead production, design, and marketing of bamboo products.",
      "Exclusively manual labor.",
      "They should avoid entrepreneurship."
    ],
    explanation: "Highlights women's entrepreneurial potential. Women’s active roles in enterprises strengthen household income and innovation."
  },
  {
    id: "2-3",
    category: "Gender & Social Inclusion",
    points: 300,
    q: "How does social inclusion strengthen bamboo market systems?",
    correct: "By engaging diverse actors, creating broader ownership and resilience.",
    options: [
      "By limiting participation.",
      "By engaging diverse actors, creating broader ownership and resilience.",
      "By excluding refugees.",
      "By focusing only on men."
    ],
    explanation: "Diversity makes systems stronger. Inclusive systems are more adaptive, resilient, and equitable."
  },
  {
    id: "2-4",
    category: "Gender & Social Inclusion",
    points: 400,
    q: "Give an example of a barrier women face in the bamboo sector.",
    correct: "Limited access to finance and training opportunities.",
    options: [
      "Excessive free time.",
      "Limited access to finance and training opportunities.",
      "Too much ownership of land.",
      "Overrepresentation in leadership."
    ],
    explanation: "Identifies systemic barriers. Women’s participation is restricted by lack of capital and knowledge access."
  },
  {
    id: "2-5",
    category: "Gender & Social Inclusion",
    points: 500,
    q: "What is one benefit of including refugees in bamboo market development?",
    correct: "It reduces aid dependency and fosters self-reliance.",
    options: [
      "It reduces aid dependency and fosters self-reliance.",
      "It creates social tension.",
      "It decreases employment.",
      "It harms host communities."
    ],
    explanation: "Shows refugee inclusion benefit. Participation fosters dignity, self-reliance, and contributes to the local economy."
  },

  // ================= Category 4 =================
  {
    id: "3-1",
    category: "Private Sector Engagement",
    points: 100,
    q: "Why is private sector engagement crucial for bamboo sector growth?",
    correct: "It ensures investment, innovation, and sustainability beyond donor funding.",
    options: [
      "It ensures investment, innovation, and sustainability beyond donor funding.",
      "Because government does all production.",
      "Because NGOs make bamboo products.",
      "Because private sector avoids risks."
    ],
    explanation: "Emphasizes sustainability beyond aid. Private actors ensure lasting investments and innovation."
  },
  {
    id: "3-2",
    category: "Private Sector Engagement",
    points: 200,
    q: "What type of private companies can drive bamboo value chains?",
    correct: "Furniture manufacturers, construction firms, and handicraft exporters.",
    options: [
      "Furniture manufacturers, construction firms, and handicraft exporters.",
      "Airline companies.",
      "Fishing trawlers.",
      "Banks only."
    ],
    explanation: "Identifies relevant sectors. These firms connect bamboo to profitable industries."
  },
  {
    id: "3-3",
    category: "Private Sector Engagement",
    points: 300,
    q: "How can public-private partnerships (PPPs) support bamboo development?",
    correct: "By combining government support with private sector efficiency and investment.",
    options: [
      "By avoiding government involvement.",
      "By combining government support with private sector efficiency and investment.",
      "By excluding local communities.",
      "By focusing only on exports."
    ],
    explanation: "Highlights synergy of PPPs. Partnerships merge strengths for wider impact."
  },
  {
    id: "3-4",
    category: "Private Sector Engagement",
    points: 400,
    q: "What is one risk if private sector is not engaged in the bamboo sector?",
    correct: "Market systems may collapse after donor projects end.",
    options: [
      "Market systems may collapse after donor projects end.",
      "NGOs will dominate forever.",
      "Government will ban bamboo.",
      "Export demand will vanish."
    ],
    explanation: "Warns of sustainability risks. Without private actors, projects risk dependency."
  },
  {
    id: "3-5",
    category: "Private Sector Engagement",
    points: 500,
    q: "What is one role of SMEs in the bamboo sector?",
    correct: "Driving innovation, local employment, and linking producers with markets.",
    options: [
      "Driving innovation, local employment, and linking producers with markets.",
      "Only importing raw materials.",
      "Avoiding responsibility.",
      "Relying only on aid."
    ],
    explanation: "Underscores SME role. SMEs drive local impact and market connectivity."
  },

  // ================= Category 5 =================
  {
    id: "4-1",
    category: "Refugee–Host Community Dynamics",
    points: 100,
    q: "Why is bamboo significant for both refugee and host communities?",
    correct: "It provides income, jobs, and reduces environmental stress.",
    options: [
      "It provides income, jobs, and reduces environmental stress.",
      "It is only symbolic.",
      "It creates divisions.",
      "It replaces all food crops."
    ],
    explanation: "Shows shared benefits. Bamboo supports both economic and environmental resilience."
  },
  {
    id: "4-2",
    category: "Refugee–Host Community Dynamics",
    points: 200,
    q: "How can bamboo reduce tensions between host and refugee communities?",
    correct: "By creating shared economic opportunities and reducing competition for resources.",
    options: [
      "By creating shared economic opportunities and reducing competition for resources.",
      "By dividing markets.",
      "By increasing dependency.",
      "By reducing collaboration."
    ],
    explanation: "Focuses on peacebuilding. Shared value chains build cooperation and trust."
  },
  {
    id: "4-3",
    category: "Refugee–Host Community Dynamics",
    points: 300,
    q: "What is one challenge in engaging refugees in bamboo enterprises?",
    correct: "Legal restrictions on work and mobility.",
    options: [
      "Legal restrictions on work and mobility.",
      "Too much access to finance.",
      "Overrepresentation in leadership.",
      "Excessive profits."
    ],
    explanation: "Identifies systemic barriers. Refugees often face policy-related constraints."
  },
  {
    id: "4-4",
    category: "Refugee–Host Community Dynamics",
    points: 400,
    q: "What is one way host communities can benefit from refugee participation in bamboo markets?",
    correct: "Expanded labor force and knowledge transfer.",
    options: [
      "Expanded labor force and knowledge transfer.",
      "Reduced demand for local goods.",
      "Loss of income.",
      "Increased dependency."
    ],
    explanation: "Highlights co-benefits. Refugees can contribute skills and labor to local economies."
  },
  {
    id: "4-5",
    category: "Refugee–Host Community Dynamics",
    points: 500,
    q: "What is a potential risk if refugees are excluded from bamboo value chains?",
    correct: "Continued aid dependency and missed development opportunities.",
    options: [
      "Continued aid dependency and missed development opportunities.",
      "Increased bamboo quality.",
      "Fewer markets.",
      "Excess supply."
    ],
    explanation: "Warns against exclusion. Without inclusion, refugees remain dependent and opportunities are lost."
  },

  // ================= Category 6 =================
  {
    id: "5-1",
    category: "Policies & Governance",
    points: 100,
    q: "Why are policies important for bamboo sector growth?",
    correct: "They provide regulations, incentives, and guidance for sustainable development.",
    options: [
      "They provide regulations, incentives, and guidance for sustainable development.",
      "They stop all trade.",
      "They eliminate markets.",
      "They replace SMEs."
    ],
    explanation: "Shows enabling role of governance. Policies guide, incentivize, and regulate growth."
  },
  {
    id: "5-2",
    category: "Policies & Governance",
    points: 200,
    q: "What is one policy barrier for bamboo enterprises?",
    correct: "Lack of clear standards for bamboo housing materials.",
    options: [
      "Lack of clear standards for bamboo housing materials.",
      "Excessive subsidies.",
      "Too much government support.",
      "High demand abroad."
    ],
    explanation: "Identifies regulatory gaps. Without standards, bamboo products face acceptance barriers."
  },
  {
    id: "5-3",
    category: "Policies & Governance",
    points: 300,
    q: "How can government support bamboo SMEs?",
    correct: "By offering training, subsidies, and market facilitation.",
    options: [
      "By offering training, subsidies, and market facilitation.",
      "By banning production.",
      "By replacing local actors.",
      "By only importing bamboo."
    ],
    explanation: "Shows enabling support role. State action can strengthen enterprise capacity."
  },
  {
    id: "5-4",
    category: "Policies & Governance",
    points: 400,
    q: "What is one governance challenge in the bamboo sector?",
    correct: "Weak coordination among ministries and agencies.",
    options: [
      "Weak coordination among ministries and agencies.",
      "Too much private sector involvement.",
      "Over-regulation of bamboo.",
      "Abundance of trained staff."
    ],
    explanation: "Points to coordination gaps. Multiple stakeholders often lack alignment."
  },
  {
    id: "5-5",
    category: "Policies & Governance",
    points: 500,
    q: "Why is policy advocacy important for B4CA?",
    correct: "It ensures enabling policies that support bamboo-based housing, enterprises, and trade.",
    options: [
      "It ensures enabling policies that support bamboo-based housing, enterprises, and trade.",
      "It eliminates NGOs.",
      "It reduces training needs.",
      "It stops exports."
    ],
    explanation: "Highlights advocacy’s role. Advocacy ensures long-term systemic support."
  },

  // ================= Category 7 =================
  {
    id: "6-1",
    category: "Sustainability & Systemic Change",
    points: 100,
    q: "What does sustainability mean in the bamboo sector?",
    correct: "Maintaining growth while protecting resources for future generations.",
    options: [
      "Maintaining growth while protecting resources for future generations.",
      "Maximizing short-term profits only.",
      "Ignoring environmental limits.",
      "Excluding communities."
    ],
    explanation: "Defines sustainability clearly. Balances profit, people, and planet."
  },
  {
    id: "6-2",
    category: "Sustainability & Systemic Change",
    points: 200,
    q: "What is one indicator of systemic change in the bamboo sector?",
    correct: "Private sector independently investing in bamboo enterprises.",
    options: [
      "Private sector independently investing in bamboo enterprises.",
      "Dependence on donor subsidies.",
      "One-off training events.",
      "Short-term aid projects."
    ],
    explanation: "Measures deeper change. Independent private investment shows sustainability."
  },
  {
    id: "6-3",
    category: "Sustainability & Systemic Change",
    points: 300,
    q: "How does market facilitation differ from direct delivery?",
    correct: "Facilitation supports local actors to solve problems, while direct delivery replaces them.",
    options: [
      "Facilitation supports local actors to solve problems, while direct delivery replaces them.",
      "They are the same.",
      "Facilitation is faster.",
      "Direct delivery always ensures sustainability."
    ],
    explanation: "Explains facilitation approach. MSD focuses on facilitation, not substitution."
  },
  {
    id: "6-4",
    category: "Sustainability & Systemic Change",
    points: 400,
    q: "Why is systemic change critical for B4CA’s success?",
    correct: "Because it ensures lasting improvements beyond the project’s lifespan.",
    options: [
      "Because it ensures lasting improvements beyond the project’s lifespan.",
      "Because donors require reports.",
      "Because bamboo grows fast.",
      "Because aid ends immediately."
    ],
    explanation: "Highlights sustainability rationale. Systemic change secures long-term impact."
  },
  {
    id: "6-5",
    category: "Sustainability & Systemic Change",
    points: 500,
    q: "Give an example of a systemic intervention in bamboo housing.",
    correct: "Introducing building codes that approve engineered bamboo materials.",
    options: [
      "Introducing building codes that approve engineered bamboo materials.",
      "Donating free bamboo houses.",
      "One-time training on cutting bamboo.",
      "Importing timber instead."
    ],
    explanation: "Provides systemic-level solution. Codes institutionalize bamboo use in housing."
  },

  // ================= Category 8 =================
  {
    id: "7-1",
    category: "Value Chain & Market Actors",
    points: 100,
    q: "Who are the primary producers in the bamboo value chain?",
    correct: "Smallholder farmers cultivating bamboo.",
    options: [
      "Smallholder farmers cultivating bamboo.",
      "Airline companies.",
      "Banking institutions.",
      "Fishing cooperatives."
    ],
    explanation: "Identifies grassroots actors. Farmers are central to bamboo production."
  },
  {
    id: "7-2",
    category: "Value Chain & Market Actors",
    points: 200,
    q: "Who are the consumers in the bamboo market system?",
    correct: "Households, construction firms, and exporters purchasing bamboo products.",
    options: [
      "Households, construction firms, and exporters purchasing bamboo products.",
      "Only government agencies.",
      "NGOs only.",
      "Fishermen only."
    ],
    explanation: "Defines demand side. Consumers create market pull for bamboo."
  },
  {
    id: "7-3",
    category: "Value Chain & Market Actors",
    points: 300,
    q: "What is the role of middlemen or traders in the bamboo value chain?",
    correct: "They connect producers with markets and add value through aggregation and distribution.",
    options: [
      "They connect producers with markets and add value through aggregation and distribution.",
      "They only exploit farmers.",
      "They are unnecessary.",
      "They consume bamboo directly."
    ],
    explanation: "Explains intermediaries. Traders link supply with demand effectively."
  },
  {
    id: "7-4",
    category: "Value Chain & Market Actors",
    points: 400,
    q: "What role do service providers play in the bamboo market?",
    correct: "They offer inputs, training, finance, and technical support.",
    options: [
      "They offer inputs, training, finance, and technical support.",
      "They cut bamboo only.",
      "They consume bamboo.",
      "They regulate markets."
    ],
    explanation: "Clarifies support services. Providers strengthen the ecosystem for bamboo."
  },
  {
    id: "7-5",
    category: "Value Chain & Market Actors",
    points: 500,
    q: "Why is understanding the value chain important for B4CA?",
    correct: "It identifies gaps, opportunities, and leverage points for systemic change.",
    options: [
      "It identifies gaps, opportunities, and leverage points for systemic change.",
      "It reduces bamboo quality.",
      "It increases costs.",
      "It eliminates all actors."
    ],
    explanation: "Links analysis to impact. Value chain analysis reveals intervention points."
  }
];

// Export
export default questions;
