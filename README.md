# PKP IFRS Theme

Tema do [Instituto Federal do Rio Grande do Sul](http://ifrs.edu.br/) para os
sistemas da plataforma [PKP](http://pkp.sfu.ca/).

Esse tema está implementado no [Portal de Eventos do IFRS](http://eventos.ifrs.edu.br/).

## Desenvolvimento

Para compilar o arquivo CSS do tema é preciso usar o automatizador de tarefas
[Grunt](http://gruntjs.com/). Para utilizar o Grunt é necessário ter o [NodeJS](https://nodejs.org/en/)
e seu gerenciador de pacotes, o [NPM](https://www.npmjs.com/), para cuidar das
dependências. Opcionalmente, após instalar o NodeJS e o NPM, pode-se instalar o
`grunt-cli`.

    # npm install grunt-cli -g

Depois de cumprir esses requisitos é só satisfazer as dependências do Grunt.

    $ npm install

Após o NPM instalar todas as dependências, execute a tarefa `build`, que irá
compilar o SASS em CSS.

    $ grunt build

Para fazer deploy usando rsync, pode-se usar uma tarefa do Grunt.

    $ grunt dist --target=/caminho/para/o/deploy

## Licença

Esse código é distribuído sob a licença [GNU GPL v2](http://www.magnux.org/doc/GPL-pt_BR.txt).

### Agradecimentos

Agradecimento ao [Instituto Federal Farroupilha (IFFar)](http://www.iffarroupilha.edu.br/)
pelo tema no qual esse foi baseado.
