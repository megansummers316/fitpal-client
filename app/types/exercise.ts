export interface Exercise {
    _id: string;
    name: string;
    intensity: string;
    duration: number;
    date: Date;
    sets: ISet[];
}

//child data
interface ISet {
    _id: string;
    reps: number;
    setCount: number;
    weight: number;
    units: string;
    restTime: number;
}