import React, { use, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


function App() {
  const [img, setImg] = useState(require('./assets/biscoito.png')); // adicionando o caminho da imagem a um estado de forma dinâmica
  const [frase, setFrase] = useState('testando frase da sorte.')
  const [isOpen, setIsOpen] = useState(false);
  const [textButton, setTextButton] = useState('Quebrar Biscoito');

  const frases = [
    "Acredite em si mesmo e tudo será possível.",
    "Grandes oportunidades estão a caminho.",
    "O sucesso é a soma de pequenos esforços diários.",
    "A felicidade está nas pequenas coisas.",
    "Confie no processo, o melhor está por vir.",
    "Você é mais forte do que imagina.",
    "A sorte favorece os corajosos.",
    "Cada dia é uma nova chance de recomeçar.",
    "O universo conspira a favor dos sonhadores.",
    "Seja a mudança que você deseja ver no mundo.",
    "A paciência é a chave para grandes conquistas.",
    "O amor é a resposta para todas as perguntas.",
    "Acredite no poder dos seus sonhos.",
    "O otimismo é o ímã da felicidade.",
    "A vida recompensa aqueles que persistem.",
    "Você está exatamente onde deveria estar.",
    "A gratidão transforma o que temos em suficiente.",
    "O melhor ainda está por vir.",
    "A simplicidade é o último grau de sofisticação.",
    "A coragem é o primeiro passo para o sucesso.",
    "A vida é feita de escolhas, escolha ser feliz.",
    "O aprendizado nunca termina.",
    "A bondade é contagiosa, espalhe-a.",
    "Acredite no poder do agora.",
    "O tempo cura todas as feridas.",
    "A vida é uma aventura, aproveite o passeio.",
    "A persistência é o caminho para a vitória.",
    "A alegria está no caminho, não no destino.",
    "Você é capaz de coisas incríveis.",
    "A vida é curta, aproveite cada momento.",
    "A confiança é o segredo do sucesso.",
    "A felicidade é uma escolha diária.",
    "O amor próprio é o início de um romance eterno.",
    "A vida é um presente, aproveite-o.",
    "Acredite no poder da sua intuição.",
    "O esforço de hoje é o sucesso de amanhã.",
    "A vida é feita de momentos, crie os seus.",
    "A esperança é o combustível da alma.",
    "Acredite, você é único e especial.",
    "A vida é mais doce quando compartilhada.",
    "O fracasso é apenas um degrau para o sucesso.",
    "A gentileza é a linguagem universal.",
    "A vida é um espelho, reflita positividade.",
    "A felicidade está dentro de você.",
    "Acredite no poder das pequenas ações.",
    "O futuro pertence àqueles que acreditam nos seus sonhos.",
    "A vida é uma dança, siga o ritmo.",
    "A coragem é a força que move montanhas.",
    "A gratidão abre portas para a abundância.",
    "A vida é um livro, escreva uma história incrível.",
  ]

  // function quebraBiscoito() {
  //   setImg(require('./assets/biscoitoAberto.png'))

  //   let aleatNumber = Math.floor(Math.random() * frases.length);
  //   console.log(frases[aleatNumber]);

  //   const frase = frases[aleatNumber]
  //   setFrase(`"${frase}"`); // seta o novo valor para a a frase

  //   setIsOpen(true); // sinaliza que o biscoito está aberto


  // }

  // function novoBiscoito() {
  //   setImg(require('./assets/biscoito.png')); // coloca a imagem do biscoito fechado
  //   setFrase(''); // zera a frase
  //   setIsOpen(false); // sinaliza o fechamento do biscoito

  // }

  function pressButton() {
    if (isOpen === false) { // se no momento do click o biscoito estiver fechado, então vamos abrir

      setImg(require('./assets/biscoitoAberto.png'));

      let aleatNumber = Math.floor(Math.random() * frases.length);
      console.log(frases[aleatNumber]);

      const frase = frases[aleatNumber]
      setFrase(`"${frase}"`); // seta o novo valor para a a frase

      setIsOpen(true); // sinaliza que o biscoito está aberto
      setTextButton('Novo Biscoito')
    }
    else if (isOpen === true) { // se no momento do click o botão estiver aberto, então fechá-lo
      setImg(require('./assets/biscoito.png')); // coloca a imagem do biscoito fechado
      setFrase(''); // zera a frase
      setIsOpen(false); // sinaliza o fechamento do biscoito
      setTextButton('Quebrar Biscoito')
    }
  }

  return (
    <View style={styles.container}>

      <View style={[styles.title]}>
        <Text style={styles.titleTxt}>BISCOITO DA SORTE</Text>
      </View>

      <Image
        source={img}
        style={styles.image}
      />

      <Text style={[styles.frase, { marginBottom: 45 }]}>{frase}</Text>
      {/**
       * aplicando estilização condicional abaixo usando
       * operação ternária
       * ? executa se condição for true
       * : executa se condição for false
       */}
      <TouchableOpacity style={isOpen ? [styles.botao, { borderColor: '#fff' }] : styles.botao} onPress={pressButton}>
        <View style={styles.btnArea}>
          <Text style={isOpen ? [styles.btnText, { color: '#fff' }] : styles.btnText}>{textButton}</Text>
        </View>
      </TouchableOpacity>

      {/* <TouchableOpacity style={[styles.botao, { marginTop: 15, borderColor: '#121212', display: isOpen ? 'flex' : 'none' }]} onPress={novoBiscoito}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnText, { color: '#121212' }]}>NOVO BISCOITO</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e3a5f'
  },
  image: {
    height: 230,
    width: 230,

  },
  frase: {
    fontSize: 25,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 25,
    backgroundColor: '#dd7b22'
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff'
  },
  titleTxt: {
    fontWeight: 'normal',
    fontSize: 25,
    fontFamily: 'Palatino',
    fontStyle: 'normal',
    color: '#fff'

  },
  title: {
    width: '80%',
    height: '5%',
    alignItems: 'center',
    position: 'absolute',
    top: 200,
    borderWidth: 2,
    borderColor: '#dd7b22',
    justifyContent: 'center',
    backgroundColor: "#dd7b22"
  }
});

export default App; // EXPORTANDO A FUNÇÃO PARA O INDEX.js