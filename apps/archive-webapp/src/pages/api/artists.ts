import type { NextApiRequest, NextApiResponse } from "next";
import type { Tables } from '../../../../../types_db.ts';

export default async function GET(
  _: NextApiRequest,
  res: NextApiResponse<{ Artist: Tables<'Artist'> }>,
) {
  const { createClient } = require('../../../../../utils/supabase/server.tsx');
  const supabase = await createClient();
    
  const { data: Artist } = await supabase
  .from('Artist')
  .select();

  res.status(200).json({ Artist });
}
