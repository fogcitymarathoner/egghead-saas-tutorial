import {createClient} from "@/utils/supabase/server";


import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    if (req.method === 'GET') {
        res.status(200).json({ id, message: 'Author data fetched successfully' });
    }
}

const getProfile = async (id: any) => {
    /*(auth.uid() = id)
    * 99859050-b9d7-4e2b-b65e-4ffa4990e9b0
    * 99859050-b9d7-4e2b-b65e-4ffa4990e9b0*/
    const supabase = createClient();
    console.log('getProfile id ' + id);
    const {data: profile } = await supabase.from('profile').select('*').eq('id', id).single();
    console.log('getProfile ' + profile);
    console.log('getProfile error');
    return {
        props: {
            profile,
        }
    }
}

