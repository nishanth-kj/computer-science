import { Routes } from "@angular/router";
import { Home } from "./components/home/home";
import { Library } from "./components/library/library";
import { Labs } from "./components/labs/labs";
import { Graph } from "./components/graph/graph";
import { Interview } from "./components/interview/interview";
import { Paths } from "./components/paths/paths";
import { NotFound } from "./components/not-found/not-found";
import { TopicPage } from "./components/topics/topic-page";
import { LabPage } from "./components/lab-view/lab-page";
import { PathPage } from "./components/path-view/path-page";
import { LanguagesPage } from "./pages/languages/languages";
import { FundamentalsPage } from "./pages/fundamentals/fundamentals";
import { OopPage } from "./pages/oop/oop";
import { DsaPage } from "./pages/dsa/dsa";
import { DiscreteMathPage } from "./pages/discrete-math/discrete-math";
import { NetworksPage } from "./pages/networks/networks";
import { OsPage } from "./pages/os/os";
import { DbmsPage } from "./pages/dbms/dbms";
import { ArchitecturePage } from "./pages/architecture/architecture";
import { LinuxPage } from "./pages/linux/linux";
import { ParallelPage } from "./pages/parallel/parallel";
import { SoftwareEngineeringPage } from "./pages/software-engineering/software-engineering";
import { WebPage } from "./pages/web/web";
import { CompilersPage } from "./pages/compilers/compilers";
import { MobilePage } from "./pages/mobile/mobile";
import { CybersecurityPage } from "./pages/cybersecurity/cybersecurity";
import { CloudPage } from "./pages/cloud/cloud";
import { DevopsPage } from "./pages/devops/devops";
import { DistributedPage } from "./pages/distributed/distributed";
import { SystemDesignPage } from "./pages/system-design/system-design";
import { AiPage } from "./pages/ai/ai";
import { MlPage } from "./pages/ml/ml";
import { DeepLearningPage } from "./pages/deep-learning/deep-learning";
import { LlmPage } from "./pages/llm/llm";
import { NlpPage } from "./pages/nlp/nlp";
import { VisionPage } from "./pages/vision/vision";
import { GraphicsPage } from "./pages/graphics/graphics";
import { RoboticsPage } from "./pages/robotics/robotics";
import { TheoryPage } from "./pages/theory/theory";
import { IrPage } from "./pages/ir/ir";
import { ResearchPage } from "./pages/research/research";
import { InterviewPage } from "./pages/interview/interview";

export const routes: Routes = [
  { path: "", component: Home, title: "CS — Computer science topics" },
  { path: "topics", component: Library, title: "Library · CS" },
  { path: "topics/languages", component: LanguagesPage, title: "Programming Languages · CS" },
  { path: "topics/fundamentals", component: FundamentalsPage, title: "Programming Fundamentals · CS" },
  { path: "topics/oop", component: OopPage, title: "Object-Oriented Programming · CS" },
  { path: "topics/dsa", component: DsaPage, title: "Data Structures & Algorithms · CS" },
  { path: "topics/discrete-math", component: DiscreteMathPage, title: "Discrete Mathematics · CS" },
  { path: "topics/networks", component: NetworksPage, title: "Computer Networks · CS" },
  { path: "topics/os", component: OsPage, title: "Operating Systems · CS" },
  { path: "topics/dbms", component: DbmsPage, title: "Databases / DBMS · CS" },
  { path: "topics/architecture", component: ArchitecturePage, title: "Computer Architecture · CS" },
  { path: "topics/linux", component: LinuxPage, title: "Linux / Unix · CS" },
  { path: "topics/parallel", component: ParallelPage, title: "Parallel & Concurrent Computing · CS" },
  { path: "topics/software-engineering", component: SoftwareEngineeringPage, title: "Software Engineering · CS" },
  { path: "topics/web", component: WebPage, title: "Web Development · CS" },
  { path: "topics/compilers", component: CompilersPage, title: "Compiler Design · CS" },
  { path: "topics/mobile", component: MobilePage, title: "Mobile Computing · CS" },
  { path: "topics/cybersecurity", component: CybersecurityPage, title: "Cybersecurity · CS" },
  { path: "topics/cloud", component: CloudPage, title: "Cloud Computing · CS" },
  { path: "topics/devops", component: DevopsPage, title: "DevOps / SRE · CS" },
  { path: "topics/distributed", component: DistributedPage, title: "Distributed Systems · CS" },
  { path: "topics/system-design", component: SystemDesignPage, title: "System Design · CS" },
  { path: "topics/ai", component: AiPage, title: "Artificial Intelligence · CS" },
  { path: "topics/ml", component: MlPage, title: "Machine Learning · CS" },
  { path: "topics/deep-learning", component: DeepLearningPage, title: "Deep Learning · CS" },
  { path: "topics/llm", component: LlmPage, title: "LLMs / Generative AI · CS" },
  { path: "topics/nlp", component: NlpPage, title: "Natural Language Processing · CS" },
  { path: "topics/vision", component: VisionPage, title: "Computer Vision · CS" },
  { path: "topics/graphics", component: GraphicsPage, title: "Computer Graphics · CS" },
  { path: "topics/robotics", component: RoboticsPage, title: "Robotics · CS" },
  { path: "topics/theory", component: TheoryPage, title: "Theory of Computation · CS" },
  { path: "topics/ir", component: IrPage, title: "Information Retrieval · CS" },
  { path: "topics/research", component: ResearchPage, title: "Research Fundamentals · CS" },
  { path: "topics/interview", component: InterviewPage, title: "Interview Preparation · CS" },
  { path: "topics/:slug", component: TopicPage, title: "Topic · CS" },
  { path: "labs", component: Labs, title: "Interactive labs · CS" },
  { path: "labs/:id", component: LabPage, title: "Lab · CS" },
  { path: "paths", component: Paths, title: "Learning paths · CS" },
  { path: "paths/:id", component: PathPage, title: "Path · CS" },
  { path: "interview", component: Interview, title: "Interview · CS" },
  { path: "graph", component: Graph, title: "Knowledge graph · CS" },
  { path: "**", component: NotFound, title: "Not found · CS" },
];
