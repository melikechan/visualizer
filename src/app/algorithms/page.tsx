import KaTeX from "@/components/KaTeX";
import ShowCard from "@/components/ShowCard";
import NavigationButton from "@/components/NavigationButton";

const algorithmSections = [
  {
    title: "Sorting",
    categories: [
      {
        complexity: "n^2",
        algorithms: ["Bubble Sort", "Insertion Sort", "Selection Sort"],
      },
      {
        complexity: "n \\log n",
        algorithms: ["Merge Sort", "Quick Sort", "Heap Sort"],
      },
      {
        complexity: "n",
        algorithms: ["Counting Sort", "Radix Sort", "Bucket Sort"],
      },
    ],
  },
  {
    title: "Searching",
    categories: [
      { complexity: "n", algorithms: ["Linear Search"] },
      {
        complexity: "\\log n",
        algorithms: ["Binary Search", "Ternary Search"],
      },
    ],
  },
];

function AlgorithmCategory({
  complexity,
  section,
  algorithms,
}: {
  complexity: string;
  section: string;
  algorithms: string[];
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-center">
        <KaTeX math={`\\mathcal{O}(${complexity})`} /> algorithms
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {algorithms.map((algo) => (
          <ShowCard key={algo} className="w-full sm:w-64 gap-4">
            {algo}
            <NavigationButton
              href={`/algorithms/${section
                .toLowerCase()
                .replace(" ", "-")}/${algo.toLowerCase().replace(" ", "-")}`}
              ariaLabel={`Learn more about ${algo}`}
            >
              <span className="material-symbols-outlined">arrow_forward</span>
              Learn More
            </NavigationButton>
          </ShowCard>
        ))}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="container mx-auto px-4 py-8 space-y-12">
      {algorithmSections.map((section) => (
        <section key={section.title} className="space-y-8">
          <h1 className="text-4xl font-bold text-center">{section.title}</h1>
          {section.categories.map((category) => (
            <AlgorithmCategory
              key={category.complexity}
              section={section.title}
              {...category}
            />
          ))}
        </section>
      ))}
    </main>
  );
}
