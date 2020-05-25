const FoldersService = {
    getAllFolders(knex){
        return knex.select('*').from('noteful_folders_api_');
    },

    insertFolder(knex, newFolder){
        return knex
            .insert(newFolder)
            .into('noteful_folders_api_')
            .returning('*')
            .then(rows => {
                return rows[0]
        })
    },

    getById(knex,id){
        return knex
            .from('noteful_folders_api_')
            .select('*')
            .where('id',id)
            .first()
    },

    deleteFolder(knex,id){
        return knex('noteful_folders_api_')
            .where({ id })
            .delete()
    },

    updateFolder(knex,id,newFolderFields){
        return knex('noteful_folders_api_')
            .where({ id })
            .update(newFolderFields)
    },
}
module.exports = FoldersService