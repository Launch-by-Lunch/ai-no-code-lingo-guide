import { GlossaryTerm } from "@/components/GlossaryCard";

export const glossaryTerms: GlossaryTerm[] = [
  // AI Terminology
  {
    id: "ai",
    term: "Artificial Intelligence (AI)",
    definition: "Software that can perform tasks that typically require human intelligence. This includes recognizing patterns, learning from data, and making decisions. Examples include virtual assistants like Siri or Alexa, recommendation systems on Netflix, or AI that helps diagnose medical conditions from images.",
    category: "ai",
    relatedTerms: ["Machine Learning", "Deep Learning", "Neural Networks"]
  },
  {
    id: "ml",
    term: "Machine Learning",
    definition: "A subset of AI where systems learn from data without being explicitly programmed. It's like teaching a computer through examples rather than instructions. For instance, showing an app thousands of photos of cats and dogs allows it to learn to distinguish between them on its own.",
    category: "ai",
    relatedTerms: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning"]
  },
  {
    id: "dl",
    term: "Deep Learning",
    definition: "A more sophisticated form of machine learning using layered neural networks to process information. It's particularly good at handling complex patterns in large amounts of data. This is the technology behind voice assistants understanding your speech, facial recognition in photos, and self-driving cars interpreting their surroundings.",
    category: "ai",
    relatedTerms: ["Neural Networks", "Convolutional Neural Networks", "Recurrent Neural Networks"]
  },
  {
    id: "nn",
    term: "Neural Networks",
    definition: "Computer systems inspired by the human brain's structure, made up of interconnected nodes that process information in layers. They excel at recognizing patterns and making predictions. Neural networks power everything from email spam filters to the technology that automatically tags friends in your social media photos.",
    category: "ai",
    relatedTerms: ["Neurons", "Deep Learning", "Weights"]
  },
  {
    id: "nlp",
    term: "Natural Language Processing",
    definition: "Technology that helps computers understand, interpret, and generate human language. It's what allows you to search Google in conversational language, use translation apps to communicate in foreign countries, or have chatbots help with customer service inquiries.",
    category: "ai",
    relatedTerms: ["Text Analysis", "Sentiment Analysis", "Machine Translation"]
  },
  {
    id: "llm",
    term: "Large Language Models (LLMs)",
    definition: "AI systems trained on massive amounts of text data that can understand and generate human-like text. They power modern AI assistants and can write essays, summarize documents, answer questions, and even generate creative content. Examples include ChatGPT, Google's Gemini, and Claude.",
    category: "ai",
    relatedTerms: ["GPT", "Transformer Models", "NLP"]
  },
  {
    id: "cv",
    term: "Computer Vision",
    definition: "AI technology that enables computers to derive meaningful information from digital images and videos. It's used in retail stores for checkout-free shopping, in healthcare for analyzing medical scans, and in manufacturing for quality control by detecting defects in products.",
    category: "ai",
    relatedTerms: ["Image Recognition", "Object Detection", "Facial Recognition"]
  },
  {
    id: "generative-ai",
    term: "Generative AI",
    definition: "AI systems that create new content such as text, images, music, or videos based on what they've learned. They're behind tools like DALL-E and Midjourney that create images from text descriptions, GitHub Copilot that helps write code, and AI music composers that create original songs.",
    category: "ai",
    relatedTerms: ["Diffusion Models", "GANs", "Text-to-Image"]
  },
  {
    id: "ai-agents",
    term: "AI Agents",
    definition: "Software programs that can perceive their environment, make decisions, and take actions to achieve specific goals with some degree of autonomy. Examples include virtual assistants managing your calendar, chatbots handling customer service, or AI systems that automatically trade stocks based on market conditions.",
    category: "ai",
    relatedTerms: ["Autonomous Systems", "Intelligent Agents", "Multi-agent Systems"]
  },
  {
    id: "mcp",
    term: "Model Context Protocol",
    definition: "A standardized way for different AI systems to communicate with each other by sharing information about their capabilities and requirements. It's like a common language that helps different AI tools work better together, similar to how various office applications can share documents through standard file formats.",
    category: "ai",
    relatedTerms: ["AI Interoperability", "Prompt Engineering", "Context Window"]
  },
  
  // No-Code Terminology
  {
    id: "no-code",
    term: "No-Code",
    definition: "Software platforms that allow people to build applications without writing code, typically through visual interfaces with drag-and-drop features. For example, a marketing manager could create a customer survey app using a no-code tool like Typeform, or a sales team could build a custom CRM dashboard using Airtable, all without involving IT or developers.",
    category: "no-code",
    relatedTerms: ["Low-Code", "Citizen Development", "Visual Development"]
  },
  {
    id: "citizen-developer",
    term: "Citizen Developer",
    definition: "A non-professional developer who creates applications using no-code or low-code tools. This might be an HR manager building an employee onboarding app, a marketing professional creating an email automation workflow, or a sales director designing a custom dashboard to track team performance.",
    category: "no-code",
    relatedTerms: ["No-Code Development", "Shadow IT", "Business User"]
  },
  {
    id: "drag-and-drop",
    term: "Drag and Drop",
    definition: "A user interface design that allows you to build software by clicking on elements and moving them into place, rather than typing code. It works like arranging furniture in a room planner app—you select what you want and place it where you need it. This is how most modern website builders and no-code tools work.",
    category: "no-code",
    relatedTerms: ["Visual Interface", "UI Builder", "Component"]
  },
  {
    id: "visual-development",
    term: "Visual Development",
    definition: "Creating software through graphical interfaces rather than by writing code. It's like designing a presentation with PowerPoint instead of coding it from scratch. Visual development tools show you what you're building as you work, allowing non-technical users to create functional apps and websites.",
    category: "no-code",
    relatedTerms: ["Visual Programming", "Visual Builder", "GUI"]
  },
  {
    id: "automation",
    term: "Automation",
    definition: "Technology that performs tasks with minimal human intervention, following predefined rules. Examples include setting up automatic email responses when you're out of office, having your accounting software automatically categorize expenses, or using tools like Zapier to automatically post your blog articles to social media when published.",
    category: "no-code",
    relatedTerms: ["Workflow Automation", "Business Process Automation", "RPA"]
  },
  {
    id: "api-integration",
    term: "API Integration",
    definition: "Connecting different software applications to work together and share information. For example, when you use your Google account to log into a new app, that's an API integration. Or when your CRM automatically adds new customers from your online store, that's also made possible by API integrations.",
    category: "no-code",
    relatedTerms: ["Webhook", "API Connector", "Integration Platform"]
  },
  {
    id: "templates",
    term: "Templates",
    definition: "Pre-designed layouts or structures that provide a starting point for creating content or applications. They're like using a cake mix instead of baking from scratch—they give you a head start and ensure consistent results. Examples include email newsletter templates, website themes, or project management board templates.",
    category: "no-code",
    relatedTerms: ["Starter Template", "Boilerplate", "Template Library"]
  },
  
  // Low-Code Terminology
  {
    id: "low-code",
    term: "Low-Code",
    definition: "Development platforms that require minimal hand-coding but allow for customization through some programming. It's like using a meal kit that comes with pre-measured ingredients but lets you adjust seasoning to taste. Low-code platforms enable faster app development while still maintaining flexibility for unique business requirements.",
    category: "low-code",
    relatedTerms: ["No-Code", "Rapid Application Development", "LCAP"]
  },
  {
    id: "lcap",
    term: "Low-Code Application Platform (LCAP)",
    definition: "A software environment where users can build applications using mostly visual tools but with the option to add custom code when needed. It's like using design software that has automated features but also allows for manual adjustments. Examples include Microsoft Power Apps, OutSystems, and Mendix.",
    category: "low-code",
    relatedTerms: ["Development Platform", "IDE", "Visual Development Environment"]
  },
  {
    id: "business-logic",
    term: "Business Logic",
    definition: "The rules and processes that determine how data is transformed within an application according to business requirements. For instance, the calculations that determine customer discounts, the approval steps in an expense report workflow, or the criteria for qualifying sales leads are all examples of business logic.",
    category: "low-code",
    relatedTerms: ["Workflow Rules", "Decision Logic", "Business Rules Engine"]
  },
  {
    id: "microservices",
    term: "Microservices",
    definition: "An architectural approach where applications are built as a collection of small, independent services rather than one large program. It's like having specialized kitchen appliances (toaster, blender, etc.) instead of one multi-cooker. This makes systems more flexible and easier to update, as individual services can be modified without disrupting the entire application.",
    category: "low-code",
    relatedTerms: ["API", "Service-Oriented Architecture", "Containerization"]
  },
  {
    id: "custom-code",
    term: "Custom Code",
    definition: "Programmed instructions written specifically for a particular application or task, as opposed to using pre-built solutions. It's like having a tailor make a suit to your exact measurements rather than buying off the rack. Custom code is used when existing tools don't quite meet specific business needs or when unique functionality is required.",
    category: "low-code",
    relatedTerms: ["Code Extension", "Scripting", "Custom Functions"]
  },
  {
    id: "data-modeling",
    term: "Data Modeling",
    definition: "The process of defining how data is structured, stored, and related within a system. It's similar to organizing a filing system—deciding what information goes in each folder and how folders relate to one another. Good data modeling ensures information is easily accessible and useful, like setting up customer records in a way that helps sales teams quickly find what they need.",
    category: "low-code",
    relatedTerms: ["Entity-Relationship Diagram", "Database Schema", "Data Structure"]
  },
  {
    id: "app-lifecycle",
    term: "Application Lifecycle Management",
    definition: "The continuous process of managing an application through its entire lifespan, from initial concept to retirement. This includes planning, development, testing, deployment, updates, and eventual replacement. It's similar to how organizations manage employees from recruitment through retirement, ensuring everything runs smoothly at each stage.",
    category: "low-code",
    relatedTerms: ["DevOps", "CI/CD", "Versioning"]
  },
  
  // Additional Terms
  {
    id: "api",
    term: "API (Application Programming Interface)",
    definition: "A set of rules that allows different software applications to communicate with each other. It's like a waiter in a restaurant who takes your order, delivers it to the kitchen, and brings back your food. For example, when a travel website shows you flight prices from multiple airlines without you having to visit each airline's website separately, it's using APIs.",
    category: "low-code",
    relatedTerms: ["REST API", "GraphQL", "Endpoints", "API Gateway"]
  },
  {
    id: "supabase",
    term: "Supabase",
    definition: "An open-source platform that provides ready-made backend services for web and mobile applications. It offers database storage, user authentication, file storage, and more without having to build these systems from scratch. It's like renting a fully furnished office instead of building one—everything you need is already set up and ready to use.",
    category: "low-code",
    relatedTerms: ["PostgreSQL", "Authentication", "Database", "Backend as a Service"]
  },
  
  // New Technical Terms
  {
    id: "framework",
    term: "Framework",
    definition: "A pre-built structure that provides a foundation for developing software applications. It's like using a house blueprint that already has the foundation, walls, and roof designed—you just need to customize the interior. Examples include React for building user interfaces or Express for creating web applications. Frameworks save time and ensure consistent quality by handling common development challenges.",
    category: "low-code",
    relatedTerms: ["Library", "API", "React", "Front-end", "Back-end"]
  },
  {
    id: "library",
    term: "Library",
    definition: "A collection of pre-written code that developers can use to perform common tasks. It's similar to using ready-made furniture pieces instead of building everything from scratch. For example, when a website needs to display charts, developers can use a charting library rather than programming the visualization from zero. Libraries help speed up development and maintain consistent functionality.",
    category: "low-code",
    relatedTerms: ["Framework", "API", "Code Reusability"]
  },
  {
    id: "client-facing",
    term: "Client-facing",
    definition: "The parts of an application that users directly interact with and see. It's like the dining area of a restaurant—it's designed for customer experience, while all the cooking happens elsewhere. Client-facing elements include the screens, buttons, forms, and visual layouts that make up the user interface. These elements focus on user experience, visual appeal, and ease of use.",
    category: "low-code",
    relatedTerms: ["Front-end", "User Interface", "User Experience"]
  },
  {
    id: "back-end",
    term: "Back-end",
    definition: "The behind-the-scenes part of software that handles operations users don't see. It's like the kitchen in a restaurant—customers don't see it, but it's where all the important preparation happens. The back-end includes servers, databases, and application logic that process information, store data, and ensure everything works correctly. When you save information in an app, it's the back-end that securely stores it.",
    category: "low-code",
    relatedTerms: ["Server", "Database", "API", "Cloud Computing"]
  },
  {
    id: "front-end",
    term: "Front-end",
    definition: "The visible part of a website or application that users interact with directly. It's everything you see and click on—like buttons, images, text, and forms. Think of it as the interior design of a house that everyone experiences, while the electrical wiring and plumbing (back-end) remain hidden in the walls. Front-end focuses on making applications visually appealing and easy to use.",
    category: "low-code",
    relatedTerms: ["User Interface", "Client-facing", "Web Design", "HTML/CSS"]
  },
  {
    id: "database",
    term: "Database",
    definition: "A structured collection of information that's organized so it can be easily accessed and managed. It's like a digital filing cabinet where all important information is stored. For example, when you place an online order, your customer details, product selections, and payment information are all stored in a database. Databases allow applications to remember information between visits and provide personalized experiences.",
    category: "low-code",
    relatedTerms: ["SQL", "Data Storage", "Back-end", "Cloud Storage"]
  },
  {
    id: "rls",
    term: "Row-level Security",
    definition: "A feature that controls which rows of data a user can access in a database based on their identity or role. It's like having different access cards in an office building—some people can only enter certain rooms while others have broader access. For example, in a company app, row-level security ensures employees only see their own HR records, while managers can view records for their entire team. This provides fine-grained control over who can see or modify specific information.",
    category: "low-code",
    relatedTerms: ["Database", "Security", "Data Privacy", "Access Control"]
  },
  
  // Additional Development Terms
  {
    id: "redux",
    term: "Redux",
    definition: "A tool that helps manage information across an entire application, like a central control room. It's similar to how a company might have a central database that all departments can access. Redux stores all important data in one place so different parts of your app can use it without confusion or inconsistencies. For example, an e-commerce app might use Redux to track the shopping cart contents across all pages.",
    category: "low-code",
    relatedTerms: ["State Management", "React", "Global State", "Store"]
  },
  {
    id: "react",
    term: "React",
    definition: "A popular tool for building user interfaces that makes websites interactive and responsive. It's like a set of building blocks that lets you create reusable pieces (called components) and assemble them into complete pages. For instance, a social media feed might have a 'post component' that gets reused for every post you see. React makes it easier to build complex interfaces that update instantly when users interact with them.",
    category: "low-code",
    relatedTerms: ["Component", "Front-end", "JavaScript", "User Interface"]
  },
  {
    id: "public-routes",
    term: "Public Routes",
    definition: "Sections of an application that anyone can access without signing in. They're like the public areas of a building—the lobby, reception, or information desk that visitors can enter freely. Examples include the home page, login page, about page, or pricing information of a web application. These areas show general information and encourage users to sign up or log in.",
    category: "low-code",
    relatedTerms: ["Private Routes", "Authentication", "User Access", "Navigation"]
  },
  {
    id: "private-routes",
    term: "Private Routes",
    definition: "Sections of an application that require users to log in before they can access them. It's like areas in a building that need a keycard to enter. For example, in a project management tool, your personal dashboard, team workspaces, or account settings would all be private routes. They contain sensitive or personalized information that should only be available to authenticated users.",
    category: "low-code",
    relatedTerms: ["Public Routes", "Authentication", "User Access", "Security"]
  },
  {
    id: "local-storage",
    term: "Local Storage",
    definition: "A way for websites to save information directly on your computer or device. It's like having a small filing cabinet in your browser that websites can use to remember things between visits. For example, an online shopping site might use local storage to remember items in your cart even if you close the browser, or a news site might remember your reading preferences. This data stays on your device until explicitly cleared, making your web experience more personalized.",
    category: "low-code",
    relatedTerms: ["Cookies", "Browser Storage", "Data Persistence", "Client-side Storage"]
  }
];
