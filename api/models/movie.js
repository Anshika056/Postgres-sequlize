module.exports=(sequelize,Sequelize)=>{
    const Movie = sequelize.define("movie",{
        title:{
            type:Sequelize.STRING,
            allowNull:false
        },
        plot:{
            type: Sequelize.STRING,
            allowNull:false
        },

        rating:{type: Sequelize.DECIMAL,
            allowNull:false
        }
    },{
        freezeTablename:true
    })
    return Movie;
}
