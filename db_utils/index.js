const pool = require('./connection');

async function  getStudents(){
    const [students] = await pool.query(`SELECT * FROM tab`,);
    return students
}

async function addStudent({name}){
    const data = await pool.query(`INSERT into tab(firstname) value('${name}')`);
    return data
}

async function deleteStudents({id}){
    const data = await pool.query(`DELETE FROM tab WHERE id = ${id};`);
    return data
}

async function updateStudents({name, id}){
    const data = await pool.query(`UPDATE tab SET firstname='${name}' WHERE id=${id}`)
    return data
}

module.exports ={
   getStudents,
   addStudent,
   deleteStudents,
   updateStudents
}