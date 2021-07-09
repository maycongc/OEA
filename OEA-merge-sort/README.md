<div align="center">

  ![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)
  ![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)
  ![forthebadge](https://forthebadge.com/images/badges/it-works-why.svg)
</div>

### Segundo trabalho de Organização de Estrutura de Arquivos - Ordenação por Intercalação. 💻

# 🤔 Como usar

> Antes de tudo garanta que seu sistema tenha o NodeJS instalado.
> Link para download:
> - [link](https://nodejs.org/pt-br/download/)

```bash
# 1. Clone o repositório para sua maquina local
$ git clone https://github.com/maycongc/merge-sort-ceps

# 2. Acesse o diretório
$ cd merge-sort-ceps

# 3. Mova o arquivo de CEPs para a pasta com o nome "cep.dat"

# 4. Execute 
$ node ./src/index.js
```

> O arquivo de CEPs pode ser baixado aqui: [link](https://github.com/maycongc/merge-sort-ceps/releases/download/v1/cep.dat)

- Após executar, os ceps serão carregados em um vetor de objetos para os endereços;
- Então este vetor será dividido em 16 partes utilizando o algoritmo do Merge Sort adaptado;
- Cada uma das 16 partes serão ordernadas de modo crescente em memória;
- Estas partes serão gravadas em disco com o nome "cep-part.dat" enumeradas de 1 a 16;
- Em seguida as partes serão lidas a partir do disco e carregados em um array de objetos novamente;
- Após isto, então, começará a concatenação destas partes dois a dois até todas serem concatenadas.
- Depois da primeira rodada teremos arquivos cep-part numerados de 17 a 24. A próxima criara arquivos de 25 até 28 e assim por diante até a ultima junção. 
