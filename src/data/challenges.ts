export interface Challenge {
  day: number;
  title: string;
  category: 'productivity' | 'creativity' | 'wellness';
  description: string;
  durationMinutes: number;
  tags: string[];
  content: string;
  tips: string[];
}

export const challenges: Challenge[] = [
  {
    day: 1,
    title: "AI-Powered Task Prioritization",
    category: "productivity",
    description: "Learn to use AI to prioritize your daily tasks based on urgency, importance, and context.",
    durationMinutes: 15,
    tags: ["productivity", "planning", "organization"],
    content: "Today, you'll discover how AI can analyze your to-do list and suggest optimal task ordering. Use ChatGPT or Claude to input your tasks and get intelligent prioritization based on deadlines, dependencies, and energy levels required.",
    tips: [
      "Be specific about deadlines and task dependencies",
      "Include context about your energy levels throughout the day",
      "Ask the AI to explain its reasoning for each prioritization"
    ]
  },
  {
    day: 2,
    title: "Automated Email Summaries",
    category: "productivity",
    description: "Master AI tools that can summarize long email threads and extract action items automatically.",
    durationMinutes: 20,
    tags: ["productivity", "communication", "email"],
    content: "Discover how AI can transform overwhelming email threads into concise summaries. Learn to identify key decisions, action items, and important details without reading every message.",
    tips: [
      "Copy entire email threads for comprehensive analysis",
      "Ask for action items separated by person responsible",
      "Request timeline information for each action"
    ]
  },
  {
    day: 3,
    title: "Creative Writing Prompts Generator",
    category: "creativity",
    description: "Use AI to break through writer's block with personalized, inspiring writing prompts.",
    durationMinutes: 25,
    tags: ["creativity", "writing", "inspiration"],
    content: "Explore how AI can generate unique, tailored writing prompts based on your interests, style preferences, and current projects. Perfect for fiction writers, bloggers, and content creators.",
    tips: [
      "Share your favorite genres and themes",
      "Ask for prompts with specific emotional tones",
      "Request variations on prompts you find interesting"
    ]
  },
  {
    day: 4,
    title: "Mindful AI-Guided Meditation",
    category: "wellness",
    description: "Experience personalized meditation scripts created by AI for your specific needs and goals.",
    durationMinutes: 15,
    tags: ["wellness", "meditation", "mindfulness"],
    content: "Learn to generate customized meditation and breathing exercises using AI. Perfect for stress relief, focus enhancement, or sleep preparation.",
    tips: [
      "Specify your current emotional state",
      "Mention any physical discomfort or tension areas",
      "Request guided visualizations that resonate with you"
    ]
  },
  {
    day: 5,
    title: "Code Review Automation",
    category: "productivity",
    description: "Let AI assist in reviewing code for bugs, security issues, and optimization opportunities.",
    durationMinutes: 30,
    tags: ["productivity", "coding", "development"],
    content: "Discover how AI can accelerate code review processes by identifying potential issues, suggesting improvements, and explaining complex code patterns.",
    tips: [
      "Provide context about your project architecture",
      "Ask for explanations of suggested changes",
      "Request security-specific analysis"
    ]
  },
  {
    day: 6,
    title: "Visual Design Brainstorming",
    category: "creativity",
    description: "Generate design concepts, color palettes, and layout ideas using AI assistance.",
    durationMinutes: 25,
    tags: ["creativity", "design", "visual"],
    content: "Learn to collaborate with AI for design ideation. From mood boards to color theory, discover how AI can accelerate your creative process.",
    tips: [
      "Describe your target audience and brand values",
      "Request multiple variations of each concept",
      "Ask for explanations of design choices"
    ]
  },
  {
    day: 7,
    title: "Weekly Reflection & Gratitude",
    category: "wellness",
    description: "Use AI to guide deeper self-reflection and gratitude practices for mental wellness.",
    durationMinutes: 20,
    tags: ["wellness", "reflection", "gratitude"],
    content: "Complete your first week with AI-guided reflection exercises. Learn to process experiences, identify growth opportunities, and cultivate gratitude.",
    tips: [
      "Be honest about challenges faced this week",
      "Ask for prompts that encourage deeper thinking",
      "Request gratitude exercises suited to your situation"
    ]
  },
  {
    day: 8,
    title: "Data Analysis Simplified",
    category: "productivity",
    description: "Transform complex datasets into insights using AI-powered analysis tools.",
    durationMinutes: 30,
    tags: ["productivity", "data", "analysis"],
    content: "Learn to upload datasets and get AI to identify patterns, trends, and anomalies. Perfect for business intelligence and research projects.",
    tips: [
      "Explain what insights you're looking for",
      "Ask for visualization recommendations",
      "Request explanations in non-technical language"
    ]
  },
  {
    day: 9,
    title: "Social Media Content Calendar",
    category: "creativity",
    description: "Generate a month's worth of engaging social media content with AI assistance.",
    durationMinutes: 35,
    tags: ["creativity", "marketing", "social-media"],
    content: "Discover how to create comprehensive content calendars that maintain brand voice while engaging your audience across multiple platforms.",
    tips: [
      "Define your brand voice and key messages",
      "Specify platform-specific requirements",
      "Ask for engagement-driving hooks"
    ]
  },
  {
    day: 10,
    title: "Energy Management Tracker",
    category: "wellness",
    description: "Use AI to analyze and optimize your daily energy patterns for peak performance.",
    durationMinutes: 20,
    tags: ["wellness", "productivity", "energy"],
    content: "Learn to track energy levels and get AI recommendations for scheduling tasks, breaks, and activities based on your natural rhythms.",
    tips: [
      "Log energy levels at different times for a few days",
      "Include information about sleep and meals",
      "Ask for personalized scheduling recommendations"
    ]
  },
  {
    day: 11,
    title: "Meeting Notes & Action Items",
    category: "productivity",
    description: "Master AI tools that convert meeting transcripts into structured notes and clear action items.",
    durationMinutes: 25,
    tags: ["productivity", "meetings", "organization"],
    content: "Transform lengthy meeting recordings or notes into concise summaries with clear action items, decisions made, and follow-up tasks.",
    tips: [
      "Include timestamps for important moments",
      "Ask for participant-specific action items",
      "Request priority levels for each task"
    ]
  },
  {
    day: 12,
    title: "Story Outline Generator",
    category: "creativity",
    description: "Create compelling story structures and character arcs with AI brainstorming.",
    durationMinutes: 30,
    tags: ["creativity", "writing", "storytelling"],
    content: "Explore advanced storytelling techniques with AI assistance. Generate plot twists, develop character backgrounds, and structure engaging narratives.",
    tips: [
      "Share your story's core theme and genre",
      "Ask for multiple plot structure options",
      "Request character development arcs"
    ]
  },
  {
    day: 13,
    title: "Stress Management Techniques",
    category: "wellness",
    description: "Learn personalized stress-reduction strategies generated by AI for your specific triggers.",
    durationMinutes: 20,
    tags: ["wellness", "stress", "mental-health"],
    content: "Identify your stress triggers and get tailored coping strategies. From breathing exercises to cognitive reframing, build your stress management toolkit.",
    tips: [
      "Describe specific stress situations you face",
      "Mention what's worked or not worked before",
      "Ask for both immediate and long-term strategies"
    ]
  },
  {
    day: 14,
    title: "Learning Path Designer",
    category: "productivity",
    description: "Create personalized learning roadmaps for any skill using AI-powered curriculum design.",
    durationMinutes: 30,
    tags: ["productivity", "learning", "skill-development"],
    content: "Discover how to build comprehensive learning paths tailored to your current level, goals, and available time. Perfect for self-directed learning.",
    tips: [
      "Be clear about your current skill level",
      "Specify your learning goals and timeline",
      "Ask for resource recommendations at each stage"
    ]
  },
  {
    day: 15,
    title: "Visual Art Inspiration",
    category: "creativity",
    description: "Generate artistic concepts, composition ideas, and style explorations with AI.",
    durationMinutes: 25,
    tags: ["creativity", "art", "visual"],
    content: "Collaborate with AI to explore artistic styles, generate composition ideas, and discover new creative directions for your visual projects.",
    tips: [
      "Share artists or styles you admire",
      "Describe the mood or message you want to convey",
      "Ask for technical approaches to achieve your vision"
    ]
  },
  {
    day: 16,
    title: "Sleep Optimization Guide",
    category: "wellness",
    description: "Get AI-powered recommendations for improving sleep quality based on your habits.",
    durationMinutes: 20,
    tags: ["wellness", "sleep", "health"],
    content: "Analyze your sleep patterns and receive personalized recommendations for better rest. Learn about sleep hygiene, routine optimization, and environmental factors.",
    tips: [
      "Track your sleep schedule for a few nights",
      "Note factors that affect your sleep",
      "Ask for gradual, sustainable changes"
    ]
  },
  {
    day: 17,
    title: "Research Assistant Pro",
    category: "productivity",
    description: "Accelerate research projects with AI-powered source synthesis and insight extraction.",
    durationMinutes: 35,
    tags: ["productivity", "research", "analysis"],
    content: "Learn advanced techniques for using AI as a research assistant. From literature reviews to synthesizing findings across multiple sources.",
    tips: [
      "Provide your research question clearly",
      "Ask for connections between different sources",
      "Request citations and source reliability assessment"
    ]
  },
  {
    day: 18,
    title: "Brand Voice Development",
    category: "creativity",
    description: "Define and refine your brand voice with AI-assisted tone and style analysis.",
    durationMinutes: 30,
    tags: ["creativity", "branding", "marketing"],
    content: "Develop a consistent, authentic brand voice. Learn to create guidelines, generate examples, and maintain consistency across all communications.",
    tips: [
      "Share examples of brand voices you admire",
      "Describe your target audience in detail",
      "Ask for do's and don'ts lists"
    ]
  },
  {
    day: 19,
    title: "Emotional Intelligence Exercises",
    category: "wellness",
    description: "Practice EQ-building exercises with AI-guided scenarios and reflections.",
    durationMinutes: 25,
    tags: ["wellness", "emotional-intelligence", "growth"],
    content: "Develop emotional intelligence through AI-generated scenarios, reflection prompts, and communication practice exercises.",
    tips: [
      "Be open about areas where you want to grow",
      "Ask for real-world application examples",
      "Request follow-up exercises"
    ]
  },
  {
    day: 20,
    title: "Presentation Architect",
    category: "productivity",
    description: "Design compelling presentation structures and narratives with AI assistance.",
    durationMinutes: 30,
    tags: ["productivity", "presentations", "communication"],
    content: "Transform complex information into engaging presentations. Learn to structure content, craft compelling narratives, and create impactful visuals.",
    tips: [
      "Define your audience and their knowledge level",
      "Specify time constraints and format",
      "Ask for slide-by-slide outlines"
    ]
  },
  {
    day: 21,
    title: "Creative Problem Solving",
    category: "creativity",
    description: "Apply AI-powered lateral thinking techniques to challenging problems.",
    durationMinutes: 30,
    tags: ["creativity", "problem-solving", "innovation"],
    content: "Break through mental blocks with AI-facilitated creative problem-solving techniques. Explore multiple perspectives and unconventional solutions.",
    tips: [
      "Frame your problem clearly and specifically",
      "Ask for perspectives from different fields",
      "Request both practical and innovative solutions"
    ]
  },
  {
    day: 22,
    title: "Boundary Setting Workshop",
    category: "wellness",
    description: "Learn to establish healthy boundaries with AI-guided communication strategies.",
    durationMinutes: 25,
    tags: ["wellness", "boundaries", "communication"],
    content: "Develop skills for setting and maintaining healthy boundaries in work and personal life. Practice assertive communication with AI role-play scenarios.",
    tips: [
      "Identify specific boundary challenges you face",
      "Ask for scripts for difficult conversations",
      "Request strategies for different relationships"
    ]
  },
  {
    day: 23,
    title: "Process Automation Planner",
    category: "productivity",
    description: "Identify and design workflow automations with AI-powered process analysis.",
    durationMinutes: 35,
    tags: ["productivity", "automation", "efficiency"],
    content: "Learn to map your workflows and identify automation opportunities. Get step-by-step implementation plans for streamlining repetitive tasks.",
    tips: [
      "Document your current process in detail",
      "Specify tools and platforms you use",
      "Ask for both quick wins and long-term improvements"
    ]
  },
  {
    day: 24,
    title: "Music & Audio Creation",
    category: "creativity",
    description: "Explore AI-assisted music composition, sound design, and audio storytelling.",
    durationMinutes: 30,
    tags: ["creativity", "music", "audio"],
    content: "Discover how AI can assist in music creation, from generating melodies to suggesting chord progressions and arranging compositions.",
    tips: [
      "Describe the mood and style you're aiming for",
      "Mention instruments or genres you prefer",
      "Ask for music theory explanations"
    ]
  },
  {
    day: 25,
    title: "Life Balance Assessment",
    category: "wellness",
    description: "Use AI to evaluate and improve work-life balance with personalized strategies.",
    durationMinutes: 25,
    tags: ["wellness", "balance", "life-design"],
    content: "Conduct a comprehensive life balance audit with AI guidance. Identify areas needing attention and create actionable plans for improvement.",
    tips: [
      "Be honest about time spent in different areas",
      "Share your ideal balance vision",
      "Ask for small, sustainable changes"
    ]
  },
  {
    day: 26,
    title: "Knowledge Base Builder",
    category: "productivity",
    description: "Organize and structure information systems with AI-powered knowledge management.",
    durationMinutes: 30,
    tags: ["productivity", "knowledge", "organization"],
    content: "Learn to create effective knowledge bases and documentation systems. From taxonomies to search optimization, build accessible information repositories.",
    tips: [
      "Define who will use the knowledge base",
      "Specify types of information to organize",
      "Ask for best practices in your field"
    ]
  },
  {
    day: 27,
    title: "Final Creative Portfolio",
    category: "creativity",
    description: "Compile and showcase your creative journey with AI-assisted portfolio curation.",
    durationMinutes: 35,
    tags: ["creativity", "portfolio", "showcase"],
    content: "Learn to curate and present your work effectively. Get AI assistance with project descriptions, portfolio structure, and presentation strategy.",
    tips: [
      "Gather all work created during the challenge",
      "Define your target audience for the portfolio",
      "Ask for storytelling approaches"
    ]
  },
  {
    day: 28,
    title: "Integration & Future Planning",
    category: "wellness",
    description: "Reflect on your 28-day journey and create a sustainable AI integration plan.",
    durationMinutes: 30,
    tags: ["wellness", "reflection", "planning"],
    content: "Celebrate your completion! Reflect on learnings, identify favorite tools, and create a personalized plan for continued AI-powered growth.",
    tips: [
      "Review which days had the biggest impact",
      "Identify tools you'll continue using",
      "Set specific goals for the next 90 days"
    ]
  }
];
