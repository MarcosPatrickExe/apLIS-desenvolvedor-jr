# 🏥 Sistema de Gestão de Médicos e Pacientes

Aplicação fullstack desenvolvida para gerenciamento de médicos e pacientes, utilizando múltiplos backends e um frontend integrado.

O sistema permite:
- Cadastro, listagem, atualização e exclusão de médicos
- Cadastro, listagem e exclusão de pacientes
- Consumo de APIs REST via frontend em React

---

# 🌍 Deploy

### A aplicação pode ser acessada em:

 https://marcospatrick.webtechevolution3.vps-kinghost.net
  
---

# 🚀 Tecnologias Utilizadas

- **Frontend:** React (Vite)
- **Backend (Médicos):** PHP + Laravel
- **Backend (Pacientes):** Node.js + Express
- **VPS:** PM2 (mantém os backends em execução)
- **Servidor Web:** Nginx (proxy reverso)
- **Banco de Dados:** (adicione o seu: MySQL, PostgreSQL, etc)

---

# 📁 Estrutura do Projeto
/frontend   
/backend-laravel   
/backend-node

---

# ⚙️ Como Executar o Projeto

## 🔹 Backend Laravel (Médicos)

```bash
cd backendphp
composer install
cp .env.example .env
php artisan key:generate
php artisan serve
```

## 🔹 Backend Node.js (Pacientes)
```bash
cd backendjs
npm install
cd src
node mainAPI.js
```

## 🔹 Frontend React
```bash
cd frontend
npm install
npm run dev
```

### Build para produção:
```bash
npm run build
```

# 🌐 Rotas da API
## 🟦 Médicos (Laravel)
```bash
GET    /api/v1/medicos
POST   /api/v1/medicos
PUT    /api/v1/medicos/{id}
DELETE /api/v1/medicos/{id}
```

## 🟩 Pacientes (Node.js)
```bash
GET    /api/v1/pacientes
POST   /api/v1/pacientes
PUT    /api/v1/pacientes/{id}
DELETE /api/v1/pacientes/{id}
```

# 🔗 Integração (Nginx)

O sistema utiliza Nginx como proxy reverso, permitindo que frontend e APIs sejam acessados a partir de um único domínio.

---
# ⚙️ Uso do PM2 (gerenciador de serviços)

Durante o deploy da aplicação na VPS, utilizei o **PM2** como gerenciador de processos para garantir a execução contínua dos serviços backend.

O PM2 permite manter aplicações Node.js em execução mesmo após quedas de conexão SSH ou reinicializações do servidor, além de facilitar o monitoramento e reinício automático em caso de falhas.

## Principais benefícios utilizados no projeto

- Execução em segundo plano dos serviços Node.js
- Reinício automático em caso de crash da aplicação
- Monitoramento de logs em tempo real
- Facilidade para escalar e gerenciar múltiplos processos
- Persistência dos processos após reboot da VPS

## Comandos utilizados

Iniciar aplicação:

```bash
pm2 start src/mainAPI.js --name node-backend
```

---


# Mapeamento de rotas:
```bash
/ → Frontend (React) 

/api/v1/medicos → Backend Laravel

/api/v1/pacientes → Backend Node.js
```
(Essa abordagem evita problemas de CORS e melhora a organização da aplicação.)


# ⚠️ Tratamento de Erros

A aplicação trata erros comuns como:

400 (Bad Request): Dados inválidos

409 (Conflict): Dados duplicados (ex: CRM já cadastrado)

Mensagens de erro claras para o usuário

# 🧪 Testes

As APIs podem ser testadas utilizando:

🔹 Insomnia

🔹 Postman

---

# 🧠 Decisões Técnicas
Separação de responsabilidades entre dois backends distintos

Uso de proxy reverso para unificação de serviços

Uso de rotas REST padronizadas (/api/v1/...)

Organização modular do projeto

# 📌 Observações
O frontend consome as APIs utilizando caminhos relativos (/api/v1), facilitando o deploy

O sistema foi estruturado visando clareza, organização e facilidade de manutenção

## 👨‍💻 Autor

Marcos Patrick


