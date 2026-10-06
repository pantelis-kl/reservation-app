
import { createClient } from "@/utils/supabase/server";
import EditBarbersSelector from "./EditBarbersSelector";

type EditBarbersProps={
    barberId:string,
}

export default async function EditBarbers({barberId}:EditBarbersProps){

    const supabase=await createClient();
    const {data:barbers,error:updateError}=await supabase.from("barbers").select("*")

    if(updateError) console.error(updateError.message);

    return(
        <EditBarbersSelector barbers={barbers} barberId={barberId}/>
    )
}