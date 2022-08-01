import { category } from "./data/category";
import { products } from "./data/products";

import { PrismaClient} from "@prisma/client";


const prisma = new PrismaClient()

const main = async () =>{
    try {
        await prisma.category.createMany({
            data: category
        })
        await prisma.product.createMany({
            data: products
        })
    } catch (error) {
        console.log(error)
    }
}

main()