import { iq, T } from "../helpers";
import type { Topic } from "../types";

export const FLAGSHIP: Topic[] = [
  T({
    slug: "c",
    section: "languages",
    title: "C",
    summary: "A small systems language with manual memory, a stable ABI, and undefined behavior as the tax for being close to the machine.",
    level: "intermediate",
    prereqs: ["pointers", "compiler"],
    related: ["cpp", "memory", "linux-fundamentals"],
    next: "cpp",
    what: "C is a statically typed language with a thin runtime: you get a stack, a heap via malloc/free, and whatever the OS maps. There is no object system, no exceptions, and no bounds checking. The abstract machine is documented in the standard; violating it is undefined behavior, not a friendly error.",
    why: "Kernels, embedded firmware, language runtimes, and the ABI everything else calls into are still C. If you cannot read a C interface, you cannot read a system.",
    mental:
      "A structured assembler with a portable preprocessor. Names are storage; pointers are addresses; the compiler is allowed to assume you never lie about aliasing or object lifetime.",
    points: [
      "Syntax: declarations, statements, headers. Types: integers, floats, pointers, arrays, structs, enums. Arrays decay to pointers.",
      "Functions: C calling convention, pass-by-value, pointers for out-params. No overloading, no nested functions (in standard C).",
      "Memory: automatic (stack), static, malloc/free. You own the lifetime. Double-free and use-after-free are UB.",
      "Error handling: return codes and errno. No exceptions.",
      "Concurrency: pthreads and atomics (_Atomic, C11). Data races are UB.",
      "Standard library: stdio, stdlib, string, the rest is POSIX on Unix.",
    ],
    code: {
      lang: "c",
      title: "A buffer you must free",
      code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char *dup_upper(const char *s) {
    size_t n = strlen(s);
    char *out = malloc(n + 1);
    if (!out) return NULL;
    for (size_t i = 0; i < n; i++) {
        char c = s[i];
        out[i] = (c >= 'a' && c <= 'z') ? c - 32 : c;
    }
    out[n] = 0;
    return out;
}`,
    },
    extra: [
      {
        type: "table",
        headers: ["Idea", "C's version"],
        rows: [
          ["Variables", "Storage duration + type; uninitialized automatic = garbage"],
          ["OOP", "Structs + function pointers if you insist"],
          ["Memory", "malloc/free; no GC"],
          ["Errors", "int returns, errno, goto cleanup"],
          ["Concurrency", "pthreads; the memory model is C11 atomics"],
        ],
      },
      {
        type: "callout",
        kind: "warning",
        title: "Undefined behavior",
        text: "Signed overflow, use-after-free, data races, out-of-bounds — the compiler may delete your checks. Sanitizers (ASan, UBSan) are part of writing C, not extras.",
      },
    ],
    mistakes: ["Assuming malloc zeroed memory", "Returning a pointer to a local", "Ignoring malloc failure"],
    usage: ["OS kernels", "Embedded", "FFI boundaries"],
    interview: [
      iq("Stack vs heap in C?", "Automatic variables live in the frame and die when the function returns. malloc memory lives until free (or leak).", "beginner"),
      iq("What is undefined behavior?", "A program the standard does not constrain. The compiler may assume it never happens and optimize accordingly.", "intermediate"),
      iq("Why is C the lingua franca of ABIs?", "A stable, simple calling convention and struct layout. Other languages bind to C, not to each other.", "advanced"),
    ],
  }),
  T({
    slug: "cpp",
    section: "languages",
    title: "C++",
    summary: "C’s machine model plus zero-cost abstractions: RAII, templates, and a type system that can run at compile time.",
    level: "intermediate",
    prereqs: ["c"],
    related: ["rust", "oop"],
    next: "java",
    what: "C++ is a multi-paradigm language on top of C’s object model. Resource lifetime is tied to destructors (RAII). Templates generate code. Move semantics make ownership explicit without a garbage collector. Undefined behavior still exists.",
    why: "Games, browsers, databases, trading systems — anywhere C is too small and a GC pause is not allowed. Interviews still ask RAII, rule of five, and virtual dispatch.",
    mental:
      "C with a destructor that runs when a name goes out of scope. If every resource is owned by an object, cleanup is the stack unwinding.",
    points: [
      "Types: value types, references, pointers, templates, auto. Prefer references when null is not a value.",
      "OOP: classes, virtual, multiple inheritance (use sparingly), and composition.",
      "Memory: RAII (unique_ptr, shared_ptr, containers). Bare new is a smell.",
      "Error handling: exceptions and noexcept, plus std::expected in newer code.",
      "Concurrency: std::thread, mutex, atomics, and the C++ memory model.",
      "Standard library: STL containers, algorithms, <chrono>, ranges.",
    ],
    code: {
      lang: "cpp",
      title: "RAII owns the file",
      code: `#include <fstream>
#include <string>

std::string slurp(const std::string& path) {
    std::ifstream in(path);
    if (!in) throw std::runtime_error("open");
    return {std::istreambuf_iterator<char>(in), {}};
} // destructor closes the file even on throw`,
    },
    extra: [
      {
        type: "table",
        headers: ["C", "C++ default"],
        rows: [
          ["malloc/free", "vector / unique_ptr / make_unique"],
          ["NULL", "nullptr"],
          ["macros", "constexpr, templates, inline"],
          ["void*", "templates or std::span"],
        ],
      },
    ],
    mistakes: ["new without unique_ptr", "Exception-unsafe manual lock/unlock", "Returning a reference to a temporary"],
    usage: ["Performance-critical services", "Game engines", "Chrome, LLVM"],
    interview: [
      iq("What is RAII?", "Binding a resource to an object whose destructor releases it. Stack unwinding then frees everything.", "beginner"),
      iq("Rule of five?", "If you define one of destructor, copy, move, copy-assign, move-assign, you probably need to think about all five — or = default / = delete.", "intermediate"),
      iq("virtual destructor?", "Deleting a derived object through a base pointer is UB unless the base destructor is virtual.", "intermediate"),
    ],
  }),
  T({
    slug: "java",
    section: "languages",
    title: "Java",
    summary: "A managed, class-based language with a VM, a huge standard library, and a memory model that made shared-memory concurrency teachable.",
    level: "beginner",
    prereqs: ["oop", "garbage-collection"],
    related: ["kotlin", "jvm"],
    next: "python",
    what: "Java compiles to bytecode for the JVM. Objects live on the heap; primitives can live in frames. Garbage collection reclaims unreachable objects. The type system is nominal and (since 5) generic with erasure.",
    why: "It is the language of a large fraction of backend systems, Android’s historical core, and a standardized concurrency/memory story. Interviews assume you can talk about equals/hashCode, GC, and the JVM.",
    mental:
      "A class is a blueprint; an object is a heap node; a reference is a handle. The JVM JIT turns hot bytecode into machine code while you run.",
    points: [
      "Syntax: classes, interfaces, records, sealed types. Variables are typed; primitives vs reference types.",
      "OOP: single inheritance of classes, multiple of interfaces. Overriding vs overloading.",
      "Memory: GC generations, escape analysis, and the fact that 'stack allocation' is a JIT trick.",
      "Errors: checked exceptions (the controversy) and unchecked RuntimeException.",
      "Concurrency: threads, synchronized, java.util.concurrent, virtual threads (Loom).",
      "Standard library: collections, NIO, streams. Build: javac + jars, now often Maven/Gradle.",
    ],
    code: {
      lang: "java",
      title: "A record and a map",
      code: `record User(String id, String name) {}

Map<String, User> index = new HashMap<>();
index.put("1", new User("1", "Ada"));
User u = index.get("1");`,
    },
    extra: [
      {
        type: "callout",
        kind: "interview",
        title: "equals and hashCode",
        text: "If two objects are equal, they must have the same hashCode. Mutable keys in a HashMap are a classic footgun.",
      },
    ],
    mistakes: ["== on objects (identity) when you meant equals", "Synchronizing on a public object", "Ignoring the GC log until pause times become the product"],
    usage: ["Spring/Jakarta backends", "Android (historical + still)", "Big data (Spark, Kafka clients)"],
    interview: [
      iq("JDK vs JRE vs JVM?", "JVM runs bytecode. JRE is JVM + libs to run. JDK is JRE + compiler and tools to build.", "beginner"),
      iq("Checked vs unchecked exceptions?", "Checked must be declared or caught; they are for recoverable conditions. Unchecked (RuntimeException) are for bugs.", "intermediate"),
      iq("What does the JIT do?", "HotSpot interprets, then compiles hot methods to native code, with profiling to deoptimize if assumptions fail.", "advanced"),
    ],
  }),
  T({
    slug: "javascript",
    section: "languages",
    title: "JavaScript",
    summary: "The language of the web: prototypes, a single-threaded event loop, and a specification (ECMAScript) that outgrew the browser.",
    level: "beginner",
    prereqs: ["what-is-programming"],
    related: ["typescript", "event-loop"],
    next: "typescript",
    what: "JavaScript is a dynamically typed language with first-class functions, prototypal objects, and completion-based concurrency (promises, async/await) on a single JS thread. Engines (V8, SpiderMonkey, JavaScriptCore) JIT the hot paths.",
    why: "If it runs in a browser, it is JS (or something that compiles to it). Node made the same language a server runtime. Interviews always include the event loop and closures.",
    mental:
      "A stack, a heap, and a queue of tasks. JS never preempts your function; it finishes, then drains microtasks, then the next macrotask.",
    points: [
      "Types: seven primitives + objects. typeof null === 'object' is a fossil. Prefer ===.",
      "Functions: closures, this (depends on call site unless arrow), modules (ESM).",
      "OOP: prototypes, then class sugar. Composition still wins.",
      "Memory: GC. Detached DOM nodes and forgotten listeners leak.",
      "Concurrency: event loop, microtasks (promises), Web Workers / worker_threads for CPU.",
      "Standard library: sparse in the language; huge in the host (DOM, Node).",
    ],
    code: {
      lang: "javascript",
      title: "Closure plus a promise",
      code: `function makeCounter() {
  let n = 0;
  return () => ++n;
}
const c = makeCounter();
Promise.resolve()
  .then(() => console.log(c(), c()));`,
    },
    extra: [
      {
        type: "flow",
        steps: ["Call stack", "Synchronous work", "Microtasks (Promises)", "Render (browser)", "Next macrotask"],
      },
    ],
    mistakes: ["Assuming this is lexically bound in a method passed as a callback", "for...in on arrays", "Blocking the event loop with a tight CPU loop"],
    usage: ["Browsers", "Node/Deno services", "Electron / tooling"],
    interview: [
      iq("var vs let vs const?", "var is function-scoped and hoisted. let/const are block-scoped. const prevents rebinding, not mutation.", "beginner"),
      iq("Explain the event loop in one minute.", "One JS thread. Call stack runs to completion. Then microtasks (promise jobs). Then a macrotask (timer, I/O, click). Repeat.", "intermediate"),
      iq("What is a closure?", "A function plus the environment of bindings it was created with. The counter's n lives on the heap because the inner function still mentions it.", "beginner"),
    ],
  }),
  T({
    slug: "typescript",
    section: "languages",
    title: "TypeScript",
    summary: "A gradual type system that erases to JavaScript. Types are a development-time contract, not a runtime.",
    level: "beginner",
    prereqs: ["javascript"],
    related: ["javascript"],
    next: "go",
    what: "TypeScript adds a structural type system on top of JavaScript: interfaces, unions, generics, mapped and conditional types. tsc (or a bundler) erases types and emits JS. At runtime there are no TypeScript types unless you add a validator.",
    why: "It is how serious JS is written: refactors, IDE navigation, and a shared language for APIs. Interviews may ask you to type a function, not recite compiler flags.",
    mental:
      "JS with a proof checker that throws away the proof. If you need the check at runtime (API boundaries), you parse, you do not 'cast'.",
    points: [
      "Types: primitives, unions, intersections, literals, generics. Structural typing (duck typing with names).",
      "Functions: parameter bivariance pitfalls, overloads, this parameters.",
      "OOP: classes with access modifiers that erase. Prefer interfaces for contracts.",
      "Errors: types do not catch thrown strings. Result types are a convention.",
      "Concurrency: same event loop as JS. Types for Promise<T>.",
      "Standard library: lib.dom, @types/node. The types are the product.",
    ],
    code: {
      lang: "ts",
      title: "Narrowing a union",
      code: `type Result<T> = { ok: true; value: T } | { ok: false; error: string };

function unwrap<T>(r: Result<T>): T {
  if (!r.ok) throw new Error(r.error);
  return r.value;
}`,
    },
    mistakes: ["as unknown as T to silence the checker", "Trusting JSON.parse without a schema", "enum when a union of string literals would do"],
    usage: ["Application TS", "Library .d.ts", "The TS compiler as a linter of JSDoc"],
    interview: [
      iq("Does TypeScript exist at runtime?", "No. Types are erased. Runtime checks are your code or a schema library.", "beginner"),
      iq("Interface vs type alias?", "Mostly interchangeable. Interfaces merge; unions/mapped types need type. Structural either way.", "intermediate"),
    ],
  }),
  T({
    slug: "go",
    section: "languages",
    title: "Go",
    summary: "A small language with goroutines, channels, and a runtime aimed at networked services.",
    level: "intermediate",
    prereqs: ["functions"],
    related: ["rust", "concurrency"],
    next: "rust",
    what: "Go is statically typed, garbage collected, and compiled. Concurrency is a goroutine (a multiplexed green thread) plus channels or mutexes. Interfaces are satisfied implicitly. There is no generics-as-religion: they exist, used sparingly.",
    why: "Cloud infrastructure is written in Go (Docker, Kubernetes, much of Google’s own plumbing). Interviews ask about goroutines, the scheduler, and error handling as values.",
    mental:
      "A few types, a few keywords, and a runtime that makes 10,000 connections a boring number. Errors are values you pass up.",
    points: [
      "Types: structs, slices, maps, interfaces. Zero values are useful.",
      "Functions: multiple returns, defer. Methods on any named type in the same package.",
      "OOP: composition over inheritance. Interfaces are small (io.Reader).",
      "Memory: GC, escape analysis. Pointers exist; no pointer arithmetic.",
      "Errors: error interface, wrapping with %w. panics for bugs.",
      "Concurrency: go f(), chan, select, context for cancel. Data races: -race.",
    ],
    code: {
      lang: "go",
      title: "Fan-in with a channel",
      code: `func merge(a, b <-chan int) <-chan int {
    out := make(chan int)
    go func() {
        defer close(out)
        for a != nil || b != nil {
            select {
            case v, ok := <-a:
                if !ok { a = nil; continue }
                out <- v
            case v, ok := <-b:
                if !ok { b = nil; continue }
                out <- v
            }
        }
    }()
    return out
}`,
    },
    mistakes: ["Sharing memory without a mutex or channel", "Ignoring a returned error", "Goroutine leaks from missing cancel"],
    usage: ["CLIs", "Cloud control planes", "Network proxies"],
    interview: [
      iq("Goroutine vs OS thread?", "A goroutine is cheap and multiplexed onto OS threads by the Go scheduler. Blocking syscalls get a thread; the rest share.", "intermediate"),
      iq("Why defer?", "It runs when the surrounding function returns — including on panic — so cleanup sits next to acquisition.", "beginner"),
    ],
  }),
  T({
    slug: "rust",
    section: "languages",
    title: "Rust",
    summary: "Ownership, borrowing, and a type system that makes aliasing and mutation exclusive — without a GC.",
    level: "advanced",
    prereqs: ["pointers", "memory"],
    related: ["cpp", "go"],
    next: "kotlin",
    what: "Rust is a compiled language whose compiler (borrow checker) enforces: each value has one owner; you may have many shared references or one mutable reference, not both. Lifetimes make dangling references a compile error. Unsafe exists, and is the FFI/kernel escape hatch.",
    why: "Systems programming with C++ performance and fewer use-after-frees. Browsers, OS components, CLIs, and WASM. Interviews test ownership, not macros.",
    mental:
      "A value is a box. You can lend it (&) to many readers, or lend it mutably (&mut) to one writer. You cannot do both. When the owner drops, the box is gone.",
    points: [
      "Types: structs, enums (real sum types), traits, generics. Option and Result are the standard.",
      "Functions: ownership passed by value, or borrowed. Return types that own or borrow with explicit lifetimes when needed.",
      "Memory: stack by default, Box/Vec/String on the heap. Drop is RAII.",
      "Errors: Result<T, E> and the ? operator. panic for bugs.",
      "Concurrency: Send/Sync as auto-traits. Rayon, tokio, mutex that is not poison-blind.",
      "Standard library: iterators, collections, std::fs. Cargo is the package manager that stuck.",
    ],
    code: {
      lang: "rust",
      title: "Borrow, then own",
      code: `fn longest<'a>(a: &'a str, b: &'a str) -> &'a str {
    if a.len() >= b.len() { a } else { b }
}

fn take(s: String) { println!("{s}"); }

fn main() {
    let x = String::from("hi");
    take(x);          // x moved
    // println!("{x}"); // would not compile
}`,
    },
    extra: [
      {
        type: "callout",
        kind: "tip",
        title: "Aliasing XOR mutation",
        text: "That one sentence is the borrow checker. Shared XOR mutable. Interior mutability (Mutex, RefCell, UnsafeCell) is how you opt into a different contract.",
      },
    ],
    mistakes: ["clone() to appease the checker without understanding the move", "unwrap() in library code", "Fighting the checker instead of changing the data layout"],
    usage: ["Performance-sensitive services", "WASM", "Linux kernel modules, Firefox components"],
    interview: [
      iq("Ownership in one sentence?", "Each value has a single owner; when the owner goes out of scope the value is dropped.", "beginner"),
      iq("Why cannot you have & and &mut at once?", "A writer plus readers is a data race even on one thread (iterator invalidation). The checker forbids the aliasing pattern.", "intermediate"),
      iq("What is Send vs Sync?", "Send: the value can move to another thread. Sync: a shared reference can. Mutex<T> is Sync when T is Send.", "advanced"),
    ],
  }),
  T({
    slug: "kotlin",
    section: "languages",
    title: "Kotlin",
    summary: "A JVM (and beyond) language with null-safety, coroutines, and Java interop as a first-class goal.",
    level: "intermediate",
    prereqs: ["java"],
    related: ["java", "android"],
    next: "swift",
    what: "Kotlin is statically typed, null-safe at the type level (T vs T?), and compiles to JVM bytecode, JS, or native. Coroutines are the structured-concurrency story. Data classes, extension functions, and a pragmatic standard library are the everyday feel.",
    why: "Android’s preferred language, a growing backend language (Ktor, Spring), and a study in 'fix Java without breaking Java'.",
    mental: "Java’s object model with null as a type, and a compiler that writes the boilerplate (data class, default args) you used to generate.",
    points: [
      "Null safety: T? must be handled. Platform types from Java are the leak.",
      "Functions: top-level, extensions, lambdas with trailing syntax, suspend.",
      "OOP: classes, objects (singletons), sealed classes as sum types.",
      "Concurrency: coroutines, Dispatchers, structured concurrency (a scope owns children).",
      "Errors: exceptions, plus Result in the stdlib. Prefer typed failures at boundaries.",
    ],
    code: {
      lang: "kotlin",
      title: "Null-safe and a coroutine",
      code: `suspend fun load(id: String): User? =
    repo.find(id)?.also { cache.put(id, it) }

fun fullName(u: User?): String =
    u?.name ?: "unknown"`,
    },
    mistakes: ["!! as a habit", "Global CoroutineScope that outlives the UI", "Ignoring Java nulls at the boundary"],
    usage: ["Android", "Spring/Ktor backends", "Multiplatform libraries"],
    interview: [
      iq("T vs T??", "T cannot be null. T? can. The compiler forces a check or a default before you use a T? as T.", "beginner"),
      iq("What is a suspend function?", "A function the compiler can turn into a state machine so it can pause without blocking a thread.", "intermediate"),
    ],
  }),
  T({
    slug: "swift",
    section: "languages",
    title: "Swift",
    summary: "Apple’s language: value types, optionals, ARC, and protocol-oriented design.",
    level: "intermediate",
    prereqs: ["oop"],
    related: ["kotlin", "ios"],
    next: "sql-language",
    what: "Swift is statically typed with optionals, structs as value types (copy, usually copy-on-write), classes as reference types with ARC, and protocols that can be adopted by either. The compiler inserts retain/release; cycles need weak/unowned.",
    why: "iOS/macOS apps, and a careful study of value vs reference types. Interviews for Apple platforms live here.",
    mental:
      "Prefer structs. Reach for a class when identity and shared mutation are the point. Optionals make 'missing' a type, not a crash — unless you force-unwrap.",
    points: [
      "Types: struct, class, enum with associated values, protocols, generics.",
      "Memory: ARC for classes; values live in the frame or inline. Weak to break cycles.",
      "Errors: throws / try / Result. Optionals for absence, errors for failure.",
      "Concurrency: async/await, actors (isolation), GCD underneath.",
    ],
    code: {
      lang: "swift",
      title: "Optional and a value type",
      code: `struct User { let id: String; var name: String }

func greet(_ u: User?) -> String {
    guard let u else { return "hi" }
    return "hi \\(u.name)"
}`,
    },
    mistakes: ["Class for everything", "Strong reference cycles in closures (capture self)", "Force unwrap in production paths"],
    usage: ["iOS/macOS", "Server Swift in a few shops"],
    interview: [
      iq("struct vs class?", "Structs are value types (copy). Classes are reference types with identity and ARC. Protocols can apply to both.", "beginner"),
      iq("What is ARC?", "Automatic reference counting: retain on share, release on end of life. Not a tracing GC; cycles leak without weak.", "intermediate"),
    ],
  }),
  T({
    slug: "sql-language",
    section: "languages",
    title: "SQL (Language)",
    summary: "A declarative language for describing the result you want from a relational store.",
    level: "beginner",
    prereqs: ["relational-databases"],
    related: ["sql", "joins"],
    next: "bash",
    viz: "sql-playground",
    lab: "sql-playground",
    what: "SQL is a set-oriented language: you describe a relation, the engine picks a plan. SELECT is not a loop. DML (INSERT/UPDATE/DELETE), DDL (CREATE), and DCL (GRANT) are the other dialects in the same family.",
    why: "Every backend touches SQL. Writing it well (sets, not rows) is a career skill; fighting it with ORMs is a career tax.",
    mental: "Bags of rows flowing through operators. You specify the result; EXPLAIN shows the pipeline.",
    points: [
      "SELECT list is projection. FROM/JOIN is the product plus a predicate. WHERE filters rows; HAVING filters groups.",
      "NULL is not a value. Three-valued logic. IS NULL.",
      "Window functions vs GROUP BY: keep rows vs collapse them.",
      "Indexes are not SQL syntax for speed; they are physical structures the planner may use.",
    ],
    code: {
      lang: "sql",
      title: "Window vs group",
      code: `SELECT
  u.country,
  o.amount,
  SUM(o.amount) OVER (PARTITION BY u.country) AS country_total
FROM users u
JOIN orders o ON o.user_id = u.id;`,
    },
    extra: [{ type: "viz", id: "sql-playground" }],
    mistakes: ["Row-by-row in the app", "SELECT * in APIs", "WHERE amount = NULL"],
    usage: ["OLTP", "Analytics", "Migrations"],
    interview: [
      iq("WHERE vs HAVING?", "WHERE is pre-aggregate; HAVING is post-aggregate.", "beginner"),
      iq("What is a window function?", "A calculation over a related set of rows that does not collapse the current row. OVER (PARTITION BY …).", "intermediate"),
    ],
  }),
  T({
    slug: "bash",
    section: "languages",
    title: "Bash",
    summary: "The default Unix shell language: pipelines, redirection, and the glue of every server.",
    level: "beginner",
    prereqs: ["linux-fundamentals"],
    related: ["shell", "pipes"],
    next: "arrays",
    viz: "linux-terminal",
    lab: "linux-terminal",
    what: "Bash is a command language: it expands words, runs programs, and wires their file descriptors. It is also a programming language (functions, arrays, [[ ]]) that you should keep small.",
    why: "Every production box, CI job, and onboarding script. Interviews for backend/SRE almost always include a pipeline.",
    mental:
      "A program that builds argv arrays and file-descriptor graphs. The programs you launch do the work; bash is the glue.",
    points: [
      "Words split on IFS. Quote variables. Always.",
      "Pipes: stdout → stdin. Redirection: > >> 2>&1 <.",
      "Exit status: $?, set -euo pipefail as a starting discipline.",
      "[[ ]] for tests, not [ if you can help it. Functions are named scripts.",
    ],
    code: {
      lang: "bash",
      title: "A safe-ish snippet",
      code: [
        "set -euo pipefail",
        'file=${1:?usage: script file}',
        'grep -E "^ERROR" "$file" | wc -l',
      ].join("\n"),
    },
    extra: [{ type: "viz", id: "linux-terminal" }],
    mistakes: ["Unquoted $var", "Parsing ls", "Using bash for a 500-line program that wanted Python"],
    usage: ["Ops glue", "CI", "One-liners you can read in six months"],
    interview: [
      iq("What does 2>&1 do?", "Point file descriptor 2 (stderr) at the same place fd 1 (stdout) currently points.", "beginner"),
      iq('Why quote "$var"?', "Word splitting and globbing. Unquoted, a filename with a space becomes two arguments.", "beginner"),
    ],
  }),
];
