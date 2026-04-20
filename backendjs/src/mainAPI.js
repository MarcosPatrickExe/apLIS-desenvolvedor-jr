const express = require('express');
const app = express();
app.use( express.json() );

const pacientesRoutes = require('./routes/pacientes.routes');

app.use('/api/v1/pacientes', pacientesRoutes);

app.listen(3000, () => {
    console.log('Servidor startint at port 3000');
});