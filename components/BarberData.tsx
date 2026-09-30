
import { createClient } from "@/utils/supabase/server";
import BarberSelector from "./BarberSelector";

export default async function BarberData(){
    await new Promise((resolve) => setTimeout(resolve, 2000));
      const supabase = await createClient();
      const { data: barbers, error: readError } = await supabase
        .from("barbers")
        .select("*");
      if (readError) console.error(readError.message);
    
      return (
        <BarberSelector barbers={barbers ?? []}/>
      );
}