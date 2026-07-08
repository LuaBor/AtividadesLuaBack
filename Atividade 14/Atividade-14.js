const express = require('express');
const app = express();

app.use(express.json());

app.post('/avisos', (req, res) => {
  const novoAviso = req.body;
  
  res.status(201).json({
    mensagem: 'Aviso recebido com sucesso!',
    dadosDoAviso: novoAviso
  });
});

app.post('/tarefas', (req, res) => {
  const novaTarefa = req.body;
  
  res.status(201).json({
    mensagem: 'Tarefa recebida com sucesso!',
    dadosDaTarefa: novaTarefa
  });
});

app.post('/usuarios', (req, res) => {
  const novoUsuario = req.body;
  
  res.status(201).json({
    mensagem: 'Usuário cadastrado com sucesso!',
    dadosDoUsuario: novoUsuario
  });
});

app.post('/reservas', (req, res) => {
  const novaReserva = req.body;
  
  res.status(201).json({
    mensagem: 'Reserva de espaço computada com sucesso!',
    dadosDaReserva: novaReserva
  });
});

const PORTA = 3000;
app.listen(PORTA, () => {
  console.log(`🚀 Servidor backend rodando com sucesso na porta ${PORTA}!`);
});