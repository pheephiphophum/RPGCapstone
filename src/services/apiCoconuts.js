import supabase from './supabase'

export async function getCoconuts(){
    const { data, error } = await supabase.from('coconuts').select('*')

    if (error) {
        console.log(error)
        throw new Error('Coconuts could not be loaded!!!!!!')
    }
    return data
}

export async function getCharacter(id){
    const { data, error } = await supabase.from('coconuts').select('*').eq('id', id)
    if(error){
        console.log(error)
        throw new Error('Could not get character')
    }
    return data
}

export async function deleteCoconuts(id) {
    console.log(id)
    const { error } = await supabase.from('coconuts').delete().eq('id', id)
    if (error) {
        console.error(error)
        throw new Error('Coconut could not be deleted.')
    }
}

export async function createEditCoconuts(newCoconuts, id){
    console.log(newCoconuts, id, "Hello, World!!")
    let query = supabase.from('coconuts')

    if (!id) query = query.insert([{...newCoconuts}])
    
    if (id) query = query.update({...newCoconuts}).eq("id", id)

    const { data, error } = await query.select().single()

    if (error) {
        console.log(error)
        throw new Error('Coconuts cannot be created.')
    }
    return data
}