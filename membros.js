// ==========================================
// TABELA 1: INDIVÍDUOS (PASTAS PESSOAIS)
// ==========================================
const pessoas = [
  {
    "id": "c1566bb1-10b7-459b-a1b7-995f1e7ddfb5",
    "nomeCompleto": "Manuel Martins de Sam Thiago",
    "genero": "M",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "Ermida",
      "dataFalecimento": "N/A",
      "localFalecimento": "N/A"
    },
    "arquivos": {
      "caminhoFoto": "fotos/person_unknown.png",
      "arquivoDocumental": ""
    },
    "notas": "NOTA DE FONTE: Os dados de nome e filiação foram extraídos dos livros de casamento de Sever de Vouga e do Assento de Batismo de Manoel Borges (1861) — N.º 19, onde o neto é registado com a filiação completa herdada desta linha"
  },
  {
    "id": "3bd68f10-e43b-4b5b-a981-da68172cf735",
    "nomeCompleto": "Maria Martins",
    "genero": "F",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "Ermida",
      "dataFalecimento": "N/A",
      "localFalecimento": "N/A"
    },
    "arquivos": {
      "caminhoFoto": "fotos/person_female.png",
      "arquivoDocumental": ""
    },
    "notas": "NOTA DE FONTE: Identificada nos registos de descendência da Ermida e confirmada por via indireta na árvore de ascendência que consta no Assento de Batismo de Maria Borges (1858), São Miguel da Junqueira."
  },
  {
    "id": "7334e553-2bc8-4879-bb38-5166bbe28f2b",
    "nomeCompleto": "Joaquim Martins de S. Thiago (Borges)",
    "genero": "M",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "Ermida freguesia de Sever de Vouga",
      "dataFalecimento": "N/A",
      "localFalecimento": "N/A"
    },
    "arquivos": {
      "caminhoFoto": "fotos/person_unknown.png",
      "arquivoDocumental": "documentos/Casamento Maria Martins (Senhorinhas) - Irmã de Joaquim M. S. Thiago.pdf"
    },
    "notas": ""
  },
  {
    "id": "b09785bd-f64c-4e7f-8845-b68606dcf705",
    "nomeCompleto": "Rosália Maria Tavares da Silva Martins",
    "genero": "F",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "Vila Cova",
      "dataFalecimento": "N/A",
      "localFalecimento": "N/A"
    },
    "arquivos": {
      "caminhoFoto": "fotos/person_female.png",
      "arquivoDocumental": ""
    },
    "notas": "História / Filhos: Rosália Maria Tavares da Silva Martins (registada com variações ao longo dos anos, incluindo Rosalia Maria Tavares Martins da Silva, Rosalia Maria Tavares da Silva Martins ou, de forma abreviada, Maria Tavares da Silva). irmãos de Rosália: Maria Tavares Martins: Solteira e lavradora, natural e moradora no lugar de Vila Cova. Foi a madrinha do seu filho Manoel em 1861.Francisco Tavares da Silva: Casado, lavrador, natural de Vila Cova e morador no lugar de Gestoso (freguesia de Castelões). O assento de 1876 identifica-o especificamente como segundo tio por consanguinidade do batizado, o que indica ser um primo direito de Rosália ou um irmão legítimo do seu pai, José Tavares da Silva"
  },
  {
    "id": "2a7493a8-b977-4424-8432-9d9e7e2d68e8",
    "nomeCompleto": "Delfim Martins de S. Thiago",
    "genero": "M",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "Ermida",
      "dataFalecimento": "N/A",
      "localFalecimento": "N/A"
    },
    "arquivos": {
      "caminhoFoto": "fotos/person_unknown.ng",
      "arquivoDocumental": ""
    },
    "notas": "Foi o padrinho de batismo da sua sobrinha mais velha, Maria Borges (a \"Irmã Velha\"), a 11 de junho de 1858. Todos os dados biográficos e a confirmação de parentesco deste indivíduo foram retirados do Assento de Batismo de Maria Borges (1858), Paróquia de São Miguel da Junqueira, Concelho de Vale de Cambra."
  },
  {
    "id": "abf5cd03-994a-4231-83d2-2e07df9dd7eb",
    "nomeCompleto": "David Martins Sam Thiago da Silva Borges",
    "genero": "M",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "Ermida",
      "dataFalecimento": "N/A",
      "localFalecimento": "N/A"
    },
    "arquivos": {
      "caminhoFoto": "fotos/person_unknown.png",
      "arquivoDocumental": ""
    },
    "notas": "NOTA DE FONTE: Todos os dados biográficos, profissão e assinatura deste indivíduo foram retirados do Assento de Batismo de Manoel Borges (1861) — N.º 19, Paróquia de São Miguel da Junqueira, Concelho de Vale de Cambra"
  },
  {
    "id": "c3c508f6-861b-4f8e-84cd-c57b83498187",
    "nomeCompleto": "Joaquim Martins Borges",
    "genero": "M",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "Fixou-se e era morador no Lugar de Senhorinhas, freguesia de Sever de Vouga.",
      "dataFalecimento": "N/A",
      "localFalecimento": "N/A"
    },
    "arquivos": {
      "caminhoFoto": "fotos/person_unknown.png",
      "arquivoDocumental": ""
    },
    "notas": "NOTA DE FONTE: Todos os dados biográficos, local de fixação e o nome da sua esposa foram retirados do Assento de Casamento N.º 1 (Lado Esquerdo, Topo) do Livro de Registos Paroquiais de Sever de Vouga (Documento de Prova de Fraternidade enviado em formato de imagem)."
  },
  {
    "id": "a07e59b1-9d90-473c-8642-46b2d61a1b3d",
    "nomeCompleto": "Maria Martins",
    "genero": "F",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "morador no Lugar de Senhorinhas, freguesia de Sever de Vouga.",
      "dataFalecimento": "N/A",
      "localFalecimento": "N/A"
    },
    "arquivos": {
      "caminhoFoto": "fotos/person_female.png",
      "arquivoDocumental": ""
    },
    "notas": "NOTA DE FONTE: Todos os dados biográficos, local de fixação e o nome da sua esposa foram retirados do Assento de Casamento N.º 1 (Lado Esquerdo, Topo) do Livro de Registos Paroquiais de Sever de Vouga (Documento de Prova de Fraternidade enviado em formato de imagem)."
  },
  {
    "id": "fe1ff30a-4d76-427b-9d40-2ccd81defe90",
    "nomeCompleto": "Francisco Martins",
    "genero": "M",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "Sever de Vouga",
      "dataFalecimento": "N/A",
      "localFalecimento": "N/A"
    },
    "arquivos": {
      "caminhoFoto": "fotos/person_unknown.png",
      "arquivoDocumental": ""
    },
    "notas": "Papel Documentado na Família: Aparece formalmente como testemunha no casamento da sua sobrinha Maria Martins, sendo expressamente identificado no texto paroquial como \"tio da contraente\". Assinou o assento. NOTA DE FONTE: A existência, parentesco e profissão deste indivíduo foram comprovados através do Assento de Casamento N.º 1 (Lado Esquerdo, Topo) do Livro de Registos Paroquiais de Sever de Vouga, onde atuou como testemunha oficial e assinou o documento."
  },
  {
    "id": "57fb9eff-0070-4e4b-bd5f-d69cee6a6a95",
    "nomeCompleto": "Albino Martins Borges",
    "genero": "M",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "06/02/1867",
      "localNascimento": "Vila Cova, Junqueira",
      "dataFalecimento": "21/05/1963",
      "localFalecimento": "N/A"
    },
    "arquivos": {
      "caminhoFoto": "fotos/albino_borges.jpg",
      "arquivoDocumental": "documentos/Assento de Batismo Albino Nº3 1867.pdf"
    },
    "notas": "Pai: Joaquim Martins Borges d'Santhiago (Natural de: Ermida, Sever de Vouga)\n\nMãe: Rozalia Maria Tavares Martins da Silva (Natural de: Vila Cova, Junqueira)\n\nAvós Paternos: Jozé Martins de Sam Thiago (Nat: Ermida) & Antónia Maria de Jezus (Nat: Ermida)\n\nAvós Maternos: Jozé Tavares da Silva (Nat: Vila Cova, Junqueira) & Roza Tavares e Martins (Nat: Vila Cova, Junqueira)"
  },
  {
    "id": "81eed544-730d-49cb-8b84-b55cdb8cfb8e",
    "nomeCompleto": "Maria Tavares da Silva",
    "genero": "F",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "13/08/1871",
      "localNascimento": "N/A",
      "dataFalecimento": "01/08/1970",
      "localFalecimento": "N/A"
    },
    "arquivos": {
      "caminhoFoto": "fotos/person_female.png",
      "arquivoDocumental": "documentos/Assento de Batismo Maria Tavares Nº 17 1871.pdf"
    },
    "notas": "Pai: António Rodrigues (Natural de: Junqueira)\nMãe: Maria Tavares da Silva (Natural de: Junqueira de Cima)\nAvós Paternos: Manoel Rodrigues d'Almeida (Nat: ) & Maria Tavares (Nat: )\nAvós Maternos: Pedro Rodrigues d'Almeida (Nat: ) & Lucrezia Maria Tavares (Nat: )\nFilhos: Manoel Borges, Maria Rosa, José Maria, Maria Joaquina, Custódio Santiago\nPedro Rodrigues d'Almeida, casado, lavrador, tio materno"
  },
  {
    "id": "55717ed4-ac69-4c83-8af4-a0f567aca9f5",
    "nomeCompleto": "Maria Borges",
    "genero": "F",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "11/06/1858",
      "localNascimento": "Vila Cova",
      "dataFalecimento": "11/06/1858",
      "localFalecimento": "N/A"
    },
    "arquivos": {
      "caminhoFoto": "fotos/person_female.png",
      "arquivoDocumental": "documentos/Assento Batismo Maria Borges Nº22 1858.pdf"
    },
    "notas": "Padrinho: Delfim Martins de S. Thiago (solteiro, tio paterno, natural do lugar da Ermida, Sever de Vouga)"
  },
  {
    "id": "d7373ff7-af67-451a-bc4c-9596f4fb1422",
    "nomeCompleto": "Manoel Borges",
    "genero": "M",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "06/08/1861",
      "localNascimento": "Junqueira",
      "dataFalecimento": "Faleceu ainda criança (antes de 1876, ano em que nasceu o seu irmão homónimo).",
      "localFalecimento": "N/A"
    },
    "arquivos": {
      "caminhoFoto": "fotos/person_unknown.png",
      "arquivoDocumental": "fotos/person_unknown.png"
    },
    "notas": "Padrinho: David Martins Sam Thiago da Silva Borges (solteiro, lavrador, tio paterno, vindo de Ermida, Sever de Vouga) Madrinha: Maria Tavares Martins (solteira, lavradora, tia materna, do lugar de Vila Cova).Padrinho: Delfim Martins de S. Thiago (solteiro, tio paterno, natural do lugar da Ermida, Sever de Vouga)"
  },
  {
    "id": "ac8ea7c3-47cc-4fa9-95d8-bccbfb8ed879",
    "nomeCompleto": "Delfim M. Borges",
    "genero": "M",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "6/05/1864",
      "localNascimento": "Vila Cova",
      "dataFalecimento": "N/A",
      "localFalecimento": "N/A"
    },
    "arquivos": {
      "caminhoFoto": "fotos/person_unknown.png",
      "arquivoDocumental": ""
    },
    "notas": "Pai: José Martins de Sam Thiago (Natural de: Vila Cova)\nMãe: Rosália Maria Tavares da Silva (Natural de: Vila Cova)\nAvós Paternos: José Martins de Sam Thiago (Nat: ) & Antónia Maria de Jesus (Nat: )\nAvós Maternos: José Tavares da Silva (Nat: ) & Rosa Tavares Martins (Nat: )O seu nome foi uma homenagem direta ao seu tio paterno e padrinho da sua irmã mais velha, Delfim Martins de S. Thiago, que veio de Sever de Vouga."
  },
  {
    "id": "b9172a73-e86d-4834-9d22-c3fb4e170135",
    "nomeCompleto": "Rosa Martins Borges",
    "genero": "F",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "29/03/1869",
      "localNascimento": "Vila Cova",
      "dataFalecimento": "N/A",
      "localFalecimento": "N/A"
    },
    "arquivos": {
      "caminhoFoto": "fotos/person_female.png",
      "arquivoDocumental": ""
    },
    "notas": "Pai: José Martins de Sam Thiago (Natural de: Vila Cova)\nMãe: Rosália Maria Tavares da Silva (Natural de: Vila Cova)\nAvós Paternos: José Martins de Sam Thiago (Nat: ) & Antónia Maria de Jesus (Nat: )\nAvós Maternos: José Tavares da Silva (Nat: ) & Rosa Tavares Martins (Nat: )"
  },
  {
    "id": "cd08e30c-200e-4f71-8da7-177176a6ec2a",
    "nomeCompleto": "Francisco M. Borges",
    "genero": "M",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "02/04/1871",
      "localNascimento": "Vila Cova",
      "dataFalecimento": "N/A",
      "localFalecimento": "N/A"
    },
    "arquivos": {
      "caminhoFoto": "fotos/person_unknown.png",
      "arquivoDocumental": "documentos/Assento Batismo Francisco Nº7 1871.pdf"
    },
    "notas": "Pai: José Martins de Sam Thiago (Natural de: Vila Cova)\nMãe: Rosália Maria Tavares da Silva (Natural de: Vila Cova)\nAvós Paternos: José Martins de Sam Thiago (Nat: ) & Antónia Maria de Jesus (Nat: )\nAvós Maternos: José Tavares da Silva (Nat: ) & Rosa Tavares Martins (Nat: )"
  },
  {
    "id": "3d044cec-0db7-48be-9367-045c42b27a88",
    "nomeCompleto": "Manoel Martins Borges",
    "genero": "M",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "26/02/1897",
      "localNascimento": "Vila Cova",
      "dataFalecimento": "31/07/1963",
      "localFalecimento": "Lubango, Angola"
    },
    "arquivos": {
      "caminhoFoto": "fotos/manoel_borges.jpeg",
      "arquivoDocumental": "documentos/Assento de Batismo Manoel Borges Nº5 1897.pdf"
    },
    "notas": "Óbito: Faleceu na Sã da Bandeira pelas oito horas do dia trinta e um de Julho, Boletim número sete de agosto de mil novecentos e sessenta e sete. Casamento: Casou com Gualdina Baptista na igreja paroquial de Sá da Bandeira em 28 de Agosto de 1927."
  },
  {
    "id": "8f54c498-f16e-4838-992f-c65017207200",
    "nomeCompleto": "Gualdina Baptista (Aldina)",
    "genero": "F",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "1908",
      "localNascimento": "Lubango, Angola",
      "dataFalecimento": "1988",
      "localFalecimento": "Lisboa"
    },
    "arquivos": {
      "caminhoFoto": "fotos/aldina_baptista.jpeg",
      "arquivoDocumental": ""
    },
    "notas": "Pai: António Baptista\nMãe: Maria de Jesus Teixeira\nAvós Paternos: Helena de Nóbrega & Domingos Baptista\nAvós Maternos: Maria de Jesus & José Teixeira de Sousa\n(Naturais do Sítio dos Casais d'Além, Freguesia da Camacha, Santa Cruz, Madeira)\nIrmãos: Gualdina |Isabel |Augusta | António |João |José |Raul |Cristina |Maria |Armando"
  },
  {
    "id": "6766beb1-53a5-4271-b00c-d3101a99a7cf",
    "nomeCompleto": "Arlindo Manuel Martins Borges",
    "genero": "M",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "06/06/1936",
      "localNascimento": "Lubango, Huíla, Angola",
      "dataFalecimento": "04/09/1989",
      "localFalecimento": ""
    },
    "arquivos": {
      "caminhoFoto": "fotos/arlindo_borges.jpeg",
      "arquivoDocumental": ""
    },
    "notas": "Pai: Manoel Martins Borges (Natural de: Vila Cova)\nMãe: Gualdina Baptista Borges (Aldina) (Natural de: Lubango, Huíla, Angola)\nAvós Paternos: Albino Martins Borges (Nat: Junqueira de Cima) & Maria Tavares da Silva (Nat: Junqueira de Cima)\nAvós Maternos: António Baptista (Nat: Sítio dos Casais d'Além, Freguesia da Camacha, Santa Cruz, Madeira) & Maria de Jesus Teixeira (Nat: Sítio dos Casais d'Além, Freguesia da Camacha, Santa Cruz, Madeira)"
  },
  {
    "id": "b689cded-56e2-40f7-acd4-f9e6cd1fcd65",
    "nomeCompleto": "Maria Violante Rodrigues Cabrita",
    "genero": "F",
    "familiaLinhagem": "Cabrita",
    "biografia": {
      "dataNascimento": "18/11/1940",
      "localNascimento": "São Bartolomeu Messines | Algarve",
      "dataFalecimento": "",
      "localFalecimento": ""
    },
    "arquivos": {
      "caminhoFoto": "fotos/violante_borges.jpg",
      "arquivoDocumental": ""
    },
    "notas": "Pai: José Rodrigues Cabrita\nMãe: Aurora da Conceição Cabrita"
  },
  {
    "id": "29f0ad54-4703-41cc-87e2-562e4d913e10",
    "nomeCompleto": "Arlete Baptista (Jorge)",
    "genero": "F",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "Lubango |Huíla | Angola",
      "dataFalecimento": "N/a",
      "localFalecimento": ""
    },
    "arquivos": {
      "caminhoFoto": "fotos/arlete_jorge.jpg",
      "arquivoDocumental": ""
    },
    "notas": ""
  },
  {
    "id": "8b71bfd6-93a0-4ace-9842-9001e5bbea6e",
    "nomeCompleto": "Estela Baptista (Santiago)",
    "genero": "F",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "Lubango |Huíla | Angola",
      "dataFalecimento": "",
      "localFalecimento": ""
    },
    "arquivos": {
      "caminhoFoto": "fotos/estela_santiago.jpg",
      "arquivoDocumental": ""
    },
    "notas": ""
  },
  {
    "id": "115a5061-4a52-4033-b6db-2f11b013f55e",
    "nomeCompleto": "José M.Rodrigues Borges",
    "genero": "M",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "02/10/1962",
      "localNascimento": "Lubango | Huila | Angola",
      "dataFalecimento": "",
      "localFalecimento": ""
    },
    "arquivos": {
      "caminhoFoto": "fotos/jose_manuel_borges.jpg",
      "arquivoDocumental": ""
    },
    "notas": "Pai: Arlindo Manuel Martins Borges\nMãe: Maria Violante R.C, Borges\nAvós Paternos: Manoel Borges & Aldina Borges\nAvós Maternos: Aurora da Conceição & José Cabrita"
  },
  {
    "id": "9c756f8f-b732-40f7-b32c-999616380fb1",
    "nomeCompleto": "Luis A.Rodrigues Borges",
    "genero": "M",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "01/12/1964",
      "localNascimento": "Lubango | Huila | Angola",
      "dataFalecimento": "",
      "localFalecimento": ""
    },
    "arquivos": {
      "caminhoFoto": "file:///C:/Users/Luis%20Borges/Desktop/Site_Geral/baptista_borges/fotos/luis_alberto_borges.jpg",
      "arquivoDocumental": ""
    },
    "notas": "Pai: Arlindo Manuel Martins Borges\nMãe: Maria Violante R.C. Borges\nAvós Paternos: Manoel Borges & Aldina Borges\nAvós Maternos: Aurora da Conceição & José Cabrita"
  },
  {
    "id": "addd3c33-63c2-4e10-b892-2dc8c47a9f2e",
    "nomeCompleto": "Maria Rosa Martins Borges da Silva",
    "genero": "F",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "06/10/1892",
      "localNascimento": "Vila Cova",
      "dataFalecimento": "N/A",
      "localFalecimento": "N/A"
    },
    "arquivos": {
      "caminhoFoto": "fotos/person_female.png",
      "arquivoDocumental": "documentos/Assento de Batismo Rosa Nº11 1869.pdf"
    },
    "notas": "Pai: Albino Martins Borges (Natural de: Junqueira)\nMãe: Maria Tavares da Silva (Natural de: Junqueira de Cima)\nAvós Paternos: Joaquim Martins Borges d'Santhiago (Nat: ) & Rozalia Maria Tavares Martins da Silva (Nat: )\nAvós Maternos: Jozé Tavares da Silva (Nat: ) & Roza Tavares e Martins (Nat: )"
  },
  {
    "id": "94e16809-9cf6-413a-a615-5ab4908e844d",
    "nomeCompleto": "Custódio Santiago",
    "genero": "M",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "21/04/1895",
      "localNascimento": "Vila Cova",
      "dataFalecimento": "10/12/1985",
      "localFalecimento": "N/A"
    },
    "arquivos": {
      "caminhoFoto": "fotos/person_unknown.png",
      "arquivoDocumental": ""
    },
    "notas": "Pai: Albino Martins Borges (Natural de: Junqueira)\nMãe: Maria Tavares da Silva (Natural de: Junqueira de Cima)\nAvós Paternos: Joaquim Martins Borges d'Santhiago (Nat: ) & Rozalia Maria Tavares Martins da Silva (Nat: )\nAvós Maternos: Jozé Tavares da Silva (Nat: ) & Roza Tavares e Martins (Nat: )\nFilhos: Manoel Santiago\nCônjuge: Luciana Tavares Silva (Natural de: Freguesia de Castelões) | Casamento: 22/06/1920"
  },
  {
    "id": "7c121eb1-3773-450c-af4c-24c61fdc1f51",
    "nomeCompleto": "Luciana Tavares Silva",
    "genero": "F",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "Freguesia de Castelões",
      "dataFalecimento": "N/A",
      "localFalecimento": "N/A"
    },
    "arquivos": {
      "caminhoFoto": "fotos/person_female.png",
      "arquivoDocumental": ""
    },
    "notas": ""
  },
  {
    "id": "b680b09c-b4c9-4321-9f9b-6a99a77514ce",
    "nomeCompleto": "José Maria Martins Borges",
    "genero": "M",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "14/10/1899",
      "localNascimento": "Vila Cova",
      "dataFalecimento": "03/01/1986",
      "localFalecimento": "N/A"
    },
    "arquivos": {
      "caminhoFoto": "fotos/person_unknown.png",
      "arquivoDocumental": "documentos/Assento de Batismo José Maria Nº33.pdf"
    },
    "notas": "Padrinho José Tavares da Silva, casado, lavrador, natural do lugar de Villacova desta freguesia da Junqueira, e madrinha Nossa Senhora do Rosário de que o padrinho ofereceu a imagem.\nPai: Albino Martins Borges (Natural de: Junqueira)\nMãe: Maria Tavares da Silva (Natural de: Junqueira de Cima)\nAvós Paternos: Joaquim Martins Borges d'Santhiago (Nat: ) & Rozalia Maria Tavares Martins da Silva (Nat: )\nAvós Maternos: Jozé Tavares da Silva (Nat: ) & Roza Tavares e Martins (Nat: )"
  },
  {
    "id": "be9d7d82-0db1-4114-9055-eafcd251ae4d",
    "nomeCompleto": "Maria Joaquina Martins Borges",
    "genero": "F",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "09/05/1902",
      "localNascimento": "Vila Cova",
      "dataFalecimento": "N/A",
      "localFalecimento": "N/A"
    },
    "arquivos": {
      "caminhoFoto": "fotos/person_female.png",
      "arquivoDocumental": "documentos/Assento de Batismo Maria Joaquina Nº16.pdf"
    },
    "notas": "João Tavares da Silva (O padrinho, tio, morador no lugar de Castelões). Joaquina Rosa Tavares (A madrinha, esposa do padrinho e também tia)\nPai: Albino Martins Borges (Natural de: Junqueira)\nMãe: Maria Tavares da Silva (Natural de: Junqueira de Cima)\nAvós Paternos: Joaquim Martins Borges d'Santhiago (Nat: ) & Rozalia Maria Tavares Martins da Silva (Nat: )\nAvós Maternos: Jozé Tavares da Silva (Nat: ) & Roza Tavares e Martins (Nat: )"
  },
  {
    "id": "23142ede-0d86-4975-8159-610ee30871a6",
    "nomeCompleto": "Luis Daniel F. Borges",
    "genero": "M",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "20/05/2000",
      "localNascimento": "Aveiro",
      "dataFalecimento": "",
      "localFalecimento": ""
    },
    "arquivos": {
      "caminhoFoto": "fotos/luis_daniel_borges.jpg",
      "arquivoDocumental": ""
    },
    "notas": ""
  },
  {
    "id": "ac60a5e5-2218-4882-9ccd-310554ea70fe",
    "nomeCompleto": "José Diogo D. Borges",
    "genero": "M",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "Aveiro",
      "dataFalecimento": "",
      "localFalecimento": ""
    },
    "arquivos": {
      "caminhoFoto": "fotos/person_unknown.png",
      "arquivoDocumental": ""
    },
    "notas": ""
  },
  {
    "id": "72a66ebe-59dc-4552-a49a-31c562afbfd0",
    "nomeCompleto": "Eliana D. Borges",
    "genero": "F",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "Aveiro",
      "dataFalecimento": "",
      "localFalecimento": ""
    },
    "arquivos": {
      "caminhoFoto": "fotos/person_female.png",
      "arquivoDocumental": ""
    },
    "notas": ""
  },
  {
    "id": "8d7167f9-5139-4475-b2a6-9d282f9e48c4",
    "nomeCompleto": "Verânio Jorge",
    "genero": "M",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "Lubango, Angola",
      "dataFalecimento": "N/A",
      "localFalecimento": "Lisboa"
    },
    "arquivos": {
      "caminhoFoto": "fotos/veranio_jorge.jpg",
      "arquivoDocumental": ""
    },
    "notas": ""
  },
  {
    "id": "0563e349-7bd8-4c14-b7ab-e60f937c4bee",
    "nomeCompleto": "Carlos A. F. Jorge",
    "genero": "M",
    "familiaLinhagem": "",
    "biografia": {
      "dataNascimento": "1953",
      "localNascimento": "Lubango, Angola",
      "dataFalecimento": "",
      "localFalecimento": ""
    },
    "arquivos": {
      "caminhoFoto": "fotos/Carlos_f_jorge.jpg",
      "arquivoDocumental": ""
    },
    "notas": ""
  },
  {
    "id": "a5be8749-5f34-44b3-add5-5915a3714c85",
    "nomeCompleto": "Paula F. Jorge",
    "genero": "F",
    "familiaLinhagem": "",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "Lubango, Angola",
      "dataFalecimento": "",
      "localFalecimento": ""
    },
    "arquivos": {
      "caminhoFoto": "fotos/paula_jorge.jpg",
      "arquivoDocumental": ""
    },
    "notas": ""
  },
  {
    "id": "4b2d1e7b-fd29-48d0-8a03-baaaa5f5d676",
    "nomeCompleto": "Dulcineia D. Borges",
    "genero": "F",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "1960",
      "localNascimento": "Aveiro",
      "dataFalecimento": "2000",
      "localFalecimento": ""
    },
    "arquivos": {
      "caminhoFoto": "fotos/dulcineia_d_borges.jpg",
      "arquivoDocumental": ""
    },
    "notas": ""
  },
  {
    "id": "d891861b-0fe3-4e8b-b615-46e3a80baf8d",
    "nomeCompleto": "",
    "genero": "",
    "biografia": {
      "dataNascimento": "",
      "localNascimento": "",
      "dataFalecimento": "",
      "localFalecimento": ""
    },
    "arquivos": {
      "caminhoFoto": "fotos/person_unknown.png",
      "arquivoDocumental": ""
    },
    "notas": ""
  },
  {
    "id": "05f2082c-83b8-48db-b447-829ec9379b54",
    "nomeCompleto": "Manuel  Martins Santiago",
    "genero": "M",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "13/05/1921",
      "localNascimento": "Vila Cova, Junqueira",
      "dataFalecimento": "21/07/1969",
      "localFalecimento": "Lubango, Angola"
    },
    "arquivos": {
      "caminhoFoto": "fotos/manuel_santiago.jpg",
      "arquivoDocumental": ""
    },
    "notas": ""
  },
  {
    "id": "0d9f03a3-4af0-4ae6-8e20-1582d2a8feb3",
    "nomeCompleto": "Norberto Santiago",
    "genero": "M",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "1949",
      "localNascimento": "Lubango, Angola",
      "dataFalecimento": "",
      "localFalecimento": ""
    },
    "arquivos": {
      "caminhoFoto": "fotos/norberto_santiago.jpg",
      "arquivoDocumental": ""
    },
    "notas": ""
  },
  {
    "id": "ce2a7466-623c-4e7a-91d3-72b3c8f5813a",
    "nomeCompleto": "Belinha Novo Santiago",
    "genero": "F",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "N/A",
      "dataFalecimento": "",
      "localFalecimento": ""
    },
    "arquivos": {
      "caminhoFoto": "fotos/person_female.png",
      "arquivoDocumental": ""
    },
    "notas": ""
  },
  {
    "id": "a58293ac-d8a1-4915-b019-f954f69e77aa",
    "nomeCompleto": "Katheleen Santiago",
    "genero": "F",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "Lubango, Angola",
      "dataFalecimento": "",
      "localFalecimento": ""
    },
    "arquivos": {
      "caminhoFoto": "fotos/person_female.png",
      "arquivoDocumental": ""
    },
    "notas": ""
  },
  {
    "id": "6df47786-57e9-406b-9ab9-dab7e647ea49",
    "nomeCompleto": "Gisela Santiago",
    "genero": "F",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "1979",
      "localNascimento": "Vale de Cambra, Aveiro",
      "dataFalecimento": "",
      "localFalecimento": ""
    },
    "arquivos": {
      "caminhoFoto": "fotos/person_female.png",
      "arquivoDocumental": ""
    },
    "notas": ""
  },
  {
    "id": "17e47251-180e-45da-89a7-c1cb9b27e9c3",
    "nomeCompleto": "Nádia Santiago",
    "genero": "F",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "Vale de Cambra, Aveiro",
      "dataFalecimento": "",
      "localFalecimento": ""
    },
    "arquivos": {
      "caminhoFoto": "fotos/person_female.png",
      "arquivoDocumental": ""
    },
    "notas": ""
  },
  {
    "id": "dbe026f8-3183-4d03-b229-ab2b97bcb2fa",
    "nomeCompleto": "Liliana Santiago",
    "genero": "F",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "Vale de Cambra, Aveiro",
      "dataFalecimento": "",
      "localFalecimento": ""
    },
    "arquivos": {
      "caminhoFoto": "fotos/person_female.png",
      "arquivoDocumental": ""
    },
    "notas": ""
  },
  {
    "id": "93065ccd-463d-4b55-bc40-9765623f3d2e",
    "nomeCompleto": "Nisa Jorge",
    "genero": "F",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "1978",
      "localNascimento": "N/A",
      "dataFalecimento": "",
      "localFalecimento": ""
    },
    "arquivos": {
      "caminhoFoto": "fotos/person_female.png",
      "arquivoDocumental": ""
    },
    "notas": ""
  },
  {
    "id": "c7909726-8eed-4fbc-abe9-221583dcbb1f",
    "nomeCompleto": "Fábio Jorge",
    "genero": "M",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "N/A",
      "dataFalecimento": "",
      "localFalecimento": ""
    },
    "arquivos": {
      "caminhoFoto": "fotos/person_unknown.png",
      "arquivoDocumental": ""
    },
    "notas": ""
  },
  {
    "id": "e5dcc190-03a1-41a4-87b1-a00a58285b26",
    "nomeCompleto": "Mila Oliveira",
    "genero": "F",
    "familiaLinhagem": "",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "N/A",
      "dataFalecimento": "",
      "localFalecimento": ""
    },
    "arquivos": {
      "caminhoFoto": "fotos/person_female.png",
      "arquivoDocumental": ""
    },
    "notas": ""
  },
  {
    "id": "c3d9caa8-e0de-4c38-b742-a0c7a86899f1",
    "nomeCompleto": "Nela Santiago",
    "genero": "F",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "Lubango Angola",
      "dataFalecimento": "Faleceu",
      "localFalecimento": "Vale de Cambra"
    },
    "arquivos": {
      "caminhoFoto": "fotos/person_female.png",
      "arquivoDocumental": ""
    },
    "notas": ""
  },
  {
    "id": "e9571213-8952-4194-931b-0dd1642f603b",
    "nomeCompleto": "São Santiago",
    "genero": "F",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "Lubango, Angola",
      "dataFalecimento": "Faleceu",
      "localFalecimento": "Lisboa"
    },
    "arquivos": {
      "caminhoFoto": "fotos/person_female.png",
      "arquivoDocumental": ""
    },
    "notas": ""
  },
  {
    "id": "68c9129a-d59b-4002-9363-8fcadf43da74",
    "nomeCompleto": "Hugo",
    "genero": "M",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "Angola",
      "dataFalecimento": "",
      "localFalecimento": ""
    },
    "arquivos": {
      "caminhoFoto": "fotos/person_unknown.png",
      "arquivoDocumental": ""
    },
    "notas": ""
  },
  {
    "id": "cd571fde-371f-4437-b242-7d2269be2032",
    "nomeCompleto": "Daniel Jorge Santos",
    "genero": "M",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "Lisboa",
      "dataFalecimento": "",
      "localFalecimento": ""
    },
    "arquivos": {
      "caminhoFoto": "fotos/person_unknown.png",
      "arquivoDocumental": ""
    },
    "notas": ""
  },
  {
    "id": "c81adc93-b93e-4f4e-8390-358312268d8b",
    "nomeCompleto": "Hugo Santos",
    "genero": "M",
    "familiaLinhagem": "Borges",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "Lisboa",
      "dataFalecimento": "",
      "localFalecimento": ""
    },
    "arquivos": {
      "caminhoFoto": "fotos/person_unknown.png",
      "arquivoDocumental": ""
    },
    "notas": ""
  }
];

// ==========================================
// TABELA 2: RELAÇÕES (CASAMENTOS E FILIAÇÃO)
// ==========================================
const casamentos = [
  {
    "id": "f9113fc7-fe13-45f3-8db5-9cfd9d704b0a",
    "parceiro1_id": "3bd68f10-e43b-4b5b-a981-da68172cf735",
    "parceiro2_id": "c1566bb1-10b7-459b-a1b7-995f1e7ddfb5",
    "tipoRelacao": "Casamento",
    "dataCasamento": "",
    "localCasamento": "",
    "filhos": [
      "7334e553-2bc8-4879-bb38-5166bbe28f2b",
      "2a7493a8-b977-4424-8432-9d9e7e2d68e8",
      "abf5cd03-994a-4231-83d2-2e07df9dd7eb",
      "c3c508f6-861b-4f8e-84cd-c57b83498187",
      "fe1ff30a-4d76-427b-9d40-2ccd81defe90"
    ]
  },
  {
    "id": "d8d49d7a-e851-42d6-8584-48f498674796",
    "parceiro1_id": "b09785bd-f64c-4e7f-8845-b68606dcf705",
    "parceiro2_id": "7334e553-2bc8-4879-bb38-5166bbe28f2b",
    "tipoRelacao": "Casamento",
    "dataCasamento": "",
    "localCasamento": "",
    "filhos": [
      "57fb9eff-0070-4e4b-bd5f-d69cee6a6a95",
      "81eed544-730d-49cb-8b84-b55cdb8cfb8e",
      "55717ed4-ac69-4c83-8af4-a0f567aca9f5",
      "d7373ff7-af67-451a-bc4c-9596f4fb1422",
      "ac8ea7c3-47cc-4fa9-95d8-bccbfb8ed879",
      "b9172a73-e86d-4834-9d22-c3fb4e170135"
    ]
  },
  {
    "id": "86cc3532-0828-4092-9a17-5c42becaa477",
    "parceiro1_id": "a07e59b1-9d90-473c-8642-46b2d61a1b3d",
    "parceiro2_id": "c3c508f6-861b-4f8e-84cd-c57b83498187",
    "tipoRelacao": "Casamento",
    "dataCasamento": "",
    "localCasamento": "",
    "filhos": []
  },
  {
    "id": "e06c5adf-3ce1-431b-84d5-b54fb637d7bd",
    "parceiro1_id": "81eed544-730d-49cb-8b84-b55cdb8cfb8e",
    "parceiro2_id": "57fb9eff-0070-4e4b-bd5f-d69cee6a6a95",
    "tipoRelacao": "Casamento",
    "dataCasamento": "",
    "localCasamento": "",
    "filhos": [
      "3d044cec-0db7-48be-9367-045c42b27a88",
      "addd3c33-63c2-4e10-b892-2dc8c47a9f2e",
      "94e16809-9cf6-413a-a615-5ab4908e844d",
      "b680b09c-b4c9-4321-9f9b-6a99a77514ce",
      "be9d7d82-0db1-4114-9055-eafcd251ae4d"
    ]
  },
  {
    "id": "fd2f2e3a-76c2-4c75-b324-68d1bb0e0f86",
    "parceiro1_id": "3d044cec-0db7-48be-9367-045c42b27a88",
    "parceiro2_id": "8f54c498-f16e-4838-992f-c65017207200",
    "tipoRelacao": "Casamento",
    "dataCasamento": "",
    "localCasamento": "",
    "filhos": [
      "6766beb1-53a5-4271-b00c-d3101a99a7cf",
      "29f0ad54-4703-41cc-87e2-562e4d913e10",
      "8b71bfd6-93a0-4ace-9842-9001e5bbea6e"
    ]
  },
  {
    "id": "716831f4-3210-4e57-96e5-d61f2c52d4a7",
    "parceiro1_id": "b689cded-56e2-40f7-acd4-f9e6cd1fcd65",
    "parceiro2_id": "6766beb1-53a5-4271-b00c-d3101a99a7cf",
    "tipoRelacao": "Casamento",
    "dataCasamento": "",
    "localCasamento": "",
    "filhos": [
      "115a5061-4a52-4033-b6db-2f11b013f55e",
      "9c756f8f-b732-40f7-b32c-999616380fb1"
    ]
  },
  {
    "id": "417995b2-b675-44e7-a439-c66da3b5d2a9",
    "parceiro1_id": "7c121eb1-3773-450c-af4c-24c61fdc1f51",
    "parceiro2_id": "94e16809-9cf6-413a-a615-5ab4908e844d",
    "tipoRelacao": "Casamento",
    "dataCasamento": "22/06/1920",
    "localCasamento": "Junqueira",
    "filhos": []
  },
  {
    "id": "7ba393cd-7db4-4f35-8419-ccc13bd27373",
    "parceiro1_id": "115a5061-4a52-4033-b6db-2f11b013f55e",
    "parceiro2_id": "4b2d1e7b-fd29-48d0-8a03-baaaa5f5d676",
    "tipoRelacao": "Casamento",
    "dataCasamento": "",
    "localCasamento": "",
    "filhos": [
      "72a66ebe-59dc-4552-a49a-31c562afbfd0",
      "ac60a5e5-2218-4882-9ccd-310554ea70fe"
    ]
  },
  {
    "id": "f36be273-848e-423e-8287-751286d6ff4e",
    "parceiro1_id": "8d7167f9-5139-4475-b2a6-9d282f9e48c4",
    "parceiro2_id": "29f0ad54-4703-41cc-87e2-562e4d913e10",
    "tipoRelacao": "Casamento",
    "dataCasamento": "",
    "localCasamento": "",
    "filhos": [
      "0563e349-7bd8-4c14-b7ab-e60f937c4bee",
      "a5be8749-5f34-44b3-add5-5915a3714c85"
    ]
  },
  {
    "id": "bdb93415-624c-4ce2-a51b-bc9f63c8ede7",
    "parceiro1_id": "8b71bfd6-93a0-4ace-9842-9001e5bbea6e",
    "parceiro2_id": "05f2082c-83b8-48db-b447-829ec9379b54",
    "tipoRelacao": "Casamento",
    "dataCasamento": "",
    "localCasamento": "",
    "filhos": [
      "0d9f03a3-4af0-4ae6-8e20-1582d2a8feb3",
      "c3d9caa8-e0de-4c38-b742-a0c7a86899f1",
      "e9571213-8952-4194-931b-0dd1642f603b"
    ]
  },
  {
    "id": "8c7e7fec-1905-40dd-be3d-5be666d1e192",
    "parceiro1_id": "0d9f03a3-4af0-4ae6-8e20-1582d2a8feb3",
    "parceiro2_id": "ce2a7466-623c-4e7a-91d3-72b3c8f5813a",
    "tipoRelacao": "Casamento",
    "dataCasamento": "",
    "localCasamento": "",
    "filhos": [
      "a58293ac-d8a1-4915-b019-f954f69e77aa",
      "17e47251-180e-45da-89a7-c1cb9b27e9c3",
      "dbe026f8-3183-4d03-b229-ab2b97bcb2fa",
      "6df47786-57e9-406b-9ab9-dab7e647ea49"
    ]
  },
  {
    "id": "8376c627-fe1b-4ad5-9292-c09849b727c1",
    "parceiro1_id": "0563e349-7bd8-4c14-b7ab-e60f937c4bee",
    "parceiro2_id": "e5dcc190-03a1-41a4-87b1-a00a58285b26",
    "tipoRelacao": "Divorcio",
    "dataCasamento": "",
    "localCasamento": "",
    "filhos": [
      "93065ccd-463d-4b55-bc40-9765623f3d2e",
      "c7909726-8eed-4fbc-abe9-221583dcbb1f"
    ]
  },
  {
    "id": "3cae96f1-34c7-48dd-a3dc-e201da8ae748",
    "parceiro1_id": "a5be8749-5f34-44b3-add5-5915a3714c85",
    "parceiro2_id": "68c9129a-d59b-4002-9363-8fcadf43da74",
    "tipoRelacao": "Divorcio",
    "dataCasamento": "",
    "localCasamento": "",
    "filhos": [
      "c81adc93-b93e-4f4e-8390-358312268d8b",
      "cd571fde-371f-4437-b242-7d2269be2032"
    ]
  }
];
