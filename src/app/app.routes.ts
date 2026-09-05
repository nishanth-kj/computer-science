import { Routes } from "@angular/router";
import { AiPage } from "./intelligence/ai/ai";
import { ArchitecturePage } from "./systems/architecture/architecture";
import { CloudPage } from "./security/cloud/cloud";
import { CompilersPage } from "./software/compilers/compilers";
import { CybersecurityPage } from "./security/cybersecurity/cybersecurity";
import { DbmsPage } from "./dbms/dbms";
import { DeepLearningPage } from "./intelligence/deep-learning/deep-learning";
import { DevopsPage } from "./security/devops/devops";
import { DiscreteMathPage } from "./programming/discrete-math/discrete-math";
import { DistributedPage } from "./distributed/distributed/distributed";
import { DsaPage } from "./programming/dsa/dsa";
import { FundamentalsPage } from "./programming/fundamentals/fundamentals";
import { Graph } from "./graph/graph";
import { GraphicsPage } from "./intelligence/graphics/graphics";
import { Home } from "./home/home";
import { Interview } from "./interview-mode/interview";
import { InterviewPage } from "./theory/interview/interview";
import { IrPage } from "./theory/ir/ir";
import { Lab } from "./labs/lab/lab";
import { Labs } from "./labs/labs";
import { LanguagesPage } from "./programming/languages/languages";
import { Library } from "./library/library";
import { LinuxPage } from "./systems/linux/linux";
import { LlmPage } from "./intelligence/llm/llm";
import { MlPage } from "./intelligence/ml/ml";
import { MobilePage } from "./software/mobile/mobile";
import { NetworksPage } from "./networks/networks";
import { NlpPage } from "./intelligence/nlp/nlp";
import { NotFound } from "./not-found/not-found";
import { OopPage } from "./programming/oop/oop";
import { OsPage } from "./os/os";
import { ParallelPage } from "./systems/parallel/parallel";
import { Path } from "./paths/path/path";
import { Paths } from "./paths/paths";
import { ProgrammingPage } from "./programming/programming";
import { ResearchPage } from "./theory/research/research";
import { RoboticsPage } from "./intelligence/robotics/robotics";
import { SoftwareEngineeringPage } from "./software/software-engineering/software-engineering";
import { SystemDesignPage } from "./distributed/system-design/system-design";
import { TheoryPage } from "./theory/theory/theory";
import { Topics } from "./topics/topics";
import { VisionPage } from "./intelligence/vision/vision";
import { WebPage } from "./software/web/web";

export const routes: Routes = [
  { path: "", component: Home, title: "CS — Computer science topics" },
  { path: "topics", component: Library, title: "Library · CS" },

  // Programming Group
  { path: "programming", component: ProgrammingPage, title: "Programming · CS" },
  { path: "program", redirectTo: "programming", pathMatch: "full" },
  { path: "languages", component: LanguagesPage, title: "Programming Languages · CS" },
  { path: "programming/languages", component: LanguagesPage, title: "Programming Languages · CS" },
  { path: "fundamentals", component: FundamentalsPage, title: "Programming Fundamentals · CS" },
  { path: "programming/fundamentals", component: FundamentalsPage, title: "Programming Fundamentals · CS" },
  { path: "oop", component: OopPage, title: "Object-Oriented Programming · CS" },
  { path: "programming/oop", component: OopPage, title: "Object-Oriented Programming · CS" },
  { path: "dsa", component: DsaPage, title: "Data Structures & Algorithms · CS" },
  { path: "programming/dsa", component: DsaPage, title: "Data Structures & Algorithms · CS" },
  { path: "discrete-math", component: DiscreteMathPage, title: "Discrete Mathematics · CS" },
  { path: "programming/discrete-math", component: DiscreteMathPage, title: "Discrete Mathematics · CS" },

  // Networks Group
  { path: "networks", component: NetworksPage, title: "Computer Networks · CS" },

  // OS Group
  { path: "os", component: OsPage, title: "Operating Systems · CS" },

  // Databases Group
  { path: "dbms", component: DbmsPage, title: "Databases / DBMS · CS" },

  // Systems Group
  { path: "architecture", component: ArchitecturePage, title: "Computer Architecture · CS" },
  { path: "linux", component: LinuxPage, title: "Linux / Unix · CS" },
  { path: "parallel", component: ParallelPage, title: "Parallel & Concurrent Computing · CS" },

  // Software Group
  { path: "software-engineering", component: SoftwareEngineeringPage, title: "Software Engineering · CS" },
  { path: "web", component: WebPage, title: "Web Development · CS" },
  { path: "compilers", component: CompilersPage, title: "Compiler Design · CS" },
  { path: "mobile", component: MobilePage, title: "Mobile Computing · CS" },

  // Security & Cloud Group
  { path: "cybersecurity", component: CybersecurityPage, title: "Cybersecurity · CS" },
  { path: "cloud", component: CloudPage, title: "Cloud Computing · CS" },
  { path: "devops", component: DevopsPage, title: "DevOps / SRE · CS" },

  // Distributed & Design Group
  { path: "distributed", component: DistributedPage, title: "Distributed Systems · CS" },
  { path: "system-design", component: SystemDesignPage, title: "System Design · CS" },

  // Intelligence Group
  { path: "ai", component: AiPage, title: "Artificial Intelligence · CS" },
  { path: "ml", component: MlPage, title: "Machine Learning · CS" },
  { path: "deep-learning", component: DeepLearningPage, title: "Deep Learning · CS" },
  { path: "llm", component: LlmPage, title: "LLMs / Generative AI · CS" },
  { path: "nlp", component: NlpPage, title: "Natural Language Processing · CS" },
  { path: "vision", component: VisionPage, title: "Computer Vision · CS" },
  { path: "graphics", component: GraphicsPage, title: "Computer Graphics · CS" },
  { path: "robotics", component: RoboticsPage, title: "Robotics · CS" },

  // Theory & Practice Group
  { path: "theory", component: TheoryPage, title: "Theory of Computation · CS" },
  { path: "ir", component: IrPage, title: "Information Retrieval · CS" },
  { path: "research", component: ResearchPage, title: "Research Fundamentals · CS" },
  { path: "interview", component: InterviewPage, title: "Interview Preparation · CS" },

  // Shared Features
  { path: "topics/:slug", component: Topics, title: "Topic · CS" },
  { path: "labs", component: Labs, title: "Interactive labs · CS" },
  { path: "labs/:id", component: Lab, title: "Lab · CS" },
  { path: "paths", component: Paths, title: "Learning paths · CS" },
  { path: "paths/:id", component: Path, title: "Path · CS" },
  { path: "quiz", component: Interview, title: "Interview · CS" },
  { path: "graph", component: Graph, title: "Knowledge graph · CS" },
  { path: "**", component: NotFound, title: "Not found · CS" },
];
