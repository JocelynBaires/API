const express = require('express');
const app = express();

app.use(express.json());

const Empleados = [
    {id: 1, name: "Kevin", age: 18, sueldo: 360},
    {id: 2, name: "Pepe", age: 25, sueldo: 500},
    {id: 3, name: "Jaime", age: 50, sueldo: 393},
    {id: 4, name: "George", age: 21, sueldo: 400}
];

app.get('/', (req, res) => {
    res.send('Node JS, API creada por: Kevin Alexander Martinez Rivas')
});

app.get('/api/Empleados', (req, res) => {
    res.send(Empleados);
});

app.get('/api/Empleados/:id', (req, res) => {
    const Empleado = Empleados.find(c => c.id === parseInt(req.params.id));
    if (!Empleado) return res.status(404).send('Empleado no encontrado');
    else res.send(Empleado);
});

app.post('/api/Empleados', (req, res) => {
    const Empleado = {
        id: Empleados.length + 1,
        name: req.body.name,
        age: parseInt(req.body.age),
        sueldo: parseInt(req.body.sueldo)
    };

   Empleados.push(Empleado);
   res.send(Empleado);
});

app.delete('/api/Empleados/:id', (req, res) =>{
    const Empleado = Empleados.find(c => c.id === parseInt(req.params.id));
    if (!Empleado) return res.status(404).send('Empleado no encontrado');

    const index = Empleados.indexOf(Empleado);
    Empleados.splice(index, 1);
    res.send(Empleado);
});

app.put('/api/Empleados/:id', (req, res) => {
    const Empleado1 = Empleados.find(c => c.id === parseInt(req.params.id));
    if (!Empleado1) return res.status(404).send('Empleado no encontrado');
    
    const index = Empleados.indexOf(Empleado1);
    Empleados.splice(index, 1);
    res.send(Empleado1);

    const Empleado = {
        id: req.body.id,
        name: req.body.name,
        age: parseInt(req.body.age),
        sueldo: parseInt(req.body.sueldo)
    };
   Empleados.push(Empleado);
});

const port = process.env.port || 80;
app.listen(port, () => console.log(`Escuchando en puerto ${port}... `));


