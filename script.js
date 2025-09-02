const dicasAlimentares = {
  emagrecimento: {
    titulo: "Foco em Emagrecimento",
    descricao: "Priorize alimentos ricos em fibras e proteínas para aumentar a saciedade e manter o metabolismo ativo.",
    grupos: [
      { nome: "Proteínas Magras", alimentos: "Peito de frango, ovos, peixes (tilápia, salmão), iogurte natural, tofu." },
      { nome: "Carboidratos Complexos", alimentos: "Batata-doce, arroz integral, aveia, quinoa, pão integral." },
      { nome: "Gorduras Saudáveis", alimentos: "Abacate, castanhas, azeite de oliva extra virgem, sementes de chia." },
      { nome: "Legumes e Verduras", alimentos: "Brócolis, espinafre, couve-flor, alface, tomate. (Consuma à vontade!)" },
    ],
  },
  hipertrofia: {
    titulo: "Foco em Hipertrofia",
    descricao: "Para construir músculos, o corpo precisa de um bom aporte de proteínas de qualidade e carboidratos para energia.",
    grupos: [
      { nome: "Proteínas de Alto Valor", alimentos: "Peito de frango, carne vermelha magra (patinho), ovos, salmão, whey protein." },
      { nome: "Carboidratos para Energia", alimentos: "Arroz branco, batata-inglesa, macarrão, mandioca (aipim), banana." },
      { nome: "Gorduras Boas", alimentos: "Pasta de amendoim, abacate, gema de ovo, azeite de oliva." },
      { nome: "Laticínios", alimentos: "Leite integral, queijo cottage, iogurte grego." },
    ],
  },
  forca: {
    titulo: "Foco em Ganho de Força",
    descricao: "Treinos de força exigem energia imediata e uma recuperação muscular eficiente. Foque em nutrientes densos.",
    grupos: [
      { nome: "Fontes de Energia Rápida", alimentos: "Arroz branco (pré-treino), batata, banana, aveia, mel." },
      { nome: "Proteínas para Reparo", alimentos: "Carne vermelha, ovos inteiros, frango, peixes gordos (sardinha, salmão)." },
      { nome: "Nutrientes para Performance", alimentos: "Beterraba (aumenta o óxido nítrico), espinafre, feijão, laranja." },
      { nome: "Gorduras Estratégicas", alimentos: "Óleo de coco, castanhas, abacate." },
    ],
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-recomendacao");
  const conteudoTreinoDiv = document.getElementById("conteudo-treino");
  const infoAdicionalDiv = document.getElementById("info-adicional");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const idade = parseInt(document.getElementById("idade").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseInt(document.getElementById("altura").value);
    const genero = document.querySelector('input[name="genero"]:checked').value;
    const dias = document.getElementById("dias").value;
    const nivelAtividade = parseFloat(document.getElementById("nivelAtividade").value);
    const objetivo = document.getElementById("objetivo").value;
    
    const tmb = calcularTMB(peso, altura, idade, genero);
    const metas = definirMetasCaloricas(tmb, nivelAtividade, objetivo);
    const treinoRecomendadoKey = recomendarTreino(dias);
    const treinoSelecionado = treinos[treinoRecomendadoKey];

    exibirInfoAdicional(peso, objetivo, metas, genero);
    exibirTreino(treinoSelecionado, objetivo);

    infoAdicionalDiv.scrollIntoView({ behavior: "smooth" });
  });

  function calcularTMB(peso, altura, idade, genero) {
    
    const baseCalculo = 10 * peso + 6.25 * altura - 5 * idade;
    if (genero === "masculino") {
      return baseCalculo + 5;
    } else if (genero === "feminino") {
      return baseCalculo - 161;
    } else {
      return baseCalculo - 78; 
    }
  }

  function definirMetasCaloricas(tmb, nivelAtividade, objetivo) {
      const caloriasManutencao = tmb * nivelAtividade;
      let metaCalorica;
      let textoMeta;

      if (objetivo === 'emagrecimento') {
          metaCalorica = caloriasManutencao - 400;
          textoMeta = `Para o seu objetivo de <strong>Emagrecimento</strong>, sua meta é:`;
      } else {
          metaCalorica = caloriasManutencao + 400;
          textoMeta = `Para o seu objetivo de <strong>Hipertrofia/Força</strong>, sua meta é:`;
      }

      return {
          tmb: Math.round(tmb),
          manutencao: Math.round(caloriasManutencao),
          meta: Math.round(metaCalorica),
          texto: textoMeta
      };
  }

  function recomendarTreino(dias) {
    if (dias === "2") return "ab";
    if (dias === "3") return "abc";
    if (dias === "4") return "abcd";
    if (dias === "5") return "abcde";
    return "ab";
  }

  function exibirInfoAdicional(peso, objetivo, metas, genero) {
    infoAdicionalDiv.innerHTML = ""; 

    const aguaLitros = (peso * 35 / 1000).toFixed(1);
    const dicas = dicasAlimentares[objetivo];
    let avisoGenero = "";
    if (genero === 'outro') {
        avisoGenero = `<p class="detalhes" style="font-size: 0.8rem; color: #a0a0a0; text-align: center;"><em>*O cálculo para "Outro" é uma média das fórmulas masculina e feminina e serve como uma estimativa inicial.</em></p>`;
    }

    const conteudoHTML = `
      <div class="dia-treino" style="animation: fadeInUp 0.8s ease-out;">
          <h3>Dicas e Metas Nutricionais</h3>

          <div class="exercicio">
              <h4>🔥 Suas Metas Calóricas Diárias (Estimativa)</h4>
              <p class="detalhes">Sua Taxa Metabólica Basal (calorias em repouso) é de <strong>${metas.tmb} kcal</strong>.</p>
              <p class="detalhes">Para manter seu peso atual, você precisa de aprox. <strong>${metas.manutencao} kcal</strong> por dia.</p>
              <p class="detalhes">${metas.texto}</p>
              <p class="caloria-destaque">${metas.meta} kcal por dia</p>
              ${avisoGenero}
          </div>

          <div class="exercicio">
              <h4>💧 Hidratação Diária Essencial</h4>
              <p class="detalhes">Baseado no seu peso de <strong>${peso}kg</strong>, a recomendação de consumo é:</p>
              <p class="caloria-destaque">${aguaLitros} litros de água por dia</p>
          </div>

          <div class="exercicio">
              <h4>🍎 Alimentos para o Objetivo: ${dicas.titulo}</h4>
              <p>${dicas.descricao}</p>
              <ul class="lista-alimentos">
                  ${dicas.grupos.map(grupo => `
                      <li><strong>${grupo.nome}:</strong> ${grupo.alimentos}</li>
                  `).join("")}
              </ul>
              <p style="margin-top: 20px; font-size: 0.9rem; color: #a0a0a0;"><em><strong>Aviso:</strong> Estas são estimativas e sugestões gerais. Para um plano alimentar personalizado e seguro, consulte um nutricionista.</em></p>
          </div>
      </div>
    `;
    
    infoAdicionalDiv.innerHTML = conteudoHTML;
  }

  function exibirTreino(treino, objetivo) {
    conteudoTreinoDiv.innerHTML = "";
    const introDiv = document.createElement("div");
    introDiv.innerHTML = `
      <p style="text-align:center; color: #a0a0a0; font-size: 1.1rem;">
        Com base no seu objetivo de <strong>${objetivo.charAt(0).toUpperCase() + objetivo.slice(1)}</strong>, esta é a sua recomendação de treino:
      </p>
    `;
    conteudoTreinoDiv.appendChild(introDiv);
    const tituloTreino = document.createElement("h2");
    tituloTreino.textContent = treino.titulo;
    const descricaoTreino = document.createElement("p");
    descricaoTreino.textContent = treino.descricao;
    conteudoTreinoDiv.appendChild(tituloTreino);
    conteudoTreinoDiv.appendChild(descricaoTreino);

    treino.dias.forEach((dia) => {
      const diaDiv = document.createElement("div");
      diaDiv.className = "dia-treino";
      const tituloDia = document.createElement("h3");
      tituloDia.textContent = dia.dia;
      diaDiv.appendChild(tituloDia);
      dia.exercicios.forEach((ex) => {
        const exercicioDiv = document.createElement("div");
        exercicioDiv.className = "exercicio";
        const nomeExercicio = document.createElement("h4");
        nomeExercicio.textContent = ex.nome;
        const detalhesExercicio = document.createElement("p");
        detalhesExercicio.className = "detalhes";
        detalhesExercicio.innerHTML = `Séries: <strong>${ex.series}</strong> | Repetições: <strong>${ex.repeticoes}</strong>`;
        const instrucaoExercicio = document.createElement("p");
        instrucaoExercicio.textContent = ex.instrucao;
        exercicioDiv.appendChild(nomeExercicio);
        exercicioDiv.appendChild(detalhesExercicio);
        exercicioDiv.appendChild(instrucaoExercicio);
        diaDiv.appendChild(exercicioDiv);
      });
      conteudoTreinoDiv.appendChild(diaDiv);
    });
  }
});