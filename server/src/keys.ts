export default{
    
       database:{ host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'library',
        dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}
}
