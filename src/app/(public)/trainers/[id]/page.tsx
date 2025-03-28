import { DesktopTrainerProfile } from "@/components/trainer/detailedPage/TrainerProfile";
import { NewTrainerForm } from "@/components/trainer/new/NewTrainerForm";
import { getTrainerById } from "@/lib/trainer";

interface PageProps {
  params: Promise<{ id: string }>
  searchParams: Promise<{   mode?: 'edit'; }>
}

export default async function Page({ params, searchParams }: PageProps) {
    const { id } = await params;
    const { mode } =await  searchParams;

    if (id === "new") return <NewTrainerForm mode="new" />;
    const result = await getTrainerById(id);
    if (!result?.status) return <div>Failed to load trainer data</div>

    if (mode === "edit") return <NewTrainerForm mode="edit" initialTrainer={result.data} />;
    return <DesktopTrainerProfile trainer={result.data} mode={mode} />
  }
  