"use server";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createReservation(formData:FormData){
    const supabase = await createClient();
    const id=formData.get("id") as string;
    const first_name=formData.get("first_name") as string;
    const last_name=formData.get("last_name") as string;
    const email=formData.get("email") as string;
    const phone=formData.get("phone") as string | null;
    const barber_id=formData.get("barber_id") as string;
    const comment=formData.get("comment") as string | null;

    if(!barber_id) return;

    const { error } = await supabase.from("reservations").insert({first_name,last_name,email,phone,barber_id,comment});
    if (error) {
        throw new Error(error.message);
    }
    redirect('/success')
}

export async function updateReservation(formData:FormData){
    const supabase=await createClient();
    const id=formData.get("id") as string;
    const first_name=formData.get("first_name") as string;
    const last_name=formData.get("last_name") as string;
    const email=formData.get("email") as string;
    const phone=formData.get("phone") as string | null;
    const barber_id=formData.get("barber_id") as string;

    const {error:updateError}=await supabase.from("reservations").update({id,first_name,last_name,email,phone,barber_id}).eq('id',id);

    if(!first_name || !last_name || !email) return;

    if(updateError) console.error(updateError.message);

    revalidatePath(`/reservation/${id}`);
}