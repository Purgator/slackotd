# iti-network


## Démarrage
- `WINDOWS SEULEMENT`: exécuter `npm install -g webpack webpack-dev-server typescript`
- exécuter `npm install` pour installer les modules
- exécuter `npm start` pour lancer le serveur de développement
- lancer le serveur node iti-network-server
- ouvrir chrome à l'adresse [`http://localhost:3000`](http://localhost:3000)

## Outils
- installer le plugin chrome [augury](https://chrome.google.com/webstore/detail/augury/elgalmkoelokbchhkhacckoklkejnhcd)
- installer le plugin (VS CODE) [angular2-snipet](https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2)
- installer le plugin (VS CODE) [angular2-snipet](https://plugins.jetbrains.com/idea/plugin/8395-angular-2-typescript-live-templates)

## TP

### Login

#### Level I

OK1. Faire le formulaire de login
OK2. Rendre username et le mot de passe obligatoire
OK3. Rediriger l'utilisateur sur /

#### Level II

4. Afficher les messages d'erreurs de validation pour chaque champs
OK5. Afficher un message si le login à échoué

### Register

#### Level I

OK1. Faire le formulaire pour l'ajout d'un user
OK2. Rendre username et le mot de passe obligatoire
OK3. En cas de succès, rediriger l'utilisateur sur /login

#### Level II
4. Afficher les messages d'erreurs de validation  pour chaque champs
OK5. Gérer les username déjà utilisés


### Channel

#### Level I

OK1. Afficher la liste des channels dans le menu
OK2. Pouvoir créer un nouveau channel
OK3. Naviguer sur un channel au clic dans le menu

#### Level II

4. Sélectionner par défaut le premier channel de la liste
OK5. Ajouter ajouter les nouveaux channels dynamiquement

### Post 

### Level I

OK1. Afficher les postes reçues pour le channel courant
OK2. Afficher l'auteur des messages
OK3. Afficher la date du postes
OK4. Insérer les nouveaux postes reçues via WebSocket
OK5. Afficher une image si le message contient une url vers une image
OK6. Afficher une video si le message contient une url vers une vidéo (https://www.html5rocks.com/en/tutorials/video/basics/devstories.mp4)
OK7. Afficher le player de youtube si le message contient un lien youtube
OK8. Ajouter le bouton like

### Level II
OK9. Retirer les urls des messages parsés pour ne restituer que son contenu

### Level III
10. Pouvoir parser plusieurs type de contenus dans un seul poste
OK11. Remplacer les liens http par des balises <a>...</a>.

### Commentaires

### Level I
OK1. Pouvoir commenter un postes
OK2. Afficher les commentaires d'un poste 
OK3. Afficher l'auteur du commentaires
OK4. Insérer les nouveaux commentaires reçues via WebSocket

### Level II
5. Parser les commentaires comme les postes : extraire les images, vidéos...

### Activités et notifications 

### Level I
1. Créer un NotificationService
2. Lister les activités dans le menu à droite
3. Ajouter une activté lors d'un nouveau poste via le NotificationService
4. Ajouter une activté lors d'un commentaire sur un poste via le NotificationService
5. Ajouter une activté lorsqu'un membre se connecte via le NotificationService
6. Ajouter une activité lors d'un like via le NotificationService
7. Ajouter une activité lors de l'ajout d'un channel via le NotificationService

### Level II
8. Afficher une popup de notification avec [angular2-notifications](https://github.com/flauc/angular2-notifications)
9. Persister les activités dans le [localStorage](https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage)

### Level III
10. utiliser [angular2-notifications](https://github.com/flauc/angular2-notifications) pour afficher des notifications avec chrome
11. Si l'activité concerne un poste (nouveau poste, commentaire sur un poste, like d'un poste) rendre l'activité clicable. 
Le clic doit rediriger sur le bon channel et scroller jusqu'au poste concerné


### Reminder

- Tous les composants ajoutés doivent être réexportés dans src/app/components/index.ts
- les composants créer (via snipet) ne doivent pas avoir de moduleId
- documentation [angular](https://angular.io/docs/ts/latest/)
- tous services créé doit être ajouter au providers dans src/app/app.module.ts
