module.exports =  {
    HOST:"localhost",
    USER:"postgres",
    PASSWORD:"parkjimin056",
    DB:"imdb",
    dialect:"postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
}