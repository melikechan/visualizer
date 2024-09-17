import NavigationButton from "@/components/NavigationButton";
import ShowCard from "@/components/ShowCard";

export default function Page() {
  return (
    <main className="flex flex-col items-center h-screen space-y-4 gap-8 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-5 gap-4">
        <ShowCard>
          <h3 className="text-xl lg:text-2xl">Array</h3>
          <NavigationButton href="/data-structures/array">
            <span className="material-symbols-outlined">
              arrow_forward
            </span>
          </NavigationButton>
        </ShowCard>
        <ShowCard>
          <h3 className="text-xl lg:text-2xl">Linked List</h3>
          <NavigationButton href="/data-structures/linked-list">
            <span className="material-symbols-outlined">
              arrow_forward
            </span>
          </NavigationButton>
        </ShowCard>
        <ShowCard>
          <h3 className="text-xl lg:text-2xl">Stack</h3>
          <NavigationButton href="/data-structures/stack">
            <span className="material-symbols-outlined">
              arrow_forward
            </span>
          </NavigationButton>
        </ShowCard>
        <ShowCard>
          <h3 className="text-xl lg:text-2xl">Queue</h3>
          <NavigationButton href="/data-structures/queue">
            <span className="material-symbols-outlined">
              arrow_forward
            </span>
          </NavigationButton>
        </ShowCard>
        <ShowCard>
          <h3 className="text-xl lg:text-2xl">Hash Table</h3>
          <NavigationButton href="/data-structures/hash-table">
            <span className="material-symbols-outlined">
              arrow_forward
            </span>
          </NavigationButton>
        </ShowCard>
        <ShowCard>
          <h3 className="text-xl lg:text-2xl">Graph</h3>
          <NavigationButton href="/data-structures/graph">
            <span className="material-symbols-outlined">
              arrow_forward
            </span>
          </NavigationButton>
        </ShowCard>
        <ShowCard>
          <h3 className="text-xl lg:text-2xl">Tree</h3>
          <NavigationButton href="/data-structures/tree">
            <span className="material-symbols-outlined">
              arrow_forward
            </span>
          </NavigationButton>
        </ShowCard>
        <ShowCard>
          <h3 className="text-xl lg:text-2xl">Heap</h3>
          <NavigationButton href="/data-structures/heap">
            <span className="material-symbols-outlined">
              arrow_forward
            </span>
          </NavigationButton>
        </ShowCard>
      </div>
    </main >
  );
}
