# Lista de Avaliação - Organização de Estrutura de Arquivos

## 📝 Questão 02
Considere um arquivo com registros de tamanho fixo, conforme a estrutura definida abaixo. Considere também que o arquivo está ordenado por cpf. Por uma falha no sistema de inscrição o mesmo candidato pode se inscrever mais de uma vez. Decidiu-se que a inscrição válida será a última, ou seja, aquela com o maior número de id_inscricao. Faça um programa que copie o arquivo "candidatos.dat" original em um novo arquivo “candidatos2.dat”, com os registros válidos. Escreva de forma eficiente. Qual é a complexidade desse método?

![estrutura](https://i.imgur.com/Kz2EBQG.png)

## 🤔 como usar:

> Antes de tudo garantir que o sistema possui o NodeJS instalado.

```bash
# Clonar o repositório
$ git clone https://github.com/maycongc/OEA-LA-Q02.git

# Acessar o diretório do repositório
$ cd OEA-LA-Q02

# Adicionar o arquivo "candidatos.dat" na raiz do projeto

# Executar
$ node ./src/index.js
```