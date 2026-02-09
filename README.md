# ⚡ WhatsApp Direct Message (No Contact)

Uma ferramenta leve e funcional para enviar mensagens via WhatsApp para números que não estão salvos na sua agenda. Ideal para contatos comerciais únicos ou mensagens rápidas sem burocracia.

## 🚀 O que faz?
Este sistema elimina a necessidade de salvar um número no celular apenas para enviar uma mensagem. Ele utiliza a API oficial do WhatsApp para criar um link direto de conversa, garantindo segurança e privacidade.

### 🛠️ Funcionalidades
* **Envio Direto:** Digite o DDD + Número e inicie o chat instantaneamente.
* **Mensagem Pré-definida:** Você pode escrever o texto antes mesmo de abrir o aplicativo.
* **Validação de Campos:** O sistema limpa automaticamente parênteses, espaços e hifens do número digitado.
* **Sem Registro:** O sistema não armazena os números digitados, respeitando a LGPD.

---

## 💻 Como Funciona
O sistema utiliza o protocolo `https://wa.me/` combinado com os parâmetros de telefone e texto.

1. O usuário insere o número: `5511999999999`
2. O usuário insere a mensagem: `Olá, gostaria de mais informações.`
3. O sistema gera e redireciona para:
   `https://wa.me/5511999999999?text=Olá%20gostaria...`

---

## 🎨 Interface e UX

| Campo | Descrição | Exemplo |
| :--- | :--- | :--- |
| **Telefone** | Número com código do país e DDD | 5511900000000 |
| **Mensagem** | Texto opcional para iniciar o chat | "Oi, tudo bem?" |
| **Botão Enviar** | Aciona o redirecionamento | [ Enviar via WhatsApp ] |

---

## 🛠️ Tecnologias Utilizadas
* **HTML5:** Estrutura simples e semântica.
* **JavaScript (Vanilla):** Lógica de formatação de string e redirecionamento de URL.
* **CSS3:** Design responsivo para uso fácil no celular ou desktop.

---

## 🚀 Como Rodar o Projeto
Como o sistema é baseado em front-end puro, não é necessário instalar nada:
1. Clone o repositório.
2. Abra o arquivo `index.html` em qualquer navegador.
3. Comece a enviar mensagens sem salvar contatos!

---

## 📜 Licença
Distribuído sob a licença MIT. Sinta-se à vontade para clonar, modificar e usar em seu próprio fluxo de trabalho.
