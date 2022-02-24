module.exports=(sequelize,Sequelize)=>{
const Actor = sequelize.define('actor',{
    actor_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    }
},{
    freezeTablename:true                //stop pluralize of thetable name in db
}
);
   return Actor;
};