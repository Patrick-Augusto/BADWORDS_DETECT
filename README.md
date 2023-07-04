# BADWORDS_DETECT

Este é um componente React Native chamado Censurator que pode ser usado para filtrar palavras ofensivas de um campo de texto. O componente exibe um campo de entrada de texto onde os usuários podem digitar o texto e, conforme eles digitam, as palavras ofensivas são substituídas por asteriscos (*).

## Uso

Para usar o componente Censurator em seu aplicativo React Native, siga as etapas abaixo:

1. Copie o código-fonte fornecido e salve-o em um arquivo com o nome `Censurator.js` ou qualquer outro nome adequado.
2. Certifique-se de ter instalado o React Native em seu projeto. Caso contrário, instale-o executando o seguinte comando no terminal:
   ```
   npm install react-native
   ```
3. Importe o componente `Censurator` em seu arquivo de componente pai:
   ```javascript
   import Censurator from './Censurator';
   ```
4. Em seu componente pai, adicione o componente `Censurator` como parte de sua renderização:
   ```javascript
   const App = () => {
     return (
       <View>
         {/* ...seu código existente... */}
         <Censurator />
       </View>
     );
   };
   ```
5. Agora, quando você executar o aplicativo React Native, você verá um campo de entrada de texto onde as palavras ofensivas serão filtradas à medida que você digita.

## Funcionamento Interno

O componente `Censurator` faz uso do hook `useState` do React para gerenciar o estado do texto digitado pelo usuário. A variável `text` é inicializada com uma string vazia e a função `setText` é usada para atualizar o valor dessa variável sempre que o usuário digita algo no campo de entrada de texto.

O componente também contém uma lista chamada `badWords`, que armazena as palavras ofensivas a serem filtradas. Essa lista pode ser personalizada adicionando ou removendo palavras, conforme necessário.

A função `filterBadWords` é responsável por filtrar as palavras ofensivas do texto fornecido. Ela recebe o texto digitado pelo usuário como parâmetro (`inputText: string`). A função percorre a lista `badWords` usando o método `forEach` e, se encontrar uma palavra ofensiva no texto, substitui essa palavra por uma sequência de asteriscos do mesmo comprimento usando o método `replace` do JavaScript. O texto filtrado é então retornado pela função.

No campo de entrada de texto, é usado o componente `TextInput` do React Native. O atributo `placeholder` define o texto exibido como uma dica para o usuário. O atributo `onChangeText` é definido para a função `setText`, que atualiza o estado `text` sempre que o texto no campo de entrada é alterado. O atributo `value` é definido como o estado `text`, garantindo que o texto exibido no campo de entrada reflita o estado atual.

## Personalização

Você pode personalizar o componente Censurator de várias maneiras:

- **Adicionar ou remover palavras ofensivas**: A lista `badWords` contém as palavras ofensivas que são filtradas. Você pode adicionar ou remover palavras dessa lista conforme necessário.

- **Personalizar o estilo do componente**: O componente `Censurator` é envolvido por uma `View` com um estilo definido através do objeto `style`.

 Você pode personalizar esse estilo alterando as propriedades de estilo na definição do objeto `style`.
