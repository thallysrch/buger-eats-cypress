var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default{
    deliver : function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '4699876615',
            address:{
            postalcode: '85501049',
            street: 'Rua Ibiporã',
            number: '1151',
            details: 'Ap 103',
            district: 'Centro',
            city_state: 'Pato Branco/PR'
            },
            delivery_method: 'Van/Carro',
            cnh: 'cnh-digital.jpg'
        }
        return data
    }
   
}