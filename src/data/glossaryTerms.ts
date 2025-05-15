
import { GlossaryTerm } from "@/components/GlossaryCard";

export const glossaryTerms: GlossaryTerm[] = [
  // AI Terminology
  {
    id: "ai",
    term: "Artificial Intelligence (AI)",
    definition: "Smart computer programs that can do things humans can do, like seeing pictures, hearing words, making choices, and translating languages.",
    category: "ai",
    relatedTerms: ["Machine Learning", "Deep Learning", "Neural Networks"]
  },
  {
    id: "ml",
    term: "Machine Learning",
    definition: "When computers learn from examples just like you learn from practice, without being told exactly what to do every time.",
    category: "ai",
    relatedTerms: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning"]
  },
  {
    id: "dl",
    term: "Deep Learning",
    definition: "A special way computers learn by using lots of layers of information, kind of like how your brain has many layers of thinking.",
    category: "ai",
    relatedTerms: ["Neural Networks", "Convolutional Neural Networks", "Recurrent Neural Networks"]
  },
  {
    id: "nn",
    term: "Neural Networks",
    definition: "Computer systems that work a bit like the human brain, with lots of connected parts that help them learn patterns and recognize things.",
    category: "ai",
    relatedTerms: ["Neurons", "Deep Learning", "Weights"]
  },
  {
    id: "nlp",
    term: "Natural Language Processing",
    definition: "How computers learn to understand and talk in human languages, like when you ask a smart speaker a question and it answers you.",
    category: "ai",
    relatedTerms: ["Text Analysis", "Sentiment Analysis", "Machine Translation"]
  },
  {
    id: "llm",
    term: "Large Language Models (LLMs)",
    definition: "Really big computer programs that have read millions of books and websites, so they can write stories, answer questions, and talk almost like a person.",
    category: "ai",
    relatedTerms: ["GPT", "Transformer Models", "NLP"]
  },
  {
    id: "cv",
    term: "Computer Vision",
    definition: "How computers learn to 'see' and understand pictures and videos, like when a game console can see you moving or a phone recognizes your face.",
    category: "ai",
    relatedTerms: ["Image Recognition", "Object Detection", "Facial Recognition"]
  },
  {
    id: "generative-ai",
    term: "Generative AI",
    definition: "AI that can make new things like pictures, stories, songs, or videos after seeing lots of examples, like an art student who learned to paint by studying many paintings.",
    category: "ai",
    relatedTerms: ["Diffusion Models", "GANs", "Text-to-Image"]
  },
  {
    id: "ai-agents",
    term: "AI Agents",
    definition: "Computer programs that can look around, make decisions, and do things on their own, like a robot vacuum that cleans your house without you telling it where to go.",
    category: "ai",
    relatedTerms: ["Autonomous Systems", "Intelligent Agents", "Multi-agent Systems"]
  },
  {
    id: "mcp",
    term: "Model Context Protocol",
    definition: "A special way for different AI systems to talk to each other and share information, like how friends use the same language to understand each other.",
    category: "ai",
    relatedTerms: ["AI Interoperability", "Prompt Engineering", "Context Window"]
  },
  
  // No-Code Terminology
  {
    id: "no-code",
    term: "No-Code",
    definition: "Tools that let you make computer programs by dragging and dropping pieces together, without having to write code, like building with LEGO bricks instead of writing instructions.",
    category: "no-code",
    relatedTerms: ["Low-Code", "Citizen Development", "Visual Development"]
  },
  {
    id: "citizen-developer",
    term: "Citizen Developer",
    definition: "A person who makes apps to help with their work, even though that's not their main job, like a teacher who makes a game to help students learn math.",
    category: "no-code",
    relatedTerms: ["No-Code Development", "Shadow IT", "Business User"]
  },
  {
    id: "drag-and-drop",
    term: "Drag and Drop",
    definition: "When you can move things around on a screen just by clicking, holding, and moving your mouse, like moving a toy from one box to another.",
    category: "no-code",
    relatedTerms: ["Visual Interface", "UI Builder", "Component"]
  },
  {
    id: "visual-development",
    term: "Visual Development",
    definition: "Creating programs by putting together pictures and blocks instead of typing words, like using building blocks instead of writing down instructions.",
    category: "no-code",
    relatedTerms: ["Visual Programming", "Visual Builder", "GUI"]
  },
  {
    id: "automation",
    term: "Automation",
    definition: "Teaching computers to do boring, repeating jobs for you automatically, like a robot that sorts your toys while you play.",
    category: "no-code",
    relatedTerms: ["Workflow Automation", "Business Process Automation", "RPA"]
  },
  {
    id: "api-integration",
    term: "API Integration",
    definition: "When two computer programs connect and share information, like when your weather app talks to the weather station to tell you if it's going to rain.",
    category: "no-code",
    relatedTerms: ["Webhook", "API Connector", "Integration Platform"]
  },
  {
    id: "templates",
    term: "Templates",
    definition: "Ready-made designs you can use as a starting point, like coloring in a picture that's already been drawn for you.",
    category: "no-code",
    relatedTerms: ["Starter Template", "Boilerplate", "Template Library"]
  },
  
  // Low-Code Terminology
  {
    id: "low-code",
    term: "Low-Code",
    definition: "A way to make computer programs with some dragging and dropping and only a little bit of typing code, like building a model that comes with some instructions but lets you add your own ideas too.",
    category: "low-code",
    relatedTerms: ["No-Code", "Rapid Application Development", "LCAP"]
  },
  {
    id: "lcap",
    term: "Low-Code Application Platform (LCAP)",
    definition: "A special computer tool where you can build apps mostly by clicking and dragging, with just a little typing, like a playground with special equipment that helps you build things easily.",
    category: "low-code",
    relatedTerms: ["Development Platform", "IDE", "Visual Development Environment"]
  },
  {
    id: "business-logic",
    term: "Business Logic",
    definition: "The rules that tell a computer program what to do, like the rules of a board game that say how pieces can move.",
    category: "low-code",
    relatedTerms: ["Workflow Rules", "Decision Logic", "Business Rules Engine"]
  },
  {
    id: "microservices",
    term: "Microservices",
    definition: "Small, separate parts of a computer program that work together, like different LEGO sets that can be put together to build something bigger.",
    category: "low-code",
    relatedTerms: ["API", "Service-Oriented Architecture", "Containerization"]
  },
  {
    id: "custom-code",
    term: "Custom Code",
    definition: "Special instructions you type to make a computer do exactly what you want, like giving detailed directions to a friend when the map doesn't show everything.",
    category: "low-code",
    relatedTerms: ["Code Extension", "Scripting", "Custom Functions"]
  },
  {
    id: "data-modeling",
    term: "Data Modeling",
    definition: "Planning how to organize information in a computer, like deciding which toy bins should hold which toys and how they're related.",
    category: "low-code",
    relatedTerms: ["Entity-Relationship Diagram", "Database Schema", "Data Structure"]
  },
  {
    id: "app-lifecycle",
    term: "Application Lifecycle Management",
    definition: "Taking care of a computer program from when you first think of it until it gets old, like looking after a pet from when it's a baby until it's grown up.",
    category: "low-code",
    relatedTerms: ["DevOps", "CI/CD", "Versioning"]
  },
  
  // Additional Terms
  {
    id: "api",
    term: "API (Application Programming Interface)",
    definition: "A way for computer programs to talk to each other, like how you use a TV remote to tell your TV what to do without having to open it up.",
    category: "low-code",
    relatedTerms: ["REST API", "GraphQL", "Endpoints", "API Gateway"]
  },
  {
    id: "supabase",
    term: "Supabase",
    definition: "A toolbox that helps you store information, let users log in, and do other things your app needs, like a magical toybox that has everything you need to build a fort.",
    category: "low-code",
    relatedTerms: ["PostgreSQL", "Authentication", "Database", "Backend as a Service"]
  }
];
