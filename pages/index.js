import Head from 'next/head'
import Image from 'next/image'
import { PrismaClient } from '@prisma/client'

export default function Home({category}) {
  console.log(category)
  return (
    <h1>HOLA</h1>
    
  )
}


export const getServerSideProps = async () =>{

  const prisma = new PrismaClient()

  const category = await prisma.category.findMany()
  console.log(category)

  return{
    props:{
      category,
    }
  }
}


 


