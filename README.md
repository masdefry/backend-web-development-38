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

🧑‍💻 How to Setup Prisma ORM?

        1. 