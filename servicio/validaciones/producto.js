const Joi = require('joi');

const validar = (producto) => {
    const productoSchema = Joi.object({
        nombre: Joi.string().min(3).max(30).required(),
        precio: Joi.number().required(),
        stock: Joi.number().required(),
        marca: Joi.string().required(),
        categoria: Joi.string().required(),
        detalles: Joi.string().required(),
        foto: Joi.string().required(),
        envio: Joi.required(),

        
    });

    const { error } = productoSchema.validate(producto);

    return error;
};

module.exports = validar;
