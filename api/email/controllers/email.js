'use strict';
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
module.exports = {
    create: async ctx => {
        const nodemailer = require('nodemailer');
        let entity;

        if (ctx.is('multipart')) {
            const { data, files } = parseMultipartData(ctx);
            entity = await strapi.services.email.create(data, { files });
        } else {
            entity = await strapi.services.email.create(ctx.request.body);
        }

        let transport = nodemailer.createTransport({
            host: "smtp.seznam.cz",
            port: 465,
            auth: {
                user: "madapeterr",
                pass: "seznamMpm4Na1h"
            }
        });

        const message = {
            from: 'ABABrno.cz <madapeterr@seznam.cz>',
            // to: `${ctx.request.body.SendEmailTo}, madapeterr@seznam.cz`,
            to: `madapeterr@gmail.com, madapeterr@seznam.cz`,
            replyTo: ctx.request.body.Email,
            subject: 'Nová zpráva z ABABrno.cz',
            text: `Zpráva z ABABrno.cz. 
                   Od: ${ctx.request.body.Jmeno}. 
                   Email: ${ctx.request.body.Email}
                   Zájem o: ${ctx.request.body.Interest}. 
                   Text zprávy: ${ctx.request.body.Text}`,
            html: `Zpráva z ABABrno.cz. <br /> 
                   Od: <strong>${ctx.request.body.Jmeno}</strong>.<br /> 
                   Email: <strong>${ctx.request.body.Email}</strong>.<br />
                   Zájem o: <strong>${ctx.request.body.Interest}</strong>. <br /> 
                   Text zprávy: ${ctx.request.body.Text}`
        };
        transport.sendMail(message, function (err, info) { });

        return sanitizeEntity(entity, { model: strapi.models.email });

    },

}