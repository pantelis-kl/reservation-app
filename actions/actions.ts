"use server";
import { createClient } from "@/utils/supabase/server";

export async function createReservation(formData:FormData){
    const supabase = await createClient();

    const first_name=formData.get("first_name") as string;
    const last_name=formData.get("last_name") as string;
    const email=formData.get("email") as string;
    const phone=formData.get("phone") as string | null;
    const comment=formData.get("comment") as string;

    const { error } = await supabase.from("reservations").insert({first_name,last_name,email,phone,comment});
    if (error) {
        throw new Error(error.message);
    }
}