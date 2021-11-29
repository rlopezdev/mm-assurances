const debug = require('debug')('app:webserver:routes')

module.exports = (webServer) => {
    return {
        "/": require('./homepage')(webServer),
        "/assurance-auto-moto": require('./assurance-auto')(webServer),
        "/assurance-habitation": require('./assurance-habitation')(webServer),
        "/assurance-sante-prevoyance": require('./assurance-sante')(webServer),
        "/assurance-professionnels": require('./assurance-pro')(webServer),
        "/agence-toulouse-centre": require('./agence')(webServer),
        "/contact": require('./contact')(webServer),
        "/conditions-generales-de-vente": require('./cgu')(webServer),
        "/mentions-legales": require('./mentions-legales')(webServer)
    }
}