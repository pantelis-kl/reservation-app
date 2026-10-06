"use client";

import { useFormStatus } from "react-dom";

export default function EditButton(){
    const {pending}=useFormStatus();
    return(
        <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 rounded-xl shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
          >
            {pending?'Editing...':'Save Changes'}
          </button>
    )
}