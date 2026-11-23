export const instant = false;

import DeleteExerciseForm from "@/app/components/deleteExerciseForm"
import { Exercise } from "@/app/types/exercise";

export default async function DeleteExercisePage({ params }: { params: { id: string }}) {
    const {id} = await params;
    //fetch selected exercise from db using id in url
    const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN!;
    const res: Response = await fetch(`${apiDomain}/exercises/${id}`);
    //if anything goes wrong fetching the exercise
    if (!res.ok) {
        return (<h1>Could not load exercise</h1>)
    }
    const exercise: Exercise = await res.json();
    //not doing anything other than rendering a page for the form to appear
    return (
        <main>
            <h1>Exercise Details</h1>
            <DeleteExerciseForm id={id} exercise={exercise} />
        </main>
    )
}