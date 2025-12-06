import { Usuarios } from "./m_usuarios.js";
import { Chamados } from "./m_chamados.js";

Usuarios.hasMany(Chamados, {
  foreignKey: "usuario_id",
  as: "chamados",
});

Chamados.belongsTo(Usuarios, {
  foreignKey: "usuario_id",
  as: "usuario",
});

export { Usuarios, Chamados };
