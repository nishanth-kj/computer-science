import { RedirectFunction, Routes } from "@angular/router";
import { PROGRAMMING_SECTION_IDS, SECTION_BY_ID, getSectionTopics, topicHref } from "@/lib/content";
import { MainLayout } from "@/app/layout/main";
import { Home } from "@/app/pages/home/home";

const loadLibrary = () => import("@/app/pages/library/library").then((m) => m.Library);
const loadNetworks = () => import("@/app/pages/networks/networks").then((m) => m.NetworksPage);
const loadOs = () => import("@/app/pages/os/os").then((m) => m.OsPage);
const loadDbms = () => import("@/app/pages/dbms/dbms").then((m) => m.DbmsPage);
const loadProgramming = () => import("@/app/pages/programming/programming").then((m) => m.ProgrammingPage);
const loadProgrammingSection = () => import("@/app/pages/programming/section/section").then((m) => m.ProgrammingSectionPage);
const loadProgrammingTopic = () => import("@/app/pages/programming/topic/topic").then((m) => m.ProgrammingTopicPage);
const loadAbout = () => import("@/app/pages/about/about").then((m) => m.AboutPage);
const loadPrivacy = () => import("@/app/pages/privacy/privacy").then((m) => m.PrivacyPage);
const loadTerms = () => import("@/app/pages/terms/terms").then((m) => m.TermsPage);
const loadContact = () => import("@/app/pages/contact/contact").then((m) => m.ContactPage);
const loadSupport = () => import("@/app/pages/support/support").then((m) => m.SupportPage);
const loadAffiliate = () => import("@/app/pages/affiliate-disclosure/affiliate-disclosure").then((m) => m.AffiliateDisclosurePage);
const loadNotFound = () => import("@/app/pages/not-found/not-found").then((m) => m.NotFound);

const loadNetworksAccessPoint = () => import("@/app/pages/networks/access-point/access-point").then((m) => m.NetworksAccessPointPage);
const loadNetworksArp = () => import("@/app/pages/networks/arp/arp").then((m) => m.NetworksArpPage);
const loadNetworksBandwidth = () => import("@/app/pages/networks/bandwidth/bandwidth").then((m) => m.NetworksBandwidthPage);
const loadNetworksBgp = () => import("@/app/pages/networks/bgp/bgp").then((m) => m.NetworksBgpPage);
const loadNetworksBridge = () => import("@/app/pages/networks/bridge/bridge").then((m) => m.NetworksBridgePage);
const loadNetworksCidr = () => import("@/app/pages/networks/cidr/cidr").then((m) => m.NetworksCidrPage);
const loadNetworksClientServer = () => import("@/app/pages/networks/client-server/client-server").then((m) => m.NetworksClientServerPage);
const loadNetworksCongestionControl = () => import("@/app/pages/networks/congestion-control/congestion-control").then((m) => m.NetworksCongestionControlPage);
const loadNetworksCopper = () => import("@/app/pages/networks/copper/copper").then((m) => m.NetworksCopperPage);
const loadNetworksDhcp = () => import("@/app/pages/networks/dhcp/dhcp").then((m) => m.NetworksDhcpPage);
const loadNetworksDns = () => import("@/app/pages/networks/dns/dns").then((m) => m.NetworksDnsPage);
const loadNetworksErrorDetection = () => import("@/app/pages/networks/error-detection/error-detection").then((m) => m.NetworksErrorDetectionPage);
const loadNetworksEthernet = () => import("@/app/pages/networks/ethernet/ethernet").then((m) => m.NetworksEthernetPage);
const loadNetworksFiber = () => import("@/app/pages/networks/fiber/fiber").then((m) => m.NetworksFiberPage);
const loadNetworksFirewall = () => import("@/app/pages/networks/firewall/firewall").then((m) => m.NetworksFirewallPage);
const loadNetworksFlowControl = () => import("@/app/pages/networks/flow-control/flow-control").then((m) => m.NetworksFlowControlPage);
const loadNetworksFrames = () => import("@/app/pages/networks/frames/frames").then((m) => m.NetworksFramesPage);
const loadNetworksFtp = () => import("@/app/pages/networks/ftp/ftp").then((m) => m.NetworksFtpPage);
const loadNetworksGateway = () => import("@/app/pages/networks/gateway/gateway").then((m) => m.NetworksGatewayPage);
const loadNetworksHttp = () => import("@/app/pages/networks/http/http").then((m) => m.NetworksHttpPage);
const loadNetworksHttps = () => import("@/app/pages/networks/https/https").then((m) => m.NetworksHttpsPage);
const loadNetworksHub = () => import("@/app/pages/networks/hub/hub").then((m) => m.NetworksHubPage);
const loadNetworksIcmp = () => import("@/app/pages/networks/icmp/icmp").then((m) => m.NetworksIcmpPage);
const loadNetworksIp = () => import("@/app/pages/networks/ip/ip").then((m) => m.NetworksIpPage);
const loadNetworksIpv4 = () => import("@/app/pages/networks/ipv4/ipv4").then((m) => m.NetworksIpv4Page);
const loadNetworksIpv6 = () => import("@/app/pages/networks/ipv6/ipv6").then((m) => m.NetworksIpv6Page);
const loadNetworksL1Physical = () => import("@/app/pages/networks/l1-physical/l1-physical").then((m) => m.NetworksL1PhysicalPage);
const loadNetworksL2DataLink = () => import("@/app/pages/networks/l2-data-link/l2-data-link").then((m) => m.NetworksL2DataLinkPage);
const loadNetworksL3Network = () => import("@/app/pages/networks/l3-network/l3-network").then((m) => m.NetworksL3NetworkPage);
const loadNetworksL4Transport = () => import("@/app/pages/networks/l4-transport/l4-transport").then((m) => m.NetworksL4TransportPage);
const loadNetworksL5Session = () => import("@/app/pages/networks/l5-session/l5-session").then((m) => m.NetworksL5SessionPage);
const loadNetworksL6Presentation = () => import("@/app/pages/networks/l6-presentation/l6-presentation").then((m) => m.NetworksL6PresentationPage);
const loadNetworksL7Application = () => import("@/app/pages/networks/l7-application/l7-application").then((m) => m.NetworksL7ApplicationPage);
const loadNetworksLan = () => import("@/app/pages/networks/lan/lan").then((m) => m.NetworksLanPage);
const loadNetworksLatency = () => import("@/app/pages/networks/latency/latency").then((m) => m.NetworksLatencyPage);
const loadNetworksMacAddresses = () => import("@/app/pages/networks/mac-addresses/mac-addresses").then((m) => m.NetworksMacAddressesPage);
const loadNetworksMan = () => import("@/app/pages/networks/man/man").then((m) => m.NetworksManPage);
const loadNetworksModem = () => import("@/app/pages/networks/modem/modem").then((m) => m.NetworksModemPage);
const loadNetworksModulation = () => import("@/app/pages/networks/modulation/modulation").then((m) => m.NetworksModulationPage);
const loadNetworksNat = () => import("@/app/pages/networks/nat/nat").then((m) => m.NetworksNatPage);
const loadNetworksNetworkDevices = () => import("@/app/pages/networks/network-devices/network-devices").then((m) => m.NetworksNetworkDevicesPage);
const loadNetworksNetworkTopology = () => import("@/app/pages/networks/network-topology/network-topology").then((m) => m.NetworksNetworkTopologyPage);
const loadNetworksOsiModel = () => import("@/app/pages/networks/osi-model/osi-model").then((m) => m.NetworksOsiModelPage);
const loadNetworksOsiVsTcpip = () => import("@/app/pages/networks/osi-vs-tcpip/osi-vs-tcpip").then((m) => m.NetworksOsiVsTcpipPage);
const loadNetworksOspf = () => import("@/app/pages/networks/ospf/ospf").then((m) => m.NetworksOspfPage);
const loadNetworksPan = () => import("@/app/pages/networks/pan/pan").then((m) => m.NetworksPanPage);
const loadNetworksPeerToPeer = () => import("@/app/pages/networks/peer-to-peer/peer-to-peer").then((m) => m.NetworksPeerToPeerPage);
const loadNetworksPorts = () => import("@/app/pages/networks/ports/ports").then((m) => m.NetworksPortsPage);
const loadNetworksRepeater = () => import("@/app/pages/networks/repeater/repeater").then((m) => m.NetworksRepeaterPage);
const loadNetworksRouter = () => import("@/app/pages/networks/router/router").then((m) => m.NetworksRouterPage);
const loadNetworksRouting = () => import("@/app/pages/networks/routing/routing").then((m) => m.NetworksRoutingPage);
const loadNetworksRoutingProtocols = () => import("@/app/pages/networks/routing-protocols/routing-protocols").then((m) => m.NetworksRoutingProtocolsPage);
const loadNetworksSignals = () => import("@/app/pages/networks/signals/signals").then((m) => m.NetworksSignalsPage);
const loadNetworksSmtp = () => import("@/app/pages/networks/smtp/smtp").then((m) => m.NetworksSmtpPage);
const loadNetworksSsh = () => import("@/app/pages/networks/ssh/ssh").then((m) => m.NetworksSshPage);
const loadNetworksStp = () => import("@/app/pages/networks/stp/stp").then((m) => m.NetworksStpPage);
const loadNetworksSubnetting = () => import("@/app/pages/networks/subnetting/subnetting").then((m) => m.NetworksSubnettingPage);
const loadNetworksSwitch = () => import("@/app/pages/networks/switch/switch").then((m) => m.NetworksSwitchPage);
const loadNetworksSwitching = () => import("@/app/pages/networks/switching/switching").then((m) => m.NetworksSwitchingPage);
const loadNetworksTcp = () => import("@/app/pages/networks/tcp/tcp").then((m) => m.NetworksTcpPage);
const loadNetworksTcpHandshake = () => import("@/app/pages/networks/tcp-handshake/tcp-handshake").then((m) => m.NetworksTcpHandshakePage);
const loadNetworksTcpIpModel = () => import("@/app/pages/networks/tcp-ip-model/tcp-ip-model").then((m) => m.NetworksTcpIpModelPage);
const loadNetworksTcpTeardown = () => import("@/app/pages/networks/tcp-teardown/tcp-teardown").then((m) => m.NetworksTcpTeardownPage);
const loadNetworksTransmissionMedia = () => import("@/app/pages/networks/transmission-media/transmission-media").then((m) => m.NetworksTransmissionMediaPage);
const loadNetworksUdp = () => import("@/app/pages/networks/udp/udp").then((m) => m.NetworksUdpPage);
const loadNetworksVlan = () => import("@/app/pages/networks/vlan/vlan").then((m) => m.NetworksVlanPage);
const loadNetworksWan = () => import("@/app/pages/networks/wan/wan").then((m) => m.NetworksWanPage);
const loadNetworksWebsockets = () => import("@/app/pages/networks/websockets/websockets").then((m) => m.NetworksWebsocketsPage);
const loadNetworksWhatIsNetworking = () => import("@/app/pages/networks/what-is-networking/what-is-networking").then((m) => m.NetworksWhatIsNetworkingPage);
const loadNetworksWifi = () => import("@/app/pages/networks/wifi/wifi").then((m) => m.NetworksWifiPage);
const loadNetworksWirelessPhy = () => import("@/app/pages/networks/wireless-phy/wireless-phy").then((m) => m.NetworksWirelessPhyPage);
const loadOsBankersAlgorithm = () => import("@/app/pages/os/bankers-algorithm/bankers-algorithm").then((m) => m.OsBankersAlgorithmPage);
const loadOsContextSwitching = () => import("@/app/pages/os/context-switching/context-switching").then((m) => m.OsContextSwitchingPage);
const loadOsCpuScheduling = () => import("@/app/pages/os/cpu-scheduling/cpu-scheduling").then((m) => m.OsCpuSchedulingPage);
const loadOsCriticalSections = () => import("@/app/pages/os/critical-sections/critical-sections").then((m) => m.OsCriticalSectionsPage);
const loadOsDeadlockAvoidance = () => import("@/app/pages/os/deadlock-avoidance/deadlock-avoidance").then((m) => m.OsDeadlockAvoidancePage);
const loadOsDeadlockPrevention = () => import("@/app/pages/os/deadlock-prevention/deadlock-prevention").then((m) => m.OsDeadlockPreventionPage);
const loadOsDeadlocks = () => import("@/app/pages/os/deadlocks/deadlocks").then((m) => m.OsDeadlocksPage);
const loadOsDiskScheduling = () => import("@/app/pages/os/disk-scheduling/disk-scheduling").then((m) => m.OsDiskSchedulingPage);
const loadOsFcfs = () => import("@/app/pages/os/fcfs/fcfs").then((m) => m.OsFcfsPage);
const loadOsFifoReplacement = () => import("@/app/pages/os/fifo-replacement/fifo-replacement").then((m) => m.OsFifoReplacementPage);
const loadOsFileSystems = () => import("@/app/pages/os/file-systems/file-systems").then((m) => m.OsFileSystemsPage);
const loadOsFork = () => import("@/app/pages/os/fork/fork").then((m) => m.OsForkPage);
const loadOsInterruptsOs = () => import("@/app/pages/os/interrupts-os/interrupts-os").then((m) => m.OsInterruptsOsPage);
const loadOsIo = () => import("@/app/pages/os/io/io").then((m) => m.OsIoPage);
const loadOsIpc = () => import("@/app/pages/os/ipc/ipc").then((m) => m.OsIpcPage);
const loadOsKernel = () => import("@/app/pages/os/kernel/kernel").then((m) => m.OsKernelPage);
const loadOsKernelMode = () => import("@/app/pages/os/kernel-mode/kernel-mode").then((m) => m.OsKernelModePage);
const loadOsLinuxProcessModel = () => import("@/app/pages/os/linux-process-model/linux-process-model").then((m) => m.OsLinuxProcessModelPage);
const loadOsLru = () => import("@/app/pages/os/lru/lru").then((m) => m.OsLruPage);
const loadOsMemoryManagement = () => import("@/app/pages/os/memory-management/memory-management").then((m) => m.OsMemoryManagementPage);
const loadOsMonitors = () => import("@/app/pages/os/monitors/monitors").then((m) => m.OsMonitorsPage);
const loadOsMutex = () => import("@/app/pages/os/mutex/mutex").then((m) => m.OsMutexPage);
const loadOsPageReplacement = () => import("@/app/pages/os/page-replacement/page-replacement").then((m) => m.OsPageReplacementPage);
const loadOsPageTables = () => import("@/app/pages/os/page-tables/page-tables").then((m) => m.OsPageTablesPage);
const loadOsPaging = () => import("@/app/pages/os/paging/paging").then((m) => m.OsPagingPage);
const loadOsPriorityScheduling = () => import("@/app/pages/os/priority-scheduling/priority-scheduling").then((m) => m.OsPrioritySchedulingPage);
const loadOsProcessStates = () => import("@/app/pages/os/process-states/process-states").then((m) => m.OsProcessStatesPage);
const loadOsProcesses = () => import("@/app/pages/os/processes/processes").then((m) => m.OsProcessesPage);
const loadOsRaceConditions = () => import("@/app/pages/os/race-conditions/race-conditions").then((m) => m.OsRaceConditionsPage);
const loadOsSegmentation = () => import("@/app/pages/os/segmentation/segmentation").then((m) => m.OsSegmentationPage);
const loadOsSignals = () => import("@/app/pages/os/signals/signals").then((m) => m.OsSignalsPage);
const loadOsRoundRobin = () => import("@/app/pages/os/round-robin/round-robin").then((m) => m.OsRoundRobinPage);
const loadOsSemaphore = () => import("@/app/pages/os/semaphore/semaphore").then((m) => m.OsSemaphorePage);
const loadOsSjf = () => import("@/app/pages/os/sjf/sjf").then((m) => m.OsSjfPage);
const loadOsSynchronization = () => import("@/app/pages/os/synchronization/synchronization").then((m) => m.OsSynchronizationPage);
const loadOsSystemCalls = () => import("@/app/pages/os/system-calls/system-calls").then((m) => m.OsSystemCallsPage);
const loadOsThrashing = () => import("@/app/pages/os/thrashing/thrashing").then((m) => m.OsThrashingPage);
const loadOsThreads = () => import("@/app/pages/os/threads/threads").then((m) => m.OsThreadsPage);
const loadOsTlb = () => import("@/app/pages/os/tlb/tlb").then((m) => m.OsTlbPage);
const loadOsUserMode = () => import("@/app/pages/os/user-mode/user-mode").then((m) => m.OsUserModePage);
const loadOsVirtualMemory = () => import("@/app/pages/os/virtual-memory/virtual-memory").then((m) => m.OsVirtualMemoryPage);
const loadOsWhatIsOs = () => import("@/app/pages/os/what-is-os/what-is-os").then((m) => m.OsWhatIsOsPage);
const loadOsWorkingSet = () => import("@/app/pages/os/working-set/working-set").then((m) => m.OsWorkingSetPage);
const loadDbms1nf = () => import("@/app/pages/dbms/1nf/1nf").then((m) => m.Dbms1nfPage);
const loadDbms2nf = () => import("@/app/pages/dbms/2nf/2nf").then((m) => m.Dbms2nfPage);
const loadDbms3nf = () => import("@/app/pages/dbms/3nf/3nf").then((m) => m.Dbms3nfPage);
const loadDbmsAcid = () => import("@/app/pages/dbms/acid/acid").then((m) => m.DbmsAcidPage);
const loadDbmsAggregation = () => import("@/app/pages/dbms/aggregation/aggregation").then((m) => m.DbmsAggregationPage);
const loadDbmsBTrees = () => import("@/app/pages/dbms/b-trees/b-trees").then((m) => m.DbmsBTreesPage);
const loadDbmsBcnf = () => import("@/app/pages/dbms/bcnf/bcnf").then((m) => m.DbmsBcnfPage);
const loadDbmsBplusTrees = () => import("@/app/pages/dbms/bplus-trees/bplus-trees").then((m) => m.DbmsBplusTreesPage);
const loadDbmsBufferPool = () => import("@/app/pages/dbms/buffer-pool/buffer-pool").then((m) => m.DbmsBufferPoolPage);
const loadDbmsColumnStores = () => import("@/app/pages/dbms/column-stores/column-stores").then((m) => m.DbmsColumnStoresPage);
const loadDbmsConcurrencyDb = () => import("@/app/pages/dbms/concurrency-db/concurrency-db").then((m) => m.DbmsConcurrencyDbPage);
const loadDbmsConstraints = () => import("@/app/pages/dbms/constraints/constraints").then((m) => m.DbmsConstraintsPage);
const loadDbmsDatabaseFundamentals = () => import("@/app/pages/dbms/database-fundamentals/database-fundamentals").then((m) => m.DbmsDatabaseFundamentalsPage);
const loadDbmsDocumentStores = () => import("@/app/pages/dbms/document-stores/document-stores").then((m) => m.DbmsDocumentStoresPage);
const loadDbmsForeignKeys = () => import("@/app/pages/dbms/foreign-keys/foreign-keys").then((m) => m.DbmsForeignKeysPage);
const loadDbmsGraphDatabases = () => import("@/app/pages/dbms/graph-databases/graph-databases").then((m) => m.DbmsGraphDatabasesPage);
const loadDbmsIndexes = () => import("@/app/pages/dbms/indexes/indexes").then((m) => m.DbmsIndexesPage);
const loadDbmsIsolationLevels = () => import("@/app/pages/dbms/isolation-levels/isolation-levels").then((m) => m.DbmsIsolationLevelsPage);
const loadDbmsJoins = () => import("@/app/pages/dbms/joins/joins").then((m) => m.DbmsJoinsPage);
const loadDbmsKeyValue = () => import("@/app/pages/dbms/key-value/key-value").then((m) => m.DbmsKeyValuePage);
const loadDbmsLocksDb = () => import("@/app/pages/dbms/locks-db/locks-db").then((m) => m.DbmsLocksDbPage);
const loadDbmsMvcc = () => import("@/app/pages/dbms/mvcc/mvcc").then((m) => m.DbmsMvccPage);
const loadDbmsNormalization = () => import("@/app/pages/dbms/normalization/normalization").then((m) => m.DbmsNormalizationPage);
const loadDbmsPartitioning = () => import("@/app/pages/dbms/partitioning/partitioning").then((m) => m.DbmsPartitioningPage);
const loadDbmsPrimaryKeys = () => import("@/app/pages/dbms/primary-keys/primary-keys").then((m) => m.DbmsPrimaryKeysPage);
const loadDbmsQueryOptimization = () => import("@/app/pages/dbms/query-optimization/query-optimization").then((m) => m.DbmsQueryOptimizationPage);
const loadDbmsQueryPlanners = () => import("@/app/pages/dbms/query-planners/query-planners").then((m) => m.DbmsQueryPlannersPage);
const loadDbmsRelationalDatabases = () => import("@/app/pages/dbms/relational-databases/relational-databases").then((m) => m.DbmsRelationalDatabasesPage);
const loadDbmsReplicationDb = () => import("@/app/pages/dbms/replication-db/replication-db").then((m) => m.DbmsReplicationDbPage);
const loadDbmsSharding = () => import("@/app/pages/dbms/sharding/sharding").then((m) => m.DbmsShardingPage);
const loadDbmsSql = () => import("@/app/pages/dbms/sql/sql").then((m) => m.DbmsSqlPage);
const loadDbmsStorageEngines = () => import("@/app/pages/dbms/storage-engines/storage-engines").then((m) => m.DbmsStorageEnginesPage);
const loadDbmsSubqueries = () => import("@/app/pages/dbms/subqueries/subqueries").then((m) => m.DbmsSubqueriesPage);
const loadDbmsTables = () => import("@/app/pages/dbms/tables/tables").then((m) => m.DbmsTablesPage);
const loadDbmsTransactions = () => import("@/app/pages/dbms/transactions/transactions").then((m) => m.DbmsTransactionsPage);
const loadDbmsViews = () => import("@/app/pages/dbms/views/views").then((m) => m.DbmsViewsPage);
const loadDbmsWal = () => import("@/app/pages/dbms/wal/wal").then((m) => m.DbmsWalPage);

const toTopicPage: RedirectFunction = ({ params }) => topicHref(params["slug"] ?? "");

// Programming topics share one lazy page; routes come from the catalog so only real slugs resolve.
const programmingRoutes: Routes = PROGRAMMING_SECTION_IDS.map((id) => ({
  path: id,
  children: [
    {
      path: "",
      loadComponent: loadProgrammingSection,
      data: { id },
      title: `${SECTION_BY_ID[id].title} · CS`,
    },
    ...getSectionTopics(id).map((t) => ({
      path: t.slug,
      loadComponent: loadProgrammingTopic,
      data: { slug: t.slug },
      title: `${t.title} · CS`,
    })),
  ],
}));

export const routes: Routes = [
  {
    path: "",
    component: MainLayout,
    children: [
      { path: "", component: Home, title: "CS — Learn computer science in depth" },
      {
        path: "library",
        children: [
          { path: "", loadComponent: loadLibrary, data: { preload: true }, title: "Library · CS" },
          { path: ":slug", redirectTo: toTopicPage },
        ],
      },
      {
        path: "networks",
        children: [
          { path: "", loadComponent: loadNetworks, data: { preload: true }, title: "Computer Networks · CS" },
          { path: "access-point", loadComponent: loadNetworksAccessPoint, title: "Access Point · CS" },
          { path: "arp", loadComponent: loadNetworksArp, title: "ARP · CS" },
          { path: "bandwidth", loadComponent: loadNetworksBandwidth, title: "Bandwidth · CS" },
          { path: "bgp", loadComponent: loadNetworksBgp, title: "BGP · CS" },
          { path: "bridge", loadComponent: loadNetworksBridge, title: "Bridge · CS" },
          { path: "cidr", loadComponent: loadNetworksCidr, title: "CIDR · CS" },
          { path: "client-server", loadComponent: loadNetworksClientServer, title: "Client/Server · CS" },
          { path: "congestion-control", loadComponent: loadNetworksCongestionControl, title: "Congestion Control · CS" },
          { path: "copper", loadComponent: loadNetworksCopper, title: "Copper · CS" },
          { path: "dhcp", loadComponent: loadNetworksDhcp, title: "DHCP · CS" },
          { path: "dns", loadComponent: loadNetworksDns, title: "DNS · CS" },
          { path: "error-detection", loadComponent: loadNetworksErrorDetection, title: "Error Detection · CS" },
          { path: "ethernet", loadComponent: loadNetworksEthernet, title: "Ethernet · CS" },
          { path: "fiber", loadComponent: loadNetworksFiber, title: "Fiber · CS" },
          { path: "firewall", loadComponent: loadNetworksFirewall, title: "Firewall · CS" },
          { path: "flow-control", loadComponent: loadNetworksFlowControl, title: "Flow Control · CS" },
          { path: "frames", loadComponent: loadNetworksFrames, title: "Frames · CS" },
          { path: "ftp", loadComponent: loadNetworksFtp, title: "FTP · CS" },
          { path: "gateway", loadComponent: loadNetworksGateway, title: "Gateway · CS" },
          { path: "http", loadComponent: loadNetworksHttp, title: "HTTP · CS" },
          { path: "https", loadComponent: loadNetworksHttps, title: "HTTPS · CS" },
          { path: "hub", loadComponent: loadNetworksHub, title: "Hub · CS" },
          { path: "icmp", loadComponent: loadNetworksIcmp, title: "ICMP · CS" },
          { path: "ip", loadComponent: loadNetworksIp, title: "IP · CS" },
          { path: "ipv4", loadComponent: loadNetworksIpv4, title: "IPv4 · CS" },
          { path: "ipv6", loadComponent: loadNetworksIpv6, title: "IPv6 · CS" },
          { path: "l1-physical", loadComponent: loadNetworksL1Physical, title: "Layer 1 — Physical · CS" },
          { path: "l2-data-link", loadComponent: loadNetworksL2DataLink, title: "Layer 2 — Data Link · CS" },
          { path: "l3-network", loadComponent: loadNetworksL3Network, title: "Layer 3 — Network · CS" },
          { path: "l4-transport", loadComponent: loadNetworksL4Transport, title: "Layer 4 — Transport · CS" },
          { path: "l5-session", loadComponent: loadNetworksL5Session, title: "Layer 5 — Session · CS" },
          { path: "l6-presentation", loadComponent: loadNetworksL6Presentation, title: "Layer 6 — Presentation · CS" },
          { path: "l7-application", loadComponent: loadNetworksL7Application, title: "Layer 7 — Application · CS" },
          { path: "lan", loadComponent: loadNetworksLan, title: "LAN · CS" },
          { path: "latency", loadComponent: loadNetworksLatency, title: "Latency · CS" },
          { path: "mac-addresses", loadComponent: loadNetworksMacAddresses, title: "MAC Addresses · CS" },
          { path: "man", loadComponent: loadNetworksMan, title: "MAN · CS" },
          { path: "modem", loadComponent: loadNetworksModem, title: "Modem · CS" },
          { path: "modulation", loadComponent: loadNetworksModulation, title: "Modulation · CS" },
          { path: "nat", loadComponent: loadNetworksNat, title: "NAT · CS" },
          { path: "network-devices", loadComponent: loadNetworksNetworkDevices, title: "Network Devices · CS" },
          { path: "network-topology", loadComponent: loadNetworksNetworkTopology, title: "Network Topology · CS" },
          { path: "osi-model", loadComponent: loadNetworksOsiModel, title: "OSI Model · CS" },
          { path: "osi-vs-tcpip", loadComponent: loadNetworksOsiVsTcpip, title: "OSI vs TCP/IP · CS" },
          { path: "ospf", loadComponent: loadNetworksOspf, title: "OSPF · CS" },
          { path: "pan", loadComponent: loadNetworksPan, title: "PAN · CS" },
          { path: "peer-to-peer", loadComponent: loadNetworksPeerToPeer, title: "Peer-to-Peer · CS" },
          { path: "ports", loadComponent: loadNetworksPorts, title: "Ports · CS" },
          { path: "repeater", loadComponent: loadNetworksRepeater, title: "Repeater · CS" },
          { path: "router", loadComponent: loadNetworksRouter, title: "Router · CS" },
          { path: "routing", loadComponent: loadNetworksRouting, title: "Routing · CS" },
          { path: "routing-protocols", loadComponent: loadNetworksRoutingProtocols, title: "Routing Protocols · CS" },
          { path: "signals", loadComponent: loadNetworksSignals, title: "Signals · CS" },
          { path: "smtp", loadComponent: loadNetworksSmtp, title: "SMTP · CS" },
          { path: "ssh", loadComponent: loadNetworksSsh, title: "SSH · CS" },
          { path: "stp", loadComponent: loadNetworksStp, title: "Spanning Tree · CS" },
          { path: "subnetting", loadComponent: loadNetworksSubnetting, title: "Subnetting · CS" },
          { path: "switch", loadComponent: loadNetworksSwitch, title: "Switch · CS" },
          { path: "switching", loadComponent: loadNetworksSwitching, title: "Switching · CS" },
          { path: "tcp", loadComponent: loadNetworksTcp, title: "TCP · CS" },
          { path: "tcp-handshake", loadComponent: loadNetworksTcpHandshake, title: "TCP Handshake · CS" },
          { path: "tcp-ip-model", loadComponent: loadNetworksTcpIpModel, title: "TCP/IP Model · CS" },
          { path: "tcp-teardown", loadComponent: loadNetworksTcpTeardown, title: "TCP Teardown · CS" },
          { path: "transmission-media", loadComponent: loadNetworksTransmissionMedia, title: "Transmission Media · CS" },
          { path: "udp", loadComponent: loadNetworksUdp, title: "UDP · CS" },
          { path: "vlan", loadComponent: loadNetworksVlan, title: "VLANs · CS" },
          { path: "wan", loadComponent: loadNetworksWan, title: "WAN · CS" },
          { path: "websockets", loadComponent: loadNetworksWebsockets, title: "WebSockets · CS" },
          { path: "what-is-networking", loadComponent: loadNetworksWhatIsNetworking, title: "What is Networking? · CS" },
          { path: "wifi", loadComponent: loadNetworksWifi, title: "Wi-Fi · CS" },
          { path: "wireless-phy", loadComponent: loadNetworksWirelessPhy, title: "Wireless · CS" },
        ],
      },
      {
        path: "os",
        children: [
          { path: "", loadComponent: loadOs, data: { preload: true }, title: "Operating Systems · CS" },
          { path: "bankers-algorithm", loadComponent: loadOsBankersAlgorithm, title: "Banker's Algorithm · CS" },
          { path: "context-switching", loadComponent: loadOsContextSwitching, title: "Context Switching · CS" },
          { path: "cpu-scheduling", loadComponent: loadOsCpuScheduling, title: "CPU Scheduling · CS" },
          { path: "critical-sections", loadComponent: loadOsCriticalSections, title: "Critical Sections · CS" },
          { path: "deadlock-avoidance", loadComponent: loadOsDeadlockAvoidance, title: "Deadlock Avoidance · CS" },
          { path: "deadlock-prevention", loadComponent: loadOsDeadlockPrevention, title: "Deadlock Prevention · CS" },
          { path: "deadlocks", loadComponent: loadOsDeadlocks, title: "Deadlocks · CS" },
          { path: "disk-scheduling", loadComponent: loadOsDiskScheduling, title: "Disk Scheduling · CS" },
          { path: "fcfs", loadComponent: loadOsFcfs, title: "FCFS · CS" },
          { path: "fifo-replacement", loadComponent: loadOsFifoReplacement, title: "FIFO Replacement · CS" },
          { path: "file-systems", loadComponent: loadOsFileSystems, title: "File Systems · CS" },
          { path: "fork", loadComponent: loadOsFork, title: "fork() · CS" },
          { path: "interrupts-os", loadComponent: loadOsInterruptsOs, title: "Interrupts (OS) · CS" },
          { path: "io", loadComponent: loadOsIo, title: "I/O · CS" },
          { path: "ipc", loadComponent: loadOsIpc, title: "IPC · CS" },
          { path: "kernel", loadComponent: loadOsKernel, title: "Kernel · CS" },
          { path: "kernel-mode", loadComponent: loadOsKernelMode, title: "Kernel Mode · CS" },
          { path: "linux-process-model", loadComponent: loadOsLinuxProcessModel, title: "Linux Process Model · CS" },
          { path: "lru", loadComponent: loadOsLru, title: "LRU · CS" },
          { path: "memory-management", loadComponent: loadOsMemoryManagement, title: "Memory Management · CS" },
          { path: "monitors", loadComponent: loadOsMonitors, title: "Monitors · CS" },
          { path: "mutex", loadComponent: loadOsMutex, title: "Mutex · CS" },
          { path: "page-replacement", loadComponent: loadOsPageReplacement, title: "Page Replacement · CS" },
          { path: "page-tables", loadComponent: loadOsPageTables, title: "Page Tables · CS" },
          { path: "paging", loadComponent: loadOsPaging, title: "Paging · CS" },
          { path: "priority-scheduling", loadComponent: loadOsPriorityScheduling, title: "Priority Scheduling · CS" },
          { path: "process-states", loadComponent: loadOsProcessStates, title: "Process States · CS" },
          { path: "processes", loadComponent: loadOsProcesses, title: "Processes · CS" },
          { path: "race-conditions", loadComponent: loadOsRaceConditions, title: "Race Conditions · CS" },
          { path: "segmentation", loadComponent: loadOsSegmentation, title: "Segmentation · CS" },
          { path: "signals", loadComponent: loadOsSignals, title: "Signals · CS" },
          { path: "round-robin", loadComponent: loadOsRoundRobin, title: "Round Robin · CS" },
          { path: "semaphore", loadComponent: loadOsSemaphore, title: "Semaphore · CS" },
          { path: "sjf", loadComponent: loadOsSjf, title: "SJF · CS" },
          { path: "synchronization", loadComponent: loadOsSynchronization, title: "Synchronization · CS" },
          { path: "system-calls", loadComponent: loadOsSystemCalls, title: "System Calls · CS" },
          { path: "thrashing", loadComponent: loadOsThrashing, title: "Thrashing · CS" },
          { path: "threads", loadComponent: loadOsThreads, title: "Threads · CS" },
          { path: "tlb", loadComponent: loadOsTlb, title: "TLB · CS" },
          { path: "user-mode", loadComponent: loadOsUserMode, title: "User Mode · CS" },
          { path: "virtual-memory", loadComponent: loadOsVirtualMemory, title: "Virtual Memory · CS" },
          { path: "what-is-os", loadComponent: loadOsWhatIsOs, title: "What is an OS? · CS" },
          { path: "working-set", loadComponent: loadOsWorkingSet, title: "Working Set · CS" },
        ],
      },
      {
        path: "dbms",
        children: [
          { path: "", loadComponent: loadDbms, data: { preload: true }, title: "Databases / DBMS · CS" },
          { path: "1nf", loadComponent: loadDbms1nf, title: "1NF · CS" },
          { path: "2nf", loadComponent: loadDbms2nf, title: "2NF · CS" },
          { path: "3nf", loadComponent: loadDbms3nf, title: "3NF · CS" },
          { path: "acid", loadComponent: loadDbmsAcid, title: "ACID · CS" },
          { path: "aggregation", loadComponent: loadDbmsAggregation, title: "Aggregation · CS" },
          { path: "b-trees", loadComponent: loadDbmsBTrees, title: "B-Trees · CS" },
          { path: "bcnf", loadComponent: loadDbmsBcnf, title: "BCNF · CS" },
          { path: "bplus-trees", loadComponent: loadDbmsBplusTrees, title: "B+ Trees · CS" },
          { path: "buffer-pool", loadComponent: loadDbmsBufferPool, title: "Buffer Pool · CS" },
          { path: "column-stores", loadComponent: loadDbmsColumnStores, title: "Column Stores · CS" },
          { path: "concurrency-db", loadComponent: loadDbmsConcurrencyDb, title: "Database Concurrency · CS" },
          { path: "constraints", loadComponent: loadDbmsConstraints, title: "Constraints · CS" },
          { path: "database-fundamentals", loadComponent: loadDbmsDatabaseFundamentals, title: "Database Fundamentals · CS" },
          { path: "document-stores", loadComponent: loadDbmsDocumentStores, title: "Document Stores · CS" },
          { path: "foreign-keys", loadComponent: loadDbmsForeignKeys, title: "Foreign Keys · CS" },
          { path: "graph-databases", loadComponent: loadDbmsGraphDatabases, title: "Graph Databases · CS" },
          { path: "indexes", loadComponent: loadDbmsIndexes, title: "Indexes · CS" },
          { path: "isolation-levels", loadComponent: loadDbmsIsolationLevels, title: "Isolation Levels · CS" },
          { path: "joins", loadComponent: loadDbmsJoins, title: "Joins · CS" },
          { path: "key-value", loadComponent: loadDbmsKeyValue, title: "Key-Value Stores · CS" },
          { path: "locks-db", loadComponent: loadDbmsLocksDb, title: "Locks (DB) · CS" },
          { path: "mvcc", loadComponent: loadDbmsMvcc, title: "MVCC · CS" },
          { path: "normalization", loadComponent: loadDbmsNormalization, title: "Normalization · CS" },
          { path: "partitioning", loadComponent: loadDbmsPartitioning, title: "Partitioning · CS" },
          { path: "primary-keys", loadComponent: loadDbmsPrimaryKeys, title: "Primary Keys · CS" },
          { path: "query-optimization", loadComponent: loadDbmsQueryOptimization, title: "Query Optimization · CS" },
          { path: "query-planners", loadComponent: loadDbmsQueryPlanners, title: "Query Planners · CS" },
          { path: "relational-databases", loadComponent: loadDbmsRelationalDatabases, title: "Relational Databases · CS" },
          { path: "replication-db", loadComponent: loadDbmsReplicationDb, title: "Replication (DB) · CS" },
          { path: "sharding", loadComponent: loadDbmsSharding, title: "Sharding · CS" },
          { path: "sql", loadComponent: loadDbmsSql, title: "SQL · CS" },
          { path: "storage-engines", loadComponent: loadDbmsStorageEngines, title: "Storage Engines · CS" },
          { path: "subqueries", loadComponent: loadDbmsSubqueries, title: "Subqueries · CS" },
          { path: "tables", loadComponent: loadDbmsTables, title: "Tables · CS" },
          { path: "transactions", loadComponent: loadDbmsTransactions, title: "Transactions · CS" },
          { path: "views", loadComponent: loadDbmsViews, title: "Views · CS" },
          { path: "wal", loadComponent: loadDbmsWal, title: "Write-Ahead Log · CS" },
        ],
      },
      {
        path: "programming",
        children: [
          { path: "", loadComponent: loadProgramming, data: { preload: true }, title: "Programming · CS" },
          ...programmingRoutes,
        ],
      },
      { path: "phase-2", redirectTo: "library" },
      { path: "paths", redirectTo: "library", pathMatch: "prefix" },
      { path: "topics", redirectTo: "library", pathMatch: "prefix" },
      { path: "labs", redirectTo: "library", pathMatch: "prefix" },
      { path: "graph", redirectTo: "library" },
      { path: "about", loadComponent: loadAbout, title: "About · CS" },
      { path: "privacy", loadComponent: loadPrivacy, title: "Privacy · CS" },
      { path: "terms", loadComponent: loadTerms, title: "Terms of Service · CS" },
      { path: "contact", loadComponent: loadContact, title: "Contact · CS" },
      { path: "support", loadComponent: loadSupport, title: "Support the Handbook · CS" },
      { path: "affiliate-disclosure", loadComponent: loadAffiliate, title: "Affiliate Disclosure · CS" },
      { path: "**", loadComponent: loadNotFound, title: "Not found · CS" },
    ],
  },
];
