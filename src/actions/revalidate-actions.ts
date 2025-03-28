"use server";

import { revalidateTag } from "next/cache";

// ✅ This function will safely revalidate tags outside of rendering
export async function revalidateTags(tags: string[]) {
  tags.forEach((tag) => revalidateTag(tag));
}
