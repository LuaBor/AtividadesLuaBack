const express = require('express');
const app = express();
app.use(express.json());

let usuarios = [
  { id: 1, nome: 'Mariana Costa', email: 'mariana@escola.com' },
  { id: 2, nome: 'Professor Roberto', email: 'roberto@escola.com' }
];

let tarefas = [
  { id: 1, titulo: 'Estudar Express', concluida: false },
  { id: 2, titulo: 'Fazer commit do projeto', concluida: true }
];

app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

app.get('/usuarios/:id', (req, res) => {
  const idBuscado = Number(req.params.id);
  const usuarioEncontrado = usuarios.find(u => u.id === idBuscado);

  if (!usuarioEncontrado) {
    return res.status(404).json({ mensagem: 'Usuário não encontrado' });
  }

  res.json(usuarioEncontrado);
});

app.post('/usuarios', (req, res) => {
  const novoUsuario = {
    id: usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1,
    nome: req.body.nome,
    email: req.body.email
  };

  usuarios.push(novoUsuario);
  res.status(201).json(novoUsuario);
});

app.put('/usuarios/:id', (req, res) => {
  const idModificar = Number(req.params.id);
  const usuario = usuarios.find(u => u.id === idModificar);

  if (!usuario) {
    return res.status(404).json({ mensagem: 'Usuário não encontrado' });
  }

  usuario.nome = req.body.nome;
  res.json({ mensagem: 'Nome do usuário atualizado', usuario });
});

app.delete('/usuarios/:id', (req, res) => {
  const idExcluir = Number(req.params.id);
  
  const existe = usuarios.some(u => u.id === idExcluir);
  if (!existe) {
    return res.status(404).json({ mensagem: 'Usuário não encontrado para exclusão' });
  }

  usuarios = usuarios.filter(u => u.id !== idExcluir);
  res.json({ mensagem: 'Usuário removido com sucesso' });
});

app.get('/tarefas', (req, res) => {
  res.json(tarefas);
});

app.post('/tarefas', (req, res) => {
  const novaTarefa = {
    id: tarefas.length > 0 ? tarefas[tarefas.length - 1].id + 1 : 1,
    titulo: req.body.titulo,
    concluida: false
  };

  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
});

app.delete('/tarefas/:id', (req, res) => {
  const idExcluir = Number(req.params.id);
  tarefas = tarefas.filter(t => t.id !== idExcluir);
  res.json({ mensagem: 'Tarefa removida com sucesso' });
});

const PORTA = 3000;
app.listen(PORTA, () => {
  console.log(`🚀 Servidor CRUD rodando perfeitamente na porta ${PORTA}!`);
});