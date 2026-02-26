---
title: "Sobre a minha IC"
description: "Como eu vim parar aqui e o que me fez continuar"
image: "./plasmid.jpg"
publishDate: "2025-11-20"
tags: ["Plasmídeos", "Grafos", "Agrupamento", "Pesquisa"]
---

Há aproximadamente seis meses, eu decidi que queria fazer uma iniciação científica. Por acaso, o IQ-USP tinha acabado de contratar um professor que estava procurando por alunos na área de bioinformática. E, também por acaso, eu tinha desenvolvido um pequeno interesse nesse assunto que une Computação e Biologia. Então, decidi entrar em contato com esse professor e agendamos uma reunião. Conversamos bastante nesse dia e, incrivelmente ou não, ele não exigiu que eu demonstrasse nenhum conhecimento prévio e me chamou para escrever um projeto, já que as inscrições para o PIBIC estavam abertas. E foi assim que eu vim parar aqui.

Eu tinha cerca de duas semanas para enviar o projeto. Se você já teve que escrever algum projeto antes, sabe que isso é uma quantidade de tempo absurdamente curta, principalmente para uma área que você acabou de ingressar. Dito isso, eu aceitei o desafio e comecei a pesquisar temas, peguei artigos anteriores desse professor e dei uma olhada no projeto dele aqui na USP. No meio do caminho tivemos mais reuniões e, finalmente, conseguimos um tema: "Classificação Hierárquica de Plasmídeos".

Meu objetivo com esse texto é te explicar, caro leitor, um pouco sobre o que eu descobri nesse tema, meu progresso e meus desafios. Espero que tenha uma boa leitura!

## Legal! Mas o que são plasmídeos?

![A imagem mostra uma bactéria com um cromossomo (estrutura emaranhada e maior) e um par de plasmídeos (estruturas circulares)](../../assets/plasmid_in_bacteria.svg)

Dar a definição formal e, em seguida, descrever de forma mais simplificada. Seria útil colocar uma imagem que exemplifique esses elementos dentro de uma bactéria.

Falar um pouco sobre conjugação e transferência horizontal de genes na escala bactéria-bactéria. Explicar o caso da resistência a antibiótico.

Aproveitar o momento criado e explicar a transferência horizontal de genes na escala plasmídeo-plasmídeo. Citar o artigo do Pfeifer&Rocha2024 sobre fago-plasmídeos.

## E por que é difícil classificar esses caras?

Explicar o método de classificação morfológico clássico da biologia e mostrar suas falhas.

Explicar o método atual de classificação filogenética e desenvolver os motivos pelos quais ele falha na classificação de plasmídeos

Detalhar os métodos de grupo-Inc e tipagem-MOB e suas falhas.

Introduzir a Teoria dos Grafos como um método de descrever as relações entre plasmídeos e dar uma visão geral do número de arestas possíveis e tipos de estrutura.

## Ok! E o que você quer fazer?

Explicar meu objetivo geral e o tipo de problema que eu quero resolver

Descrever a importância de uma classificação sistemática no contexto da metagenômica e a importância de um nome para a biologia.

Dar uma visão geral do meu roadmap e da ferramenta que eu quero gerar.

## E como você vai fazer isso?

Introduzir a minha metodologia de trabalho com o grafo bipartido e sobre a decisão do peso da aresta. Explicar a interpretação estatística do bitscore. Por fim, justificar a normalização.

Apresentar o Infomap e a Teoria da Informação (usar aquela figura do neuromap). Aqui, quero dar uma descrição mais detalhada sobre o funcionamento do algoritmo e a métrica de fluxo. Se não for fugir muito, quero explicar a relação entre compressão e agrupamento.

Em seguida, introduzir o tempo de Markov como controle de nível hierárquico. Explicar o possível problema dessa análise e como eu planejo resolvê-los com outros algoritmos (mas isso fica pra outro dia).

## Nem tudo é perfeito, conheçam os transposons

Explicar como esses elementos geram "ruído" na rede e por que isso pode ser um problema. Colocar uma figura boa aqui.

Mostrar a solução que relaciona o fluxo de um nó (dado pelo Infomap) com a anotação do gene. (Aqui vale a pena rever esses resultados e gerar uma tabela para demonstrar)

Colocar o plot das médias de fluxo e falar sobre a escolha do corte.

## Ideias para o futuro

Falar sobre outros resultados que eu espero, sobre as benchmarks que irei realizar e sobre as análises de core e acessory genome.

Falar (com muita empolgação!) sobre como essa classificação pode ajudar a identificar rotas de HGT, por meio dos metadados.

## Conclusão

Resumir todos os pontos que foram tratados aqui no post.

(Proof-read):
- [] Garantir que todos os termos biológicos foram devidamente explicados
- [] Garantir que todos os termos matemáticos foram devidamente explicados
- [] Garantir que todos os termos de informática foram devidamente explicados
- [] Revisar a leitura uma última vez, já no site, antes de submeter.
