import ImageUploader from "@/components/ImageUploader";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Background Remover
      </h1>
      <ImageUploader />
    </main>
  );
}
