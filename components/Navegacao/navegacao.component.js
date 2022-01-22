angular.module('marvelApp')
.component('navegacaoPrincipal', {
  templateUrl: 'components/Navegacao/navegacao.component.html',
  controller: ['Navegacao',
    function NavegacaoController() {
      console.log('ínicio da navegacao')
    }
  ]
})