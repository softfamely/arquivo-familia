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
    "familiaLinhagem": "Baptista",
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
  },
  {
    "id": "bfa81fcd-775f-4013-91e2-fed3d32126bd",
    "nomeCompleto": "Anabela Figueiredo",
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
    "id": "bbe54f71-fc50-4eec-b3cc-5652598bd30a",
    "nomeCompleto": "António Baptista",
    "genero": "M",
    "familiaLinhagem": "Baptista",
    "biografia": {
      "dataNascimento": "1894",
      "localNascimento": "Lubango, Angola",
      "dataFalecimento": "N/A",
      "localFalecimento": ""
    },
    "arquivos": {
      "caminhoFoto": "fotos/antonio_baptista.jpg",
      "arquivoDocumental": ""
    },
    "notas": ""
  },
  {
    "id": "ce58b984-1e77-4e9c-ad6b-67aca113d9e3",
    "nomeCompleto": "Maria José Baptista",
    "genero": "F",
    "familiaLinhagem": "Baptista",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "N/A",
      "dataFalecimento": "N/A",
      "localFalecimento": ""
    },
    "arquivos": {
      "caminhoFoto": "fotos/person_female.png",
      "arquivoDocumental": ""
    },
    "notas": ""
  },
  {
    "id": "1439caf4-e51c-46f5-bd8e-4e0d77ef85fe",
    "nomeCompleto": "António Baptista Júnior",
    "genero": "M",
    "familiaLinhagem": "Baptista",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "N/A",
      "dataFalecimento": "N/A",
      "localFalecimento": "N/A"
    },
    "arquivos": {
      "caminhoFoto": "fotos/person_unknown.png",
      "arquivoDocumental": ""
    },
    "notas": ""
  },
  {
    "id": "9c0be51b-89b6-429f-82f3-7fb44c107656",
    "nomeCompleto": "Maria José Lucas Baptista",
    "genero": "F",
    "familiaLinhagem": "Baptista",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "N/A",
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
    "id": "4be98cf9-18eb-4534-b9fa-11c522608489",
    "nomeCompleto": "Maria Ivone Baptista Mendonça",
    "genero": "F",
    "familiaLinhagem": "Baptista",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "Angola",
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
    "id": "a4f772a2-8a5c-4d74-aa48-35d1cb95813b",
    "nomeCompleto": "José de Paiva Mendonça",
    "genero": "M",
    "familiaLinhagem": "Baptista",
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
    "id": "70ec24d2-24a9-46b1-862b-1fb904c8f716",
    "nomeCompleto": "António de Freitas Batista",
    "genero": "M",
    "familiaLinhagem": "Baptista",
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
    "id": "0ab4b781-547d-4dea-b0a5-8440e40d8236",
    "nomeCompleto": "António José Baptista",
    "genero": "M",
    "familiaLinhagem": "Baptista",
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
    "id": "d8be4be3-68a9-4db7-8c28-b731d8600684",
    "nomeCompleto": "António Júnior",
    "genero": "M",
    "familiaLinhagem": "Baptista",
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
    "id": "aaae3724-d906-433f-9d78-253960aacf8f",
    "nomeCompleto": "Olga Maria Paulino",
    "genero": "F",
    "familiaLinhagem": "Baptista",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "N/A",
      "dataFalecimento": "N/A",
      "localFalecimento": ""
    },
    "arquivos": {
      "caminhoFoto": "fotos/person_female.png",
      "arquivoDocumental": ""
    },
    "notas": ""
  },
  {
    "id": "5fcb812f-b853-4607-a511-6f7763063424",
    "nomeCompleto": "Francisca M. Augusta",
    "genero": "F",
    "familiaLinhagem": "Baptista",
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
    "id": "c9f9e012-0ac3-4eee-a4a8-34c92e29fd1b",
    "nomeCompleto": "cônjuge António Júnior",
    "genero": "F",
    "familiaLinhagem": "Baptista",
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
    "id": "74fe6ec3-ef7f-4525-9917-c53e2ab340d8",
    "nomeCompleto": "Paula Baptista",
    "genero": "F",
    "familiaLinhagem": "Baptista",
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
    "id": "5094b568-ead2-4657-9b4d-afdcfe1c7af8",
    "nomeCompleto": "Kaymara C. A. Baptista da Costa",
    "genero": "F",
    "familiaLinhagem": "Baptista",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "",
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
    "id": "d539010a-05f6-4b87-b63e-79a66726b5df",
    "nomeCompleto": "Ana Paula Santos Duarte",
    "genero": "F",
    "familiaLinhagem": "Baptista",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "",
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
    "id": "c9670a05-6e41-410d-8ffe-2632400795df",
    "nomeCompleto": "Ivone Maria Baptista Mendonça",
    "genero": "F",
    "familiaLinhagem": "Baptista",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "",
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
    "id": "20ca8076-4f00-4dc0-aaf8-b9388ca6c6ea",
    "nomeCompleto": "Carlos Alberto Baptista Mendonça",
    "genero": "M",
    "familiaLinhagem": "Baptista",
    "biografia": {
      "dataNascimento": "1955",
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
    "id": "fbffd95f-4569-4bc4-bb9e-15bcf3a65d6e",
    "nomeCompleto": "Maria da Conceição Baptista Mendonça",
    "genero": "F",
    "familiaLinhagem": "Baptista",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "",
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
    "id": "17ba9ae3-9289-4580-bf06-77ffeb09efc5",
    "nomeCompleto": "Óscar Fernando Baptista Mendonça",
    "genero": "M",
    "familiaLinhagem": "Baptista",
    "biografia": {
      "dataNascimento": "N/A",
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
    "id": "2bf397f0-381d-40a7-9011-972b8239f4a6",
    "nomeCompleto": "Ana Maria",
    "genero": "F",
    "familiaLinhagem": "Baptista",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "",
      "dataFalecimento": "",
      "localFalecimento": ""
    },
    "arquivos": {
      "caminhoFoto": "fotos/person_female,png",
      "arquivoDocumental": ""
    },
    "notas": ""
  },
  {
    "id": "69198050-2462-4393-8d8b-9ea85e729f4b",
    "nomeCompleto": "Elsa Maria",
    "genero": "F",
    "familiaLinhagem": "Baptista",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "",
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
    "id": "8e74f962-60a1-4e51-9a0d-774404a08dce",
    "nomeCompleto": "Cônjuge de Ivone Maria Baptista Mendonça",
    "genero": "M",
    "familiaLinhagem": "Baptista",
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
    "id": "6e2a4126-6cbd-4d34-ac67-42e629b352e0",
    "nomeCompleto": "Miguel Ângelo Pinto",
    "genero": "M",
    "familiaLinhagem": "Baptista",
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
    "id": "87bc8d6b-6e43-4e19-9f27-d8c51ea6be31",
    "nomeCompleto": "Rafael Ruben Pinto",
    "genero": "M",
    "familiaLinhagem": "Baptista",
    "biografia": {
      "dataNascimento": "N/A",
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
    "id": "123c31c6-f294-401a-996d-7279efc3edda",
    "nomeCompleto": "Quintin Heirebaudt",
    "genero": "M",
    "familiaLinhagem": "Baptista",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "",
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
    "id": "f3bc8775-f9a3-4542-81ec-df98d1453da0",
    "nomeCompleto": "👑 António Baptista",
    "genero": "M",
    "familiaLinhagem": "Baptista",
    "biografia": {
      "dataNascimento": "27/12/1865",
      "localNascimento": "Sítio dos Casais d'Além, Freguesia da Camacha, Santa Cruz, Madeira",
      "dataFalecimento": "N/A",
      "localFalecimento": "Lubango, Angola"
    },
    "arquivos": {
      "caminhoFoto": "fotos/person_unknown.png",
      "arquivoDocumental": "documentos/certidão de Nascimento de António.pdf"
    },
    "notas": "Pais: Domingos Baptista e Helena de Nóbrega\nAvós Paternos: Lourenço Marques\nAvós Maternos: Manoel Corrêa e Jacintha de Nóbrega\nAno do Livro: 1866 (Freguesia da Camacha, fls. 30, Registo n.º 6)"
  },
  {
    "id": "f56957b3-2551-400a-991c-67ca5a5caa13",
    "nomeCompleto": "Maria de Jesus",
    "genero": "F",
    "familiaLinhagem": "Baptista",
    "biografia": {
      "dataNascimento": "09/04/1868",
      "localNascimento": "Camacha, Santa Cruz,  Madeira.",
      "dataFalecimento": "N/A",
      "localFalecimento": "Lubango, Angola"
    },
    "arquivos": {
      "caminhoFoto": "fotos/maria_teixeira.jpeg",
      "arquivoDocumental": "documentos/Assento Nº 17 1889 Casamento de Maria de Jesus.pdf"
    },
    "notas": "Assento N.º 17 -  2 de setembro de 1889\nData do Casamento: 2 de setembro de 1889, Igreja Paroquial de São Lourenço, Camacha, Santa Cruz, Ilha da Madeira Noivo: António Baptista (23 anos, jornaleiro, natural e residente no sítio dos Casais d'Além, Camacha)Pais do Noivo: Domingos Baptista e Helena de Nóbrega Noiva: Maria de Jesus (21 anos, jornaleira, natural e residente no sítio dos Casais d'Além, Camacha)Pais da Noiva: José Teixeira de Gouveia e Maria de Jesus (esta já falecida à data do casamento)"
  },
  {
    "id": "ffeb265f-3705-4036-9985-384ae58b4dcb",
    "nomeCompleto": "Domingos Baptista",
    "genero": "M",
    "familiaLinhagem": "Baptista",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "Camacha",
      "dataFalecimento": "N/A",
      "localFalecimento": ""
    },
    "arquivos": {
      "caminhoFoto": "fotos/person_unknown.png",
      "arquivoDocumental": ""
    },
    "notas": ""
  },
  {
    "id": "841f5105-a180-44c4-a91b-dd53a205f4af",
    "nomeCompleto": "Helena de Nóbrega",
    "genero": "F",
    "familiaLinhagem": "Baptista",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "Camacha",
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
    "id": "93254c1b-5045-444f-b142-be09ee0be991",
    "nomeCompleto": "José Teixeira de Gouveia",
    "genero": "M",
    "familiaLinhagem": "Baptista",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "Camacha",
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
    "id": "621b3e40-0b1c-4c43-803e-0a7596a9389c",
    "nomeCompleto": "Maria de Jesus (1)",
    "genero": "F",
    "familiaLinhagem": "Baptista",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "Camacha",
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
    "id": "7c0176a6-74c3-4e97-9628-da1b06607328",
    "nomeCompleto": "Manoel Corrêa",
    "genero": "M",
    "familiaLinhagem": "Baptista",
    "biografia": {
      "dataNascimento": "N/A",
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
    "id": "ca80d727-04ba-4655-860d-acbcfd823e64",
    "nomeCompleto": "Jacintha de Nobrega",
    "genero": "F",
    "familiaLinhagem": "Baptista",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "",
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
    "id": "8ee7b8aa-5c23-49c3-a941-1febe7efa708",
    "nomeCompleto": "Raul Baptista",
    "genero": "M",
    "familiaLinhagem": "Baptista",
    "biografia": {
      "dataNascimento": "06/01/1906",
      "localNascimento": "Lubango, Huíla, Angola",
      "dataFalecimento": "N/A",
      "localFalecimento": ""
    },
    "arquivos": {
      "caminhoFoto": "fotos/raul_baptista.jpg",
      "arquivoDocumental": ""
    },
    "notas": ""
  },
  {
    "id": "a03fe098-ee89-421f-aa22-31db647ea290",
    "nomeCompleto": "Arminda da Silva Baptista",
    "genero": "F",
    "familiaLinhagem": "Baptista",
    "biografia": {
      "dataNascimento": "",
      "localNascimento": "Angola",
      "dataFalecimento": "N/A",
      "localFalecimento": ""
    },
    "arquivos": {
      "caminhoFoto": "fotos/person_female.png",
      "arquivoDocumental": ""
    },
    "notas": ""
  },
  {
    "id": "b4082489-b0b9-49bf-9568-651440ec44fc",
    "nomeCompleto": "Aurélio Baptista",
    "genero": "M",
    "familiaLinhagem": "Baptista",
    "biografia": {
      "dataNascimento": "1960",
      "localNascimento": "Cuanza Sul, Angola",
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
    "id": "33e75f7e-6a54-4a39-8ce1-ce89b1803ecc",
    "nomeCompleto": "Aurélio da Silva Baptista",
    "genero": "M",
    "familiaLinhagem": "Baptista",
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
    "id": "64326c2f-20c5-4bfd-91aa-ffb7256edcc1",
    "nomeCompleto": "Maria Rosa",
    "genero": "F",
    "familiaLinhagem": "Baptista",
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
    "id": "ebcc87e9-00a3-4361-9340-06bab5891369",
    "nomeCompleto": "Cônjuge de Aurélio",
    "genero": "F",
    "familiaLinhagem": "Baptista",
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
    "id": "b986b1dd-fae3-45d5-8918-dc0038c6b6e3",
    "nomeCompleto": "Mariana Baptista",
    "genero": "F",
    "familiaLinhagem": "Baptista",
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
    "id": "43c7d133-3a85-43fe-98c6-eed1b8605a58",
    "nomeCompleto": "João Baptista",
    "genero": "M",
    "familiaLinhagem": "Baptista",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "N/A",
      "dataFalecimento": "",
      "localFalecimento": ""
    },
    "arquivos": {
      "caminhoFoto": "fotos/person_unknown:png",
      "arquivoDocumental": ""
    },
    "notas": ""
  },
  {
    "id": "1142a9c7-36c4-4035-af42-81a3cd471927",
    "nomeCompleto": "Álvaro Baptista",
    "genero": "M",
    "familiaLinhagem": "Baptista",
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
    "id": "1b437b26-2670-4a7c-81e4-4b94e7034853",
    "nomeCompleto": "João Baptista",
    "genero": "M",
    "familiaLinhagem": "Baptista",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "NA",
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
    "id": "6832d6c0-b00c-4636-9abd-28732b8f1037",
    "nomeCompleto": "Teresa Baptista Lopes",
    "genero": "F",
    "familiaLinhagem": "Baptista",
    "biografia": {
      "dataNascimento": "1954",
      "localNascimento": "Cuanza Sul, Angola",
      "dataFalecimento": "2025",
      "localFalecimento": ""
    },
    "arquivos": {
      "caminhoFoto": "fotos/teresa_baptista.jpg",
      "arquivoDocumental": ""
    },
    "notas": ""
  },
  {
    "id": "c8ef26f8-fead-4fda-a321-f7d7d682f22c",
    "nomeCompleto": "Célio Camacho",
    "genero": "M",
    "familiaLinhagem": "Baptista",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "Lubango",
      "dataFalecimento": "",
      "localFalecimento": ""
    },
    "arquivos": {
      "caminhoFoto": "fotos/celio_camacho.jpg",
      "arquivoDocumental": ""
    },
    "notas": ""
  },
  {
    "id": "8aaf49d0-d441-4d49-9171-19472c526dde",
    "nomeCompleto": "Carla Andréa Baptista L Camacho",
    "genero": "F",
    "familiaLinhagem": "Baptista",
    "biografia": {
      "dataNascimento": "1974",
      "localNascimento": "Lubango, Angola",
      "dataFalecimento": "",
      "localFalecimento": ""
    },
    "arquivos": {
      "caminhoFoto": "fotos/carla_camacho.jpg",
      "arquivoDocumental": ""
    },
    "notas": ""
  },
  {
    "id": "b9f5ce9d-7e1e-4465-8a6c-e961b7fe8f16",
    "nomeCompleto": "Ana Camacho",
    "genero": "F",
    "familiaLinhagem": "Baptista",
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
    "id": "ba1521da-432c-4574-a565-6660ce81ac56",
    "nomeCompleto": "Daniela Camacho",
    "genero": "F",
    "familiaLinhagem": "Baptista",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "Namibe, Angola",
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
    "id": "0c77a132-453f-447e-a1cc-f3866f499c28",
    "nomeCompleto": "Cônjuge de Carla",
    "genero": "M",
    "familiaLinhagem": "Baptista",
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
    "id": "ccd06356-ad0a-4c5c-822e-f7be71b93ddb",
    "nomeCompleto": "Ione Baptista de Almeida",
    "genero": "F",
    "familiaLinhagem": "Baptista",
    "biografia": {
      "dataNascimento": "09/12/1927",
      "localNascimento": "Lubango, Angola",
      "dataFalecimento": "",
      "localFalecimento": ""
    },
    "arquivos": {
      "caminhoFoto": "fotos/ione_baptista.jpg",
      "arquivoDocumental": ""
    },
    "notas": ""
  },
  {
    "id": "8654c6c6-b28f-4e74-88fc-dc29eacea79a",
    "nomeCompleto": "José Manuel Batista Almeida",
    "genero": "M",
    "familiaLinhagem": "Baptista",
    "biografia": {
      "dataNascimento": "18/02/1950",
      "localNascimento": "Benguela, Angola",
      "dataFalecimento": "",
      "localFalecimento": ""
    },
    "arquivos": {
      "caminhoFoto": "fotos/jose_almeida.jpg",
      "arquivoDocumental": ""
    },
    "notas": ""
  },
  {
    "id": "85821f21-c451-4136-9ca9-083bc1c05f85",
    "nomeCompleto": "Ione Almeida",
    "genero": "F",
    "familiaLinhagem": "Baptista",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "",
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
    "id": "568884be-42a4-4087-8fed-bdb6bfc0e6b3",
    "nomeCompleto": "Cônjuge de Ione",
    "genero": "M",
    "familiaLinhagem": "Baptista",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "",
      "dataFalecimento": "",
      "localFalecimento": ""
    },
    "arquivos": {
      "caminhoFoto": "fotos/person_unknown,png",
      "arquivoDocumental": ""
    },
    "notas": ""
  },
  {
    "id": "edca9a6b-b246-473f-b95b-b7506a3e7cd4",
    "nomeCompleto": "Cônjuge de José Almeida",
    "genero": "F",
    "familiaLinhagem": "Baptista",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "",
      "dataFalecimento": "",
      "localFalecimento": ""
    },
    "arquivos": {
      "caminhoFoto": "fotos/person_female,png",
      "arquivoDocumental": ""
    },
    "notas": ""
  },
  {
    "id": "31877b59-f739-49f4-a417-5db333af94c0",
    "nomeCompleto": "Mariana Baptista",
    "genero": "F",
    "familiaLinhagem": "Baptista",
    "biografia": {
      "dataNascimento": "26/01/1929",
      "localNascimento": "Angola",
      "dataFalecimento": "",
      "localFalecimento": ""
    },
    "arquivos": {
      "caminhoFoto": "fotos/mariana_baptista.jpg",
      "arquivoDocumental": ""
    },
    "notas": ""
  },
  {
    "id": "60b01cc6-9a59-4ab2-ab2a-ccc450f3236f",
    "nomeCompleto": "Maria Juliana Batista",
    "genero": "F",
    "familiaLinhagem": "Baptista",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "",
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
    "id": "dbf5b14b-6614-4cf4-a0e4-95d0c96ccd34",
    "nomeCompleto": "Maria Gomes",
    "genero": "F",
    "familiaLinhagem": "Baptista",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "Benguela, Angola",
      "dataFalecimento": "",
      "localFalecimento": ""
    },
    "arquivos": {
      "caminhoFoto": "fotos/maria_gomes.jpg",
      "arquivoDocumental": ""
    },
    "notas": ""
  },
  {
    "id": "12334bcb-510c-4a80-a395-6b435ffa7923",
    "nomeCompleto": "Conjugue de Juliana",
    "genero": "M",
    "familiaLinhagem": "Baptista",
    "biografia": {
      "dataNascimento": "N/A",
      "localNascimento": "",
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
    "parceiro1_id": "7334e553-2bc8-4879-bb38-5166bbe28f2b",
    "parceiro2_id": "b09785bd-f64c-4e7f-8845-b68606dcf705",
    "tipoRelacao": "Casamento",
    "dataCasamento": "",
    "localCasamento": "",
    "filhos": [
      "57fb9eff-0070-4e4b-bd5f-d69cee6a6a95"
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
  },
  {
    "id": "610f273a-c7cf-41c3-ba18-43ad859854bf",
    "parceiro1_id": "9c756f8f-b732-40f7-b32c-999616380fb1",
    "parceiro2_id": "bfa81fcd-775f-4013-91e2-fed3d32126bd",
    "tipoRelacao": "Divorcio",
    "dataCasamento": "",
    "localCasamento": "",
    "filhos": [
      "23142ede-0d86-4975-8159-610ee30871a6"
    ]
  },
  {
    "id": "febf7189-96a6-400b-90df-4d40509dd1f3",
    "parceiro1_id": "bbe54f71-fc50-4eec-b3cc-5652598bd30a",
    "parceiro2_id": "ce58b984-1e77-4e9c-ad6b-67aca113d9e3",
    "tipoRelacao": "Casamento",
    "dataCasamento": "",
    "localCasamento": "",
    "filhos": [
      "1439caf4-e51c-46f5-bd8e-4e0d77ef85fe",
      "4be98cf9-18eb-4534-b9fa-11c522608489"
    ]
  },
  {
    "id": "592dce38-da9a-4b3c-8f3f-d07f7e1c74f4",
    "parceiro1_id": "1439caf4-e51c-46f5-bd8e-4e0d77ef85fe",
    "parceiro2_id": "9c0be51b-89b6-429f-82f3-7fb44c107656",
    "tipoRelacao": "Casamento",
    "dataCasamento": "",
    "localCasamento": "",
    "filhos": [
      "70ec24d2-24a9-46b1-862b-1fb904c8f716",
      "0ab4b781-547d-4dea-b0a5-8440e40d8236",
      "d8be4be3-68a9-4db7-8c28-b731d8600684"
    ]
  },
  {
    "id": "78a4924b-c2af-4363-bc30-c793e426ff58",
    "parceiro1_id": "4be98cf9-18eb-4534-b9fa-11c522608489",
    "parceiro2_id": "a4f772a2-8a5c-4d74-aa48-35d1cb95813b",
    "tipoRelacao": "Casamento",
    "dataCasamento": "",
    "localCasamento": "",
    "filhos": [
      "c9670a05-6e41-410d-8ffe-2632400795df",
      "20ca8076-4f00-4dc0-aaf8-b9388ca6c6ea",
      "fbffd95f-4569-4bc4-bb9e-15bcf3a65d6e",
      "17ba9ae3-9289-4580-bf06-77ffeb09efc5",
      "2bf397f0-381d-40a7-9011-972b8239f4a6",
      "69198050-2462-4393-8d8b-9ea85e729f4b"
    ]
  },
  {
    "id": "788d2c25-deac-479b-82af-929e315f1516",
    "parceiro1_id": "70ec24d2-24a9-46b1-862b-1fb904c8f716",
    "parceiro2_id": "aaae3724-d906-433f-9d78-253960aacf8f",
    "tipoRelacao": "Casamento",
    "dataCasamento": "",
    "localCasamento": "",
    "filhos": [
      "74fe6ec3-ef7f-4525-9917-c53e2ab340d8"
    ]
  },
  {
    "id": "e74931a8-936e-48c4-ad69-6499da9af09b",
    "parceiro1_id": "0ab4b781-547d-4dea-b0a5-8440e40d8236",
    "parceiro2_id": "5fcb812f-b853-4607-a511-6f7763063424",
    "tipoRelacao": "Casamento",
    "dataCasamento": "",
    "localCasamento": "",
    "filhos": [
      "5094b568-ead2-4657-9b4d-afdcfe1c7af8"
    ]
  },
  {
    "id": "5fa7fe70-be35-4167-81f7-d44f93541e25",
    "parceiro1_id": "d8be4be3-68a9-4db7-8c28-b731d8600684",
    "parceiro2_id": "c9f9e012-0ac3-4eee-a4a8-34c92e29fd1b",
    "tipoRelacao": "Casamento",
    "dataCasamento": "",
    "localCasamento": "",
    "filhos": [
      "d539010a-05f6-4b87-b63e-79a66726b5df"
    ]
  },
  {
    "id": "0797551f-c621-41be-b994-b4a2301ca985",
    "parceiro1_id": "c9670a05-6e41-410d-8ffe-2632400795df",
    "parceiro2_id": "a4f772a2-8a5c-4d74-aa48-35d1cb95813b",
    "tipoRelacao": "Casamento",
    "dataCasamento": "",
    "localCasamento": "",
    "filhos": []
  },
  {
    "id": "af598c8e-c5fb-46ae-b32e-c47ce2bc5f1d",
    "parceiro1_id": "c9670a05-6e41-410d-8ffe-2632400795df",
    "parceiro2_id": "8e74f962-60a1-4e51-9a0d-774404a08dce",
    "tipoRelacao": "Casamento",
    "dataCasamento": "",
    "localCasamento": "",
    "filhos": [
      "6e2a4126-6cbd-4d34-ac67-42e629b352e0",
      "87bc8d6b-6e43-4e19-9f27-d8c51ea6be31",
      "123c31c6-f294-401a-996d-7279efc3edda"
    ]
  },
  {
    "id": "f88e8558-26f7-4788-af73-d7c6580db28d",
    "parceiro1_id": "f3bc8775-f9a3-4542-81ec-df98d1453da0",
    "parceiro2_id": "f56957b3-2551-400a-991c-67ca5a5caa13",
    "tipoRelacao": "Casamento",
    "dataCasamento": "",
    "localCasamento": "",
    "filhos": [
      "bbe54f71-fc50-4eec-b3cc-5652598bd30a",
      "8f54c498-f16e-4838-992f-c65017207200",
      "8ee7b8aa-5c23-49c3-a941-1febe7efa708"
    ]
  },
  {
    "id": "301ca8ce-2a34-4049-834d-de62c4df9a16",
    "parceiro1_id": "ffeb265f-3705-4036-9985-384ae58b4dcb",
    "parceiro2_id": "841f5105-a180-44c4-a91b-dd53a205f4af",
    "tipoRelacao": "Casamento",
    "dataCasamento": "0",
    "localCasamento": "Igreja Paroquial de São Lourenço, Camacha, Santa Cruz, Ilha da Madeira",
    "filhos": [
      "f3bc8775-f9a3-4542-81ec-df98d1453da0"
    ]
  },
  {
    "id": "8df1ced9-552e-4de8-9235-23c562a9a588",
    "parceiro1_id": "93254c1b-5045-444f-b142-be09ee0be991",
    "parceiro2_id": "621b3e40-0b1c-4c43-803e-0a7596a9389c",
    "tipoRelacao": "Casamento",
    "dataCasamento": "",
    "localCasamento": "",
    "filhos": [
      "f56957b3-2551-400a-991c-67ca5a5caa13"
    ]
  },
  {
    "id": "a9bdb256-c7b3-48e6-abbd-679888256ed1",
    "parceiro1_id": "7c0176a6-74c3-4e97-9628-da1b06607328",
    "parceiro2_id": "ca80d727-04ba-4655-860d-acbcfd823e64",
    "tipoRelacao": "Casamento",
    "dataCasamento": "",
    "localCasamento": "",
    "filhos": [
      "841f5105-a180-44c4-a91b-dd53a205f4af"
    ]
  },
  {
    "id": "8655cff6-0122-40fa-a05b-9f9913640c00",
    "parceiro1_id": "8ee7b8aa-5c23-49c3-a941-1febe7efa708",
    "parceiro2_id": "a03fe098-ee89-421f-aa22-31db647ea290",
    "tipoRelacao": "Casamento",
    "dataCasamento": "",
    "localCasamento": "",
    "filhos": [
      "33e75f7e-6a54-4a39-8ce1-ce89b1803ecc",
      "ccd06356-ad0a-4c5c-822e-f7be71b93ddb",
      "b986b1dd-fae3-45d5-8918-dc0038c6b6e3",
      "60b01cc6-9a59-4ab2-ab2a-ccc450f3236f"
    ]
  },
  {
    "id": "70391667-802d-4eb2-a1f4-105d20d62114",
    "parceiro1_id": "33e75f7e-6a54-4a39-8ce1-ce89b1803ecc",
    "parceiro2_id": "64326c2f-20c5-4bfd-91aa-ffb7256edcc1",
    "tipoRelacao": "Casamento",
    "dataCasamento": "",
    "localCasamento": "",
    "filhos": [
      "b4082489-b0b9-49bf-9568-651440ec44fc",
      "1142a9c7-36c4-4035-af42-81a3cd471927",
      "6832d6c0-b00c-4636-9abd-28732b8f1037"
    ]
  },
  {
    "id": "560d4050-7312-430d-81f5-633ba367be22",
    "parceiro1_id": "b4082489-b0b9-49bf-9568-651440ec44fc",
    "parceiro2_id": "ebcc87e9-00a3-4361-9340-06bab5891369",
    "tipoRelacao": "Casamento",
    "dataCasamento": "",
    "localCasamento": "",
    "filhos": [
      "b986b1dd-fae3-45d5-8918-dc0038c6b6e3",
      "43c7d133-3a85-43fe-98c6-eed1b8605a58"
    ]
  },
  {
    "id": "e0f9b927-98c8-4996-a89a-72d9a5a14746",
    "parceiro1_id": "8aaf49d0-d441-4d49-9171-19472c526dde",
    "parceiro2_id": "0c77a132-453f-447e-a1cc-f3866f499c28",
    "tipoRelacao": "Casamento",
    "dataCasamento": "",
    "localCasamento": "",
    "filhos": [
      "b9f5ce9d-7e1e-4465-8a6c-e961b7fe8f16",
      "ba1521da-432c-4574-a565-6660ce81ac56"
    ]
  },
  {
    "id": "b648f73f-1b5d-410c-a29e-8825056251ce",
    "parceiro1_id": "ccd06356-ad0a-4c5c-822e-f7be71b93ddb",
    "parceiro2_id": "568884be-42a4-4087-8fed-bdb6bfc0e6b3",
    "tipoRelacao": "Casamento",
    "dataCasamento": "",
    "localCasamento": "",
    "filhos": [
      "8654c6c6-b28f-4e74-88fc-dc29eacea79a"
    ]
  },
  {
    "id": "3655afda-3f14-439b-96f9-6c145aff8f1c",
    "parceiro1_id": "8654c6c6-b28f-4e74-88fc-dc29eacea79a",
    "parceiro2_id": "edca9a6b-b246-473f-b95b-b7506a3e7cd4",
    "tipoRelacao": "Casamento",
    "dataCasamento": "",
    "localCasamento": "",
    "filhos": []
  },
  {
    "id": "6c5b07a9-3ce1-4bbd-9b5e-b8d36b2f56ad",
    "parceiro1_id": "60b01cc6-9a59-4ab2-ab2a-ccc450f3236f",
    "parceiro2_id": "12334bcb-510c-4a80-a395-6b435ffa7923",
    "tipoRelacao": "Casamento",
    "dataCasamento": "",
    "localCasamento": "",
    "filhos": [
      "dbf5b14b-6614-4cf4-a0e4-95d0c96ccd34"
    ]
  },
  {
    "id": "5446ef63-cbf2-4828-a643-04d56823adc5",
    "parceiro1_id": "6832d6c0-b00c-4636-9abd-28732b8f1037",
    "parceiro2_id": "c8ef26f8-fead-4fda-a321-f7d7d682f22c",
    "tipoRelacao": "Casamento",
    "dataCasamento": "",
    "localCasamento": "",
    "filhos": [
      "8aaf49d0-d441-4d49-9171-19472c526dde"
    ]
  }
];
