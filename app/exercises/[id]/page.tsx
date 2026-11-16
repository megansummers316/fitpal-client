import { Exercise } from "@/app/types/exercise";
//import { useParams } from "next/navigation";

export default async function ExerciseDetails({ params }: { params: { id: string }}) {
    //get id from url params
    const { id } = await params;

    //fetch selected doc from server api
    const res: Response = await fetch(`http://localhost:4000/api/v1/exercises/${id}`);

    // const data = await res.json();
    // console.log(data);
    const exercise: Exercise = await res.json();
    //check not found result
    if (!res.ok) {
        return (
            <main>
                <h1>Exercise not found</h1>
            </main>
        )
    }
    
    return (
        <main>
            <h1>Exercise Details</h1>
            <h2>{exercise.name}</h2>
            <h3>Intensity: {exercise.intensity}</h3>
            <h3>Duration: {exercise.duration}</h3>
            <h3>{new Date(exercise.date).toLocaleDateString()}</h3>
        </main>
    )
}