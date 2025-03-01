import type { NextApiRequest, NextApiResponse } from "next";
import type { Tables } from "~/types_db.ts";
import { createClient } from "~/utils/supabase/server.tsx";

export default async function GET(
  _: NextApiRequest,
  res: NextApiResponse<{ Artist: Tables<'Artist'>[] | null }>,
) {
  const supabase = await createClient();
    
  const { data: Artist } = await supabase.from('Artist').select(
    `
      *, 
      group:Artist!group_id(
        *
      )
    `
  );

  res.status(200).json({ Artist });
}
