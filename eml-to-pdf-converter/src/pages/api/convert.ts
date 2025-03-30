import { NextApiRequest, NextApiResponse } from 'next';
import { convertEmlToPdf } from '../../../utils/converter';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { emlFile } = req.body;

        try {
            const pdfBuffer = await convertEmlToPdf(emlFile);
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'attachment; filename=converted.pdf');
            res.status(200).send(pdfBuffer);
        } catch (error) {
            res.status(500).json({ error: 'Failed to convert EML to PDF' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}