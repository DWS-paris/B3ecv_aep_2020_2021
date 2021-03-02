/* 
Attendre le chargmeent du DOM
*/
    document.addEventListener('DOMContentLoaded', () => {

        console.log('Le DOM est chargé');

        /* 
        Définition du programme (algo)
        - Capter la soumission du formulaire
        - Ajouter la nouvelle tâche en Local Storage (model)
        - Afficher la nouvelle tâche dans la liste des tâches (vue)
        - Capter le clic sur le bouton pour supprimer une tâche (vue)
        - Supprimer la tâche du Local Storage (model)
        - Supprimer la tâche de la liste des tâches (vue)
        - Vérifier le données du Local Storage (model)
        - Ajouter chacune des tâches du Local Storage dans la liste des tâches (vue)
        */

        /* 
        Déclarations
        */
            let initialId = 0;
            let taskCollection = [];
            const addTaskForm = document.querySelector('#addTaskForm');
            const newTask = document.querySelector('#newTask');
            let taskList = document.querySelector('#taskList');
        //

        /* 
        Fonctions
        */
            // Fonction pour récupérer les tâche depuis le Local Storage
            const getSavedTask = () => {
                // Récupérer la valeur du Local Storage 'task-list'
                let localTaskList = localStorage.getItem('task-list');

                // Vérifier la présence du Local Storage 'task-list'
                if( localTaskList !== null ){
                    // Convertir la valeur du Local Storage en JSON
                    let convertedTaskList = JSON.parse(localTaskList);

                    // Mettre à jour le tableau 'taskCollection'
                    taskCollection = convertedTaskList;

                    console.log(taskCollection)

                    // Faire une boucle sur le tableau 'taskCollection'
                    for( let item of taskCollection ){
                        // Ajouter les tâche dans la liste du DOM
                        addNewTask(item);

                        // Mettre à jour la valeur de initialId
                        if( item._id === 0 ){ initialId = 1 }
                        else if( item._id > initialId ){ initialId = item._id }
                    };


                    // Appeler la fonction pour supprimer une tâche
                    deleteTask();

                    // Capter la soumission du formulaire
                    getFormSubmit();
                }
                else{
                    // Capter la soumission du formulaire
                    getFormSubmit();
                }
            }

            // Fonction pour capter le 'submit' du formulaire
            const getFormSubmit = () => {
                // Capter la soumission du formulaire
                addTaskForm.addEventListener('submit', event => {
                    // Bloquer le comportement par défaut du formulaire
                    event.preventDefault();

                    // Récupérer la valeur de l'input newTask
                    let newTaskValue = {
                        _id: initialId,
                        value: newTask.value,
                    };

                    // Vider les champs du formulaire
                    addTaskForm.reset();

                    // Incrémenter initialId de 1
                    initialId++;

                    // Enregistrer la nouvelle tâche dans le Local Storage
                    saveNewTask(newTaskValue);
                })
            }

            // Fonction pour enregistrer une nouvelle tâche en Local Storage
            const saveNewTask = newTask => {
                // Ajouter la nouvelle tâche dans le tableau 'taskCollection'
                taskCollection.push(newTask);

                // Convertir la tableau 'taskCollection' pour le staocker en Local Storage
                let convertedCollection = JSON.stringify( taskCollection );

                // Sauvegarder le tableau 'taskCollection' en Local Storage
                localStorage.setItem('task-list', convertedCollection);

                // Ajouter la nouvelle tâche dans la liste du DOM
                addNewTask(newTask);
            }

            // Fonction pour supprimer une tâche
            const deleteTask = () => {
                // Faire un boucle sur la collection de bouton 'delete-btn'
                for( let btn of document.querySelectorAll('.delete-btn') ){
                    // Capter el clic sur les boutons
                    btn.addEventListener('click', event => {
                        console.log('click')
                        // Récupérer la valeur de l'attribut 'data-id'
                        let taskId = +event.target.getAttribute('data-id');
                        
                        // Créer une collection temporaire de tâches
                        let tempTask = [];
                        
                        // Faire une boucle sur le tableau 'taskCollection'
                        for( let task of taskCollection ){
                            
                            // Vérifier l'id des tâches
                            if( task._id !== taskId){
                                // Ajouter la tâche dans la collection temporaire
                                tempTask.push(task)
                            }
                        }

                        // Remplacer la valeur de 'taskCollection' par celle de 'tempTask'
                        taskCollection = tempTask;
                        
                        // Sauvegarder le tableau 'taskCollection' en Local Storage
                        localStorage.setItem('task-list', JSON.stringify(taskCollection));

                        // Vider la liste des tâches dans le DOM
                        taskList.innerHTML = '';

                        // Faire une boucle sur le tableau 'taskCollection'
                        for( let item of taskCollection ){
                            // Ajouter les tâche dans la liste du DOM
                            addNewTask(item);

                            // Mettre à jour la valeur de initialId
                            if( item._id === 0 ){ initialId = 1 }
                            else if( item._id > initialId ){ initialId = item._id }
                        };
                    })
                }
            }

            // Créer une fonction pour ajouter une tâche dans le DOM
            const addNewTask = newTask => {
                // Ajouter une balise <li> dans taskList
                taskList.innerHTML += `
                    <li>
                        ${newTask.value} 

                        <button class="delete-btn" data-id="${newTask._id}">
                            <i class="fas fa-times"></i>
                        </button>
                    </li>
                `;
            }
        //

        /* 
        Lancer IHM
        */
            // Récupérer la valeur stockée en Local Storage
            getSavedTask();
        //
    });
//