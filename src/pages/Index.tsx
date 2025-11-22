import { ChecklistItem } from "@/components/ChecklistItem";

// Mock data from CSV
const mockData = [
  { chapter: 1, id: 1, description: "Montaż zastawek" },
  { chapter: 1, id: 2, description: "VT/PT Dźwigarów" },
  { chapter: 1, id: 3, description: "Weryfikacja głębokości rowków na kołnierzach" },
  { chapter: 1, id: 4, description: "Odbiory KPL i zgodność wymiarowa i geometryczna" },
  { chapter: 1, id: 5, description: "PŁ Kołnierza" },
  { chapter: 1, id: 6, description: "Próba szczelności" },
  { chapter: 1, id: 7, description: "Prostowanie wsporników i detali które mogą się skrzywić" },
  { chapter: 1, id: 8, description: "Zbrojenie kadzi" },
  { chapter: 2, id: 9, description: "Zwolnienie do premontażu" },
  { chapter: 2, id: 10, description: "Premontaż kadzi" },
  { chapter: 2, id: 11, description: "Spr nabicia NR" },
];

const Index = () => {
  // Group items by chapter
  const itemsByChapter = mockData.reduce((acc, item) => {
    if (!acc[item.chapter]) {
      acc[item.chapter] = [];
    }
    acc[item.chapter].push(item);
    return acc;
  }, {} as Record<number, typeof mockData>);

  return (
    <div className="min-h-screen bg-background pb-8">
      {Object.entries(itemsByChapter).map(([chapter, items]) => (
        <div key={chapter} className="mb-8">
          <header className="bg-primary text-primary-foreground py-6 px-4 shadow-lg sticky top-0 z-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-2xl font-bold tracking-tight">
                Chapter {chapter}
              </h1>
            </div>
          </header>
          
          <main className="max-w-4xl mx-auto px-4 mt-6">
            <div className="space-y-3">
              {items.map((item) => (
                <ChecklistItem
                  key={item.id}
                  id={item.id}
                  description={item.description}
                />
              ))}
            </div>
          </main>
        </div>
      ))}
    </div>
  );
};

export default Index;
