module.exports=(sequelize,Sequelize)=>{
const User = sequelize.define('users',{
    user_id:{
        type:Sequelize.INTEGER,
        allowNull:false.valueOf,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    }
},{
    freezeTablename:true
}
);
   return User;
};