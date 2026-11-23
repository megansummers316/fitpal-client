'use client';

import Link from "next/link";
//import { useParams } from "next/navigation";

type Props = {
    id: string;
}

export default function EditDeleteButtons({ id }: Props) {
    //const {id} = useParams(); 
    return (
        <>
            <Link href={`/exercises/${id}/edit`} className="button">Edit</Link>
            <Link href={`/exercises/${id}/delete`} className="deleteButton">Delete</Link>
        </>
    )
}