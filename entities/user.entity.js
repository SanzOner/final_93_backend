import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    firstName:{
        type:String,
        require:{true:"Nombre requerido"}
    },
    lastName:{
        type:String,
        require:{true:"Apellido requerido"}
    },
    email:{
        type:String,
        require:{true:"Nombre requerido"},
        unique:[true, "El nombre de usuario no puede ser repetido"],
    },
    password:{
        type: String,
        requiere: {true: "Contraseña requerida"}
    },
    isAdmin:{
        type: Boolean,
        require: {true: "Is admin es requerido"},
        default: false
    }

},
{
    timestamps: true
})

const User = mongoose.model("Users", userSchema)

export default User