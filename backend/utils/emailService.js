const nodemailer = require('nodemailer');

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });
};

// Send email verification
exports.sendVerificationEmail = async (user, verificationToken) => {
  const transporter = createTransporter();

  // Create verification URL
  const verificationUrl = `${process.env.FRONTEND_URL}/indexoficial.html?token=${verificationToken}`;

  const message = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: 'Montserrat', Arial, sans-serif;
          background-color: #000000;
          color: #ffffff;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 40px 20px;
        }
        .header {
          text-align: center;
          padding: 20px 0;
          border-bottom: 2px solid #d4af37;
        }
        .brand {
          font-size: 28px;
          font-weight: 700;
          color: #d4af37;
          letter-spacing: 0.2em;
        }
        .content {
          padding: 40px 20px;
          background-color: #111111;
          border-radius: 12px;
          margin: 30px 0;
        }
        h1 {
          color: #d4af37;
          font-size: 24px;
          margin-bottom: 20px;
        }
        p {
          line-height: 1.6;
          color: #c7c7c7;
          margin-bottom: 20px;
        }
        .button {
          display: inline-block;
          padding: 15px 40px;
          background: linear-gradient(135deg, #d4af37, #b89418);
          color: #000000;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin: 20px 0;
        }
        .code-box {
          background-color: #181818;
          border: 1px solid #d4af37;
          border-radius: 8px;
          padding: 20px;
          text-align: center;
          margin: 20px 0;
        }
        .code {
          font-size: 32px;
          font-weight: 700;
          color: #d4af37;
          letter-spacing: 0.3em;
        }
        .footer {
          text-align: center;
          padding: 20px;
          color: #9a9a9a;
          font-size: 12px;
        }
        .warning {
          background-color: #2a1a00;
          border-left: 4px solid #d4af37;
          padding: 15px;
          margin: 20px 0;
          border-radius: 4px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="brand">ULTRA CREATORS</div>
        </div>

        <div class="content">
          <h1>Bem-vindo(a), ${user.nome}! 🎉</h1>

          <p>Obrigado por se cadastrar na <strong>Ultra Creators</strong>!</p>

          <p>Para ativar sua conta e começar a lucrar com o <strong>Método Ultra Milionário</strong>, você precisa verificar seu endereço de email.</p>

          <p style="text-align: center;">
            <a href="${verificationUrl}" class="button">Verificar Minha Conta</a>
          </p>

          <p style="text-align: center; color: #9a9a9a; font-size: 14px;">
            Ou copie e cole o link abaixo no seu navegador:
          </p>

          <p style="word-break: break-all; background-color: #181818; padding: 15px; border-radius: 8px; font-size: 12px;">
            ${verificationUrl}
          </p>

          <div class="warning">
            <p style="margin: 0; font-size: 14px;">
              ⚠️ Este link é válido por <strong>24 horas</strong>. Se você não solicitou este cadastro, ignore este email.
            </p>
          </div>

          <p>Após a verificação, você terá acesso completo a:</p>
          <ul style="color: #c7c7c7;">
            <li>Treinamento 100% gratuito</li>
            <li>Materiais e criativos profissionais</li>
            <li>Suporte dedicado</li>
            <li>Comunidade premium de afiliados</li>
          </ul>

          <p style="margin-top: 30px;">Estamos ansiosos para tê-lo(a) conosco!</p>

          <p style="color: #d4af37; font-weight: 600;">
            Equipe Ultra Creators<br>
            Método Ultra Milionário
          </p>
        </div>

        <div class="footer">
          <p>Ultra Creators © 2025 | Todos os direitos reservados</p>
          <p>contato@ultracreators.com.br | +55 (11) 99999-9999</p>
          <p style="margin-top: 10px; font-size: 11px;">
            Este é um email automático. Por favor, não responda a esta mensagem.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    await transporter.sendMail({
      from: `Ultra Creators <${process.env.EMAIL_FROM}>`,
      to: user.email,
      subject: '✨ Verifique seu email - Ultra Creators',
      html: message
    });

    console.log(`📧 Email de verificação enviado para: ${user.email}`);
    return true;
  } catch (error) {
    console.error('❌ Erro ao enviar email:', error);
    throw new Error('Erro ao enviar email de verificação');
  }
};

// Send welcome email after verification
exports.sendWelcomeEmail = async (user) => {
  const transporter = createTransporter();

  const message = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <style>
        body {
          font-family: 'Montserrat', Arial, sans-serif;
          background-color: #000000;
          color: #ffffff;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 40px 20px;
        }
        .header {
          text-align: center;
          padding: 20px 0;
          border-bottom: 2px solid #d4af37;
        }
        .brand {
          font-size: 28px;
          font-weight: 700;
          color: #d4af37;
          letter-spacing: 0.2em;
        }
        .content {
          padding: 40px 20px;
          background-color: #111111;
          border-radius: 12px;
          margin: 30px 0;
        }
        h1 {
          color: #d4af37;
          font-size: 24px;
          margin-bottom: 20px;
        }
        p {
          line-height: 1.6;
          color: #c7c7c7;
          margin-bottom: 20px;
        }
        .button {
          display: inline-block;
          padding: 15px 40px;
          background: linear-gradient(135deg, #d4af37, #b89418);
          color: #000000;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin: 20px 0;
        }
        .footer {
          text-align: center;
          padding: 20px;
          color: #9a9a9a;
          font-size: 12px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="brand">ULTRA CREATORS</div>
        </div>

        <div class="content">
          <h1>🎉 Conta Verificada com Sucesso!</h1>

          <p>Olá, <strong>${user.nome}</strong>!</p>

          <p>Sua conta foi verificada com sucesso! Agora você faz parte da maior plataforma de afiliados premium do Brasil.</p>

          <p style="text-align: center;">
            <a href="${process.env.FRONTEND_URL}/users.html" class="button">Acessar Minha Conta</a>
          </p>

          <p>Próximos passos:</p>
          <ol style="color: #c7c7c7;">
            <li>Acesse sua conta</li>
            <li>Complete seu perfil</li>
            <li>Explore o treinamento gratuito</li>
            <li>Baixe os materiais prontos</li>
            <li>Comece a promover e lucrar!</li>
          </ol>

          <p style="margin-top: 30px;">Lembre-se: estamos aqui para ajudá-lo(a) em cada etapa da jornada!</p>

          <p style="color: #d4af37; font-weight: 600;">
            Equipe Ultra Creators<br>
            Método Ultra Milionário
          </p>
        </div>

        <div class="footer">
          <p>Ultra Creators © 2025 | Todos os direitos reservados</p>
          <p>contato@ultracreators.com.br | +55 (11) 99999-9999</p>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    await transporter.sendMail({
      from: `Ultra Creators <${process.env.EMAIL_FROM}>`,
      to: user.email,
      subject: '🎉 Bem-vindo à Ultra Creators!',
      html: message
    });

    console.log(`📧 Email de boas-vindas enviado para: ${user.email}`);
    return true;
  } catch (error) {
    console.error('❌ Erro ao enviar email de boas-vindas:', error);
    return false;
  }
};

// Send password reset email
exports.sendPasswordResetEmail = async (user, resetToken) => {
  const transporter = createTransporter();
  const resetUrl = `${process.env.FRONTEND_URL}/indexoficial.html?reset-token=${resetToken}`;

  const message = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <style>
        body {
          font-family: 'Montserrat', Arial, sans-serif;
          background-color: #000000;
          color: #ffffff;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 40px 20px;
        }
        .header {
          text-align: center;
          padding: 20px 0;
          border-bottom: 2px solid #d4af37;
        }
        .brand {
          font-size: 28px;
          font-weight: 700;
          color: #d4af37;
          letter-spacing: 0.2em;
        }
        .content {
          padding: 40px 20px;
          background-color: #111111;
          border-radius: 12px;
          margin: 30px 0;
        }
        h1 {
          color: #d4af37;
          font-size: 24px;
          margin-bottom: 20px;
        }
        p {
          line-height: 1.6;
          color: #c7c7c7;
          margin-bottom: 20px;
        }
        .button {
          display: inline-block;
          padding: 15px 40px;
          background: linear-gradient(135deg, #d4af37, #b89418);
          color: #000000;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin: 20px 0;
        }
        .warning {
          background-color: #2a1a00;
          border-left: 4px solid #d4af37;
          padding: 15px;
          margin: 20px 0;
          border-radius: 4px;
        }
        .footer {
          text-align: center;
          padding: 20px;
          color: #9a9a9a;
          font-size: 12px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="brand">ULTRA CREATORS</div>
        </div>

        <div class="content">
          <h1>Redefinir Senha</h1>

          <p>Olá, <strong>${user.nome}</strong>!</p>

          <p>Você solicitou a redefinição de senha da sua conta Ultra Creators.</p>

          <p style="text-align: center;">
            <a href="${resetUrl}" class="button">Redefinir Senha</a>
          </p>

          <div class="warning">
            <p style="margin: 0; font-size: 14px;">
              ⚠️ Este link é válido por <strong>1 hora</strong>. Se você não solicitou esta redefinição, ignore este email e sua senha permanecerá inalterada.
            </p>
          </div>

          <p style="color: #d4af37; font-weight: 600;">
            Equipe Ultra Creators
          </p>
        </div>

        <div class="footer">
          <p>Ultra Creators © 2025 | Todos os direitos reservados</p>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    await transporter.sendMail({
      from: `Ultra Creators <${process.env.EMAIL_FROM}>`,
      to: user.email,
      subject: '🔐 Redefinir Senha - Ultra Creators',
      html: message
    });

    console.log(`📧 Email de redefinição de senha enviado para: ${user.email}`);
    return true;
  } catch (error) {
    console.error('❌ Erro ao enviar email de redefinição:', error);
    throw new Error('Erro ao enviar email de redefinição de senha');
  }
};
