import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const user = await prisma.user.create(
        {data: {name: 'Margus', surname: 'Tamme', team:{create:{club: 'Volta JK', aadress:'Türi tn 6', city:'Tallinn'}}}})
    console.log(user)
}
main()
    .catch(e => { console.error(e.message) })
    .finally(async () => { await prisma.$disconnect() })
