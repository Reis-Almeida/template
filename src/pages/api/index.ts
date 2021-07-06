import { NextApiRequest, NextApiResponse } from 'next';

async function get() {
    const p = await fetch("http://localhost:81/template/index.php", { method:'Get' });
    const q = await p.json()
    console.log('p', q.Imoveis.Imovel[0].CodigoImovel)
    return q.Imoveis.Imovel[0].CodigoImovel;
  }

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const obj = get()
        res.status(200).json([obj]);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;