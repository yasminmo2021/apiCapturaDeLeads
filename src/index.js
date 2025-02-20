import express from 'express';
import cors from 'cors';
import { validaUsuario } from './validacao/valida.js';
import { cadastraLead } from './servicos/cadastro_servico.js';


const app = new express();

app.use(express.json());
app.use(cors());

app.post('/usuarios', async (req, res) => {
    const {nome, email} = req.body;

    const usuarioValido = validaUsuario(nome, email);

    if (usuarioValido.status) {
        await cadastraLead(nome, email);
        res.status(202).end();
    } else {
        res.status(400).send({mensagem: usuarioValido.mensagem})
    }


});



app.listen(9000, async () => {
    const data = new Date();
    console.log("Servidor node iniciado em:" + data);
})