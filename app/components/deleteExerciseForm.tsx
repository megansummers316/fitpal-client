'use client';

import { Exercise } from "@/app/types/exercise";
import { register } from "module";
import { useForm, Controller } from "react-hook-form";
import Exercises from "../exercises/page";

interface FormData {
    name: string;
    intensity: string;
    duration: number;
}

type Props = {
    id: string;
    exercise: Exercise;
}

export default function DeleteExerciseForm({ id, exercise }: Props) {
    //setup react-hook-form, populating default values from exercise prop passed from parent page
    const {register, handleSubmit, formState: { errors, isSubmitSuccessful }} = useForm<FormData>({
        defaultValues: {
            name: exercise.name,
            intensity: exercise.intensity,
            duration: exercise.duration
        }
    });

    const handleDelete = async (id: string) => {
        //confirmation before deleting
        const confirmed = confirm("Are you sure you want to delete this exercise?");
        //only try to delete if confirmation true
        if (confirmed) {
            try {
                const apiDomain: string = process.env.NEXT_PUBLIC_API_DOMAIN!;
                const res: Response = await fetch(`${apiDomain}/exercises/${id}`, {
                    method: 'DELETE'
                });
                const apiResponse = await res.json();
                console.log(apiResponse)
            } catch (error: unknown) {
                console.log(error);
            }
        }
    };

    return (
        <>
            {isSubmitSuccessful && <p className="success">Exercise Updated</p>}
            <form onSubmit={(e) => {
                e.preventDefault();
                handleDelete(id);
            }}>
                <fieldset>
                    <label htmlFor="name">Name</label>
                    <input {...register("name", { required: "Name is required"})} />
                    {errors.name && <span className="error">{errors.name.message}</span>} 
                </fieldset>
                <fieldset>
                    <label htmlFor="intensity">Intensity</label>
                    <input {...register("intensity", {required: "Intensity is required"})} />
                    {errors.intensity && <span className="error">{errors.intensity.message}</span>} 
                </fieldset>
                <fieldset>
                    <label htmlFor="duration">Duration</label>
                    <input type="number" min={1} {...register("duration", {required: "Duration is required"})} />
                    {errors.duration && <span className="error">{errors.duration.message}</span>} 
                </fieldset>
                <button type="submit">Delete</button>
            </form>
        </>
    )
}