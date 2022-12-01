import dataBase from "../database/conexcionDatabase.js";
import { DataTypes } from "sequelize";

const Producto = dataBase.define("producto",{
    Nombre:{
        type: DataTypes.STRING
    },
    Descripcion:{
        type: DataTypes.STRING
    }
})

export default Producto;