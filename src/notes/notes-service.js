const NotesService = {
    getAllNotes(knex){
        return knex.select('*').from('noteful_notes_api_');
    },

    insertNote(knex, newNote){
        return knex
            .insert(newNote)
            .into('noteful_notes_api_')
            .returning('*')
            .then(rows => {
                return rows[0]
        })
    },

    getById(knex,id){
        return knex
            .from('noteful_notes_api_')
            .select('*')
            .where('id',id)
            .first()
    },

    deleteNote(knex , id){
        return knex('noteful_notes_api_')
            .where({ id })
            .delete()
    },

    updateNote(knex,id,newNoteFields){
        return knex('noteful_notes_api_')
            .where({ id })
            .update(newNoteFields)
    },
}
module.exports = NotesService