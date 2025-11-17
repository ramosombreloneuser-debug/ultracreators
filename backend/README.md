# Ultra Creators Backend API

API de autenticação e gerenciamento de usuários para a plataforma Ultra Creators.

## 🚀 Quick Start

```bash
# Instalar dependências
npm install

# Configurar variáveis de ambiente
copy .env.example .env
# Edite o arquivo .env com suas configurações

# Executar em desenvolvimento
npm run dev

# Executar em produção
npm start
```

## 📚 Endpoints da API

### Autenticação

#### POST `/api/auth/register`
Registra um novo usuário.

**Body**:
```json
{
  "nome": "João",
  "sobrenome": "Silva",
  "email": "joao@email.com",
  "senha": "senha123",
  "celular": "(11) 99999-9999",
  "comOQueTrabalha": "Tecnologia",
  "estadoCivil": "Solteiro(a)",
  "sexo": "Masculino"
}
```

**Response**:
```json
{
  "success": true,
  "message": "Cadastro realizado com sucesso!",
  "data": {
    "userId": "...",
    "nome": "João",
    "email": "joao@email.com"
  }
}
```

#### POST `/api/auth/verify-email`
Verifica o email do usuário.

**Body**:
```json
{
  "token": "token_de_verificacao"
}
```

#### POST `/api/auth/resend-verification`
Reenvia email de verificação.

**Body**:
```json
{
  "email": "joao@email.com"
}
```

#### POST `/api/auth/login`
Autentica um usuário.

**Body**:
```json
{
  "email": "joao@email.com",
  "senha": "senha123"
}
```

**Response**:
```json
{
  "success": true,
  "token": "jwt_token_here",
  "data": {
    "id": "...",
    "nome": "João",
    "sobrenome": "Silva",
    "email": "joao@email.com"
  }
}
```

#### GET `/api/auth/me`
Retorna dados do usuário autenticado.

**Headers**:
```
Authorization: Bearer {token}
```

#### POST `/api/auth/forgot-password`
Solicita redefinição de senha.

**Body**:
```json
{
  "email": "joao@email.com"
}
```

#### POST `/api/auth/reset-password`
Redefine a senha.

**Body**:
```json
{
  "token": "reset_token",
  "newPassword": "nova_senha123"
}
```

#### PUT `/api/auth/update-profile`
Atualiza perfil do usuário.

**Headers**:
```
Authorization: Bearer {token}
```

**Body**:
```json
{
  "nome": "João Atualizado",
  "celular": "(11) 98888-8888",
  "comOQueTrabalha": "Design"
}
```

## 🔐 Autenticação

Esta API usa JWT (JSON Web Tokens) para autenticação.

Após login bem-sucedido, inclua o token no header:
```
Authorization: Bearer {seu_token_jwt}
```

## 📧 Emails

O sistema envia 3 tipos de emails:

1. **Verificação de Email** - Após cadastro
2. **Boas-vindas** - Após verificação
3. **Redefinição de Senha** - Quando solicitado

Configure as credenciais SMTP no arquivo `.env`.

## 🗄️ Modelo de Dados

### User Schema

```javascript
{
  nome: String (required, max: 50),
  sobrenome: String (required, max: 50),
  email: String (required, unique, lowercase),
  senha: String (required, min: 6, hashed),
  celular: String (required),
  comOQueTrabalha: String (optional, enum),
  estadoCivil: String (optional, enum),
  sexo: String (optional, enum),
  isEmailVerified: Boolean (default: false),
  isActive: Boolean (default: true),
  lastLogin: Date,
  createdAt: Date,
  updatedAt: Date
}
```

## 🛡️ Segurança

- Senhas criptografadas com bcrypt
- Tokens JWT com expiração
- Validação de email
- Proteção contra injection
- CORS configurado

## 📦 Dependências

- **express** - Framework web
- **mongoose** - MongoDB ODM
- **bcryptjs** - Hash de senhas
- **jsonwebtoken** - Autenticação JWT
- **nodemailer** - Envio de emails
- **validator** - Validação de dados
- **cors** - CORS headers
- **dotenv** - Variáveis de ambiente

## 🔧 Variáveis de Ambiente

Ver arquivo `.env.example` para configuração completa.

Principais variáveis:
- `PORT` - Porta do servidor
- `MONGODB_URI` - URI de conexão do MongoDB
- `JWT_SECRET` - Chave secreta JWT
- `EMAIL_*` - Configurações de email

## 📝 Licença

Propriedade de Ultra Creators © 2025
