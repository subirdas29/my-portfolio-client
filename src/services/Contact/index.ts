/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import { TContact } from "@/types/contact";
import { revalidateTag } from "next/cache";

export const createContact = async (contacts: TContact) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/messages`, {
        method: "POST",
        headers: {
        //   Authorization: (await cookies()).get("accessToken")!.value,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contacts),
      });
      revalidateTag("contacts");
      return await res.json();
    } catch (error: any) {
      return Error(error);
    }
  };
