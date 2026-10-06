"use server";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type ActionState={
    errors:{
        first_name?:string,
        last_name?:string,
        email?:string,
        phone?:string,
        comment?:string,
        barber_id?:string
    },
    success?:boolean
}

export async function createReservation(prevState:ActionState,formData:FormData):Promise<ActionState>{
    const supabase=await createClient();
    const first_name=formData.get("first_name") as string;
    const last_name=formData.get("last_name") as string;
    const email=formData.get("email") as string;
    const phone=formData.get("phone") as string | null;
    const comment=formData.get("comment") as string | null;
    const barber_id=formData.get("barber_id") as string;
    
    const errors:ActionState["errors"]={};

    if(!first_name.trim()) errors.first_name="Please enter your first name";
    if(!last_name.trim()) errors.last_name="Please enter your last name";
    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!email.trim() || !emailRegex.test(email)) errors.email="Please enter a valid email";
    if(!barber_id) errors.barber_id="Please select a barber";
    
    if(Object.keys(errors).length>0) return {errors};

    const {error:insertError}=await supabase.from("reservations").insert({first_name,last_name,email,phone,comment,barber_id});
    if(insertError) throw new Error(insertError.message);

    redirect('/success')
}

export async function updateReservation(prevState:ActionState,formData:FormData):Promise<ActionState>{
    const supabase=await createClient();
    const id=formData.get("id") as string;
    const first_name=formData.get("first_name") as string;
    const last_name=formData.get("last_name") as string;
    const email=formData.get("email") as string;
    const phone=formData.get("phone") as string | null;
    const barber_id=formData.get("barber_id") as string;

    const errors:ActionState["errors"]={};

    if(!first_name.trim()) errors.first_name="Please enter your first name";
    if(!last_name.trim()) errors.last_name="Please enter your last name";
    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!email.trim() || !emailRegex.test(email)) errors.email="Please enter a valid email";
    if(!barber_id) errors.barber_id="Please select a barber";

    if(Object.keys(errors).length>0) return {errors}

    const {error:updateError}=await supabase.from("reservations").update({id,first_name,last_name,email,phone,barber_id}).eq('id',id);

    if(updateError) console.error(updateError.message);

    revalidatePath(`/reservation/${id}`);

    return {success:true,errors:{}}
}

export async function deleteReservation(formData:FormData){
    const supabase=await createClient();
    const id=formData.get("id") as string;
    const {error:deleteError}=await supabase.from("reservations").delete().eq('id',id);
    if(deleteError) console.error(deleteError.message)

    revalidatePath(`/reservation/${id}`);
    revalidatePath('/reservation')
    redirect('/reservation');
}