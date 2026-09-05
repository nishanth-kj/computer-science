import { Routes } from "@angular/router";
import { AiPage } from "./ai/ai";
import { ArchitecturePage } from "./architecture/architecture";
import { CloudPage } from "./cloud/cloud";
import { CompilersPage } from "./compilers/compilers";
import { CybersecurityPage } from "./cybersecurity/cybersecurity";
import { DbmsPage } from "./dbms/dbms";
import { DeepLearningPage } from "./deep-learning/deep-learning";
import { DevopsPage } from "./devops/devops";
import { DiscreteMathPage } from "./discrete-math/discrete-math";
import { DistributedPage } from "./distributed/distributed";
import { DsaPage } from "./dsa/dsa";
import { FundamentalsPage } from "./fundamentals/fundamentals";
import { Graph } from "./graph/graph";
import { GraphicsPage } from "./graphics/graphics";
import { Home } from "./home/home";
import { Interview } from "./interview-mode/interview";
import { InterviewPage } from "./interview/interview";
import { IrPage } from "./ir/ir";
import { Lab } from "./labs/lab/lab";
import { Labs } from "./labs/labs";
import { LanguagesPage } from "./languages/languages";
import { Library } from "./library/library";
import { LinuxPage } from "./linux/linux";
import { LlmPage } from "./llm/llm";
import { MlPage } from "./ml/ml";
import { MobilePage } from "./mobile/mobile";
import { NetworksPage } from "./networks/networks";
import { NlpPage } from "./nlp/nlp";
import { NotFound } from "./not-found/not-found";
import { OopPage } from "./oop/oop";
import { OsPage } from "./os/os";
import { ParallelPage } from "./parallel/parallel";
import { Path } from "./paths/path/path";
import { Paths } from "./paths/paths";
import { ResearchPage } from "./research/research";
import { RoboticsPage } from "./robotics/robotics";
import { SoftwareEngineeringPage } from "./software-engineering/software-engineering";
import { SystemDesignPage } from "./system-design/system-design";
import { TheoryPage } from "./theory/theory";
import { Topics } from "./topics/topics";
import { VisionPage } from "./vision/vision";
import { WebPage } from "./web/web";

export const routes: Routes = [
  { path: "", component: Home, title: "CS — Computer science topics" },
  { path: "topics", component: Library, title: "Library · CS" },
  { path: "languages", component: LanguagesPage, title: "Programming Languages · CS" },
  { path: "fundamentals", component: FundamentalsPage, title: "Programming Fundamentals · CS" },
  { path: "oop", component: OopPage, title: "Object-Oriented Programming · CS" },
  { path: "dsa", component: DsaPage, title: "Data Structures & Algorithms · CS" },
  { path: "discrete-math", component: DiscreteMathPage, title: "Discrete Mathematics · CS" },
  { path: "networks", component: NetworksPage, title: "Computer Networks · CS" },
  { path: "os", component: OsPage, title: "Operating Systems · CS" },
  { path: "dbms", component: DbmsPage, title: "Databases / DBMS · CS" },
  { path: "architecture", component: ArchitecturePage, title: "Computer Architecture · CS" },
  { path: "linux", component: LinuxPage, title: "Linux / Unix · CS" },
  { path: "parallel", component: ParallelPage, title: "Parallel & Concurrent Computing · CS" },
  { path: "software-engineering", component: SoftwareEngineeringPage, title: "Software Engineering · CS" },
  { path: "web", component: WebPage, title: "Web Development · CS" },
  { path: "compilers", component: CompilersPage, title: "Compiler Design · CS" },
  { path: "mobile", component: MobilePage, title: "Mobile Computing · CS" },
  { path: "cybersecurity", component: CybersecurityPage, title: "Cybersecurity · CS" },
  { path: "cloud", component: CloudPage, title: "Cloud Computing · CS" },
  { path: "devops", component: DevopsPage, title: "DevOps / SRE · CS" },
  { path: "distributed", component: DistributedPage, title: "Distributed Systems · CS" },
  { path: "system-design", component: SystemDesignPage, title: "System Design · CS" },
  { path: "ai", component: AiPage, title: "Artificial Intelligence · CS" },
  { path: "ml", component: MlPage, title: "Machine Learning · CS" },
  { path: "deep-learning", component: DeepLearningPage, title: "Deep Learning · CS" },
  { path: "llm", component: LlmPage, title: "LLMs / Generative AI · CS" },
  { path: "nlp", component: NlpPage, title: "Natural Language Processing · CS" },
  { path: "vision", component: VisionPage, title: "Computer Vision · CS" },
  { path: "graphics", component: GraphicsPage, title: "Computer Graphics · CS" },
  { path: "robotics", component: RoboticsPage, title: "Robotics · CS" },
  { path: "theory", component: TheoryPage, title: "Theory of Computation · CS" },
  { path: "ir", component: IrPage, title: "Information Retrieval · CS" },
  { path: "research", component: ResearchPage, title: "Research Fundamentals · CS" },
  { path: "interview", component: InterviewPage, title: "Interview Preparation · CS" },
  { path: "topics/:slug", component: Topics, title: "Topic · CS" },
  { path: "labs", component: Labs, title: "Interactive labs · CS" },
  { path: "labs/:id", component: Lab, title: "Lab · CS" },
  { path: "paths", component: Paths, title: "Learning paths · CS" },
  { path: "paths/:id", component: Path, title: "Path · CS" },
  { path: "quiz", component: Interview, title: "Interview · CS" },
  { path: "graph", component: Graph, title: "Knowledge graph · CS" },
  { path: "**", component: NotFound, title: "Not found · CS" },
];
