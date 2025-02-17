import express from 'express';
import cors from 'cors';
import { validaUsuario } from './validacao/valida.js';
import { cadastraLead } from './servicos/cadastro_servico.js';

const app = new express();

app.use(express.json());
app.use(cors());

app.post('/usuarios', async (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const telefone = req.body.telefone;

    await validaUsuario(nome, email, telefone);
    res.status(204).end();
});



app.listen(9000, async () => {
    const data = new Date();
    console.log("Servidor node iniciado em:" + data);

    //const conexao = await pool.getConnection();
    //console.log(conexao.threadId);
    //conexao.release();
})