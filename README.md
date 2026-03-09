Hello, students 👋!

🧑‍💻 How to Setup Express Typescript?

    1. Create New Directory for ExpressTS Projects

    2. Inside New Directory, Execute this Command:

            ➡️ npm init --yes

    3. Install Express Typescript & Nodemon

            ➡️ npm i express 

            ➡️ npm i --save-dev @types/express

            ➡️ npm i -D typescript ts-node nodemon

    5. Initiate Typescript Configuration

            ➡️ npx tsc --init

    6. Replace `tsconfig.json` with This Configuration:

            {
                "compilerOptions": {
                    "target": "ES6",
                    "module": "commonjs",
                    "outDir": "./dist",
                    "rootDir": "./src",
                    "strict": true,
                    "esModuleInterop": true,
                    "skipLibCheck": true
                }
            }

    7. Replace Property `scripts` on `package.json` with this Code:

            "scripts": {
                "dev": "nodemon src/server.ts",
                "build": "tsc",
                "start": "node dist/server.js",
            }

    8. Running Express Typescript Projects

            ➡️ npm run dev

1. Install Package(s)

                ➡️ npm install prisma @types/node @types/pg --save-dev

                ➡️ npm install @prisma/client @prisma/adapter-pg pg dotenv 

        2. Initialize Prisma ORM and Create a Prisma Postgres Database 

                ➡️ npx prisma

                ➡️ npx prisma init --db --output ../generated/prisma

        3. Define Data Model

                model User {
                        id        String        @id @default(cuid())
                        email     String        @unique
                        name      String
                        password   String

                        user_addresses UserAddress[]

                        createdAt   DateTime  @default(now())
                        updatedAt   DateTime  @updatedAt
                        deletedAt   DateTime?

                        @@map("users")
                }

                model UserAddress{
                        id        Int     @id @default(autoincrement())
                        consignee String
                        address   String

                        userId    String @unique
                        users User @relation(fields: [userId], references: [id])

                        createdAt   DateTime  @default(now())
                        updatedAt   DateTime  @updatedAt
                        deletedAt   DateTime?

                        @@map("user_addresses")
                }

        4. Create and Apply Prisma Migration

                ➡️ npx prisma migrate dev --name init

                ➡️ npx prisma generate

        5. Change `DATABASE_URL` on File `.env`


        6. Instantiate Prisma Client

                import "dotenv/config";
                import { PrismaPg } from '@prisma/adapter-pg'
                import { PrismaClient } from '../generated/prisma/client'

                const connectionString = `${process.env.DATABASE_URL}`

                const adapter = new PrismaPg({ connectionString })
                const prisma = new PrismaClient({ adapter })

                export { prisma }

        📝 
        Always execute `npx prisma generate` after doing migrate! ⚠️
