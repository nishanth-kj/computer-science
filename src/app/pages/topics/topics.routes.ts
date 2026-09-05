import { Routes } from "@angular/router";
import { LANGUAGES_ROUTES } from "../languages/languages.routes";
import { FUNDAMENTALS_ROUTES } from "../fundamentals/fundamentals.routes";
import { OOP_ROUTES } from "../oop/oop.routes";
import { DSA_ROUTES } from "../dsa/dsa.routes";
import { DISCRETEMATH_ROUTES } from "../discrete-math/discrete-math.routes";
import { NETWORKS_ROUTES } from "../networks/networks.routes";
import { OS_ROUTES } from "../os/os.routes";
import { DBMS_ROUTES } from "../dbms/dbms.routes";
import { ARCHITECTURE_ROUTES } from "../architecture/architecture.routes";
import { LINUX_ROUTES } from "../linux/linux.routes";
import { PARALLEL_ROUTES } from "../parallel/parallel.routes";
import { SOFTWAREENGINEERING_ROUTES } from "../software-engineering/software-engineering.routes";
import { WEB_ROUTES } from "../web/web.routes";
import { COMPILERS_ROUTES } from "../compilers/compilers.routes";
import { MOBILE_ROUTES } from "../mobile/mobile.routes";
import { CYBERSECURITY_ROUTES } from "../cybersecurity/cybersecurity.routes";
import { CLOUD_ROUTES } from "../cloud/cloud.routes";
import { DEVOPS_ROUTES } from "../devops/devops.routes";
import { DISTRIBUTED_ROUTES } from "../distributed/distributed.routes";
import { SYSTEMDESIGN_ROUTES } from "../system-design/system-design.routes";
import { AI_ROUTES } from "../ai/ai.routes";
import { ML_ROUTES } from "../ml/ml.routes";
import { DEEPLEARNING_ROUTES } from "../deep-learning/deep-learning.routes";
import { LLM_ROUTES } from "../llm/llm.routes";
import { NLP_ROUTES } from "../nlp/nlp.routes";
import { VISION_ROUTES } from "../vision/vision.routes";
import { GRAPHICS_ROUTES } from "../graphics/graphics.routes";
import { ROBOTICS_ROUTES } from "../robotics/robotics.routes";
import { THEORY_ROUTES } from "../theory/theory.routes";
import { IR_ROUTES } from "../ir/ir.routes";
import { RESEARCH_ROUTES } from "../research/research.routes";
import { INTERVIEW_ROUTES } from "../interview/interview.routes";
import { Topics } from "./topics";

export const TOPICS_ROUTES: Routes = [
  ...LANGUAGES_ROUTES,
  ...FUNDAMENTALS_ROUTES,
  ...OOP_ROUTES,
  ...DSA_ROUTES,
  ...DISCRETEMATH_ROUTES,
  ...NETWORKS_ROUTES,
  ...OS_ROUTES,
  ...DBMS_ROUTES,
  ...ARCHITECTURE_ROUTES,
  ...LINUX_ROUTES,
  ...PARALLEL_ROUTES,
  ...SOFTWAREENGINEERING_ROUTES,
  ...WEB_ROUTES,
  ...COMPILERS_ROUTES,
  ...MOBILE_ROUTES,
  ...CYBERSECURITY_ROUTES,
  ...CLOUD_ROUTES,
  ...DEVOPS_ROUTES,
  ...DISTRIBUTED_ROUTES,
  ...SYSTEMDESIGN_ROUTES,
  ...AI_ROUTES,
  ...ML_ROUTES,
  ...DEEPLEARNING_ROUTES,
  ...LLM_ROUTES,
  ...NLP_ROUTES,
  ...VISION_ROUTES,
  ...GRAPHICS_ROUTES,
  ...ROBOTICS_ROUTES,
  ...THEORY_ROUTES,
  ...IR_ROUTES,
  ...RESEARCH_ROUTES,
  ...INTERVIEW_ROUTES,
  { path: "topics/:slug", component: Topics, title: "Topic · CS" },
];
