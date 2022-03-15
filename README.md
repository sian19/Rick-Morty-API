# Rick Morty API
Projeto feito usando o framework React, com o intuito de treinar e desenvolver o consumo de API dentro da biblioteca React.
<h3>Imagens do projeto:</h3>
<img src="https://github.com/sian19/Rick-Morty-API/blob/master/src/assets/img-projeto.png"/>
<p>Usando uma API pública eu peguei os dados do arquivo json da API e os coloquei em uma array, onde nessa array eu a setei em um estado dessa maneira pegando os dados de nome, tipo, imagem, origem e etc, eu os trabalhei dentro de um componente dessa forma serão exibidos na tela do usuário um card contendo as informações ditas acima de cada personagem dentro do card.</p>
<br/>
<h3>Oque foi usado no desenvolvimento da aplicação:</h3>
<ul>
  <li>O projeto foi desenvolvido usando funções para renderizar os componentes, onde se é indispensável o uso de hooks para trabalhar na aplicação.</li>
  <li>Se usou a biblioteca axios para consumir a API dentro de um hook useEffect.</li>
  <li>Se usou um map dentro do componente card para pegar os dados da API que estão dentro da array e renderiza-los na tela do usuário.</li>
  <li>Se criou um componente chamado bullet e se passou para ele como props alguns dados da API que são o status e o species, dentro do componente bullet se criou uma variável com o nome de color essa variável ira receber um valor de acordo com o valor existente no dado status da API, então a variável color foi passada para um style que foi definido como a cor de fundo, dessa forma a cor de fundo do componente bullet irá mudar de acordo com o valor do dado status da API, exemplo se o dado status tiver o valor de 'Alive' a cor de fundo de bullet será verde.</li>
  <li>Também se usou styled-components para estilizar alguns componentes de forma individual para deixar o código mais legível e evitar que outros componentes sejam modificados de forma indevida o seus estilos.</li>
</ul>
<h3>Link do projeto:</h3>
<a href="https://rick-morty-api22.netlify.app">clique aqui<a>
