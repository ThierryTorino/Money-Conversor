# 💱 Conversor de Moedas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)

Um projeto prático e dinâmico de conversão de moedas construído com tecnologias web fundamentais. O aplicativo permite ao usuário converter valores em Real Brasileiro (BRL) para Dólar Americano (USD), Euro (EUR) e Bitcoin (BTC), atualizando a interface gráfica em tempo real.

🔗 **Acesse o projeto online:** [Money Conversor (Vercel)](https://money-conversor-chi.vercel.app/)

---

## ✨ Funcionalidades

* **Conversão Múltipla:** Suporte para conversão de Real para Dólar, Euro e Bitcoin.
* **Interface Dinâmica:** As bandeiras e os nomes das moedas se adaptam automaticamente quando o usuário altera a seleção no menu *dropdown*.
* **Formatação Nativa:** Utilização da API `Intl.NumberFormat` do JavaScript para garantir que os valores sejam exibidos com a pontuação e os símbolos corretos (ex: `R$`, `US$`, `€`, `BTC`).
* **Design Responsivo:** Interface limpa e focada na experiência do usuário.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica do projeto (`index.html`).
* **CSS3:** Estilização visual e layout (`styles.css`).
* **JavaScript (ES6):** Lógica de conversão, manipulação do DOM e escuta de eventos (`script.js`).

---

## 📂 Estrutura do Projeto

📦 money-conversor
 ┣ 📂 assets/            # Imagens das bandeiras (Dólar, Euro, Bitcoin, etc.)
 ┣ 📜 index.html         # Estrutura principal da página
 ┣ 📜 script.js          # Lógica de conversão e eventos
 ┣ 📜 styles.css         # Folha de estilos
 ┗ 📜 README.md          # Documentação do projeto

---

## 🚀 Como Executar Localmente

Como o projeto utiliza tecnologias web nativas, não é necessária a instalação de pacotes complexos ou dependências (Node.js, etc).

1. **Clone o repositório:**
> git clone https://github.com/ThierryTorino/Money-Conversor.git

2. **Abra o projeto:**
Basta navegar até a pasta do projeto e abrir o arquivo `index.html` diretamente em qualquer navegador de sua preferência (Chrome, Firefox, Edge, etc.).
   
*Dica:* Se você usa o VS Code, pode utilizar a extensão **Live Server** para rodar o projeto com recarregamento automático.

---

## 💡 Aprendizados

Neste projeto, foram consolidados conceitos importantes do JavaScript no Front-End, tais como:
* Captura de elementos do DOM com `getElementById`.
* Utilização de Event Listeners (`click`, `change`).
* Atualização dinâmica de atributos HTML (`innerHTML`, `src`).
* Formatação de moedas internacionais com a API `Intl`.

---

Feito por **[Thierry Torino]**
