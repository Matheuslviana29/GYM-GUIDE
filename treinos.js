const treinos = {
  ab: {
    titulo: "Treino A/B - Corpo Inteiro",
    descricao: "Ideal para quem tem 2 dias na semana. Foco em movimentos para o corpo inteiro, divididos em Superior e Inferior.",
    dias: [
      {
        dia: "Treino A - Membros Superiores (Upper Body)",
        exercicios: [
          {
            nome: "Supino Reto com Barra",
            series: "3",
            repeticoes: "8-12",
            instrucao: "Principal exercício para peitoral. Desça a barra controladamente até o peito e empurre com força.",
          },
          {
            nome: "Remada Curvada com Barra",
            series: "3",
            repeticoes: "8-12",
            instrucao: "Excelente para densidade das costas. Mantenha a coluna reta e puxe a barra em direção ao umbigo.",
          },
          {
            nome: "Desenvolvimento Militar com Halteres",
            series: "3",
            repeticoes: "10-15",
            instrucao: "Foco nos ombros. Sentado, empurre os halteres para cima até a extensão quase completa dos braços.",
          },
          {
            nome: "Puxada Frontal (Pulley)",
            series: "3",
            repeticoes: "10-15",
            instrucao: "Ótimo para a largura das costas (dorsal). Puxe a barra em direção à parte superior do peito.",
          },
          {
            nome: "Rosca Direta com Barra",
            series: "3",
            repeticoes: "10-15",
            instrucao: "Mantenha os cotovelos fixos ao lado do corpo para isolar o bíceps.",
          },
          {
            nome: "Tríceps na Polia com Corda",
            series: "3",
            repeticoes: "10-15",
            instrucao: "Puxe a corda para baixo e para os lados no final do movimento para máxima contração do tríceps.",
          },
        ],
      },
      {
        dia: "Treino B - Membros Inferiores (Lower Body)",
        exercicios: [
          {
            nome: "Agachamento Livre com Barra",
            series: "4",
            repeticoes: "8-12",
            instrucao: "O exercício mais completo para pernas. Mantenha a coluna reta e desça até os quadris passarem da linha dos joelhos.",
          },
          {
            nome: "Leg Press 45º",
            series: "3",
            repeticoes: "10-15",
            instrucao: "Permite focar no quadríceps com segurança. Desça a plataforma de forma controlada.",
          },

          {
            nome: "Mesa Flexora",
            series: "3",
            repeticoes: "10-15",
            instrucao: "Excelente para isolar os posteriores de coxa. Faça o movimento de forma lenta e controlada, sem dar impulsos.",
          },
          
          {
            nome: "Cadeira Extensora",
            series: "3",
            repeticoes: "12-18",
            instrucao: "Isole o quadríceps. Segure a contração por 1 segundo no topo do movimento.",
          },
          {
            nome: "Panturrilha em Pé",
            series: "4",
            repeticoes: "15-20",
            instrucao: "Suba até a contração máxima da panturrilha e segure por um segundo. Alongue bem na descida.",
          },
        ],
      },
    ],
  },
  abc: {
    titulo: "Treino A/B/C - Push/Pull/Legs",
    descricao: "A divisão clássica e uma das mais eficientes. Perfeita para 3 a 6 dias na semana (repetindo o ciclo).",
    dias: [
      {
        dia: "Treino A - Push (Peito, Ombro e Tríceps)",
        exercicios: [
          {
            nome: "Supino Reto",
            series: "4",
            repeticoes: "8-12",
            instrucao: "Movimento base para peitoral. Desça a barra controladamente até o peito e empurre com força.",
          },
          {
            nome: "Desenvolvimento Militar com Barra",
            series: "3",
            repeticoes: "8-12",
            instrucao: "Foco em ombros. Execute em pé ou sentado. A barra deve descer até a altura do queixo.",
          },
          {
            nome: "Crucifixo Inclinado com Halteres",
            series: "3",
            repeticoes: "10-15",
            instrucao:
              "Alongue bem o peitoral na descida e contraia no topo do movimento, sem deixar os halteres se tocarem.",
          },
          {
            nome: "Tríceps Testa com Barra W",
            series: "3",
            repeticoes: "10-15",
            instrucao:
              "Deitado, desça a barra em direção à testa, mantendo os cotovelos apontados para o teto. Estenda os braços.",
          },
        ],
      },
      {
        dia: "Treino B - Pull (Costas e Bíceps)",
        exercicios: [
          {
            nome: "Levantamento Terra",
            series: "3",
            repeticoes: "5-8",
            instrucao:
              "O rei dos exercícios de costas. Mantenha a coluna perfeitamente reta. Puxe o peso do chão usando a força das costas e pernas.",
          },
          {
            nome: "Remada Cavalinho",
            series: "3",
            repeticoes: "8-12",
            instrucao: "Pegada fechada. Puxe a carga em direção ao peito, esmagando os músculos do meio das costas.",
          },
          {
            nome: "Puxada com Triângulo",
            series: "3",
            repeticoes: "10-15",
            instrucao: "Sente-se na polia e puxe o triângulo em direção ao peito, focando na contração dorsal.",
          },
          {
            nome: "Rosca Martelo com Halteres",
            series: "3",
            repeticoes: "10-15",
            instrucao: "Pegada neutra (palmas viradas uma para a outra). Foca no bíceps e no braquial.",
          },
        ],
      },
      {
        dia: "Treino C - Legs (Pernas Completas)",
        exercicios: [
          {
            nome: "Agachamento Livre",
            series: "4",
            repeticoes: "8-12",
            instrucao: "Mantenha o peito estufado e a coluna reta. Desça até os quadris passarem da linha dos joelhos.",
          },
          {
            nome: "Leg Press 45º",
            series: "3",
            repeticoes: "10-15",
            instrucao:
              "Posicione os pés na largura dos ombros na plataforma. Desça controladamente e empurre com força.",
          },
          {
            nome: "Stiff com Barra",
            series: "3",
            repeticoes: "10-15",
            instrucao:
              "Foco nos posteriores de coxa. Mantenha as pernas semi-rígidas e desça o tronco com a coluna reta.",
          },
          {
            nome: "Panturrilha em Pé",
            series: "5",
            repeticoes: "15-20",
            instrucao: "Suba até a contração máxima e segure por um segundo. Alongue bem na descida.",
          },
        ],
      },
    ],
  },
  abcd: {
    titulo: "Treino A/B/C/D - Foco por Músculo",
    descricao: "Ótima divisão para dar mais atenção a cada grupo muscular. Ideal para quem treina 4 dias na semana.",
    dias: [
      {
        dia: "Treino A - Peito e Tríceps",
        exercicios: [
          {
            nome: "Supino Inclinado com Halteres",
            series: "4",
            repeticoes: "8-12",
            instrucao: "Principal construtor para a parte superior do peito. Desça os halteres com controle.",
          },
          {
            nome: "Supino Reto com Barra",
            series: "3",
            repeticoes: "8-12",
            instrucao: "Foco na porção medial do peito. Mantenha a estabilidade dos ombros.",
          },
          {
            nome: "Voador (Peck Deck)",
            series: "3",
            repeticoes: "12-15",
            instrucao: "Isole o peitoral. Esmague o músculo no pico da contração.",
          },
          {
            nome: "Paralelas (Foco em Tríceps)",
            series: "3",
            repeticoes: "8-15",
            instrucao:
              "Mantenha o tronco o mais reto possível para focar no tríceps. Desça até formar um ângulo de 90 graus.",
          },
          {
            nome: "Tríceps Francês com Halter",
            series: "3",
            repeticoes: "10-15",
            instrucao: "Atrás da cabeça, segurando um halter com as duas mãos. Alongue bem o tríceps.",
          },
        ],
      },
      {
        dia: "Treino B - Costas e Bíceps",
        exercicios: [
          {
            nome: "Puxada Frontal Pegada Aberta",
            series: "4",
            repeticoes: "8-12",
            instrucao: "Concentre-se em puxar com os cotovelos para baixo, ativando os dorsais.",
          },
          {
            nome: "Remada Curvada Supinada",
            series: "3",
            repeticoes: "8-12",
            instrucao: "Pegada com as palmas para cima, ativando mais a parte inferior dos dorsais e o bíceps.",
          },
          {
            nome: "Puxada Alta com Corda (Face Pull)",
            series: "3",
            repeticoes: "15-20",
            instrucao:
              "Excelente para a saúde dos ombros e para o trapézio posterior. Puxe a corda em direção ao rosto.",
          },
          {
            nome: "Rosca Scott na Máquina",
            series: "3",
            repeticoes: "10-15",
            instrucao: "Isola o bíceps completamente. Evite usar o corpo para levantar o peso.",
          },
          {
            nome: "Rosca Inclinada com Halteres",
            series: "3",
            repeticoes: "10-15",
            instrucao: "Sentado num banco inclinado, permite um alongamento maior do bíceps, aumentando a amplitude.",
          },
        ],
      },
      {
        dia: "Treino C - Pernas Completas",
        exercicios: [
          {
            nome: "Agachamento Hack",
            series: "4",
            repeticoes: "8-12",
            instrucao: "Ótima variação do agachamento com mais suporte para as costas. Foco total nos quadríceps.",
          },
          {
            nome: "Cadeira Extensora",
            series: "3",
            repeticoes: "12-15",
            instrucao: "Isole o quadríceps. Segure a contração por 1 segundo no topo.",
          },
          {
            nome: "Mesa Flexora",
            series: "3",
            repeticoes: "12-15",
            instrucao: "Isole os posteriores de coxa. Faça o movimento de forma controlada.",
          },
          {
            nome: "Afundo com Halteres",
            series: "3",
            repeticoes: "10-12 (cada perna)",
            instrucao: "Trabalha quadríceps e glúteos de forma unilateral. Mantenha o equilíbrio.",
          },
          {
            nome: "Elevação Pélvica",
            series: "4",
            repeticoes: "10-15",
            instrucao: "Principal exercício para glúteos. Suba o quadril e contraia os glúteos com força no topo.",
          },
        ],
      },
      {
        dia: "Treino D - Ombros e Abdômen",
        exercicios: [
          {
            nome: "Desenvolvimento Arnold",
            series: "4",
            repeticoes: "8-12",
            instrucao: "Trabalha as três cabeças do deltoide. O movimento de rotação é a chave.",
          },
          {
            nome: "Elevação Lateral com Halteres",
            series: "3",
            repeticoes: "12-20",
            instrucao:
              "O segredo para ombros largos. Eleve os halteres até a altura dos ombros, com os cotovelos ligeiramente flexionados.",
          },
          {
            nome: "Elevação Frontal com Anilha",
            series: "3",
            repeticoes: "12-15",
            instrucao: "Foco na parte anterior dos ombros. Levante a anilha até a altura dos olhos.",
          },
          {
            nome: "Prancha Abdominal",
            series: "4",
            repeticoes: "45-60 segundos",
            instrucao: "Mantenha o corpo reto como uma prancha. Contraia o abdômen o tempo todo.",
          },
          {
            nome: "Elevação de Pernas (Na paralela ou deitado)",
            series: "3",
            repeticoes: "12-20",
            instrucao: "Foco na parte inferior do abdômen. Evite balançar.",
          },
        ],
      },
    ],
  },
  abcde: {
    titulo: "Treino A/B/C/D/E - Bodybuilder Split",
    descricao:
      "Máximo isolamento para cada grupo muscular. Para quem tem 5 dias disponíveis e busca hipertrofia máxima.",
    dias: [
      {
        dia: "Treino A - Peito",
        exercicios: [
          {
            nome: "Supino Inclinado com Barra",
            series: "4",
            repeticoes: "8-12",
            instrucao: "Comece com o foco na parte superior do peito.",
          },
          {
            nome: "Supino Reto com Halteres",
            series: "4",
            repeticoes: "8-12",
            instrucao: "Maior amplitude e trabalho unilateral. Desça bem os halteres.",
          },
          {
            nome: "Crucifixo na Polia Alta",
            series: "3",
            repeticoes: "12-15",
            instrucao: "Tensão contínua no peitoral. Junte as mãos na frente do corpo.",
          },
          {
            nome: "Flexão de Braço (Push-up)",
            series: "3",
            repeticoes: "10-20",
            instrucao: "Finalize o treino de peito com um exercício usando o peso corporal.",
          },
        ],
      },
      {
        dia: "Treino B - Costas",
        exercicios: [
          {
            nome: "Remada Curvada com Barra",
            series: "4",
            repeticoes: "8-12",
            instrucao: "Construtor de densidade para as costas. Mantenha a postura impecável.",
          },
          {
            nome: "Puxada Frontal Pegada Neutra",
            series: "4",
            repeticoes: "10-15",
            instrucao: "Use uma pegada na largura dos ombros para focar mais no meio das costas.",
          },
          {
            nome: "Remada Unilateral na Polia Baixa",
            series: "3",
            repeticoes: "10-15 (cada lado)",
            instrucao: "Isole cada lado dos dorsais. Puxe com o cotovelo rente ao corpo.",
          },
          {
            nome: "Hiperextensão Lombar",
            series: "3",
            repeticoes: "15-20",
            instrucao: "Fortaleça a região lombar. Pode ser feito com ou sem peso adicional.",
          },
        ],
      },
      {
        dia: "Treino C - Pernas",
        exercicios: [
          {
            nome: "Agachamento Livre",
            series: "5",
            repeticoes: "8-12",
            instrucao: "O exercício fundamental para pernas. Amplitude total é crucial.",
          },
          {
            nome: "Leg Press 45º",
            series: "4",
            repeticoes: "10-15",
            instrucao: "Permite usar mais carga com segurança. Varie a posição dos pés para diferentes focos.",
          },
          {
            nome: "Stiff com Halteres",
            series: "4",
            repeticoes: "12-15",
            instrucao: "Excelente para posteriores e glúteos. Mantenha a coluna reta.",
          },
          {
            nome: "Cadeira Adutora e Abdutora",
            series: "3",
            repeticoes: "15-20 (cada)",
            instrucao: "Foco nas partes interna e externa das coxas.",
          },
        ],
      },
      {
        dia: "Treino D - Ombros",
        exercicios: [
          {
            nome: "Desenvolvimento Militar Sentado",
            series: "4",
            repeticoes: "8-12",
            instrucao: "Construtor de massa para os ombros. Controle a fase negativa do movimento.",
          },
          {
            nome: "Elevação Lateral Sentado",
            series: "4",
            repeticoes: "12-15",
            instrucao: "Sentado, você elimina o impulso, isolando mais o deltoide medial.",
          },
          {
            nome: "Remada Alta com Barra",
            series: "3",
            repeticoes: "10-15",
            instrucao: "Trabalha ombros e trapézio. Puxe a barra até a altura do peito.",
          },
          {
            nome: "Encolhimento com Halteres",
            series: "4",
            repeticoes: "12-15",
            instrucao: "Foco total no trapézio. Encolha os ombros o máximo que puder, segure e desça.",
          },
        ],
      },
      {
        dia: "Treino E - Braços (Bíceps e Tríceps)",
        exercicios: [
          {
            nome: "Supino Fechado",
            series: "4",
            repeticoes: "8-12",
            instrucao: "Ótimo exercício composto para o tríceps. Mantenha os cotovelos próximos ao corpo.",
          },
          {
            nome: "Rosca Direta na Polia Baixa",
            series: "4",
            repeticoes: "10-15",
            instrucao: "A polia proporciona tensão contínua durante todo o movimento do bíceps.",
          },
          {
            nome: "Tríceps Corda Acima da Cabeça",
            series: "3",
            repeticoes: "12-15",
            instrucao: "Alongue bem a cabeça longa do tríceps na descida.",
          },
          {
            nome: "Rosca Concentrada",
            series: "3",
            repeticoes: "10-15 (cada braço)",
            instrucao: "O clássico do Arnold. Isole e esmague o pico do bíceps.",
          },
        ],
      },
    ],
  },
};