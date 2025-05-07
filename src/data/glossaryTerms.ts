
import { GlossaryTerm } from "@/components/GlossaryCard";

export const glossaryTerms: GlossaryTerm[] = [
  // AI Terminology
  {
    id: "ai",
    term: "Artificial Intelligence (AI)",
    definition: "Computer systems able to perform tasks that normally require human intelligence, such as visual perception, speech recognition, decision-making, and language translation.",
    category: "ai",
    relatedTerms: ["Machine Learning", "Deep Learning", "Neural Networks"]
  },
  {
    id: "ml",
    term: "Machine Learning",
    definition: "A subset of AI that provides systems the ability to automatically learn and improve from experience without being explicitly programmed.",
    category: "ai",
    relatedTerms: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning"]
  },
  {
    id: "dl",
    term: "Deep Learning",
    definition: "A subset of machine learning that uses neural networks with many layers (hence 'deep') to analyze various factors of data.",
    category: "ai",
    relatedTerms: ["Neural Networks", "Convolutional Neural Networks", "Recurrent Neural Networks"]
  },
  {
    id: "nn",
    term: "Neural Networks",
    definition: "Computing systems inspired by the biological neural networks that constitute animal brains, designed to recognize patterns in data.",
    category: "ai",
    relatedTerms: ["Neurons", "Deep Learning", "Weights"]
  },
  {
    id: "nlp",
    term: "Natural Language Processing",
    definition: "A field of AI that gives computers the ability to understand, interpret, and generate human language.",
    category: "ai",
    relatedTerms: ["Text Analysis", "Sentiment Analysis", "Machine Translation"]
  },
  {
    id: "llm",
    term: "Large Language Models (LLMs)",
    definition: "Machine learning models trained on vast amounts of text data that can generate human-like text, answer questions, translate languages, and more.",
    category: "ai",
    relatedTerms: ["GPT", "Transformer Models", "NLP"]
  },
  {
    id: "cv",
    term: "Computer Vision",
    definition: "A field of AI that enables computers to derive meaningful information from digital images, videos and other visual inputs.",
    category: "ai",
    relatedTerms: ["Image Recognition", "Object Detection", "Facial Recognition"]
  },
  {
    id: "generative-ai",
    term: "Generative AI",
    definition: "AI systems that can create new content, including text, images, audio, code, and more, based on their training data.",
    category: "ai",
    relatedTerms: ["Diffusion Models", "GANs", "Text-to-Image"]
  },
  
  // No-Code Terminology
  {
    id: "no-code",
    term: "No-Code",
    definition: "Development platforms that enable programmers and non-programmers to create application software through graphical user interfaces instead of traditional computer programming.",
    category: "no-code",
    relatedTerms: ["Low-Code", "Citizen Development", "Visual Development"]
  },
  {
    id: "citizen-developer",
    term: "Citizen Developer",
    definition: "An employee who creates application capabilities for consumption by themselves or others, using tools that are not actively forbidden by IT or business units.",
    category: "no-code",
    relatedTerms: ["No-Code Development", "Shadow IT", "Business User"]
  },
  {
    id: "drag-and-drop",
    term: "Drag and Drop",
    definition: "A pointing device gesture where the user selects a virtual object by grabbing it and dragging it to a different location or onto another virtual object.",
    category: "no-code",
    relatedTerms: ["Visual Interface", "UI Builder", "Component"]
  },
  {
    id: "visual-development",
    term: "Visual Development",
    definition: "A software development approach that uses visual elements like diagrams, icons, and graphical interfaces to create applications.",
    category: "no-code",
    relatedTerms: ["Visual Programming", "Visual Builder", "GUI"]
  },
  {
    id: "automation",
    term: "Automation",
    definition: "The use of software to create repeatable instructions and processes to replace or reduce human interaction with IT systems.",
    category: "no-code",
    relatedTerms: ["Workflow Automation", "Business Process Automation", "RPA"]
  },
  {
    id: "api-integration",
    term: "API Integration",
    definition: "The connection between two or more applications, via their APIs, that lets these systems exchange data.",
    category: "no-code",
    relatedTerms: ["Webhook", "API Connector", "Integration Platform"]
  },
  {
    id: "templates",
    term: "Templates",
    definition: "Pre-built structures and designs that can be customized to accelerate development in no-code platforms.",
    category: "no-code",
    relatedTerms: ["Starter Template", "Boilerplate", "Template Library"]
  },
  
  // Low-Code Terminology
  {
    id: "low-code",
    term: "Low-Code",
    definition: "A software development approach that requires minimal hand-coding by using visual interfaces with simple logic and drag-and-drop capabilities.",
    category: "low-code",
    relatedTerms: ["No-Code", "Rapid Application Development", "LCAP"]
  },
  {
    id: "mcl",
    term: "MCL (Modular Component Library)",
    definition: "A collection of pre-built, reusable software components that can be assembled and configured with minimal coding to create applications in low-code development environments.",
    category: "low-code",
    relatedTerms: ["Components", "UI Library", "Design System"]
  },
  {
    id: "lcap",
    term: "Low-Code Application Platform (LCAP)",
    definition: "A platform that provides a development environment used to create application software through graphical user interfaces instead of traditional hand-coded programming.",
    category: "low-code",
    relatedTerms: ["Development Platform", "IDE", "Visual Development Environment"]
  },
  {
    id: "business-logic",
    term: "Business Logic",
    definition: "The custom rules or algorithms that handle the exchange of information between a database and user interface in low-code development.",
    category: "low-code",
    relatedTerms: ["Workflow Rules", "Decision Logic", "Business Rules Engine"]
  },
  {
    id: "microservices",
    term: "Microservices",
    definition: "An architectural style that structures an application as a collection of services that are highly maintainable and testable, loosely coupled, and independently deployable.",
    category: "low-code",
    relatedTerms: ["API", "Service-Oriented Architecture", "Containerization"]
  },
  {
    id: "custom-code",
    term: "Custom Code",
    definition: "Hand-written code added to low-code applications to implement specific functionality that isn't available through the platform's visual tools.",
    category: "low-code",
    relatedTerms: ["Code Extension", "Scripting", "Custom Functions"]
  },
  {
    id: "data-modeling",
    term: "Data Modeling",
    definition: "The process of creating a data model for the data to be stored in a database, defining how data elements relate to one another.",
    category: "low-code",
    relatedTerms: ["Entity-Relationship Diagram", "Database Schema", "Data Structure"]
  },
  {
    id: "app-lifecycle",
    term: "Application Lifecycle Management",
    definition: "The continuous process of managing an application through its lifecycle, from planning and design to testing, deployment, and maintenance.",
    category: "low-code",
    relatedTerms: ["DevOps", "CI/CD", "Versioning"]
  }
];
