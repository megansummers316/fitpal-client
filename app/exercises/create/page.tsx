'use client';

import { Exercise } from "@/app/types/exercise";
import { useForm, Controller } from "react-hook-form";

interface FormData {
    name: string;
    intensity: string;
    duration: number;
}

export default function CreateExercise() {
    //setup react-hook-form

    return (
        <main>
            <h1>Create New Exercise</h1>
            <fieldset>
                <label htmlFor="name">Name</label>
                <input />
            </fieldset>
            <fieldset>
                <label htmlFor="intensity">Intensity</label>
                <input />
            </fieldset>
            <fieldset>
                <label htmlFor="duration">Duration</label>
                <input type="number" min={1} />
            </fieldset>
            <button>Save</button>
        </main>
    )
}