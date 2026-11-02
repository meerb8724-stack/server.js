const express = require('express');
const app = express();
app.use(express.json());
app.use(require('cors')());
let CLIENTS = [];
app.get('/', (req,res) => {
res.send(`<h2>🚀 Skool Bot LIVE - ${CLIENTS.length} Clients</h2><form onsubmit="event.preventDefault(); fetch('/add-client',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({n:document.getElementById('n').value})}).then(r=>alert('Added'))"><input id='n' placeholder='Client Name'><button>Add Client</button></form>`);
});
app.post('/add-client', (req,res) => { CLIENTS.push(req.body); res.json({message:"Done"}); });
app.get('/health', (req,res) => res.json({status:"ok"}));
app.listen(process.env.PORT || 3000, () => console.log("Running"));
