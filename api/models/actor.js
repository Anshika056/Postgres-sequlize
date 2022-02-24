module.exports=(sequelize,Sequelize)=>{
const Actor = sequelize.define('users',{
    actor_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    }
},{
    freezeTablename:true
}
);
   return Actor;
};