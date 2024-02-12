export const userData = {
  tmpUser: {
    username: "",
    password: "",
  },

  connectedUserDetails: {
    idUser: "",
    prenom: "",
    nom: "",
    username: "",
    password: "",
    role: "patient",
  },
};

[
  {
    dateRendezVous: "2024-02-07",
    heureRendezVous: "06:24",
    idRendezVous: 6,
    isConfirmed: false,
    medecin: {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis debitis officia placeat cupiditate. Sed autem reiciendis ex, illo neque laboriosam earum aperiam dolor doloremque provident quidem sint cumque, enim laudantium.",
      dossierMedical: null,
      email: "fatou.fall@example.com",
      idMedecin: 5,
      nom: "Fall",
      prenom: "Fatou",
      specialite: "Ophtalmologie",
      telephone: "+221761024857",
    },
    motif: "",
    patient: {
      adresse: "31 Mermoz, Dakar",
      dateNaissance: null,
      dossierMedical: [Object],
      email: "rokhaya.gomis@email.com",
      idPatient: 17,
      nom: "Gomis",
      prenom: "Rokhaya",
      sexe: "Femme",
      telephone: null,
    },
  },
];

 [
   {
     dateDebut: "2024-02-01",
     dateFin: "",
     dosage: "10",
     dossierMedical: { dateCreation: "2024-01-18", idDossierMedical: 17 },
     frequence: "3",
     idTraitement: 4,
     nomMedicament: "Lisinopril 3",
     unite: "mg",
   },
   {
     dateDebut: "2024-02-14",
     dateFin: "2024-02-23",
     dosage: "10",
     dossierMedical: { dateCreation: "2024-01-18", idDossierMedical: 17 },
     frequence: "3",
     idTraitement: 3,
     nomMedicament: "Lisinopril",
     unite: "ml",
   },
   {
     dateDebut: "2024-01-09",
     dateFin: "2024-01-18",
     dosage: "10 ",
     dossierMedical: { dateCreation: "2024-01-18", idDossierMedical: 17 },
     frequence: "3",
     idTraitement: 1,
     nomMedicament: "med",
     unite: "ml",
   },
 ];
