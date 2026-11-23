import EditExerciseForm from "@/app/components/editExerciseForm"

type Props = {
    id: string;
}

export default async function EditExercisePage({ id }: Props) {
    //fetch selected exercise from db using id in url
    return (
        <main>
            <h1>Exercise Details</h1>
            <EditExerciseForm/>
        </main>
    )
}