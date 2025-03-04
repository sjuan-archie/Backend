exports.getConfigOptions = async (req, res) => {
    // Simulación de opciones de configuración de coches
    res.json({
        colors: ["Rojo", "Azul", "Negro", "Blanco"],
        interiors: ["Cuero negro", "Cuero beige", "Tela gris"],
        extras: ["Llantas deportivas", "Sonido premium", "Vidrios polarizados"],
    });
};

exports.saveConfig = async (req, res) => {
    // Guardar configuración en la base de datos
    res.json({ message: "Configuración guardada" });
};
