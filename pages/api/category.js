import { PrismaClient } from "@prisma/client"


const handler = async (req, res) =>  {

    const prisma = new PrismaClient()
    const category = await prisma.category.findMany()
    res.status(200).json(category)
}

export default handler