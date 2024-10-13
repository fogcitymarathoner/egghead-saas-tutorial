import {createClient} from "@/utils/supabase/server";
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({ message: 'Request successful' });
    const { id } = req.query
    console.log('/api/lesson [id] ' + id);

    const supabase = createClient();
    try {
        const {data: lesson} = await supabase.from('lessons').select('*').eq('id', id).single();
        console.log('/api/lesson lesson ' + lesson);
        res.status(200).send({ lesson })
    } catch (err) {
        res.status(500).send({ error: 'failed to load lesson data' })
    }
}
